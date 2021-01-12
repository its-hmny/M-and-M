/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: 50%;
    height: 50%;
    padding: 5 5px;
`;

const Image = ({ fallback, imgURL, style }) => {
    return jsx(
        'div',
        null,
        jsx('img', {
            src: imgURL,
            alt: fallback,
            css: [base, style],
        }),
    );
};

export default Image;
