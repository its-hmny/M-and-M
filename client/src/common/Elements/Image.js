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

function Image({ description, fallback, imgURL, styleName }) {
  const style = null;
  //const { style } = useStyle('Elements/Button', styleName);
  // const { moveTo } = useStory();
  //const onClick = () => moveTo(route);

  return (
    <div>
      <figure>
        <img src={imgURL} alt={fallback} />
        <figcaption>{description}</figcaption>
      </figure>
    </div>
  );
}

export default Image;
