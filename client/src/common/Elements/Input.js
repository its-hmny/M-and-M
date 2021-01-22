/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import shortid from 'shortid';
const base = css`
  input {
    padding: 7px;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
  }
  label {
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
const id = shortid.generate();
const Input = ({ placeholder, onSubmit = noop, style, initialValue = '' }) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => setAnswer(initialValue), [initialValue]);

  return (
    <div css={[base, style]}>
      <label htmlFor={id}>
        {`${placeholder}*`}
        <input
          id={id}
          value={answer}
          onChange={event => setAnswer(event.target.value)}
          required
        />
      </label>
      <button onClick={() => onSubmit(answer)}>Invia risposta</button>
    </div>
  );
};

export default Input;
