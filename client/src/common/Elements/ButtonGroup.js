/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: transparent;
`;

const ButtonGroup = ({ style, children }) => <div css={[base, style]}>{children}</div>;

export default ButtonGroup;
