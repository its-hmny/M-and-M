import React from '../../../../web_modules/react.js';
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
} from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';
import CheckboxFragment from './CheckboxFragment.js';
import RadioFragment from './RadioFragment.js';
import shortid from '../../../../web_modules/shortid.js';
import DeleteIcon from '../../../../web_modules/@material-ui/icons/Delete.js';

const useStyles = makeStyles((theme) => ({
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
    } = fragmentSpecificProps;

    const { story, getFromPath, setPathToValue } = useEditor();

    const [correctAnswerValue, setCorrectAnswerValue] = React.useState([]); //Additional field to modify objects or array

    path = pathAlternative ? path.concat(pathAlternative || []) : path;

    const answers = getFromPath(path || [])[valToChange];

    const pointsPath = path.concat(valToChange) || [];

    const selectCompletePath = (path || []).concat(selectPath);

    const correctSelectValue = getFromPath(selectCompletePath)[correctStory];

    const wrongSelectValue = getFromPath(selectCompletePath)[wrongStory];

    var items = [];

    const menuItems = story.nodes.map((node) => {
        if (!items.includes(node[data])) {
            items.push(node[data]);
            return React.createElement(
                MenuItem,
                {
                    key: node[data],
                    value: node[data],
                },
                node[dataName],
            );
        }

        return null;
    }); //Initialize correctAnswerValue if singleCorrectAnswer == true only the first time

    React.useEffect(() => {
        if (singleCorrectAnswer) {
            answers.map((answer, i) =>
                answer.value === ANSWER_VALUE.CORRECT
                    ? setCorrectAnswerValue(i)
                    : null,
            );
        }
    }, [singleCorrectAnswer, answers]);

    const addChoice = () => {
        setPathToValue(path || [], 'answers', [
            ...answers,
            {
                value: ANSWER_VALUE.WRONG,
                id: shortid.generate(),
                text: 'Risposta',
            },
        ]);
    };

    const deleteChoice = (i) => {
        answers.splice(i, 1);
        setPathToValue(path || [], 'answers', answers);
    };

    var cannotChooseCorrectAnswer = singleCorrectAnswer
        ? answers.filter((answer) => answer.value === ANSWER_VALUE.CORRECT)
              .length === 1
        : false;

    const name = shortid.generate();

    const checkSingleAnswer = (event, value, answerPath, truthValues) => {
        const oldAnswerPath = [...answerPath.slice(0, -1), correctAnswerValue];

        setPathToValue(
            oldAnswerPath,
            'value',
            truthValues !== undefined ? truthValues[1] : false,
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
                : false,
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
            'Add',
        ),
        answers.map((answer, i) => {
            return React.createElement(
                'div',
                {
                    key: `answer-${i}`,
                },
                React.createElement(Divider, {
                    className: divider,
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
                        value: answers[i].text,
                        className: classNames.InspectorElement,
                        label: 'Answer text',
                        onChange: (event) =>
                            setPathToValue(
                                path.concat('answers', i) || [],
                                'text',
                                event.target.value,
                            ),
                    }),
                    React.createElement(
                        IconButton,
                        {
                            onClick: () => deleteChoice(i),
                        },
                        React.createElement(DeleteIcon, {
                            className: deleteStyle,
                        }),
                    ),
                ),
                React.createElement(TextField, {
                    label: 'Answer points',
                    value: answer.points,
                    className: classNames.InspectorElement,
                    onChange: (event) => setNumberField(event.target.value, i),
                }),
                singleCorrectAnswer
                    ? React.createElement(RadioFragment, {
                          classNames: classNames,
                          path: path,
                          fragmentSpecificProps: {
                              label: 'Correct Answer',
                              pathAlternative: ['answers', i],
                              valToChange: 'value',
                              onChange: checkSingleAnswer,
                              truthValues: [
                                  ANSWER_VALUE.CORRECT,
                                  ANSWER_VALUE.WRONG,
                              ],
                              name: name,
                              correctAnswerValue: correctAnswerValue,
                              index: i,
                          },
                      })
                    : React.createElement(CheckboxFragment, {
                          classNames: classNames,
                          path: path,
                          fragmentSpecificProps: {
                              label: 'Correct Answer',
                              pathAlternative: ['answers', i],
                              valToChange: 'value',
                              truthValues: [
                                  ANSWER_VALUE.CORRECT,
                                  ANSWER_VALUE.WRONG,
                              ],
                              disabled:
                                  answer.value === ANSWER_VALUE.CORRECT
                                      ? false
                                      : cannotChooseCorrectAnswer,
                          },
                      }),
            );
        }),
        React.createElement(Divider, null),
        React.createElement(
            FormControl,
            {
                className: `${classNames.FormControl} ${FormSelect} ${classNames.InspectorElement}`,
            },
            React.createElement(InputLabel, null, correctLabel),
            React.createElement(
                Select,
                {
                    value: correctSelectValue,
                    onChange: (event) =>
                        setPathToValue(
                            selectCompletePath,
                            correctStory,
                            event.target.value,
                        ),
                },
                menuItems,
                React.createElement(
                    MenuItem,
                    {
                        key: story.nodes.length,
                        value: '',
                    },
                    '\u00A0',
                ),
            ),
        ),
        React.createElement(
            FormControl,
            {
                className: `${classNames.FormControl} ${FormSelect} ${classNames.InspectorElement}`,
            },
            React.createElement(InputLabel, null, wrongLabel),
            React.createElement(
                Select,
                {
                    value: wrongSelectValue,
                    onChange: (event) =>
                        setPathToValue(
                            selectCompletePath,
                            wrongStory,
                            event.target.value,
                        ),
                },
                menuItems,
                React.createElement(
                    MenuItem,
                    {
                        key: story.nodes.length,
                        value: '',
                    },
                    '\u00A0',
                ),
            ),
        ),
    );
};

export default AnswerFragment;
