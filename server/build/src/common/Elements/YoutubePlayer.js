/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const YoutubePlayer = ({ srcURL, style }) => {
  const embedID = srcURL.slice(srcURL.indexOf('?v=') + 3);

  return jsx(
    'div',
    {
      css: [base, style],
    },
    jsx('iframe', {
      src: `https://www.youtube.com/embed/${embedID}`,
      frameBorder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture',
      allowFullScreen: true,
      title: 'YouTube player',
    }),
  );
};

export default YoutubePlayer;
