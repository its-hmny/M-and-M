import React, { useState } from 'react';
import { Drawer,  Tabs, Tab, Grid, Typography } from '@material-ui/core';
import DescriptiveCard from './DescriptiveCard.js'

const  ActivitiesMenu = (props) => {
  const classes = {}
  const { renderList } = props;
  const { isMenuOpen, setMenuOpen } = props.openState;
  const [ currentTab, setTab ] = useState(0);

  const initializeTabs = () => {
    return (renderList.map(elem => <Tab label={elem} />));
  };

  return (
    <Drawer
      className={classes.root}
      anchor={'left'}
      open={isMenuOpen}
      onClose={() => setMenuOpen(!isMenuOpen)}
    >
      <Typography variant="h4">Choose a new template</Typography>
      
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            onChange={(event, newValue) => setTab(newValue)}
          >
            {initializeTabs()}
          </Tabs>
        </Grid>
        
        <Grid item xs={7}>
          <DescriptiveCard description={renderList[currentTab]}/>
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default ActivitiesMenu;