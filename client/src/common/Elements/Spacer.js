/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';

const base = css`
  alignself: stretch;
`;
const container = css`
  display: flex;
  justify-content: center;
`;

const Spacer = ({ style }) => {
  return (
    <div css={container} style={{ height: style.height }}>
      <div css={[base, style]} />
    </div>
  );
};
export default Spacer;
