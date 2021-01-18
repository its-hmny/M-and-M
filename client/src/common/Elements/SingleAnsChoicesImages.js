/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useMemo, useEffect } from 'react';
import { Radio } from './Choice';
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
    grid-gap: 5px;
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

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  img {
    width: 100%;
  }

  [type='radio']:checked ~ span {
    display: block;
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
  const [selectedAnswer, setSelectedAnswer] = useState(initialValue);

  //let's only work with IDs
  const correctAnswer = useMemo(
    () =>
      answers
        .filter(answer => answer.value === ANSWER_VALUE.CORRECT)
        .map(answer => answer.id)
        .sort(),
    [answers]
  );

  const isCorrect = useMemo(() => {
    // if an answer is selected AND is correct, return correct
    // Uses == instead === because for some reason type(selectedAnswer) != type(correctAnswer)
    // so a conversion is needed

    return selectedAnswer && selectedAnswer === correctAnswer[0]
      ? ANSWER_VALUE.CORRECT
      : ANSWER_VALUE.WRONG;
  }, [correctAnswer, selectedAnswer]);

  const handleSelected = event => {
    // since it's radio button, selected answer is only one.
    const { id } = event.target;
    setSelectedAnswer(id);
  };

  useEffect(() => {
    if (!withSubmit && selectedAnswer) {
      onSubmit(isCorrect, [answers.find(answer => answer.id === selectedAnswer)]);
    }
  }, [withSubmit, onSubmit, isCorrect, answers, selectedAnswer]);

  return (
    <div css={[base, style]} style={style['Root']}>
      <div>
        {answers.map(({ id, imgURL, alt }) => (
          <label key={id} css={labelImg}>
            <input
              type="radio"
              id={id}
              name={name}
              checked={id === selectedAnswer}
              onChange={handleSelected}
            />
            <img src={imgURL} style={base && style['Image']} alt={alt || 'Alt'} />
            <span></span>
          </label>
        ))}
      </div>

      {withSubmit && (
        <Button
          disabled={selectedAnswer === null}
          onClick={() =>
            onSubmit(isCorrect, [answers.find(answer => answer.id === selectedAnswer)])
          }
          style={style && style.Button}
          text="Conferma"
        />
      )}
    </div>
  );
}
export default SingleAnsChoicesImages;
