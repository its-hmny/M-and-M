import React, { useMemo, useState } from 'react';
import { Paper, Slider, Button, Grid } from '@material-ui/core';
import io from 'socket.io-client';

import { useEvaluator } from '../context/EvaluatorContext';
import Preview from '../../common/Preview';

const socket = io('http://localhost:8000');

const VoteSlider = ({ story, player }) => {
  const [vote, setVote] = useState(50);

  const sendVote = () => {
    socket.emit('eval-pts', {
      story,
      senderId: `evaluator${story}`,
      receiverId: player,
      points: vote,
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
  const { id, currentQuestion } = selectedPlayer;

  const playerNode = useMemo(() => {
    if (!currentQuestion) {
      return { components: [] };
    }
    const { currentNodeId, patchs } = currentQuestion;
    // Get the story node in wich the player is (its components array)
    const defaultStoryNode = story.nodes.find(node => node.id === currentNodeId);
    const components = defaultStoryNode ? defaultStoryNode.components : [];
    // Apply the patches to the relative component before display
    patchs.forEach(patch => {
      const { componentId, value } = patch;
      const toChange = components.find(comp => comp.id === componentId);
      toChange.initialValue = value;
    });
    return components;
  }, [currentQuestion, story.nodes]);

  return (
    <Paper>
      <VoteSlider story={storyId} player={id} />
      <Preview components={playerNode} />
    </Paper>
  );
};

export default EvaluationWidget;
