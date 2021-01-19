import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Button,
  IconButton,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';
import CheckboxFragment from './CheckboxFragment';
import RadioFragment from './RadioFragment';
import shortid from 'shortid';
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
const ANSWER_VALUE = {
  CORRECT: '[CORRECT]',
  WRONG: '[WRONG]',
};
const AnswerFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { divider, FormSelect, deleteStyle } = useStyles();
  const { story, getFromPath, setPathToValue } = useEditor();
  const {
    valToChange,
    singleCorrectAnswer,
    selectPath,
    correctStory,
    wrongStory,
    data,
    dataName,
    correctLabel,
    wrongLabel,
  } = fragmentSpecificProps;
  const [correctAnswerValue, setCorrectAnswerValue] = useState([]);

  //Additional field to modify objects or array
  path = path || [];
  const answers = getFromPath(path)[valToChange];
  const pointsPath = path.concat(valToChange);
  const selectCompletePath = path.concat(selectPath);
  const correctSelectValue = getFromPath(selectCompletePath)[correctStory];
  const wrongSelectValue = getFromPath(selectCompletePath)[wrongStory];

  const items = [];
  const menuItems = story.nodes.map(node => {
    if (!items.includes(node[data])) {
      items.push(node[data]);
      return (
        <MenuItem key={node[data]} value={node[data]}>
          {node[dataName]}
        </MenuItem>
      );
    }

    return null;
  });

  //Initialize correctAnswerValue if singleCorrectAnswer == true only the first time
  useEffect(() => {
    if (singleCorrectAnswer) {
      answers.map((answer, i) =>
        answer.value === ANSWER_VALUE.CORRECT ? setCorrectAnswerValue(i) : null
      );
    }
  }, [singleCorrectAnswer, answers]);

  const addChoice = () => {
    setPathToValue(path, 'answers', [
      ...answers,
      { value: ANSWER_VALUE.WRONG, id: shortid.generate(), text: 'Risposta' },
    ]);
  };
  const deleteChoice = i => {
    answers.splice(i, 1);
    setPathToValue(path, 'answers', answers);
  };

  const cannotChooseCorrectAnswer = singleCorrectAnswer
    ? answers.filter(answer => answer.value === ANSWER_VALUE.CORRECT).length === 1
    : false;
  const name = shortid.generate();

  const checkSingleAnswer = (event, value, answerPath, truthValues) => {
    const oldAnswerPath = [...answerPath.slice(0, -1), correctAnswerValue];
    setPathToValue(
      oldAnswerPath,
      'value',
      truthValues !== undefined ? truthValues[1] : false
    );
    setCorrectAnswerValue(value);
    setPathToValue(
      answerPath,
      'value',
      event.target.checked
        ? truthValues !== undefined
          ? truthValues[0]
          : true
        : truthValues !== undefined
        ? truthValues[1]
        : false
    );
  };

  const setNumberField = (value, index) => {
    const parsed = parseInt(value);

    const newVal = answers[index];
    if (!isNaN(parsed)) {
      newVal.points = parsed;
    } else if (value === '' || value === '-') {
      newVal.points = value;
    } else {
      newVal.points = 0;
    }

    setPathToValue(pointsPath, index, newVal);
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
      {answers.map((answer, i) => {
        return (
          <div key={`answer-${i}`}>
            <Divider className={divider} />
            <div style={{ display: 'flex', alignItems: 'bottom' }}>
              <TextField
                value={answers[i].text}
                className={classNames.InspectorElement}
                label={'Answer text'}
                onChange={event =>
                  setPathToValue(
                    path.concat('answers', i) || [],
                    'text',
                    event.target.value
                  )
                }
              />
              <IconButton onClick={() => deleteChoice(i)}>
                <DeleteIcon className={deleteStyle}></DeleteIcon>
              </IconButton>
            </div>
            <TextField
              label={'Answer points'}
              value={answer.points}
              className={classNames.InspectorElement}
              onChange={event => setNumberField(event.target.value, i)}
            />
            {singleCorrectAnswer ? (
              <RadioFragment
                classNames={classNames}
                path={path}
                fragmentSpecificProps={{
                  label: 'Correct Answer',
                  pathAlternative: ['answers', i],
                  valToChange: 'value',
                  onChange: checkSingleAnswer,
                  truthValues: [ANSWER_VALUE.CORRECT, ANSWER_VALUE.WRONG],
                  name: name,
                  correctAnswerValue: correctAnswerValue,
                  index: i,
                }}
              />
            ) : (
              <CheckboxFragment
                classNames={classNames}
                path={path}
                fragmentSpecificProps={{
                  label: 'Correct Answer',
                  pathAlternative: ['answers', i],
                  valToChange: 'value',
                  truthValues: [ANSWER_VALUE.CORRECT, ANSWER_VALUE.WRONG],
                  disabled:
                    answer.value === ANSWER_VALUE.CORRECT
                      ? false
                      : cannotChooseCorrectAnswer,
                }}
              />
            )}
          </div>
        );
      })}
      <Divider />
      <FormControl
        className={`${classNames.FormControl} ${FormSelect} ${classNames.InspectorElement}`}
      >
        <InputLabel>{correctLabel}</InputLabel>
        <Select
          value={correctSelectValue}
          onChange={event =>
            setPathToValue(selectCompletePath, correctStory, event.target.value)
          }
        >
          {menuItems}
        </Select>
      </FormControl>

      <FormControl
        className={`${classNames.FormControl} ${FormSelect} ${classNames.InspectorElement}`}
      >
        <InputLabel>{wrongLabel}</InputLabel>
        <Select
          value={wrongSelectValue}
          onChange={event =>
            setPathToValue(selectCompletePath, wrongStory, event.target.value)
          }
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
};

export default AnswerFragment;
