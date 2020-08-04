import React, { useState } from 'react';
import { Drawer,  Tabs, Tab, Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';
import shortid from 'shortid';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} >
      {value === index && (
        <Card>
          <CardContent>
            <Typography>{children}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'block',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const  ActivitiesMenu = (props) => {
  const classes = {}
  const { renderList } = props;
  const { isMenuOpen, setMenuOpen } = props.openState;
  const [ currentTab, setTab ] = useState(0);

  const initializeTabs = () => {
    return (renderList.map(elem => <Tab label={elem} />));
  };

  const initializeTabPanels = () => {
     return (renderList.map((elem, index) => 
      <TabPanel index={index} value={currentTab} >{elem}</TabPanel>
  ))};

  return (
    <Drawer
      className={classes.root}
      anchor={'left'}
      open={isMenuOpen}
      onClose={() => setMenuOpen(!isMenuOpen)}
    >
      <Typography variant="h4">Choose a new template</Typography>
      
      <Grid container>
        <Grid item xs={4}>
          <Tabs
            className={classes.tabs}
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            onChange={(event, newValue) => setTab(newValue)}
          >
            {initializeTabs()}
          </Tabs>
        </Grid>
        
        <Grid item xs={8}>
          {initializeTabPanels()}
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default ActivitiesMenu;




/* EXPERIMENTAL
<Button onClick={() => setOpen(true)}>Choose new activity</Button>
*/
