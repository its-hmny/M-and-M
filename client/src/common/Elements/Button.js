/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useStyle } from '../../Creator/context/style';

const base = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
`;

function Button({ text, onClick, styleName }) {
  const { style } = useStyle('Elements/Button', styleName);
  // const { moveTo } = useStory();
  //const onClick = () => moveTo(route);

  return (
    <div>
      <button css={[base, style]} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
