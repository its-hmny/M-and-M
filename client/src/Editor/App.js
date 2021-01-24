import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Typography, Box, Button, Fab } from '@material-ui/core';
import { Add as AddIcon, Home as HomeIcon } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import shortid from 'shortid';

import { useEditor } from './context/EditorContext';
import Preview from '../common/Preview';
import GraphCanvas from './components/GraphCanvas';
import Inspector from './components/Inspector';
import TemplatesDialog from './components/TemplatesDialog';
import Panel from './components/Panel';
import SaveButton from '../common/SaveButton';

import * as ROUTES from '../routes';
import CompSettings from './constants/ComponentProperties.json';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    maxWidth: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#3d3d3d',
  },
  buttonsContainer: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1,
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
  homeButton: {
    marginRight: theme.spacing(2),
  },
  preview: {
    marginLeft: theme.spacing(2),
    height: '100%',
    display: 'flex',
    alignItems: 'end',
    '& > *': {
      marginBottom: theme.spacing(7),
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
  graphStyle: {
    position: 'relative',
    '& .vis-network': {
      width: '100%',
      height: '100vh',
      outline: 'none',
    },
  },
}));

const appendNodeId = (nodeId, components) =>
  components.map(component => {
    let updatedComponent;
    if (component.answers !== undefined) {
      const answers = component.answers.map(answer => {
        return { ...answer, id: `${nodeId}-${component.id}` };
      });
      updatedComponent = {
        ...component,
        id: `${nodeId}-${component.id}`,
        answers: answers,
      };
      if (updatedComponent.children) {
        updatedComponent.children = appendNodeId(nodeId, component.children);
      }
    } else {
      updatedComponent = { ...component, id: `${nodeId}-${component.id}` };
      if (updatedComponent.children) {
        updatedComponent.children = appendNodeId(nodeId, component.children);
      }
    }
    return updatedComponent;
  });

const App = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCaptionOpen, setIsCaptionOpen] = useState(true);
  const { story, workingActivity, saveStory, setPathToValue } = useEditor();

  const currentNode = story.nodes.find(node => node.id === workingActivity);

  const setNodeDestinations = (components, dest, specificPath) => {
    // Setup the node to point to itself onAdd
    const destinationFrags = ['SelectFragment', 'AnswerFragment', 'AnswerFragmentImages'];
    const buttonFrags = destinationFrags[0];
    const choiceFrags = destinationFrags.slice(-2);

    components.forEach((comp, index) => {
      const basepath = [...(specificPath || ['components']), index];

      const option = CompSettings[comp.name].find(({ fragment }) =>
        destinationFrags.includes(fragment)
      );

      if (option) {
        if (buttonFrags.includes(option.fragment)) {
          // Button case, simply set the story.nextNode object to itself
          const { pathAlternative, valToChange } = option.props;
          setPathToValue(
            [...basepath, ...(pathAlternative || [])],
            valToChange,
            dest,
            dest
          );
        } else if (choiceFrags.includes(option.fragment)) {
          // MultiAnsChoice and similar case, is needed to set the whole
          // destinaion object one level before in the object itself
          const { selectPath } = option.props;
          const dummy = { '[CORRECT]': dest, '[WRONG]': dest };
          const pathToVal = [...basepath, ...selectPath.slice(0, -1)];
          const valToChange = selectPath.slice(-1);
          setPathToValue(pathToVal, valToChange, dummy, dest);
        }
      }
      // Recursive call on children
      if (comp.children)
        setNodeDestinations(comp.children, dest, [...basepath, 'children']);
    });
  };

  const addNode = template => {
    setIsDialogOpen(false);
    const { nodes, ...others } = story;
    const nodeId = shortid.generate();
    const components = appendNodeId(nodeId, template.components);
    //saveStory({ nodes: [...nodes, { id: nodeId, ...template, components }], ...others });
    nodes.push({ id: nodeId, ...template, components });
    saveStory({ nodes: [...nodes], ...others });
    setNodeDestinations(components, nodeId);
  };

  return (
    <div className={classes.container}>
      <div className={classes.graphStyle}>
        <div className={classes.buttonsContainer}>
          <Fab
            className={classes.homeButton}
            onClick={() => history.push(ROUTES.HOME)}
            size="medium"
          >
            <HomeIcon />
          </Fab>
          <Fab
            variant="extended"
            className={classes.addButton}
            onClick={() => setIsDialogOpen(true)}
          >
            <AddIcon className={classes.addIcon} />
            Add Node
          </Fab>
          <SaveButton story={story} />
        </div>
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
        <Panel open={currentNode != null} position="right" style={{ top: 0 }}>
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
