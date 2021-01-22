/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
  padding: 0px;
`;

const YoutubePlayer = ({ srcURL, style }) => {
  const embedID = srcURL.slice(srcURL.indexOf('?v=') + 3);

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
      jsx('iframe', {
        style: style['Player'],
        src: `https://www.youtube.com/embed/${embedID}`,
        frameBorder: '0',
        allow:
          'accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture',
        allowFullScreen: true,
        title: 'youtube player',
      }),
    ),
  );
};

export default YoutubePlayer;
