/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css``;

const AudioPlayer = ({ srcURL, style }) => {
  //const { style } = useStyle('Elements/Button', styleName);
  // const { moveTo } = useStory();
  //const onClick = () => moveTo(route);

  return (
    <div>
      <audio controls preload="auto" src={srcURL}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
