import React, { Fragment, useState } from 'react';
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

import ReadOnly from '../ReadOnly';
import Preview from '../../../common/Preview';
import Loading from './Loading';
import Failure from './Failure';

import { CREATOR } from '../../../routes';
import useTemplates from './use-templates';

import styles from '../../../data/styles.json';

const useStyles = makeStyles(theme => ({
  container: {
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

const TemplatesDialog = ({ open, onCancel, onConfirm }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [{ templates, isError, isLoading }, retry] = useTemplates();

  return (
    <Dialog
      maxWidth={false}
      open={open}
      onClose={onCancel}
      aria-labelledby="max-width-dialog-title"
    >
      {isLoading && <Loading />}

      {isError && <Failure onRetry={retry} />}

      {templates.length > 0 && (
        <Fragment>
          <DialogTitle id="max-width-dialog-title">Templates</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose one of the available templates or create a new one with our{' '}
              <MuiLink component={Link} to={CREATOR}>
                Template Creator
              </MuiLink>
            </DialogContentText>
            <div className={classes.container}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={current}
                className={classes.tabs}
                indicatorColor="primary"
                onChange={(_, index) => setCurrent(index)}
              >
                {templates.map((template, index) => (
                  <Tab key={index} label={template.name} disableRipple />
                ))}
              </Tabs>
              <Box display="flex">
                <Box px={4}>
                  <ReadOnly>
                    <Preview components={templates[current].components} styles={styles} />
                  </ReadOnly>
                </Box>
                <Box py={2} width={300}>
                  <Typography variant="h6">{templates[current].name}</Typography>
                  <Typography variant="subtitle1">
                    {templates[current].description}
                  </Typography>
                </Box>
              </Box>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={() => onConfirm(templates[current])}>
              Confirm
            </Button>
          </DialogActions>
        </Fragment>
      )}
    </Dialog>
  );
};

export default TemplatesDialog;
