/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
  align-self: stretch;
`;

const container = css`
  display: flex;
  justify-content: center;
`;

const Spacer = ({ style }) => {
  return jsx(
    'div',
    {
      css: container,
      style: {
        height: style.height,
      },
    },
    jsx('div', {
      css: [
        base,
        style,
        {
          height: '100%',
        },
      ],
    })
  );
};

export default Spacer;
