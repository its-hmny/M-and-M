/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ButtonGroup = ({ children }) => (
  <div
    css={css`
      @media (max-width: 420px) {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }
      margin: 5px;
    `}
  >
    {children}
  </div>
);

export default ButtonGroup;
