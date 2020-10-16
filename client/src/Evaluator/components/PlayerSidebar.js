import React, { useState } from 'react';
import { Avatar, Tab, Tabs, Grid, Paper } from '@material-ui/core';

const PlayerSidebar = () => {
  const [tabOnFocus, setFocusedTab] = useState(0);

  const dummy = ['Player Test', 'Player 1', 'Player 2', 'undefined', 'Player'];

  const generateTab = iterator =>
    iterator.map(playerName => {
      const getInitials = playerName =>
        playerName
          .split(' ')
          .map(n => n[0])
          .join('');
      return <Tab label={playerName} icon={<Avatar>{getInitials(playerName)}</Avatar>} />;
    });

  return (
    <Grid item xs={2}>
      <Paper>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabOnFocus}
          onChange={(_, newVal) => setFocusedTab(newVal)}
          onDoubleClick={() => console.log('Meccanismo per assegnare nome')}
        >
          {generateTab(dummy)}
        </Tabs>
      </Paper>
    </Grid>
  );
};

export default PlayerSidebar;
