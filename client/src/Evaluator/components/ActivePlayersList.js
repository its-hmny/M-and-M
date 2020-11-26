import React from 'react';
import { Badge, Avatar, Paper } from '@material-ui/core';
import { Grid, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';
import axios from '../../common/shared';

const ActivePlayersList = () => {
  const { storyId, playersLog, setFocusedPlayer } = useEvaluator();

  const renamePlayer = playerId => {
    const newName = prompt('Choose a new name for this player');
    axios.patch(`stats/${storyId}/${playerId}`, { name: newName });
  };

  const generateTab = playersLog.map(player => {
    const { name, id, avatar } = player;
    const avaiableName = name || id;

    return (
      <ListItem
        key={id}
        onClick={() => setFocusedPlayer(id)}
        onDoubleClick={() => renamePlayer(id)}
      >
        <Badge badgeContent={'!'} color="primary" />
        <ListItemAvatar>
          <Avatar src={avatar} />
        </ListItemAvatar>
        <ListItemText>{avaiableName}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Grid item xs={2}>
      <Paper elevation={3}>
        <List orientation="vertical" indicatorColor="primary">
          {generateTab}
        </List>
      </Paper>
    </Grid>
  );
};

export default ActivePlayersList;
