/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import React from '../../../web_modules/react.js';
import ReactAudioPlayer from '../../../web_modules/react-audio-player.js';
import PlayArrowIcon from '../../../web_modules/@material-ui/icons/PlayArrow.js';
import PauseIcon from '../../../web_modules/@material-ui/icons/Pause.js';
import shortid from '../../../web_modules/shortid.js';

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

  const updateProgress = (time) => {
    setWidth((time / audioref.audioEl.current.duration) * 100);
  };

  return jsx(
    'div',
    {
      css: [base, style],
    },
    jsx(
      'div',
      {
        className: 'player',
      },
      jsx(ReactAudioPlayer, {
        'aria-label': 'Audio Player',
        src: srcURL,
        id: audioID,
        listenInterval: 1,
        onListen: (time) => updateProgress(time),
        ref: (element) => {
          audioref = element;
        },
        onEnded: () => {
          setPlaying(false);
        },
        autoPlay: autoplay,
      }),
      jsx('div', {
        style: {
          width: width + '%',
          height: 4,
          ...style['ProgressBar'],
        },
      }),
      jsx(
        'button',
        {
          'aria-label': playing ? 'Pause audio player' : 'Play audio player',
          className: 'play-pause icon-play',
          onClick: playpause,
          style: style['PlayButton'],
        },
        playing ? jsx(PauseIcon, null) : jsx(PlayArrowIcon, null),
      ),
    ),
  );
};

export default AudioPlayer;
