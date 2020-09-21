/** @jsx jsx */
import { css, jsx } from '@emotion/core';

 const ButtonGroup = (props) => {
  const { children } = props;

  return (
    <div
      css={css`
        @media (max-width: 420px) {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
      `}
    >
      {children}
    </div>
  );
}

export default ButtonGroup;
