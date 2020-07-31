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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }
        `}
      />
      <h1>Main View</h1>
      {children}
    </div>
  );
}

export default View;
