/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import shortid from 'shortid';

const base = css`
  .player {
    box-shadow: 1px 2px #bdbdbd;
  }

  .progress {
    height: 2px;
    left: 0;
    top: 0;
    background-color: #bdbdbd;
  }

  .play-pause {
    border: none;
    background-color: none;
  }

  .icon-play {
  }
`;

const audioID = shortid.generate();
const AudioPlayer = ({ srcURL, style, autoplay }) => {
  const [playing, setPlaying] = React.useState(autoplay);
  const [width, setWidth] = React.useState(0);

  var audioref;

  const playpause = () => {
    if (playing) {
      audioref.audioEl.current.pause();
      setPlaying(false);
    } else {
      audioref.audioEl.current.play();
      setPlaying(true);
    }
  };

  const updateProgress = time => {
    setWidth((time / audioref.audioEl.current.duration) * 100);
  };

  return (
    <div css={[base, style]}>
      <div className="player">
        <ReactAudioPlayer
          aria-label={'Audio Player'}
          src={srcURL}
          id={audioID}
          listenInterval={1}
          onListen={time => updateProgress(time)}
          ref={element => {
            audioref = element;
          }}
          onEnded={() => {
            setPlaying(false);
          }}
          autoPlay={autoplay}
        />

        <div style={{ width: width + '%', height: 4, ...style['ProgressBar'] }} />
        <button
          aria-label={playing ? 'Pause audio player' : 'Play audio player'}
          className="play-pause icon-play"
          onClick={playpause}
          style={style['PlayButton']}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
