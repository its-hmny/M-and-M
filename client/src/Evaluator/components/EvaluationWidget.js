import React, { useMemo, useState } from 'react';
import { Paper, Slider, Button, Grid } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import io from 'socket.io-client';

import { useEvaluator } from '../context/EvaluatorContext';
import Preview from '../../common/Preview';

const socket = io('http://localhost:8000');

const EvaluationWidget = () => {
  const { story, storyId, selectedPlayer } = useEvaluator();
  const { id, currentQuestion } = selectedPlayer;
  const [vote, setVote] = useState(50);

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
  }, [currentQuestion]);

  const sendVote = () => {
    socket.emit('eval-pts', {
      story: storyId,
      senderId: `evaluator${storyId}`,
      receiverId: id,
      points: vote,
    });
  };

  return (
    <Paper>
      <Preview components={playerNode} />

      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid container item spacing={1} xs={8}>
          <Grid item>
            <Clear />
          </Grid>
          <Grid item xs>
            <Slider
              marks
              step={5}
              disabled={false}
              min={0}
              max={100}
              value={vote}
              valueLabelDisplay="auto"
              onChange={(_, newVote) => setVote(newVote)}
            />
          </Grid>
          <Grid item>
            <Check />
          </Grid>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" onClick={sendVote}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EvaluationWidget;
