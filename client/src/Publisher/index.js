import React, { useEffect } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  FormControlLabel,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
// import DeleteAlert from './Alerts';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes';
import axios from '../common/shared';

const useStyles = makeStyles(theme => ({
  paperBox: {
    padding: 50,
    marginTop: '30vh',
    marginLeft: '30vw',
    marginRight: '30vw',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  buttonLink: {
    marginLeft: '2vw',
    marginRight: '2vw',
  },
  storyBrowserText: {
    textAlign: 'center',
    fontSize: 24,
  },
  storyBrowser: {
    margin: '5vw',

    height: '80vh',
    alignItems: 'center',
  },
  storyList: {
    height: '67vh',
  },
  content: {
    height: '67vh',
    margin: '10px',
  },
  storiesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {
    margin: '5px',
  },
  labelStyle: {},
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formElements: {
    margin: 10,
  },
  submits: {},
  duplicateBtn: {
    float: 'left',
    margin: 5,
  },
  editBtns: {
    float: 'right',
    margin: 5,
  },
  selectedListItem: {
    backgroundColor: '#e91e63',
  },
}));

//TODO add alert if wanting to exit without saving
const App = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [stories, setStories] = React.useState([]);
  const [currUUID, setCurrUUID] = React.useState(undefined);
  const [contentForm, setContentForm] = React.useState(<></>);
  const [currentDialog, setCurrentDialog] = React.useState(<></>);

  const classes = useStyles();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get(`stories/list`);
      const stories = res.data.payload;

      setStories(stories);
    };
    fetchStories();
  }, []);

  const handleChange = (key, value, uuid) => {
    let storyChange = stories.find(e => e.uuid === uuid);

    let index = stories.findIndex(e => e.uuid === uuid);
    let localStories = stories;

    storyChange[key] = value;

    localStories.splice(index, 1, storyChange);

    setStories(localStories);
    setContent(uuid, true);
  };
  //TODO api call
  const saveChanges = () => {
    setEditMode(false);
    setContent(currUUID, false);
    let storyToSend = stories.find(e => e.uuid === currUUID);
    console.log(storyToSend);
    axios.patch(`stories/${currUUID}`, storyToSend).then(values => {
      //Reload stories
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

  const duplicateStory = uuid => {
    const storyToSend = stories.find(e => e.uuid === currUUID);
    // delete storyToSend['uuid'];
    axios.put('stories/', storyToSend).then(values => {
      //Reload stories
      axios.get(`stories/list`).then(res => {
        const stories = res.data.payload;

        setStories(stories);
      });
    });
  };

  const closeDialog = () => {
    setCurrentDialog(<></>);
  };

  const deleteStory = uuid => {
    // setCurrentDialog(
    //   <DeleteAlert
    //     uuid={uuid}
    //     deleteFunction={executeDeleteStory}
    //     closeDialog={closeDialog}
    //   ></DeleteAlert>
    // );
  };

  const executeDeleteStory = uuid => {
    axios.delete(`stories/${uuid}`).then(res => {
      axios.get(`stories/list`).then(res => {
        const stories = res.data.payload;
        setCurrUUID(0);
        setContentForm(<></>);
        setStories(stories);
      });
    });
  };

  const setContent = (uuid, editMode) => {
    const story = stories.find(e => e.uuid === uuid);
    setCurrUUID(uuid);
    if (editMode) {
      setContentForm(
        <Box className={classes.form}>
          <FormControl className={classes.formElements}>
            <TextField
              value={story.title}
              onChange={e => {
                handleChange('title', e.target.value, uuid);
              }}
              label={'Title'}
            />
          </FormControl>
          <FormControl className={classes.formElements}>
            <TextField
              value={story.description}
              onChange={e => handleChange('description', e.target.value, uuid)}
              label={'Description'}
            />
          </FormControl>
          <FormControl className={classes.formElements}>
            <InputLabel className={classes.labelStyle}>Target</InputLabel>
            <Select
              value={story.target}
              onChange={e => handleChange('target', e.target.value, uuid)}
            >
              <MenuItem value={'KID'}>Kid</MenuItem>
              <MenuItem value={'TEEN'}>Teen</MenuItem>
              <MenuItem value={'ADULT'}>Adult</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formElements}>
            <InputLabel className={classes.labelStyle}>Gameplay</InputLabel>
            <Select
              value={story.gameplay}
              onChange={e => handleChange('gameplay', e.target.value, uuid)}
            >
              <MenuItem value={'SINGLE'}>Single</MenuItem>
              <MenuItem value={'GROUP'}>Group</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formElements}>
            <FormControlLabel
              label="Accessible"
              control={
                <Checkbox
                  checked={story.accessible}
                  onChange={e => handleChange('accessible', e.target.checked, uuid)}
                />
              }
            />
          </FormControl>
        </Box>
      );
    } else {
      setContentForm(
        <Box>
          <Typography className={classes.dataText}>
            <b>Title:</b> {story.title}
          </Typography>
          <Typography className={classes.dataText}>
            <b>Description:</b> {story.description}
          </Typography>
          <Typography className={classes.dataText}>
            <b>Target:</b> {story.target}
          </Typography>
          <Typography className={classes.dataText}>
            <b>Gameplay:</b> {story.gameplay}
          </Typography>
          <Typography className={classes.dataText}>
            <b>Accessible:</b> {story.accessible ? 'Yes' : 'No'}
          </Typography>
        </Box>
      );
    }
  };

  return (
    <>
      {currentDialog}
      <Paper className={classes.storyBrowser} elevation={1}>
        <Typography className={classes.storyBrowserText}>Story Browser</Typography>
        <Divider />
        <Box className={classes.storiesContainer}>
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
          <Box className={classes.content}>{contentForm}</Box>
        </Box>
        <Box className={classes.submits}>
          {currUUID !== undefined ? (
            editMode ? (
              <Button onClick={() => saveChanges()} className={classes.editBtns}>
                Save
              </Button>
            ) : (
              <Box>
                <Button
                  className={classes.duplicateBtn}
                  onClick={() => {
                    deleteStory(currUUID);
                  }}
                >
                  Remove
                  <DeleteIcon></DeleteIcon>
                </Button>
                <Button
                  className={classes.duplicateBtn}
                  onClick={() => {
                    duplicateStory(currUUID);
                  }}
                >
                  Duplicate
                  <FileCopyIcon></FileCopyIcon>
                </Button>
                <Button
                  className={classes.editBtns}
                  component={Link}
                  to={`${ROUTES.EDITOR}?storyId=${currUUID}`}
                >
                  GO TO EDITOR
                </Button>

                <Button
                  onClick={() => {
                    setEditMode(true);
                    setContent(currUUID, true);
                  }}
                  className={classes.editBtns}
                >
                  Edit Informations
                  <EditIcon></EditIcon>
                </Button>
              </Box>
            )
          ) : (
            <></>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default App;
