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

const noop = () => {};

const Input = ({ placeholder, onSubmit = noop, style, initialValue = '' }) => {
  const [answer, setAnswer] = useState(initialValue);
  return (
    <div css={[base, style]}>
      <input
        placeholder={placeholder}
        value={answer}
        onChange={event => setAnswer(event.target.value)}
      />
      <button onClick={() => onSubmit(answer)}>Invia risposta</button>
    </div>
  );
};

export default Input;
