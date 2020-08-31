import React, { useState } from 'react';
import { Drawer,  Tabs, Tab, Grid, Typography, IconButton, Paper, Collapse } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import DescriptiveCard from './DescriptiveCard.js';

//TODO: Will become an API call to fetch the data stored server-side
import QuestionTemplate from '../constants/QuestionTemplate.js'; 


const useStyles = makeStyles({
  
  MenuButtonOpen: {
    borderRadius: 50,
    border: 0
  },

  MenuButtonClose: {
    border: 2,
    borderColor: "#e0e0e0",
    borderRadius: 50,
    borderStyle: "solid",
  },

  ActivityMenuContainerShow: {
    zIndex: 2,
    padding: 5,
    position: "absolute",
    border: 1,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
  },

  ActivityMenuContainerHidden: {
    zIndex: 2,
    padding: 5,
    position: "absolute",  
  }
});


export const ActivitiesMenuButton = () => {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <Paper
      className={ isMenuOpen ? classes.ActivityMenuContainerShow : classes.ActivityMenuContainerHidden }
      elevation={isMenuOpen ? 5 : 0}
    >
      <IconButton
        className={ isMenuOpen ? classes.MenuButtonOpen : classes.MenuButtonClose }
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <MenuIcon />
      </IconButton>

      <Collapse in={isMenuOpen}>
        <ActivitiesMenu binding={{ isMenuOpen, setMenuOpen }} />
      </Collapse>

    </Paper>
  );
}


const  ActivitiesMenu = (props) => {
  const { isMenuOpen, setMenuOpen } = props.binding;
  const [ currentTab, setTab ] = useState(0);

  const initializeTabs = () => {
    return (QuestionTemplate.map((item, index) => <Tab label={item.label} key={index} disableRipple/>));
  };

  return (
    <Drawer anchor='left' open={isMenuOpen} onClose={() => setMenuOpen(!isMenuOpen)} >
      
      <Typography variant="h5" align="center">Choose a new template</Typography>
      
      <Grid container>
        <Grid item xs={3}>
          <Tabs orientation="vertical" variant="scrollable" value={currentTab}
            indicatorColor="primary" onChange={(event, newValue) => setTab(newValue)}
          >
            {initializeTabs()}
          </Tabs>
        </Grid>
        
        <Grid item xs={8}>
          <DescriptiveCard toPreview={QuestionTemplate[currentTab]} setParent={setMenuOpen}/>
        </Grid>

      </Grid>
    </Drawer>
  );
}


export default ActivitiesMenu;