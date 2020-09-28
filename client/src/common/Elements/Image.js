/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  align: left;
  width: 80%;
`;

const figcaptionStyle = css`
  color: black;
`;

const Image = ({ description, fallback, imgURL, style }) => {
  return (
    <div>
      <figure>
        <img src={imgURL} alt={fallback}  css={[base, style]}/>
        <figcaption css={figcaptionStyle}>{description}</figcaption>
      </figure>
    </div>
  );
};

export default Image;
