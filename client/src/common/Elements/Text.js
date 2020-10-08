/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  padding: 0.5rem 0;
  color: black;
  margin: 5px;
`;

const Text = ({ text, style }) => {
  return (
    <div>
      <p css={[base, style]}>{text}</p>
    </div>
  );
};

export default Text;
