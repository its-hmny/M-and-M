/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';

const base = css`
  input {
    padding: 7px;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    width: 95%;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;

    font-size: 1rem;
    cursor: pointer;
    margin: 5px;
    background-color: #555555;

    color: white;
  }
`;

const Input = ({ inputType, placeholder, correctAnswer, text, style }) => {
  const [answer, setAnswer] = useState('');

  const validate = () => {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) alert('Answer correct');
    else alert('Answer wrong');
  };

  return (
    <div css={[base, style]}>
      <input
        type={inputType}
        placeholder={placeholder}
        value={answer}
        onChange={event => setAnswer(event.target.value)}
      />
      <button onClick={validate}>Invia risposta</button>
    </div>
  );
};

export default Input;
