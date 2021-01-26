/** @jsx jsx */
import { css, jsx } from '@emotion/core';

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

  return (
    <div css={[base, style]}>
      <iframe
        src={`https://www.youtube.com/embed/${embedID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube player"
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
