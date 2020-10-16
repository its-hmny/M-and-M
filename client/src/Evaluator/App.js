import React from 'react';
import { Typography } from '@material-ui/core';
import PlayerProgressGraph from './components/PlayerProgressGraph';
import PlayerSidebar from './components/PlayerSidebar';

const App = ()  => {
    return (
      <>
        {/* {<PlayerProgressGraph />} */}
        <PlayerSidebar />
      </>
    );
}

export default App;