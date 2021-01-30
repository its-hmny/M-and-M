/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding: 5 5px;
`;

const ButtonImage = ({ description, imgURL, style, onClick }) => {
  return <img src={imgURL} alt={description} css={[base, style]} onClick={onClick} />;
};

export default ButtonImage;
