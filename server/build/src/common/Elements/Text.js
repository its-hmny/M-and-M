/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
  position: relative;
  padding: 0.5rem 0;
  color: black;
  margin: 5px;
`;

const Text = ({ text, style }) => {
  return jsx(
    'div',
    null,
    jsx(
      'p',
      {
        css: [base, style],
      },
      text,
    ),
  );
};

export default Text;
