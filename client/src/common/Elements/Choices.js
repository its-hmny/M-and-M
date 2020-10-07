/** @jsx jsx */
// i get it, this is trash. maybe make a
// directories file from which we pull out what we need? this sounds like a mattia problem :)
import { css, jsx } from '@emotion/core';
import { useState, useMemo, useEffect } from 'react';
import { Checkbox, Radio } from './Choice';
import Button from './Button';
import { ANSWER_VALUE } from '../../Player/constants';

/** renders a multiple choice component: if there is only
 * one correct answer radiobutton will be used, otherwise checkbox
 * PARTS:
 *  - Choice -> input radio | input checkbox;
 *  - Button (submit);
 *
 * STYLE SECTIONS:
 *  - Radio
 *  - Checkbox
 *  - Button
 */

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

const noop = () => { };

function Choices({ name, answers, withSubmit, style, onSubmit = noop }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const correctAnswers = useMemo(
    () =>
      answers
        .filter(answer => answer.value === ANSWER_VALUE.CORRECT)
        .map(answer => answer.id)
        .sort(),
    [answers]
  );

  const Component = useMemo(
    () => (answers.reduce((count, { value }) => count + (value === ANSWER_VALUE.CORRECT), 0) > 1 ? Checkbox : Radio),
    [answers]
  );

  const isCorrect = useMemo(() => {
    const correctLength = correctAnswers.length === selectedAnswers.length;
    const allCorrect = selectedAnswers.sort().every((answerId, index) => answerId === correctAnswers[index]);
    return correctLength && allCorrect ? ANSWER_VALUE.CORRECT : ANSWER_VALUE.WRONG;
  }, [correctAnswers, selectedAnswers]);

  const handleSelected = event => {
    // if it's radio button, selected answer is only one.
    // Otherwise, update selectedAnswers accordingly
    const { type, id } = event.target;

    if (type === 'radio') {
      setSelectedAnswers([id]);
    } else {
      setSelectedAnswers(
        event.target.checked ? [...selectedAnswers, id] : selectedAnswers.filter(answerId => answerId !== id)
      );
    }
  };

  useEffect(() => {
    if (!withSubmit && correctAnswers.length === selectedAnswers.length) {
      onSubmit(isCorrect);
    }
  }, [withSubmit, onSubmit, isCorrect, correctAnswers, selectedAnswers]);

  return (
    <div css={[base, style]}>
      <div>
        {answers.map(({ id, text }) => (
          <Component
            key={id}
            id={id}
            name={name}
            label={text}
            selected={!!selectedAnswers.find(answerId => answerId === id)}
            onSelected={handleSelected}
            style={style && style[Component.displayName]}
          />
        ))}
      </div>

      {withSubmit && selectedAnswers.length > 0 && (
        <Button onClick={() => onSubmit(isCorrect)} style={style && style['Button']} text="Conferma" />
      )}
    </div>
  );
}

export default Choices;
