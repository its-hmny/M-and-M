import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DescriptiveCard from './DescriptiveCard';
import QuestionTemplate from '../constants/QuestionTemplate';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '80vw',
    maxHeight: '80vh',
  },
});

const TemplatesModal = ({ open, onClose }) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = QuestionTemplate.map((item, index) => (
    <Tab label={item.label} key={index} disableRipple />
  ));

  return (
    <Modal className={classes.modal} open={open} onClose={onClose}>
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          Templates
        </Typography>

        <Grid container>
          <Grid item xs={3}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={currentTab}
              className={classes.tabs}
              indicatorColor="primary"
              onChange={(_, newValue) => setCurrentTab(newValue)}
            >
              {tabs}
            </Tabs>
          </Grid>

          <Grid item xs={8}>
            <DescriptiveCard
              toPreview={QuestionTemplate[currentTab]}
              setParent={() => {}}
            />
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default TemplatesModal;
