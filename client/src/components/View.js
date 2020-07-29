/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';

function View({ children }) {
  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <h1>Main View</h1>
      {children}
    </div>
  );
}

export default View;
