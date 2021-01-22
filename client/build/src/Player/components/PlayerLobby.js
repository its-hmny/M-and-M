import React, { useState, useMemo } from '../../../web_modules/react.js';
import {
  Container,
  Avatar,
  TextField,
  Badge,
  Button,
  Fab,
  Typography,
  CircularProgress,
  makeStyles,
} from '../../../web_modules/@material-ui/core.js';
import {
  PhotoCamera,
  PlayCircleFilledRounded,
} from '../../../web_modules/@material-ui/icons.js';
import axios from '../../common/shared.js';
import { SERVER_URL } from '../../common/constants.js';

const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: 'border-box',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerSection: {
    marginBottom: theme.spacing(4),
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
    marginBottom: theme.spacing(4),
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
    width: '60%',
  },
  playIcon: {
    marginRight: theme.spacing(1),
  },
}));

const takePhoto = (onChangeHandler) => {
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
      const initialNodes = story.nodes.filter((node) => node.isInitial);

      return initialNodes.length > 0 ? initialNodes : [story.nodes[0]];
    }
  }, [story]);

  const onChangePicture = (event) => {
    const uploadedImg = event.target.files[0];

    const formData = new FormData();

    formData.append('file', uploadedImg);

    if (uploadedImg) {
      // Removes from server the previous avatar if exist
      if (playerData.avatar) {
        const resourceId = playerData.avatar.split('/').slice(-1);

        axios
          .delete(`resources/${resourceId}`)
          .catch((err) => console.warn(err));
      } // Sends the new one to the server

      axios
        .put('resources/', formData, {
          headers: {
            'Content-Type': uploadedImg.type,
          },
        })
        .then((res) =>
          setData({
            ...playerData,
            avatar: `${SERVER_URL}/resources/${res.data.uuid}`,
          }),
        )
        .catch((err) => console.warn(err));
    }
  };

  const startGame = (node) => {
    saveChanges(playerData);
    onStart(node);
  };

  return React.createElement(
    Container,
    {
      className: classes.container,
    },
    React.createElement(
      'div',
      {
        className: classes.playerSection,
      },
      React.createElement(
        Badge,
        {
          classes: {
            root: classes.badgeRoot,
            badge: classes.badge,
          },
          color: 'primary',
          overlap: 'circle',
          onClick: () => takePhoto(onChangePicture),
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          badgeContent: React.createElement(PhotoCamera, {
            className: classes.camera,
          }),
        },
        React.createElement(Avatar, {
          src: playerData.avatar,
          alt: 'Your profile image or avatar',
          className: classes.playerAvatar,
        }),
      ),
      React.createElement(TextField, {
        variant: 'outlined',
        label: 'Your name',
        value: playerData.name,
        onChange: (e) => setData({ ...playerData, name: e.target.value }),
      }),
    ),
    !story
      ? React.createElement(CircularProgress, null)
      : initialNodes.length > 1
      ? React.createElement(
          'div',
          {
            className: classes.startingContainer,
          },
          React.createElement(
            Typography,
            {
              variant: 'h6',
              className: classes.whereToStartHead,
            },
            'Where do you want to start from?',
          ),
          React.createElement(
            'div',
            {
              className: classes.buttons,
            },
            initialNodes.map((node) =>
              React.createElement(
                Button,
                {
                  className: classes.button,
                  onClick: () => startGame(node),
                  large: true,
                  variant: 'contained',
                  color: 'primary',
                  fullWidth: true,
                },
                node.name,
              ),
            ),
          ),
        )
      : React.createElement(
          Fab,
          {
            variant: 'extended',
            color: 'primary',
            className: classes.startButton,
            onClick: () => startGame(initialNodes[0]),
          },
          React.createElement(PlayCircleFilledRounded, {
            className: classes.playIcon,
          }),
          'Start',
        ),
  );
};

export default PlayerLobby;
