import React, { useState } from 'react';
import {
  Drawer,
  Tabs,
  Tab,
  Grid,
  Typography,
  IconButton,
  Collapse,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DescriptiveCard from './DescriptiveCard.js';

// TODO: Will become an API call to fetch the data stored server-side
import QuestionTemplate from '../constants/QuestionTemplate.js';

const useStyles = makeStyles(theme => ({
  MenuButtonOpen: {
    borderRadius: 50,
    border: 0,
  },

  MenuButtonClose: {
    border: 2,
    borderColor: '#e0e0e0',
    borderRadius: 50,
    borderStyle: 'solid',
  },

  ActivityMenuContainerShow: {
    zIndex: 2,
    padding: 5,
    position: 'absolute',
    border: 1,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
  },

  ActivityMenuContainerHidden: {
    zIndex: 2,
    padding: 5,
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
  },

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  PaperOverride: {
    width: '45%',
  },
}));

/* Button to open drawer */
const ActivitiesMenuButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <div
      className={
        isMenuOpen
          ? classes.ActivityMenuContainerShow
          : classes.ActivityMenuContainerHidden
      }
    >
      <IconButton
        className={isMenuOpen ? classes.MenuButtonOpen : classes.MenuButtonClose}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <AddIcon />
      </IconButton>

      <Collapse in={isMenuOpen}>
        <ActivitiesMenu binding={{ isMenuOpen, setMenuOpen }} />
      </Collapse>
    </div>
  );
};

const ActivitiesMenu = props => {
  const { isMenuOpen, setMenuOpen } = props.binding;
  const [currentTab, setTab] = useState(0);
  const classes = useStyles();

  const initializeTabs = () => {
    return QuestionTemplate.map((item, index) => (
      <Tab label={item.label} key={index} disableRipple />
    ));
  };

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isMenuOpen}
      onClose={() => setMenuOpen(!isMenuOpen)}
      // Keeps the width fixed
      classes={{ paper: classes.PaperOverride }}
    >
      <Typography variant="h5" align="center">
        Choose a new template
      </Typography>

      <Grid container>
        <Grid item xs={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            className={classes.tabs}
            indicatorColor="primary"
            onChange={(event, newValue) => setTab(newValue)}
          >
            {initializeTabs()}
          </Tabs>
        </Grid>

        <Grid item xs={8}>
          <DescriptiveCard
            toPreview={QuestionTemplate[currentTab]}
            setParent={setMenuOpen}
          />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default ActivitiesMenuButton;
