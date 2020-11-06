import React, { useState } from 'react';
import { Grid, Badge, Avatar } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';
import axios from 'axios';

const initials = name =>
  name
    .split(' ')
    .map(n => n[0])
    .join('');

const renamePlayer = playerId => {
  const newName = prompt('Choose a new name for this player');
  axios.patch(`http://localhost:8000/stats/test/${playerId}`, { playerName: newName });
};

const PlayerSidebar = () => {
  const { playerList, setSelectedPlayer } = useEvaluator();
  const [tabOnFocus, setFocusedTab] = useState(0);

  const generateTab = playerList.map(player => {
    const { playerName, playerId, playerAvatar } = player;
    const avaiableName = playerName || playerId;

    return (
      <ListItem key={playerId} onDoubleClick={() => renamePlayer(playerId)}>
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
      <List
        orientation="vertical"
        variant="scrollable"
        indicatorColor="primary"
        scrollButtons="auto"
        value={tabOnFocus}
        onChange={(_, newVal) => {
          setFocusedTab(newVal);
          setSelectedPlayer(playerList[newVal].playerId);
        }}
      >
        {generateTab}
      </List>
    </Grid>
  );
};

export default PlayerSidebar;
