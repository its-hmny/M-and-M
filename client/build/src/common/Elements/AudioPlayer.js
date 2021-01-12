/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
import React from '../../../web_modules/react.js';
import ReactAudioPlayer from '../../../web_modules/react-audio-player.js';
import PlayArrowIcon from '../../../web_modules/@material-ui/icons/PlayArrow.js';
import PauseIcon from '../../../web_modules/@material-ui/icons/Pause.js';

const base = css`
    .player {
        margin: 5px;
        box-shadow: 1px 2px #bdbdbd;

        background-color: #e0e0e0;
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

const AudioPlayer = ({ srcURL, style }) => {
    const [playing, setPlaying] = React.useState(false);

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
                src: srcURL,
                listenInterval: 1,
                onListen: (time) => updateProgress(time),
                ref: (element) => {
                    audioref = element;
                },
                onEnded: () => {
                    setPlaying(false);
                },
            }),
            jsx('div', {
                style: {
                    backgroundColor: 'lightblue',
                    width: width + '%',
                    height: 4,
                },
            }),
            jsx(
                'button',
                {
                    className: 'play-pause icon-play',
                    onClick: playpause,
                },
                playing ? jsx(PauseIcon, null) : jsx(PlayArrowIcon, null),
            ),
        ),
    );
};

export default AudioPlayer;
