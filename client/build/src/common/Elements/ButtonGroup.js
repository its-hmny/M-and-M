/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';

const base = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: transparent;
`;

const ButtonGroup = ({ style, children }) =>
    jsx(
        'div',
        {
            css: [base, style],
        },
        children,
    );

export default ButtonGroup;
