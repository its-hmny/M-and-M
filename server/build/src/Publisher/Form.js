import React from '../../web_modules/react.js';
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
} from '../../web_modules/@material-ui/core.js';
import QRCode from '../../web_modules/qrcode.react.js';
import logo from '../assets/logo.png.proxy.js';
import GetAppIcon from '../../web_modules/@material-ui/icons/GetApp.js';
import { CLIENT_URL } from '../common/constants.js';
import SaveButton from '../common/SaveButton.js';

const useStyles = makeStyles((theme) => ({
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
      isOn
        ? [...story[propName], value]
        : story[propName].filter((item) => item !== value),
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

  return React.createElement(
    'div',
    {
      className: classes.form,
    },
    React.createElement(
      FormControl,
      {
        className: classes.formElements,
      },
      React.createElement(TextField, {
        variant: 'filled',
        color: 'secondary',
        value: story.title,
        onChange: (e) => {
          handleChange('title', e.target.value);
        },
        label: 'Title',
      }),
    ),
    React.createElement(
      FormControl,
      {
        className: classes.formElements,
      },
      React.createElement(TextField, {
        fullWidth: true,
        variant: 'filled',
        color: 'secondary',
        value: story.description,
        onChange: (e) => handleChange('description', e.target.value),
        label: 'Description',
        placeholder:
          'Write down some intriguing lines to persuade players to choose your story',
        multiline: true,
        rows: 5,
      }),
    ),
    React.createElement(
      'div',
      {
        className: classes.detailContainer,
      },
      React.createElement(
        'div',
        {
          className: classes.details,
        },
        React.createElement(
          FormControl,
          {
            variant: 'outlined',
            className: classes.formElements,
          },
          React.createElement(
            FormGroup,
            null,
            React.createElement(
              Typography,
              null,
              'Who is this story suitable for?',
            ),
            React.createElement(
              'div',
              {
                className: classes.boxes,
              },
              React.createElement(FormControlLabel, {
                control: React.createElement(Checkbox, {
                  checked: (story.targets || []).includes('children'),
                  onChange: (evt) =>
                    handleChecks('targets', 'children', evt.target.checked),
                }),
                label: React.createElement(
                  Typography,
                  {
                    variant: 'body2',
                  },
                  'Children',
                ),
              }),
              React.createElement(FormControlLabel, {
                control: React.createElement(Checkbox, {
                  checked: (story.targets || []).includes('teen'),
                  onChange: (evt) =>
                    handleChecks('targets', 'teen', evt.target.checked),
                }),
                label: React.createElement(
                  Typography,
                  {
                    variant: 'body2',
                  },
                  'Teen',
                ),
              }),
              React.createElement(FormControlLabel, {
                control: React.createElement(Checkbox, {
                  checked: (story.targets || []).includes('adult'),
                  onChange: (evt) =>
                    handleChecks('targets', 'adult', evt.target.checked),
                }),
                label: React.createElement(
                  Typography,
                  {
                    variant: 'body2',
                  },
                  'Young Adults',
                ),
              }),
            ),
          ),
        ),
        React.createElement(
          FormControl,
          {
            variant: 'outlined',
            className: classes.formElements,
          },
          React.createElement(
            FormGroup,
            null,
            React.createElement(
              Typography,
              null,
              'What game modes are available for this story?',
            ),
            React.createElement(
              'div',
              {
                className: classes.boxes,
              },
              React.createElement(FormControlLabel, {
                control: React.createElement(Checkbox, {
                  checked: (story.modes || []).includes('singleplayer'),
                  onChange: (evt) =>
                    handleChecks('modes', 'singleplayer', evt.target.checked),
                }),
                label: React.createElement(
                  Typography,
                  {
                    variant: 'body2',
                  },
                  'Single Player',
                ),
              }),
              React.createElement(FormControlLabel, {
                control: React.createElement(Checkbox, {
                  checked: (story.modes || []).includes('multiplayer'),
                  onChange: (evt) =>
                    handleChecks('modes', 'multiplayer', evt.target.checked),
                }),
                label: React.createElement(
                  Typography,
                  {
                    variant: 'body2',
                  },
                  'Multiplayer',
                ),
              }),
              React.createElement(FormControlLabel, {
                control: React.createElement(Checkbox, {
                  checked: (story.modes || []).includes('teams'),
                  onChange: (evt) =>
                    handleChecks('modes', 'teams', evt.target.checked),
                }),
                label: React.createElement(
                  Typography,
                  {
                    variant: 'body2',
                  },
                  'Teams',
                ),
              }),
            ),
          ),
        ),
        React.createElement(
          FormControl,
          {
            className: classes.formElements,
          },
          React.createElement(
            Typography,
            null,
            'Could your story be played by people with disabilities?',
          ),
          React.createElement(
            'div',
            {
              className: classes.boxes,
            },
            React.createElement(FormControlLabel, {
              label: 'No',
              control: React.createElement(Radio, {
                checked: !story.accessible,
                onChange: () => handleChange('accessible', false),
              }),
            }),
            React.createElement(FormControlLabel, {
              label: 'Yes',
              control: React.createElement(Radio, {
                checked: story.accessible,
                onChange: () => handleChange('accessible', true),
              }),
            }),
          ),
        ),
      ),
      React.createElement(
        'div',
        {
          className: classes.qrcode,
        },
        React.createElement(QRCode, {
          id: 'qrcode',
          value: `${CLIENT_URL}/player?storyId=${story.uuid}`,
          renderAs: 'canvas',
          bgColor: 'transparent',
          fgColor: colors.orange[500],
          size: 256,
          imageSettings: {
            src: logo,
            x: null,
            y: null,
            height: 44,
            width: 44,
            excavate: true,
          },
        }),
        React.createElement(
          Button,
          {
            variant: 'contained',
            color: 'primary',
            className: classes.downloadButton,
            startIcon: React.createElement(GetAppIcon, null),
            onClick: downloadQrCode,
          },
          'Download QR',
        ),
      ),
    ),
    React.createElement(
      'div',
      {
        className: classes.saveButton,
      },
      React.createElement(SaveButton, {
        story: story,
      }),
    ),
  );
};

export default Form;
