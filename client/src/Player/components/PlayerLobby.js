import React, { useState } from 'react';
import { Grid, Avatar, TextField, Badge } from '@material-ui/core';
import { Button, Typography, makeStyles } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import axios from '../../common/shared';
import { SERVER_URL } from '../../common/constants';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 60,
    marginBottom: 60,
  },
  playerAvatar: {
    width: '20vh',
    height: '20vh',
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

const PlayerLobby = ({ hasLoaded, onUnmount, saveChanges }) => {
  const [playerData, setData] = useState({});
  const { section, playerAvatar } = useStyles();

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

  const startGame = () => {
    saveChanges(playerData);
    onUnmount();
  };

  return (
    <>
      <Grid container justify="center" xs={12} className={section}>
        <Badge
          color="primary"
          overlap="circle"
          onClick={() => takePhoto(onChangePicture)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<PhotoCamera />}
        >
          <Avatar
            src={playerData.avatar}
            alt="Your profile image or avatar"
            className={playerAvatar}
          />
        </Badge>
      </Grid>
      <Grid container justify="space-around" xs={12} className={section}>
        <TextField
          variant="outlined"
          label="Your name"
          value={playerData.name}
          onChange={e => setData({ ...playerData, name: e.target.value })}
        />
      </Grid>
      <Grid container justify="center" xs={12} className={section}>
        <Button
          onClick={hasLoaded ? startGame : () => {}}
          size="large"
          variant="contained"
          color="primary"
        >
          {hasLoaded ? 'Start playing' : 'Loading...'}
        </Button>
      </Grid>
      <Grid container justify="center" xs={12} className={section}>
        <Typography variant="subtitle1">*All the fields are optional</Typography>
      </Grid>
    </>
  );
};

export default PlayerLobby;
