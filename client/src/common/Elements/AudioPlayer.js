/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css`
`;

const AudioPlayer = ({ srcURL, style }) => {
  return (
    <div>
      <audio controls preload="auto" src={srcURL}  css={[base, style]}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
