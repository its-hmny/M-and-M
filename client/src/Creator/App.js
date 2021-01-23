import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Fab, Grid, Button, makeStyles } from '@material-ui/core';
import { Home as HomeIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { useSnackbar } from 'notistack';

import Preview from '../common/Preview';
import Inspector from './components/Inspector';
import SaveDialog from './components/SaveDialog';
import axios from '../common/shared';
import useTemplateStore from './stores/template';
import useStylesStore from './stores/styles';

import * as ROUTES from '../routes';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsContainer: {
    margin: theme.spacing(2),
    top: theme.spacing(2),
    left: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1,
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
  grid: {
    flexGrow: 1,
  },
  previewPanel: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}));

const inlineStyles = (styles, components) =>
  components.map(component => ({
    ...component,
    style: styles[component.styleId],
    children: component.children && inlineStyles(styles, component.children),
  }));

const App = () => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [isSaving, setIsSaving] = useState(false);
  const styles = useStylesStore(state => state.styles);
  const components = useTemplateStore(state => state.components);
  const saveTemplate = meta => {
    setIsSaving(false);
    const styledComponents = inlineStyles(styles, components);
    axios // See common/shared.js (useAPI hook)
      .post('templates', { ...meta, components: styledComponents })
      .then(value => {
        console.log('saved template ', value);
        enqueueSnackbar('Saved your template!', { variant: 'success' });
      })
      .catch(err => {
        console.error(err);
        enqueueSnackbar('Something went wrong...', { variant: 'error' });
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttonsContainer}>
        <Fab className={classes.navButton} onClick={() => history.goBack()} size="medium">
          <ArrowBackIcon />
        </Fab>
        <Fab
          className={classes.navButton}
          onClick={() => history.push(ROUTES.HOME)}
          size="medium"
        >
          <HomeIcon />
        </Fab>
      </div>
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Inspector />
        </Grid>
        <Grid xs={6} item>
          <div className={classes.previewPanel}>
            <Preview components={components} styles={styles} />
            <Button
              color="primary"
              variant="contained"
              className={classes.saveButton}
              onClick={() => setIsSaving(true)}
            >
              Save Template
            </Button>
            <SaveDialog
              open={isSaving}
              onCancel={() => {
                setIsSaving(false);
              }}
              onSave={saveTemplate}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
