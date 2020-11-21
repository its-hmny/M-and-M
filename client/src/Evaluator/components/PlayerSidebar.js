import React from 'react';
import { Badge, Avatar, Paper } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';
import axios from '../../common/shared';

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
          <Avatar src={playerAvatar} />
        </ListItemAvatar>
        <ListItemText>{avaiableName}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Paper elevation={3} style={{ zIndex: 100 }}>
      <List orientation="vertical" indicatorColor="primary">
        {generateTab}
      </List>
    </Paper>
  );
};

export default PlayerSidebar;
