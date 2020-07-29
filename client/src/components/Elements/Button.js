/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Link from '../Logic/Link';

function Button({ to, children }) {
  return (
    <div //TODO: padding makes a piece of button useless
      css={css`
        display: inline-block;
        padding: 10px 20px;
        border-radius: 4px;
        background-color: #8cceb3;
        cursor: pointer;
      `}
    >
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default Button;
