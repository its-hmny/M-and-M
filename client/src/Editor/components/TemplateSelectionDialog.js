import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { default as MuiLink } from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import ReadOnly from './ReadOnly';

// This 2 will be removed when API endpoints are completed
import templates from '../constants/QuestionTemplate';
import styles from '../../data/styles.json';

import * as ROUTES from '../../routes';
import Preview from '../../common/Preview';

const useStyles = makeStyles(theme => ({
  dialogContent: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  grid: {
    padding: theme.spacing(2),
  },
}));

const TemplateSelectionDialog = ({ open, onCancel, onConfirm }) => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = templates.map((item, index) => (
    <Tab label={item.label} key={index} disableRipple />
  ));

  return (
    <Dialog
      maxWidth={false}
      open={open}
      onClose={onCancel}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Templates</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choose one of the available templates or create a new one with our{' '}
          <MuiLink component={Link} to={ROUTES.CREATOR}>
            Template Creator
          </MuiLink>
        </DialogContentText>
        <div className={classes.dialogContent}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            className={classes.tabs}
            indicatorColor="primary"
            TabIndicatorProps={{}}
            onChange={(_, newValue) => setCurrentTab(newValue)}
          >
            {tabs}
          </Tabs>
          <Box display="flex">
            <Box px={4}>
              <ReadOnly>
                <Preview components={templates[currentTab].components} styles={styles} />
              </ReadOnly>
            </Box>
            <Box py={2} maxWidth={300}>
              <Typography variant="h6">{templates[currentTab].label}</Typography>
              <Typography variant="subtitle1">
                {templates[currentTab].description}
              </Typography>
            </Box>
          </Box>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={() => onConfirm(templates[currentTab])}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TemplateSelectionDialog;
