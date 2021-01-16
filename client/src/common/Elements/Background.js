/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  z-index: -1;
`;

const Background = ({ image, style }) => (
  <div css={[base, style]} style={{ backgroundImage: image }}></div>
);

export default Background;
