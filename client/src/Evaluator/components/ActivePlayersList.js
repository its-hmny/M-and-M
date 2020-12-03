import React from 'react';
import { Badge, Avatar, Paper, makeStyles } from '@material-ui/core';
import { Grid, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';

const useStyles = makeStyles({
  container: {
    zIndex: 100,
    position: 'absolute',
  },
});

const ActivePlayersList = () => {
  const {
    selectedPlayer,
    playersLog,
    setFocusedPlayer,
    updatePlayerLog,
  } = useEvaluator();
  const { container } = useStyles();

  const renamePlayer = playerId => {
    const newName = prompt('Choose a new name for this player');
    updatePlayerLog(playerId, { name: newName });
  };

  const generateTab = playersLog.map(player => {
    const { name, id, avatar } = player;
    const avaiableName = name || id;

    return (
      <ListItem
        key={id}
        selected={id === selectedPlayer.id}
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
    <Grid item xs={2} className={container}>
      <Paper elevation={3} className={container}>
        <List orientation="vertical" indicatorColor="primary">
          {generateTab}
        </List>
      </Paper>
    </Grid>
  );
};

export default ActivePlayersList;
