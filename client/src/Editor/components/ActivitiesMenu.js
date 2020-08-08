import React, { useState } from 'react';
import { Drawer,  Tabs, Tab, Grid, Typography } from '@material-ui/core';
import DescriptiveCard from './DescriptiveCard.js';
import QuestionTemplate from '../constants/QuestionTemplate.js';

const  ActivitiesMenu = (props) => {
  const { isMenuOpen, setMenuOpen } = props.binding;
  const [ currentTab, setTab ] = useState(0);

  const initializeTabs = () => {
    return (QuestionTemplate.map(item => <Tab label={item.name} />));
  };

  return (
    <Drawer anchor='left' open={isMenuOpen} onClose={() => setMenuOpen(!isMenuOpen)} >
      
      <Typography variant="h4">Choose a new template</Typography>
      
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Tabs orientation="vertical" variant="scrollable" value={currentTab}
            onChange={(event, newValue) => setTab(newValue)}
          >
            {initializeTabs()}
          </Tabs>
        </Grid>
        
        <Grid item xs={8}>
          <DescriptiveCard toPreview={QuestionTemplate[currentTab]}/>
        </Grid>

      </Grid>
    </Drawer>
  );
}

export default ActivitiesMenu;