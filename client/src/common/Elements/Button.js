/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ text, onClick, style }) => (
  <div>
    <button css={[base, style]} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;
