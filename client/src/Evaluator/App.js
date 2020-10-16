import React from 'react';
import { Typography } from '@material-ui/core';
import PlayerProgressGraph from './components/PlayerProgressGraph';
import PlayerSidebar from './components/PlayerSidebar';
import ChatBox from './components/ChatBox';

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      {/* {<PlayerProgressGraph />} */}
      <PlayerSidebar />
      <ChatBox />
    </div>
  );
};

export default App;
