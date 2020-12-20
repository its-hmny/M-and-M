import React from 'react';
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
import TextFieldFragment from './TextFieldFragment';
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
  const {
    pathAlternative,
    valToChange,
    singleCorrectAnswer,
    selectPath,
    correctStory,
    wrongStory,
    data,
    dataName,
    correctLabel,
    wrongLabel,
    pointsPath,
  } = fragmentSpecificProps;
  const { story, getFromPath, setPathToValue } = useEditor();
  const [correctAnswerValue, setCorrectAnswerValue] = React.useState([]);

  //Additional field to modify objects or array
  path = pathAlternative ? path.concat(pathAlternative || []) : path;
  const answers = getFromPath(path || [])[valToChange];

  const selectCompletePath = (path || []).concat(selectPath);
  const correctSelectValue = getFromPath(selectCompletePath)[correctStory];
  const wrongSelectValue = getFromPath(selectCompletePath)[wrongStory];

  const PointsCompletePath = (path || []).concat(pointsPath);
  const correctPoints = getFromPath(PointsCompletePath)[correctStory];
  const wrongPoints = getFromPath(PointsCompletePath)[wrongStory];

  var items = [];
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
  React.useEffect(() => {
    if (singleCorrectAnswer) {
      answers.map((answer, i) =>
        answer.value === ANSWER_VALUE.CORRECT ? setCorrectAnswerValue(i) : null
      );
    }
  }, [singleCorrectAnswer, answers]);

  const addChoice = () => {
    setPathToValue(path || [], 'answers', [
      ...answers,
      { value: ANSWER_VALUE.WRONG, id: shortid.generate(), text: 'Risposta' },
    ]);
  };
  const deleteChoice = i => {
    answers.splice(i, 1);
    setPathToValue(path || [], 'answers', answers);
  };

  var cannotChooseCorrectAnswer = singleCorrectAnswer
    ? answers.filter(answer => answer.value === ANSWER_VALUE.CORRECT).length === 1
    : false;
  const name = shortid.generate();

  const checkSingleAnswer = (event, value, answerPath, truthValues) => {
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

  const setNumberField = (value, story) => {
    if ((value.length === 1 && value === '-') || value === '') {
      value = '0';
    }
    if (!isNaN(value)) {
      setPathToValue(PointsCompletePath || [], story, parseInt(value));
    }
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
          <MenuItem key={story.nodes.length} value="">
            {'\u00A0'}
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={'Correct answer points'}
        value={correctPoints}
        className={classNames.InspectorElement}
        onChange={event => setNumberField(event.target.value, correctStory)}
      />

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
          <MenuItem key={story.nodes.length} value="">
            {'\u00A0'}
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        label={'Wrong answer points'}
        value={wrongPoints}
        className={classNames.InspectorElement}
        onChange={event => setNumberField(event.target.value, wrongStory)}
      />
    </div>
  );
};

export default AnswerFragment;
