import React from 'react';
import { makeStyles, Button, IconButton, Divider, TextField } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';
import DeleteIcon from '@material-ui/icons/Delete';

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
  const { pathAlternative, valToChange } = fragmentSpecificProps;

  //Additional field to modify objects or array
  path = pathAlternative ? path.concat(pathAlternative || []) : path;
  const messages = getFromPath(path || [])[valToChange];
  const thresholdPath = path.concat(valToChange) || [];

  const addChoice = () => {
    setPathToValue(path || [], 'messages', [...messages, { threshold: 0, text: '' }]);
  };
  const deleteChoice = i => {
    messages.splice(i, 1);
    setPathToValue(path || [], 'messages', messages);
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

  return (
    <div className={classNames.InspectorElement}>
      <Button
        color="primary"
        variant="contained"
        onClick={addChoice}
        className={classNames.InspectorElement}
      >
        Add
      </Button>
      {messages.map((message, i) => {
        return (
          <div key={`message-${i}`}>
            <Divider className={classes.divider} />
            <div style={{ display: 'flex', alignItems: 'bottom' }}>
              <TextField
                value={message.text}
                className={classNames.InspectorElement}
                label="Message"
                onChange={event =>
                  setPathToValue(
                    path.concat('messages', i) || [],
                    'text',
                    event.target.value
                  )
                }
              />
              <TextField
                label="Minimum points"
                value={message.threshold}
                className={classNames.InspectorElement}
                onChange={event => setNumberField(event.target.value, i)}
              />
            </div>
            <div>
              <IconButton onClick={() => deleteChoice(i)}>
                <DeleteIcon className={classes.deleteStyle}></DeleteIcon>
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerFragment;
