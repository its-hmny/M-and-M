import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';

import { useEditor } from './context/EditorContext';
import Preview from '../common/Preview';
import GraphCanvas from './components/GraphCanvas';
import Inspector from './components/Inspector';
import TemplateSelectionDialog from './components/TemplateSelectionDialog';
import Panel from './components/Panel';

import styles from '../data/styles.json';

const useStyles = makeStyles(theme => ({
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
  inspector: {
    marginRight: theme.spacing(4),
    height: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    saveStory({ nodes: [...nodes, { id: undefined, ...template }], ...others });
  };

  return (
    <div>
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
        <div className={classes.inspector}>
          <Inspector />
        </div>
      </Panel>
      <TemplateSelectionDialog
        open={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={addNode}
      />
    </div>
  );
};

export default App;
