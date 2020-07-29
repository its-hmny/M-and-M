/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Link from '../Logic/Link';

function Button({ to, children }) {
  return (
    <div
      css={css`
        display: inline-block;
        padding: 10px 20px;
        border-radius: 4px;
        background-color: #8cceb3;
      `}
    >
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default Button;
