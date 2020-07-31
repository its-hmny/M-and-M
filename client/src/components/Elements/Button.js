/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useStory } from '../../context/story';
import { useStyles } from '../../context/styles';

const base = css`
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #8cceb3;
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
