/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  padding: 0.5rem 1rem;
  border: none;
  
  font-size: 1rem;
  cursor: pointer;
  margin: 5px;
  background-color: #555555;
  
  color: white;
  
`;

const Button = ({ text, onClick, style }) => (
  <div>
    <button css={[base, style]} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;
