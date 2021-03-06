/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useMemo, useEffect } from 'react';
import { Checkbox } from './Choice';
import Button from './Button';

/** renders a multiple choice component: checkbox
 * PARTS:
 *  - Choice -> input checkbox;
 *  - Button (submit);
 *
 * STYLE SECTIONS:
 *  - Checkbox
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
    width: 100%;
  }
`;

const noop = () => {};

function MultiAnsChoices({
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
        .filter(answer => answer.value === ANSWER_VALUE.CORRECT)
        .map(answer => answer.id)
        .sort(),
    [answers]
  );

  const isCorrect = useMemo(() => {
    const correctLength = correctAnswers.length === selectedAnswers.length;
    const allCorrect = selectedAnswers
      .sort()
      .every((answerId, index) => answerId === correctAnswers[index]);
    return correctLength && allCorrect ? ANSWER_VALUE.CORRECT : ANSWER_VALUE.WRONG;
  }, [correctAnswers, selectedAnswers]);

  const handleSelected = event => {
    // updated selectedAnswers according to user input
    const { id } = event.target;
    setSelectedAnswers(
      event.target.checked
        ? [...selectedAnswers, id]
        : selectedAnswers.filter(answerId => answerId !== id)
    );
  };

  useEffect(() => {
    if (!withSubmit && correctAnswers.length === selectedAnswers.length) {
      onSubmit(
        isCorrect,
        answers.filter(answer => selectedAnswers.includes(answer.id))
      );
    }
  }, [withSubmit, onSubmit, isCorrect, correctAnswers, answers, selectedAnswers]);

  return (
    <div css={[base, style]}>
      <div>
        {answers.map(({ id, text }) => (
          <Checkbox
            key={id}
            id={id}
            name={name}
            label={text}
            selected={selectedAnswers.find(answerId => answerId === id)}
            onSelected={handleSelected}
            style={style && style.Checkbox}
          />
        ))}
      </div>

      {withSubmit && (
        <Button
          disabled={!(selectedAnswers.length > 0)}
          onClick={() =>
            onSubmit(
              isCorrect,
              answers.filter(answer => selectedAnswers.includes(answer.id))
            )
          }
          style={style && style.Button}
          text="Conferma"
        />
      )}
    </div>
  );
}
export default MultiAnsChoices;
