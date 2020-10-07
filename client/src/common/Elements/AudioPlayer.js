/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
const base = css`
  .player{
    margin: 5px;
    box-shadow: 1px 2px #BDBDBD;
    
    background-color: #E0E0E0;

  }
  .progress{
    
    height: 2px;
    left: 0;
    top: 0;
    background-color: #BDBDBD;
  }
  .play-pause{
    border: none;
    background-color: none;
  }
  .icon-play{

  }
  
`;

const AudioPlayer = ({ srcURL, style }) => {
  const [playing, setPlaying] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  var audioref;

  const playpause = () => {

    if (playing) {
      audioref.audioEl.current.pause();
      setPlaying(false);
    }
    else {
      audioref.audioEl.current.play();
      setPlaying(true);
    }
  }

  const updateProgress = (time) => {

    setWidth(time / audioref.audioEl.current.duration * 100);

  }


  return (
    <div css={[base, style]}>

      <div class="player" >
        <ReactAudioPlayer
          src={srcURL}
          listenInterval={1}
          onListen={time => updateProgress(time)}
          ref={(element) => {
            audioref = element;

          }}
          onEnded={() => { setPlaying(false) }}

        />
        <div style={{ backgroundColor: "lightblue", width: width + "%", height: 4 }} />
        <button class="play-pause icon-play" onClick={playpause}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </button>

      </div>
    </div >
  );
};

export default AudioPlayer;
