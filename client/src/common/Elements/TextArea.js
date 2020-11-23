/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`5rem 0;
  margin: 5px;
  border-radius: 5px;
  padding: 7px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  width: 95%;
`;

const TextArea = ({ placeholder, rows, style }) => (
  <div>
    <textarea css={[base, style]} placeholder={placeholder} />
  </div>
);

export default TextArea;
