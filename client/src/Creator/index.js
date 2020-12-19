import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../common/Navbar';
import Preview from '../common/Preview';
import Inspector from './components/Inspector';
import SaveDialog from './components/SaveDialog';
import axios from '../common/shared';
import useTemplateStore from './stores/template';
import useStylesStore from './stores/styles';

const useStyles = makeStyles(theme => ({
  saveButton: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);
  const styles = useStylesStore(state => state.styles);
  const components = useTemplateStore(state => state.components);
  const saveTemplate = meta => {
    setIsSaving(false);
    console.log(`About to save template ${meta.name}...`);
    const styledComponents = components.map(component => ({
      ...component,
      style: styles[component.styleId],
    }));
    axios // See common/shared.js (useAPI hook)
      .post('templates', { ...meta, components: styledComponents })
      .then(value => console.log(value))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={6}>
          <Inspector />
        </Grid>
        <Grid item xs={6}>
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
              console.log('cancel');
              setIsSaving(false);
            }}
            onSave={saveTemplate}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
