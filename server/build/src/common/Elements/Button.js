/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
  padding: 0.5rem 1rem;
  border: none;

  font-size: 1rem;
  cursor: pointer;
  margin: 5px;
  background-color: #555555;

  color: white;
`; //TODO: make this look like it's actually disabled please

const disabledStyle = css`
  text-decoration: line-through;
`;

const noop = () => {};

const Button = ({ text, onClick, style, disabled }) =>
  jsx(
    'div',
    null,
    jsx(
      'button',
      {
        css: [base, style, disabled ? disabledStyle : ''],
        onClick: disabled ? noop : onClick,
      },
      text
    )
  );

export default Button;
