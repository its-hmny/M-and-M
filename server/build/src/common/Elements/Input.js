/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import { useEffect, useState } from '../../../web_modules/react.js';
import shortid from '../../../web_modules/shortid.js';

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
  }
`;

const noop = () => {};

const id = shortid.generate();

const Input = ({ placeholder, onSubmit = noop, style, initialValue = '' }) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => setAnswer(initialValue), [initialValue]);
  return jsx(
    'div',
    {
      css: [base, style],
    },
    jsx(
      'label',
      {
        htmlFor: id,
      },
      `${placeholder}*`,
      jsx('input', {
        id: id,
        value: answer,
        onChange: (event) => setAnswer(event.target.value),
        required: true,
      }),
    ),
    jsx(
      'button',
      {
        style: style['Button'],
        onClick: () => onSubmit(answer),
      },
      'Invia risposta',
    ),
  );
};

export default Input;
