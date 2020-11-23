/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  align-self: stretch;
`;
const container = css`
  display: flex;
  justify-content: center;
`;

const Spacer = ({ style }) => {
  return (
    <div css={container} style={{ height: style.height }}>
      <div css={[base, style, { height: '100%' }]} />
    </div>
  );
};
export default Spacer;
