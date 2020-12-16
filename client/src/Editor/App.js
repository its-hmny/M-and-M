import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
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
import Navbar from '../common/Navbar';
import SaveButton from './components/SaveButton';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#3d3d3d',
  },
  buttonContainer: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
  },
  addButton: {
    marginRight: theme.spacing(2),
  },
  addIcon: {
    marginRight: theme.spacing(1),
  },
  saveButton: {},
  saveIcon: {
    marginRight: theme.spacing(1),
  },
  preview: {
    marginLeft: theme.spacing(2),
    height: '100%',
    display: 'flex',
    alignItems: 'end',
    '& > *': {
      marginBottom: theme.spacing(5),
    },
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    zIndex: 5, // keep it above graph but under ispector
  },
  innerCaption: {
    opacity: '0.75',
    backgroundColor: '#616161',
    borderRadius: 4,
    textAlign: 'center',
    padding: 15,
    paddingTop: 0,
  },
  navbar: {
    flexShrink: 0,
  },
  graphStyle: {
    flexGrow: 1,
    '& .vis-network': {
      outline: 'none',
    },
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
      <div className={classes.navbar}>
        <Navbar />
        <div className={classes.buttonContainer}>
          <Fab
            variant="extended"
            className={classes.addButton}
            onClick={() => setIsDialogOpen(true)}
          >
            <AddIcon className={classes.addIcon} />
            Add Node
          </Fab>
          {/* <Fab variant="extended" className={classes.saveButton} onClick={uploadStory}>
            <SaveIcon className={classes.saveIcon} />
            Save Story
          </Fab> */}
          <SaveButton />
        </div>
      </div>
      <div className={classes.graphStyle}>
        <Box className={classes.caption}>
          {!isCaptionOpen ? (
            <Button onClick={() => setIsCaptionOpen(true)}>
              <ExpandLessIcon />
            </Button>
          ) : (
            <Box className={classes.innerCaption}>
              <Button onClick={() => setIsCaptionOpen(false)}>
                <ExpandMoreIcon />
              </Button>
              <Typography>Clicca 2 volte su un nodo per modificarlo</Typography>
              <Typography>Trascina un nodo per spostarlo</Typography>
              <Typography>Per eliminare un nodo vai in Global - Delete node</Typography>
            </Box>
          )}
        </Box>

        <Panel open={currentNode != null} position="left">
          <div className={classes.preview}>
            <Preview components={currentNode ? currentNode.components : []} />
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
    </div>
  );
};

export default App;
