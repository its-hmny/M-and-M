/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css``;

const Image = ({ description, fallback, imgURL, style }) => {
  return (
    <div>
      <figure>
        <img src={imgURL} alt={fallback} />
        <figcaption>{description}</figcaption>
      </figure>
    </div>
  );
};

export default Image;
