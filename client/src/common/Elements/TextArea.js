/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect, useState } from 'react';

const base = css`
  5rem 0;
  margin: 5px;
  border-radius: 5px;
  padding: 7px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  width: 95%;
`;

const noop = () => {};

const TextArea = ({ placeholder, rows, onSubmit = noop, initialValue = '', style }) => {
  const [value, setValue] = useState('');

  useEffect(() => setValue(initialValue), [initialValue]);

  return (
    <div>
      <textarea
        css={[base, style]}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
      <button onClick={() => onSubmit(value)}>Invia risposta</button>
    </div>
  );
};

export default TextArea;
