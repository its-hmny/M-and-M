import React from 'react';
import { Badge, Avatar, Typography, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';

const useStyles = makeStyles(theme => ({
  container: {
    minWidth: 200,
    width: 200,
    background: '#3f3f3e',
    boxShadow: theme.shadows[6],
    overflowY: 'auto',
  },
  listItem: {
    padding: 10,
  },
}));

const ActivePlayersList = () => {
  const {
    selectedPlayer,
    playersLog,
    setFocusedPlayer,
    updatePlayerLog,
  } = useEvaluator();
  const { container, listItem } = useStyles();

  const renamePlayer = playerId => {
    const newName = prompt('Choose a new name for this player');
    updatePlayerLog(playerId, { name: newName });
  };

  const generatedTab = () =>
    playersLog.map(player => {
      const { name, id, avatar } = player;
      const avaiableName = name || id;

      return (
        <ListItem
          key={id}
          selected={selectedPlayer && id === selectedPlayer.id}
          onClick={() => setFocusedPlayer(id)}
          onDoubleClick={() => renamePlayer(id)}
          className={listItem}
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
    <div className={container}>
      {playersLog.length === 0 ? (
        <Typography centered variant="h6">
          Nobody is currently playing your story
        </Typography>
      ) : (
        <List orientation="vertical" indicatorColor="primary">
          {generatedTab()}
        </List>
      )}
    </div>
  );
};

export default ActivePlayersList;
