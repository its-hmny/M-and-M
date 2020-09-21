/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useStyle } from '../../Creator/context/style';

const base = css``;

const AudioPlayer = ({ srcURL, styleName }) => {
  const style = null;
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
