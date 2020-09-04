/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useStory } from '../../Player/context/story';
import { useStyles } from '../../Player/context/styles';

const base = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #8cceb3;
  font-size: 1rem;
  cursor: pointer;
`;

function Button({ text, onClick, styleName }) {
  const styles = useStyles(styleName);
  // const { moveTo } = useStory();
  //const onClick = () => moveTo(route);

  return (
    <div>
      <button css={[base, styles]} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
