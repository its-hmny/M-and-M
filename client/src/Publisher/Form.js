import React from 'react';
import {
  makeStyles,
  FormControl,
  Checkbox,
  Radio,
  TextField,
  FormControlLabel,
  FormGroup,
  Typography,
  colors,
  Button,
} from '@material-ui/core';
import QRCode from 'qrcode.react';
import logo from '../assets/logo.png';
import GetAppIcon from '@material-ui/icons/GetApp';
import { CLIENT_URL } from '../common/constants';

import SaveButton from '../common/SaveButton';

const useStyles = makeStyles(theme => ({
  form: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
  formElements: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  boxes: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(6),
    },
  },
  saveButton: {
    textAlign: 'right',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    '& > *': {
      flex: '1 1 50%',
    },
  },
  qrcode: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& > :first-child': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  downloadButton: {},
}));

const Form = ({ story, handleChange }) => {
  const classes = useStyles();

  const handleChecks = (propName, value, isOn) => {
    handleChange(
      propName,
      isOn ? [...story[propName], value] : story[propName].filter(item => item !== value)
    );
  };

  const downloadQrCode = () => {
    // create SVG string from HTML
    const qrcode = document.getElementById('qrcode');
    const href = qrcode.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${story.title}-qrcode.png`;
    link.href = href;
    link.click();
  };

  return (
    <div className={classes.form}>
      <FormControl className={classes.formElements}>
        <TextField
          variant="filled"
          color="secondary"
          value={story.title}
          onChange={e => {
            handleChange('title', e.target.value);
          }}
          label={'Title'}
        />
      </FormControl>
      <FormControl className={classes.formElements}>
        <TextField
          fullWidth
          variant="filled"
          color="secondary"
          value={story.description}
          onChange={e => handleChange('description', e.target.value)}
          label="Description"
          placeholder="Write down some intriguing lines to persuade players to choose your story"
          multiline
          rows={5}
        />
      </FormControl>
      <div className={classes.detailContainer}>
        <div className={classes.details}>
          <FormControl variant="outlined" className={classes.formElements}>
            <FormGroup>
              <Typography>Who is this story suitable for?</Typography>
              <div className={classes.boxes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={(story.targets || []).includes('children')}
                      onChange={evt =>
                        handleChecks('targets', 'children', evt.target.checked)
                      }
                    />
                  }
                  label={<Typography variant="body2">Children</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={(story.targets || []).includes('teen')}
                      onChange={evt =>
                        handleChecks('targets', 'teen', evt.target.checked)
                      }
                    />
                  }
                  label={<Typography variant="body2">Teen</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={(story.targets || []).includes('adult')}
                      onChange={evt =>
                        handleChecks('targets', 'adult', evt.target.checked)
                      }
                    />
                  }
                  label={<Typography variant="body2">Young Adults</Typography>}
                />
              </div>
            </FormGroup>
          </FormControl>
          <FormControl variant="outlined" className={classes.formElements}>
            <FormGroup>
              <Typography>What game modes are available for this story?</Typography>
              <div className={classes.boxes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={(story.modes || []).includes('singleplayer')}
                      onChange={evt =>
                        handleChecks('modes', 'singleplayer', evt.target.checked)
                      }
                    />
                  }
                  label={<Typography variant="body2">Single Player</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={(story.modes || []).includes('multiplayer')}
                      onChange={evt =>
                        handleChecks('modes', 'multiplayer', evt.target.checked)
                      }
                    />
                  }
                  label={<Typography variant="body2">Multiplayer</Typography>}
                />
              </div>
            </FormGroup>
          </FormControl>
          <FormControl className={classes.formElements}>
            <Typography>
              Could your story be played by people with disabilities?
            </Typography>
            <div className={classes.boxes}>
              <FormControlLabel
                label="No"
                control={
                  <Radio
                    checked={!story.accessible}
                    onChange={() => handleChange('accessible', false)}
                  />
                }
              />
              <FormControlLabel
                label="Yes"
                control={
                  <Radio
                    checked={story.accessible}
                    onChange={() => handleChange('accessible', true)}
                  />
                }
              />
            </div>
          </FormControl>
        </div>
        <div className={classes.qrcode}>
          <QRCode
            id="qrcode"
            value={`${CLIENT_URL}/player?storyId=${story.uuid}`}
            renderAs="canvas"
            bgColor="transparent"
            fgColor={colors.orange[500]}
            size={256}
            imageSettings={{
              src: logo,
              x: null,
              y: null,
              height: 44,
              width: 44,
              excavate: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.downloadButton}
            startIcon={<GetAppIcon />}
            onClick={downloadQrCode}
          >
            Download
          </Button>
        </div>
      </div>
      <div className={classes.saveButton}>
        <SaveButton story={story} />
      </div>
    </div>
  );
};

export default Form;
