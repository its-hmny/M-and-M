/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useMemo, useEffect } from 'react';
import Button from './Button';

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
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
`;

const labelImg = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #000;

  span {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #f00;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  img {
    width: 100%;
  }

  [type='checkbox']:checked ~ span {
    display: block;
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
        {answers.map(({ id, imgURL, alt }) => (
          <label key={id} css={labelImg}>
            <input
              type="checkbox"
              id={id}
              name={name}
              selected={selectedAnswers.find(answerId => answerId === id)}
              onChange={handleSelected}
            />
            <img src={imgURL} alt={alt || 'Alt'} />
            <span></span>
          </label>
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
export default MultiAnsChoicesImages;
