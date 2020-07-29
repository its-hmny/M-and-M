import React, { useState } from 'react';
import { Grid, SwipeableDrawer, Button } from '@material-ui/core';


const  ActivitiesMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Grid item xs={3}>
      
    </Grid>
  );
}

export default ActivitiesMenu;
/* EXPERIMENTAL
<Button onClick={() => setOpen(true)}>Choose new activity</Button>
      <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
      </SwipeableDrawer>
*/
