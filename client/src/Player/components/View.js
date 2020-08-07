import { css, jsx, Global } from '@emotion/core';
import React from 'react';

function View({ children }) {
  return (
    <div>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 24px;
          }
        `}
      />
      <h1>Main View</h1>
      {children}
    </div>
  );
}

export default View;