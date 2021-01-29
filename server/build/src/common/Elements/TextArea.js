/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import { useEffect, useState } from '../../../web_modules/react.js';
import shortid from '../../../web_modules/shortid.js';

const base = css`
  margin: 5px;
  border-radius: 5px;
  padding: 7px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  width: 95%;
`;

const buttonCSS = css`
  padding: 0.5rem 1rem;
  border: none;

  font-size: 1rem;
  cursor: pointer;
  margin: 5px;
`;

const labelCSS = css`
  padding: 5px;
  margin-right: 6px;
  margin: 5px;
  width: 95%;
`;

const noop = () => {};

const id = shortid.generate();

const TextArea = ({
  label,
  rows,
  onSubmit = noop,
  initialValue = '',
  style,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => setValue(initialValue), [initialValue]);
  return jsx(
    'div',
    null,
    jsx(
      'label',
      {
        htmlFor: id,
        css: [labelCSS, style['Label']],
      },
      label,
      '*',
    ),
    jsx('textarea', {
      id: id,
      css: [base, style],
      rows: rows,
      value: value,
      onChange: (evt) => setValue(evt.target.value),
      required: true,
    }),
    jsx(
      'button',
      {
        onClick: () => onSubmit(value),
        css: [buttonCSS, style['Button']],
      },
      'Invia risposta',
    ),
  );
};

export default TextArea;
