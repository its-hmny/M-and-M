/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 50%;
  height: 50%;
  padding: 5 5px;
`;

const Image = ({ fallback, imgURL, style }) => {
  return (
    <div>
      <img src={imgURL} alt={fallback} css={[base, style]} />
    </div>
  );
};

export default Image;
