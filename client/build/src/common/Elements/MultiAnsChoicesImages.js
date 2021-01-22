/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import { useState, useMemo, useEffect } from '../../../web_modules/react.js';
import { Checkbox } from './Choice.js';
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
    height: 40%;
  }
`;

const noop = () => {};

function MultiAnsChoicesImages({
  name,
  answers,
  withSubmit,
  style,
  onSubmit = noop,
  initialValue = [],
}) {
  const [selectedAnswers, setSelectedAnswers] = useState(initialValue);

  const correctAnswers = useMemo(
    () =>
      answers
        .filter((answer) => answer.value === ANSWER_VALUE.CORRECT)
        .map((answer) => answer.id)
        .sort(),
    [answers],
  );

  const isCorrect = useMemo(() => {
    const correctLength = correctAnswers.length === selectedAnswers.length;

    const allCorrect = selectedAnswers
      .sort()
      .every((answerId, index) => answerId === correctAnswers[index]);

    console.log(correctAnswers);
    console.log(allCorrect);
    return correctLength && allCorrect
      ? ANSWER_VALUE.CORRECT
      : ANSWER_VALUE.WRONG;
  }, [correctAnswers, selectedAnswers]);

  const handleSelected = (event) => {
    // updated selectedAnswers according to user input
    const { id } = event.target;

    setSelectedAnswers(
      event.target.checked
        ? [...selectedAnswers, id]
        : selectedAnswers.filter((answerId) => answerId !== id),
    );
  };

  useEffect(() => {
    if (!withSubmit && correctAnswers.length === selectedAnswers.length) {
      onSubmit(
        isCorrect,
        answers.filter((answer) => selectedAnswers.includes(answer.id)),
      );
    }
  }, [
    withSubmit,
    onSubmit,
    isCorrect,
    correctAnswers,
    answers,
    selectedAnswers,
  ]);
  return jsx(
    'div',
    {
      css: [base, style],
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
            alt: alt || 'alt',
          }),
          jsx(Checkbox, {
            id: id,
            name: name,
            label: text,
            selected: selectedAnswers.find((answerId) => answerId === id),
            onSelected: handleSelected,
            style: style && style['Checkbox'],
          }),
        ),
      ),
    ),
    withSubmit &&
      jsx(Button, {
        disabled: !(selectedAnswers.length > 0),
        onClick: () =>
          onSubmit(
            isCorrect,
            answers.filter((answer) => selectedAnswers.includes(answer.id)),
          ),
        style: style && style.Button,
        text: 'Conferma',
      }),
  );
}

export default MultiAnsChoicesImages;
