import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import shortid from 'shortid';

import { useEditor } from './context/EditorContext';
import Preview from '../common/Preview';
import GraphCanvas from './components/GraphCanvas';
import Inspector from './components/Inspector';
import TemplatesDialog from './components/TemplatesDialog';
import Panel from './components/Panel';

import styles from '../data/styles.json';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vw',
    overflow: 'hidden',
  },
  addButton: {
    position: 'absolute',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    zIndex: 1000,
  },
  addIcon: {
    marginRight: theme.spacing(1),
  },
  preview: {
    marginLeft: theme.spacing(4),
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const App = () => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { story, workingActivity, saveStory } = useEditor();
  const currentNode = story.nodes.find(node => node.id === workingActivity);

  const addNode = template => {
    setIsDialogOpen(false);
    const { nodes, ...others } = story;
    saveStory({ nodes: [...nodes, { id: shortid.generate(), ...template }], ...others });
  };

  return (
    <div className={classes.container}>
      <Fab
        variant="extended"
        className={classes.addButton}
        onClick={() => setIsDialogOpen(true)}
      >
        <AddIcon className={classes.addIcon} />
        Add Node
      </Fab>
      <Panel open={currentNode != null} position="left">
        <div className={classes.preview}>
          <Preview
            components={currentNode ? currentNode.components : []}
            styles={styles}
          />
        </div>
      </Panel>
      <GraphCanvas />
      <Panel open={currentNode != null} position="right">
        <Inspector />
      </Panel>
      <TemplatesDialog
        open={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={addNode}
      />
    </div>
  );
};

export default App;
