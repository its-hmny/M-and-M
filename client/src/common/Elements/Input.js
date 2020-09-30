/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';

const base = css`
  border-radius: 5px;
`;

const Input = ({ inputType, placeholder, correctAnswer, text, style }) => {
  const [answer, setAnswer] = useState('');

  const validate = () => {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) alert('Answer correct');
    else alert('Answer wrong');
  };

  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={answer}
        onChange={event => setAnswer(event.target.value)}
        css={[base, style]}
      />
      <button onClick={validate}>Invia risposta</button>
    </div>
  );
};

export default Input;
