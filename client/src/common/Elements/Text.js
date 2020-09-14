/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useStyle } from '../../Creator/context/style';

const base = css`
  padding: 0.5rem 0;
`;

function Text({ text, styleName }) {
  const style = null;
  //const { style } = useStyle('Elements/Text', styleName);
  return <p css={[base, style]}>{text}</p>;
}

export default Text;
