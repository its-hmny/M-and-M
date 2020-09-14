import { css, jsx, Global } from '@emotion/core';
import React from 'react';

/*Da mettere dentro al div di view
Non so perchè ci fosse, ATTENZIONE se inserito rompe il css di tutto
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
      />*/

function View({ children }) {
  return <div>{children}</div>;
}

export default View;
