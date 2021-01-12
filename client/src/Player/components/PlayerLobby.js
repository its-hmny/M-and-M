import React, { useState, useMemo } from 'react';
import {
  Container,
  Avatar,
  TextField,
  Badge,
  Button,
  IconButton,
  Typography,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';
import { PhotoCamera, PlayCircleFilledRounded } from '@material-ui/icons';

import axios from '../../common/shared';
import { SERVER_URL } from '../../common/constants';

const useStyles = makeStyles(theme => ({
  container: {
    boxSizing: 'border-box',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playerSection: {
    marginBottom: theme.spacing(5),
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerAvatar: {
    width: '20vh',
    height: '20vh',
  },
  badgeRoot: {
    marginBottom: theme.spacing(3),
  },
  badge: {
    height: 'auto',
    padding: 4,
    borderRadius: '50%',
  },
  camera: {
    fontSize: 18,
  },
  startingContainer: {
    alignSelf: 'stretch',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  whereToStartHead: {
    textAlign: 'center',
    maxWidth: '80%',
    marginBottom: theme.spacing(3),
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  startButton: {
    height: '90%',
    width: '90%',
  },
  startButtonLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playButton: {
    fontSize: 120,
    marginBottom: theme.spacing(2),
  },
}));

const takePhoto = onChangeHandler => {
  const link = document.createElement('input');
  document.body.appendChild(link);
  link.type = 'file';
  link.capture = 'user';
  link.accept = 'image/*';
  link.onchange = onChangeHandler;
  link.click();
  document.body.removeChild(link);
};

const PlayerLobby = ({ story, onStart, saveChanges }) => {
  const [playerData, setData] = useState({});
  const classes = useStyles();
  const initialNodes = useMemo(() => {
    if (story) {
      const initialNodes = story.nodes.filter(node => node.isInitial);
      return initialNodes.length > 0 ? initialNodes : [story.nodes[0]];
    }
  }, [story]);

  const onChangePicture = event => {
    const uploadedImg = event.target.files[0];
    const formData = new FormData();
    formData.append('file', uploadedImg);
    if (uploadedImg) {
      // Removes from server the previous avatar if exist
      if (playerData.avatar) {
        const resourceId = playerData.avatar.split('/').slice(-1);
        axios.delete(`resources/${resourceId}`).catch(err => console.warn(err));
      }
      // Sends the new one to the server
      axios
        .put('resources/', formData, {
          headers: { 'Content-Type': uploadedImg.type },
        })
        .then(res =>
          setData({ ...playerData, avatar: `${SERVER_URL}/resources/${res.data.uuid}` })
        )
        .catch(err => console.warn(err));
    }
  };

  const startGame = node => {
    saveChanges(playerData);
    onStart(node);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.playerSection}>
        <Badge
          classes={{ root: classes.badgeRoot, badge: classes.badge }}
          color="primary"
          overlap="circle"
          onClick={() => takePhoto(onChangePicture)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<PhotoCamera className={classes.camera} />}
        >
          <Avatar
            src={playerData.avatar}
            alt="Your profile image or avatar"
            className={classes.playerAvatar}
          />
        </Badge>
        <TextField
          variant="outlined"
          label="Your name"
          value={playerData.name}
          onChange={e => setData({ ...playerData, name: e.target.value })}
        />
      </div>
      <div className={classes.startingContainer}>
        {!story ? (
          <CircularProgress />
        ) : initialNodes.length > 1 ? (
          <>
            <Typography variant="h6" className={classes.whereToStartHead}>
              Where do you want to start from?
            </Typography>
            <div className={classes.buttons}>
              {initialNodes.map(node => (
                <Button
                  className={classes.button}
                  onClick={() => startGame(node)}
                  large
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {node.name}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <Button
            classes={{ root: classes.startButton, label: classes.startButtonLabel }}
            onClick={() => startGame(initialNodes[0])}
            variant="contained"
            color="primary"
          >
            <PlayCircleFilledRounded className={classes.playButton} />
            <Typography variant="h3">Start</Typography>
          </Button>
        )}
      </div>
    </Container>
  );
};

export default PlayerLobby;
