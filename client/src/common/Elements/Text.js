/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  padding: 0.5rem 0;
`;

const Text = ({ text, style }) => (
  <div>
    <p css={[base, style]}>{text}</p>
  </div>
);

export default Text;
