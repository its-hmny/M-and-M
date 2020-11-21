import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { useEditor } from '../../context/EditorContext';
import TextFieldFragment from './TextFieldFragment';
import CheckboxboxFragment from './CheckboxFragment';
import RadioFragment from './RadioFragment';
import shortid from 'shortid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '25ch',
  },
  inputRoot: {
    paddingRight: theme.spacing(2),
  },
}));
const ANSWER_VALUE = {
  CORRECT: '[CORRECT]',
  WRONG: '[WRONG]',
};
const AnswerFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const { root, inputRoot } = useStyles();
  const { pathAlternative, valToChange, singleCorrectAnswer } = fragmentSpecificProps;
  const { getFromPath, setPathToValue } = useEditor();
  const [correctAnswerValue, setCorrectAnswerValue] = React.useState([]);
  //Additional field to modify objects or array
  path = pathAlternative ? path.concat(pathAlternative || []) : path;
  const answers = getFromPath(path || [])[valToChange];
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

  return (
    <div>
      {answers.map((answer, i) => {
        return (
          <div>
            <TextFieldFragment
              classNames={classNames}
              path={path}
              fragmentSpecificProps={{
                pathAlternative: ['answers', i],
                valToChange: 'text',
                label: 'text',
              }}
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
              <CheckboxboxFragment
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

            <Button onClick={() => deleteChoice(i)}>
              <DeleteIcon></DeleteIcon>
            </Button>
          </div>
        );
      })}
      <Button
        color="primary"
        variant="contained"
        onClick={addChoice}
        className={classNames.InspectorElement}
      >
        Add
      </Button>
    </div>
  );
};

export default AnswerFragment;
