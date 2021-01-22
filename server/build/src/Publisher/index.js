import React, { useEffect, useState } from '../../web_modules/react.js';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Fab,
  Tooltip,
} from '../../web_modules/@material-ui/core.js';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  FileCopy as FileCopyIcon,
  Assessment as AssessmentIcon,
} from '../../web_modules/@material-ui/icons.js';
import { Link } from '../../web_modules/react-router-dom.js';
import AreYouSureDialog from './AreYouSureDialog.js';
import Form from './Form.js';
import * as ROUTES from '../routes.js';
import axios from '../common/shared.js';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
  },
  list: {
    maxHeight: '100vh',
    overflow: 'auto',
    flexBasis: 350,
    flexShrink: 0,
    background: theme.palette.background.paper,
  },
  listItem: {
    boxSizing: 'border-box',
    maxWidth: 350,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  selected: {
    paddingRight: theme.spacing(2) - 3,
    borderRight: `3px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
  },
  listSecondary: {
    paddingRight: 0,
    overflow: 'hidden',
  },
  listItemText: {
    '& > .MuiListItemText-primary': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  listItemIcons: {
    flexShrink: 0,
    position: 'static',
    transform: 'none',
    display: 'flex',
    '& > .MuiButtonBase-root': {
      height: 'fit-content',
    },
  },
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

let storyCount = 0;

const App = () => {
  const [stories, setStories] = useState([]);

  const [selected, setSelected] = useState(undefined);

  const [toDelete, setToDelete] = useState(false);

  const [dontAskAgain, setDontAskAgain] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get(`stories/list`);

      const stories = res.data.payload;

      setStories(stories);
      setSelected(stories[0]);
    };

    fetchStories();
  }, []);

  const handleChange = async (key, value) => {
    const update = { ...selected, [key]: value };

    setSelected(update);
    setStories((stories) =>
      stories.map((story) => (story.uuid === update.uuid ? update : story)),
    );

    if (key !== 'title' && key !== 'description') {
      saveChanges(update);
    }
  };

  const saveChanges = async (update) => {
    try {
      await axios.patch(`stories/${update.uuid}`, update);
    } catch (err) {
      console.error(err);
    }
  };

  const addStory = async () => {
    const newStory = {
      title: `Story ${++storyCount}`,
      description: '',
      targets: [],
      modes: [],
      accessible: false,
      nodes: [],
    };

    try {
      const res = await axios.put('stories/', {
        story: newStory,
      });

      const withUuid = { ...newStory, uuid: res.data.uuid };

      setStories((stories) => [withUuid, ...stories]);
      setSelected(withUuid);
    } catch (err) {
      console.error(err);
    }
  };

  const duplicateStory = async (story) => {
    const duplicate = { ...story, uuid: null, title: `${story.title} Copy` };

    try {
      const res = await axios.put('stories', {
        story: duplicate,
      });

      setStories((stories) => [
        ...stories,
        { ...duplicate, uuid: res.data.uuid },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const executeDeleteStory = async (toDelete) => {
    try {
      await axios.delete(`stories/${toDelete.uuid}`);
      setStories((stories) =>
        stories.filter((story) => story.uuid !== toDelete.uuid),
      );

      if (selected && selected.uuid === toDelete.uuid) {
        setSelected(undefined);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return React.createElement(
    'div',
    {
      className: classes.container,
    },
    React.createElement(
      'div',
      {
        className: classes.content,
      },
      React.createElement(
        'div',
        {
          className: classes.list,
        },
        React.createElement(
          List,
          {
            dense: true,
          },
          stories.map((story, index) =>
            React.createElement(
              React.Fragment,
              {
                key: story.uuid,
              },
              React.createElement(
                ListItem,
                {
                  classes: {
                    container: `${classes.listItem} ${
                      selected && selected.uuid === story.uuid
                        ? classes.selected
                        : ''
                    }`,
                    secondaryAction: classes.listSecondary,
                    selected: classes.selected,
                  },
                  onClick: () => setSelected(story),
                },
                React.createElement(ListItemText, {
                  className: classes.listItemText,
                  primary: story.title,
                  primaryTypographyProps: {
                    variant: 'subtitle1',
                  },
                }),
                React.createElement(
                  ListItemSecondaryAction,
                  {
                    className: classes.listItemIcons,
                  },
                  React.createElement(
                    Tooltip,
                    {
                      title: 'Duplicate',
                      placement: 'top-end',
                    },
                    React.createElement(
                      IconButton,
                      {
                        onClick: () => duplicateStory(story),
                      },
                      React.createElement(FileCopyIcon, null),
                    ),
                  ),
                  React.createElement(
                    Tooltip,
                    {
                      title: 'Delete',
                      placement: 'top',
                    },
                    React.createElement(
                      IconButton,
                      {
                        onClick: () =>
                          dontAskAgain
                            ? executeDeleteStory(story)
                            : setToDelete(story),
                      },
                      React.createElement(DeleteIcon, null),
                    ),
                  ),
                  React.createElement(
                    Tooltip,
                    {
                      title: 'Edit in Editor',
                      placement: 'top-start',
                    },
                    React.createElement(
                      IconButton,
                      {
                        component: Link,
                        to: `${ROUTES.EDITOR}?storyId=${story.uuid}`,
                      },
                      React.createElement(EditIcon, null),
                    ),
                  ),
                  React.createElement(
                    Tooltip,
                    {
                      title: 'See in Evaluator',
                      placement: 'top-start',
                    },
                    React.createElement(
                      IconButton,
                      {
                        component: Link,
                        to: `${ROUTES.EVALUATOR}?storyId=${story.uuid}`,
                      },
                      React.createElement(AssessmentIcon, null),
                    ),
                  ),
                ),
              ),
              index !== stories.length - 1 &&
                React.createElement(Divider, null),
            ),
          ),
        ),
      ),
      React.createElement(
        'div',
        {
          className: classes.content,
        },
        selected &&
          React.createElement(Form, {
            story: selected,
            handleChange: handleChange,
          }),
      ),
    ),
    React.createElement(
      Fab,
      {
        color: 'primary',
        className: classes.addButton,
        onClick: addStory,
      },
      React.createElement(AddIcon, null),
    ),
    !dontAskAgain &&
      React.createElement(AreYouSureDialog, {
        open: !!toDelete,
        onCancel: () => setToDelete(null),
        onConfirm: (dontAskAgain) => {
          setDontAskAgain(dontAskAgain);
          executeDeleteStory(toDelete);
          setToDelete(null);
        },
      }),
  );
};

export default App;
