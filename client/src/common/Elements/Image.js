/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  align: left;
`;

const Image = ({ description, fallback, imgURL, style }) => {
  return (
    <div>
      <figure>
        <img src={imgURL} alt={fallback}  css={[base, style]}/>
        <figcaption>{description}</figcaption>
      </figure>
    </div>
  );
};

export default Image;
