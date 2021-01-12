function _extends() {
    _extends =
        Object.assign ||
        function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

    return _extends.apply(this, arguments);
}

/** @jsx jsx */
import { css, jsx } from '../../../web_modules/@emotion/core.js';
//TODO: pick which we want to keep. can i make "global" classes (for internal use)?

const base = css`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    display: block;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: #9dc8fa;
    text-align: center;
    cursor: pointer;
    margin: 5px;

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    input:checked ~ & {
        background-color: #3b92f6;
        margin: 5px;
    }
`;

function Choice({ type, id, name, label, selected, onSelected, style }) {
    return jsx(
        'div',
        null,
        jsx('input', {
            id: id,
            type: type,
            name: name,
            value: label,
            checked: selected,
            onChange: onSelected,
            style: {
                display: 'none',
            },
        }),
        jsx(
            'label',
            {
                htmlFor: id,
                css: [base, style],
            },
            label,
        ),
    );
}

const Radio = (props) =>
    jsx(
        Choice,
        _extends(
            {
                type: 'radio',
            },
            props,
        ),
    );

Radio.displayName = 'Radio';

const Checkbox = (props) =>
    jsx(
        Choice,
        _extends(
            {
                type: 'checkbox',
            },
            props,
        ),
    );

Checkbox.displayName = 'Checkbox';

export { Radio, Checkbox };
