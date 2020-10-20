import React, { useState, useMemo } from 'react';
import { Avatar, Tab, Tabs, Grid, Paper } from '@material-ui/core';
import { useEvaluator } from '../context/EvaluatorContext';

const PlayerSidebar = () => {
  const { playerList, setSelectedPlayer } = useEvaluator();
  const [tabOnFocus, setFocusedTab] = useState(0);

  const generateTab = useMemo(
    () =>
      playerList.map(player => {
        const { playerName, playerId, playerAvatar } = player;
        const avaiableName = playerName || playerId;

        const initials = avaiableName
          .split(' ')
          .map(n => n[0])
          .join('');

        return (
          <Tab
            key={playerId}
            label={avaiableName}
            icon={<Avatar src={playerAvatar}>{initials}</Avatar>}
          />
        );
      }),
    [playerList]
  );

  return (
    <Grid item xs={2}>
      <Paper>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          indicatorColor="primary"
          scrollButtons="auto"
          value={tabOnFocus}
          onChange={(_, newVal) => {
            setFocusedTab(newVal);
            setSelectedPlayer(playerList[newVal].playerId);
          }}
          onDoubleClick={() => console.log('Meccanismo per assegnare nome')}
        >
          {generateTab}
        </Tabs>
      </Paper>
    </Grid>
  );
};

export default PlayerSidebar;
