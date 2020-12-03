import React, { useState } from 'react';
import { makeStyles, Typography, Box, Collapse, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import shortid from 'shortid';

import { useEditor } from './context/EditorContext';
import Preview from '../common/Preview';
import GraphCanvas from './components/GraphCanvas';
import Inspector from './components/Inspector';
import TemplatesDialog from './components/TemplatesDialog';
import Panel from './components/Panel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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
  captionExpanded: {
    opacity: '0.60',
    backgroundColor: '#616161',
    borderRadius: 4,
    position: 'absolute',
    width: '28vw',
    marginLeft: '36vw',
    zIndex: 1000,
    textAlign: 'center',
  },
  caption: {
    opacity: '0.60',
    backgroundColor: '#616161',
    borderRadius: 4,
    position: 'absolute',
    marginLeft: '48.3vw',
    zIndex: 1000,
  },
}));

const App = () => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCaptionOpen, setIsCaptionOpen] = useState(true);
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

      <Box className={isCaptionOpen ? classes.captionExpanded : classes.caption}>
        {!isCaptionOpen ? (
          <Button onClick={() => setIsCaptionOpen(true)}>
            <ExpandMoreIcon />
          </Button>
        ) : (
          <Box>
            <Typography>Clicca 2 volte su un nodo per modificarlo</Typography>
            <Typography>Trascina un nodo per spostarlo</Typography>
            <Typography>Per eliminare un nodo vai in Global - Delete node</Typography>
            <Button onClick={() => setIsCaptionOpen(false)}>
              <ExpandLessIcon />
            </Button>
          </Box>
        )}
      </Box>

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
