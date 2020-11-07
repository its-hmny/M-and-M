import React from 'react';
import { Grid, Badge, Avatar } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';
import axios from '../../common/shared';

const initials = name =>
  name
    .split(' ')
    .map(n => n[0])
    .join('');

const renamePlayer = playerId => {
  const newName = prompt('Choose a new name for this player');
  axios.patch(`stats/test/${playerId}`, { playerName: newName });
};

const PlayerSidebar = () => {
  const { playerList, setSelectedPlayer } = useEvaluator();

  const generateTab = playerList.map(player => {
    const { playerName, playerId, playerAvatar } = player;
    const avaiableName = playerName || playerId;

    return (
      <ListItem
        key={playerId}
        onDoubleClick={() => renamePlayer(playerId)}
        onClick={() => setSelectedPlayer(playerId)}
      >
        <Badge badgeContent={'!'} color="primary" />
        <ListItemAvatar>
          <Avatar src={playerAvatar}>{initials}</Avatar>
        </ListItemAvatar>
        <ListItemText>{avaiableName}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Grid item xs={2}>
      <List orientation="vertical" indicatorColor="primary">
        {generateTab}
      </List>
    </Grid>
  );
};

export default PlayerSidebar;
