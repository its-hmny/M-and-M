import React from '../../../../web_modules/react.js';
import {
  makeStyles,
  Button,
  IconButton,
  Divider,
  TextField,
} from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';
import DeleteIcon from '../../../../web_modules/@material-ui/icons/Delete.js';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
  },
  inputRoot: {
    paddingRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  FormSelect: {
    marginTop: theme.spacing(2),
  },
  deleteStyle: {
    marginTop: theme.spacing(1),
  },
}));

const AnswerFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const classes = useStyles();

  const { getFromPath, setPathToValue } = useEditor();

  const { pathAlternative, valToChange } = fragmentSpecificProps; //Additional field to modify objects or array

  path = pathAlternative ? path.concat(pathAlternative) : path || [];

  const messages = getFromPath(path)[valToChange];

  const thresholdPath = path.concat(valToChange);

  const addChoice = () => {
    setPathToValue(path, 'messages', [
      ...messages,
      {
        threshold: 0,
        text: '',
      },
    ]);
  };

  const deleteChoice = i => {
    messages.splice(i, 1);
    setPathToValue(path, 'messages', messages);
  };

  const setNumberField = (value, index) => {
    const parsed = parseInt(value);

    const newVal = messages[index];

    if (!isNaN(parsed)) {
      newVal.threshold = parsed;
    } else if (value === '' || value === '-') {
      newVal.threshold = value;
    } else {
      newVal.threshold = 0;
    }

    setPathToValue(thresholdPath, index, newVal);
  };

  return React.createElement(
    'div',
    {
      className: classNames.InspectorElement,
    },
    React.createElement(
      Button,
      {
        color: 'primary',
        variant: 'contained',
        onClick: addChoice,
        className: classNames.InspectorElement,
      },
      'Add'
    ),
    messages.map((message, i) => {
      return React.createElement(
        'div',
        {
          key: `message-${i}`,
        },
        React.createElement(Divider, {
          className: classes.divider,
        }),
        React.createElement(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'bottom',
            },
          },
          React.createElement(TextField, {
            value: message.text,
            className: classNames.InspectorElement,
            label: 'Message',
            onChange: event =>
              setPathToValue(
                path.concat('messages', i) || [],
                'text',
                event.target.value
              ),
          }),
          React.createElement(TextField, {
            label: 'Minimum points',
            value: message.threshold,
            className: classNames.InspectorElement,
            onChange: event => setNumberField(event.target.value, i),
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            IconButton,
            {
              onClick: () => deleteChoice(i),
            },
            React.createElement(DeleteIcon, {
              className: classes.deleteStyle,
            })
          )
        )
      );
    })
  );
};

export default AnswerFragment;
