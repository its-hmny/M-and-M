/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useStory } from '../../context/story';
import { useStyles } from '../../context/styles';

const base = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #8cceb3;
  font-size: 1rem;
  cursor: pointer;
`;

function Button({ route, styleName, children }) {
  const styles = useStyles(styleName);
  const { moveTo } = useStory();
  const onClick = () => moveTo(route);

  return (
    <div>
      <button css={[base, styles]} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
