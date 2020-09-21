/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  padding: 0.5rem 0;
`;

function Text({ text, style }) {
  //const { style } = useStyle('Elements/Text', styleName);
  return <p css={[base, style]}>{text}</p>;
}

export default Text;
