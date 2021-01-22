import React, {
  useEffect,
  useMemo,
  useState,
} from '../../../web_modules/react.js';
import {
  Paper,
  Slider,
  Button,
  Grid,
} from '../../../web_modules/@material-ui/core.js';
import { useEvaluator } from '../context/EvaluatorContext.js';
import Preview from '../../common/Preview.js';

const VoteSlider = ({ story, player, nodeId }) => {
  const { socket } = useEvaluator();

  const [vote, setVote] = useState(50);

  const sendVote = () => {
    socket.emit('eval-pts', {
      story,
      senderId: `evaluator${story}`,
      receiverId: player,
      points: vote,
      nodeId,
    });
  };

  return React.createElement(
    Grid,
    {
      container: true,
      alignItems: 'center',
      justify: 'center',
      spacing: 4,
    },
    React.createElement(
      Grid,
      {
        item: true,
        spacing: 1,
        xs: 8,
      },
      React.createElement(Slider, {
        marks: [
          {
            value: 0,
            label: '0 pts',
          },
          {
            value: 100,
            label: '100 pts',
          },
        ],
        step: 5,
        disabled: false,
        min: 0,
        max: 100,
        value: vote,
        valueLabelDisplay: 'auto',
        onChange: (_, newVote) => setVote(newVote),
      }),
    ),
    React.createElement(
      Grid,
      {
        item: true,
        xs: 3,
      },
      React.createElement(
        Button,
        {
          variant: 'contained',
          color: 'primary',
          onClick: sendVote,
        },
        'Submit',
      ),
    ),
  );
};

const EvaluationWidget = () => {
  const { story, storyId, selectedPlayer } = useEvaluator();

  const [showedNodeId, setNodeToShow] = useState(undefined);

  useEffect(() => {
    const { history } = selectedPlayer; // Every time a new player is selected the last completed activity is selected

    const lastCompletedNode = history.length
      ? history.slice(-1).pop().activityNodeId
      : undefined;

    setNodeToShow(lastCompletedNode);
  }, [selectedPlayer]);

  const patchedComponents = useMemo(() => {
    const { history } = selectedPlayer; // Get the plain node in the story object

    let toShow = undefined;

    const plainNode = story.nodes.find((node) => node.id === showedNodeId);

    if (!plainNode) return [];
    else toShow = JSON.parse(JSON.stringify(plainNode)); // Get the patch for that node, the patch contains the information added by the player

    let { patchs } =
      history.find((node) => node.activityNodeId === showedNodeId) || {};

    patchs = patchs || []; // Apply the patchs to each  modified component in the plain node
    // before showing  it to the evaluator

    patchs.forEach(({ componentId, value }) => {
      const toPatch = toShow.components.find(
        (component) => component.id === componentId,
      );

      if (toPatch) toPatch.initialValue = value;
    });
    return toShow.components;
  }, [showedNodeId, story.nodes, selectedPlayer]);

  const changeNodeToShow = (delta) => {
    const { history } = selectedPlayer;

    const currentIndex = history.findIndex(
      ({ activityNodeId }) => activityNodeId === showedNodeId,
    );

    const updatedIndex = currentIndex + delta;

    if (updatedIndex >= 0 && updatedIndex < history.length) {
      setNodeToShow(history[updatedIndex].activityNodeId);
    }
  };

  return React.createElement(
    Paper,
    null,
    React.createElement(VoteSlider, {
      story: storyId,
      player: selectedPlayer.id,
      nodeId: showedNodeId,
    }),
    React.createElement(
      Grid,
      {
        container: true,
        xs: 12,
        justify: 'space-between',
      },
      React.createElement(
        Button,
        {
          variant: 'contained',
          color: 'primary',
          small: true,
          onClick: () => changeNodeToShow(-1),
        },
        '<<',
      ),
      React.createElement(
        Button,
        {
          variant: 'contained',
          color: 'primary',
          small: true,
          onClick: () => changeNodeToShow(+1),
        },
        '>>',
      ),
    ),
    React.createElement(Preview, {
      components: patchedComponents,
    }),
  );
};

export default EvaluationWidget;
