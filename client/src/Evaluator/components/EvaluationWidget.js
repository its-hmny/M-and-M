import React, { useEffect, useMemo, useState } from 'react';
import { Paper, Slider, Button, Grid } from '@material-ui/core';

import { useEvaluator } from '../context/EvaluatorContext';
import Preview from '../../common/Preview';

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

  return (
    <Grid container alignItems="center" justify="center" spacing={4}>
      <Grid item spacing={1} xs={8}>
        <Slider
          marks={[
            { value: 0, label: '0 pts' },
            { value: 100, label: '100 pts' },
          ]}
          step={5}
          disabled={false}
          min={0}
          max={100}
          value={vote}
          valueLabelDisplay="auto"
          onChange={(_, newVote) => setVote(newVote)}
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" onClick={sendVote}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

const EvaluationWidget = () => {
  const { story, storyId, selectedPlayer } = useEvaluator();
  const [showedNodeId, setNodeToShow] = useState(undefined);

  useEffect(() => {
    const { history } = selectedPlayer;
    // Every time a new player is selected the last completed activity is selected
    const lastCompletedNode = history.length
      ? history.slice(-1).pop().activityNodeId
      : undefined;
    setNodeToShow(lastCompletedNode);
  }, [selectedPlayer]);

  const patchedComponents = useMemo(() => {
    const { history } = selectedPlayer;
    // Get the plain node in the story object
    let toShow = undefined;
    const plainNode = story.nodes.find(node => node.id === showedNodeId);
    if (!plainNode) return [];
    else toShow = JSON.parse(JSON.stringify(plainNode));
    // Get the patch for that node, the patch contains the information added by the player
    let { patchs } = history.find(node => node.activityNodeId === showedNodeId) || {};
    patchs = patchs || [];
    // Apply the patchs to each  modified component in the plain node
    // before showing  it to the evaluator
    patchs.forEach(({ componentId, value }) => {
      const toPatch = toShow.components.find(component => component.id === componentId);
      if (toPatch) toPatch.initialValue = value;
    });
    return toShow.components;
  }, [showedNodeId, story.nodes, selectedPlayer]);

  const changeNodeToShow = delta => {
    const { history } = selectedPlayer;
    const currentIndex = history.findIndex(
      ({ activityNodeId }) => activityNodeId === showedNodeId
    );
    const updatedIndex = currentIndex + delta;
    if (updatedIndex >= 0 && updatedIndex < history.length) {
      setNodeToShow(history[updatedIndex].activityNodeId);
    }
  };

  return (
    <Paper>
      <VoteSlider story={storyId} player={selectedPlayer.id} nodeId={showedNodeId} />
      <Grid container xs={12} justify="space-between">
        <Button
          variant="contained"
          color="primary"
          small
          onClick={() => changeNodeToShow(-1)}
        >
          {'<<'}
        </Button>
        <Button
          variant="contained"
          color="primary"
          small
          onClick={() => changeNodeToShow(+1)}
        >
          {'>>'}
        </Button>
      </Grid>
      <Preview components={patchedComponents} />
    </Paper>
  );
};

export default EvaluationWidget;
