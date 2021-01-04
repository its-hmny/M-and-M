import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link as MuiLink,
  Tabs,
  Tab,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import ReadOnly from '../ReadOnly';
import Preview from '../../../common/Preview';
import Loading from './Loading';
import Failure from './Failure';

import { CREATOR } from '../../../routes';
import useTemplates from './use-templates';

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
  emptyContainer: {
    width: 'min-content',
  },
  emptyTitle: {
    minWidth: 'max-content',
  },
}));

const TemplatesDialog = ({ open, onCancel, onConfirm }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [{ templates, isError, isLoading }, retry] = useTemplates();

  const alternativeContent = useMemo(() => {
    if (isError) {
      return <Failure onRetry={retry} />;
    }

    if (isLoading) {
      return <Loading />;
    }

    if (templates.length === 0) {
      return (
        <div className={classes.emptyContainer}>
          <div className={classes.emptyTitle}>
            <DialogTitle variant="h6">
              Wooops, seems you've never created any template...{' '}
              <span role="img" aria-label="thinking emoji">
                🤔
              </span>
            </DialogTitle>
          </div>
          <DialogContent>
            <Typography>
              What are you waiting for? Get to the Template Creator and build something
              amazing!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button color="primary" component={Link} to={CREATOR}>
              Jump to Creator
            </Button>
          </DialogActions>
        </div>
      );
    }

    return null;
  }, [templates, isError, isLoading, retry, classes]);

  return (
    <Dialog
      maxWidth={false}
      open={open}
      onClose={onCancel}
      aria-labelledby="max-width-dialog-title"
    >
      {alternativeContent || (
        <>
          <DialogTitle>Templates</DialogTitle>
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
                    <Preview components={templates[current].components} />
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
        </>
      )}
    </Dialog>
  );
};

export default TemplatesDialog;
