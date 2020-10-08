/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  @media (max-width: 420px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  margin: 5px;
`;

const ButtonGroup = ({ style, children }) => <div css={[base, style]}>{children}</div>;

export default ButtonGroup;
