import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tabs,
  Tab,
  Fab,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  FileCopy as FileCopyIcon,
} from '@material-ui/icons';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

import AreYouSureDialog from './AreYouSureDialog';
import Form from './Form';
import * as ROUTES from '../routes';
import axios from '../common/shared';
import Navbar from '../common/Navbar';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    flexGrow: 1,
  },
  tabPanel: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  tabs: {
    minWidth: '20vw',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.paper,
    '& .MuiTab-root': {
      maxWidth: 'unset',
      '&.Mui-selected': {
        background: theme.palette.background.default,
      },
    },
  },
  ripple: {
    backgroundColor: theme.palette.background.default,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const TabPanel = ({ isSelected, children }) => {
  return (
    <div role="tabpanel" hidden={!isSelected}>
      {isSelected && <Box p={3}>{children}</Box>}
    </div>
  );
};

//TODO add alert if wanting to exit without saving
const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [stories, setStories] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [contentForm, setContentForm] = useState(<></>);

  const classes = useStyles();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get(`stories/list`);
      const stories = res.data.payload;
      setStories(stories);
      setSelectedId(stories[0].uuid);
    };

    fetchStories();
  }, []);

  const handleChange = (key, value) => {
    setStories(stories =>
      stories.map(story =>
        story.uuid === selectedId ? { ...story, [key]: value } : story
      )
    );
  };

  const saveChanges = () => {
    setEditMode(false);
    // setContent(selected, false);
    let storyToSend = stories.find(e => e.uuid === selectedId);
    console.log(storyToSend);
    axios.patch(`stories/${selectedId}`, storyToSend).then(values => {
      axios.get(`stories/list`).then(res => {
        const stories = res.data.payload;
        setStories(stories);
      });
    });
  };

  const addStory = () => {
    const newStory = {
      title: 'Placeholder',
      description: 'Placeholder',
      target: 'ADULT',
      gameplay: 'SINGLE',
      accessible: false,
      nodes: [],
    };

    axios.put('stories/', { story: newStory }).then(res => {
      setStories(stories => [{ uuid: res.data.uuid, ...newStory }, ...stories]);
    });
  };

  const duplicateStory = () => {
    const storyToSend = stories.find(e => e.uuid === selectedId);
    // delete storyToSend['uuid'];
    axios.put('stories/', storyToSend).then(values => {
      //Reload stories
      axios.get(`stories/list`).then(res => {
        const stories = res.data.payload;
        setStories(stories);
      });
    });
  };

  const executeDeleteStory = () => {
    axios.delete(`stories/${selectedId}`).then(res => {
      axios.get(`stories/list`).then(res => {
        const stories = res.data.payload;
        setSelectedId(null);
        setStories(stories);
      });
    });
  };

  // const setContent = (uuid, editMode) => {
  //   return (

  //   );
  //   } else {
  //     setContentForm(
  //       <Box>
  //         <Typography className={classes.dataText}>
  //           <b>Title:</b> {story.title}
  //         </Typography>
  //         <Typography className={classes.dataText}>
  //           <b>Description:</b> {story.description}
  //         </Typography>
  //         <Typography className={classes.dataText}>
  //           <b>Target:</b> {story.target}
  //         </Typography>
  //         <Typography className={classes.dataText}>
  //           <b>Gameplay:</b> {story.gameplay}
  //         </Typography>
  //         <Typography className={classes.dataText}>
  //           <b>Accessible:</b> {story.accessible ? 'Yes' : 'No'}
  //         </Typography>
  //       </Box>
  //     );
  //   }
  // };

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.content}>
        <div className={classes.tabPanel}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedId}
            onChange={(_, selected) => setSelectedId(selected)}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {stories.map(story => (
              <Tab
                key={story.uuid}
                label={story.title}
                value={story.uuid}
                TouchRippleProps={{ classes: { child: classes.ripple } }}
              />
            ))}
          </Tabs>
          {stories.map(story => (
            <TabPanel key={story.uuid} isSelected={selectedId === story.uuid}>
              <Form story={story} handleChange={handleChange} />
            </TabPanel>
          ))}
          <div className={classes.buttonContainer}>
            <Button className={classes.duplicateBtn} onClick={() => setIsDeleting(true)}>
              <DeleteIcon onClick={() => setIsDeleting(true)} />
            </Button>
            <Button className={classes.duplicateBtn} onClick={duplicateStory}>
              <FileCopyIcon />
            </Button>
          </div>
        </div>
        <Fab color="primary" className={classes.addButton} onClick={addStory}>
          <AddIcon />
        </Fab>
        {/* <Box className={classes.storiesContainer}>
          <Box className={classes.storyList}>
            <List>
              {stories.map(story => (
                <ListItem
                  button
                  key={shortid.generate()}
                  onClick={() => setContent(story.uuid, editMode)}
                  className={
                    currUUID === story.uuid ? classes.selectedListItem : undefined
                  }
                >
                  <ListItemText>{story.uuid}</ListItemText>
                </ListItem>
              ))}
              <ListItem button onClick={() => addStory()}>
                <AddIcon></AddIcon>
              </ListItem>
            </List>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box className={classes.content}><Form story={stories.find(e => e.uuid === uuid)} handleChange={handleChange} /></Box>
        </Box> */}
        {/* <Box className={classes.submits}>
          {selected !== undefined ? (
            editMode ? (
              <Button onClick={() => saveChanges()} className={classes.editBtns}>
                Save
              </Button>
            ) : (
              <Box>
                <Button
                  className={classes.duplicateBtn}
                  onClick={() => setIsDeleting(true)}
                >
                  Remove
                  <DeleteIcon />
                </Button>
                <Button
                  className={classes.duplicateBtn}
                  onClick={() => {
                    duplicateStory(selected);
                  }}
                >
                  Duplicate
                  <FileCopyIcon />
                </Button>
                <Button
                  className={classes.editBtns}
                  component={Link}
                  to={`${ROUTES.EDITOR}?storyId=${selected}`}
                >
                  GO TO EDITOR
                </Button>
                <Button
                  onClick={() => {
                    setEditMode(true);
                    setContent(selected, true);
                  }}
                  className={classes.editBtns}
                >
                  Edit Informations
                  <EditIcon />
                </Button>
              </Box>
            )
          ) : (
            <></>
          )}
        </Box> */}
        <AreYouSureDialog
          open={isDeleting}
          onCancel={() => setIsDeleting(false)}
          onConfirm={() => {
            setIsDeleting(false);
            executeDeleteStory(selectedId);
          }}
        />
      </div>
    </div>
  );
};

export default App;
