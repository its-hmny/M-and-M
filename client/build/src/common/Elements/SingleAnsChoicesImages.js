/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import { useState, useMemo, useEffect } from '../../../web_modules/react.js';
import { Radio } from './Choice.js';
import Button from './Button.js';
/** renders a single choice component:
 * PARTS:
 *  - Choice -> input radio;
 *  - Button (submit);
 *
 * STYLE SECTIONS:
 *  - Radio
 *  - Button
 */

export const ANSWER_VALUE = {
  CORRECT: '[CORRECT]',
  WRONG: '[WRONG]',
};

const base = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5px;
  > div {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: left;
    flex-wrap: wrap;
    width: 100%;
  }
  .ImageDiv {
    width: 50%;
    height: 50%;
  }
`;

const noop = () => {};

function SingleAnsChoicesImages({
  name,
  answers,
  withSubmit,
  style,
  onSubmit = noop,
  initialValue = null,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(initialValue); //let's only work with IDs

  const correctAnswer = useMemo(
    () =>
      answers
        .filter((answer) => answer.value === ANSWER_VALUE.CORRECT)
        .map((answer) => answer.id)
        .sort(),
    [answers],
  );

  const isCorrect = useMemo(() => {
    // if an answer is selected AND is correct, return correct
    // Uses == instead === because for some reason type(selectedAnswer) != type(correctAnswer)
    // so a conversion is needed
    return selectedAnswer && selectedAnswer == correctAnswer[0]
      ? ANSWER_VALUE.CORRECT
      : ANSWER_VALUE.WRONG;
  }, [correctAnswer, selectedAnswer]);

  const handleSelected = (event) => {
    // since it's radio button, selected answer is only one.
    const { id } = event.target;

    setSelectedAnswer(id);
  };

  useEffect(() => {
    if (!withSubmit && selectedAnswer) {
      onSubmit(isCorrect, [
        answers.find((answer) => answer.id === selectedAnswer),
      ]);
    }
  }, [withSubmit, onSubmit, isCorrect, answers, selectedAnswer]);
  return jsx(
    'div',
    {
      css: [base, style],
      style: style['Root'],
    },
    jsx(
      'div',
      null,
      answers.map(({ id, imgURL, alt, text }) =>
        jsx(
          'div',
          {
            key: id,
            className: 'ImageDiv',
          },
          jsx('img', {
            src: imgURL,
            style: base && style['Image'],
            alt: alt || 'Alt',
          }),
          jsx(Radio, {
            id: id,
            name: name,
            label: text,
            selected: id === selectedAnswer,
            onSelected: handleSelected,
            style: style && style['Radio'],
          }),
        ),
      ),
    ),
    withSubmit &&
      jsx(Button, {
        disabled: selectedAnswer === null,
        onClick: () =>
          onSubmit(isCorrect, [
            answers.find((answer) => answer.id === selectedAnswer),
          ]),
        style: style && style.Button,
        text: 'Conferma',
      }),
  );
}

export default SingleAnsChoicesImages;
