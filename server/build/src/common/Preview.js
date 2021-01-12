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

import React from '../../web_modules/react.js';
import { makeStyles } from '../../web_modules/@material-ui/core/styles.js';
import * as Elements from './Elements/index.js';

const useStyles = makeStyles({
    smartphoneFrame: {
        position: 'relative',
        // margin: 'auto',
        border: '2vh black solid',
        borderTopWidth: '5vh',
        borderBottomWidth: '6vh',
        borderRadius: '36px',
        width: 'calc(70vh * 0.5)',
        height: '70vh',
        overflowY: 'auto',
        zIndex: 0,
        background: 'white',
    },
    smartphoneBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        background: 'white',
    },
});

const buildElements = (components, styles) =>
    components.map((component) => {
        const { id, name, style, styleId, children, ...props } = component;

        const Element = Elements[name];

        return React.createElement(
            Element,
            _extends(
                {
                    key: id,
                    style: style || styles[styleId],
                    children: children && buildElements(children, styles),
                },
                props,
            ),
        );
    });

const Preview = ({ components, styles = {} }) => {
    const classes = useStyles();

    return React.createElement(
        'div',
        {
            className: classes.smartphoneFrame,
        },
        React.createElement('div', {
            className: classes.smartphoneBg,
        }),
        components ? buildElements(components, styles) : [],
    );
};

export default Preview;
