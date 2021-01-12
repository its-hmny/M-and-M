/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const base = css``;

const YoutubePlayer = ({ srcURL, style }) => {
  const embedID = srcURL.slice(srcURL.indexOf('?v=') + 3);

  return (
    <div css={[base, style]}>
      <div className="player">
        <iframe
          style={style}
          src={`https://www.youtube.com/embed/${embedID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube player"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubePlayer;
