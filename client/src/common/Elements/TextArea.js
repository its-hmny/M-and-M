/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  padding: 0.5rem 0;
`;

const TextArea = ({ placeholder, rows, style }) => (
  <div>
    <textarea placeholder={placeholder} />
  </div>
);

export default TextArea;