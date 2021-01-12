import React from '../../../web_modules/react.js';
import TextColorPicker from './atoms/TextColorPicker.js';
import BackgroundColorPicker from './atoms/BackgroundColorPicker.js';
import useStylesStore from '../stores/styles.js'; // Choices style object reference:
// {
//   Root: { /* root styles */ },
//   Checkbox: { /* styles applied to Checkbox components */},
//   Button: { /* styles applied to submit component if present */}
// }

function MultiAnsChoicesSettings({ styleId }) {
    // Choices styles
    const { styles, updateStyle } = useStylesStore((state) => ({
        styles: state.styles,
        updateStyle: state.updateStyle,
    }));

    const onChange = (subStyle, innerId) =>
        updateStyle(
            {
                styleId: innerId,
                ...subStyle,
            },
            styleId,
        );

    return React.createElement(
        'div',
        null,
        React.createElement('p', null, 'Edit checkbox settings'),
        React.createElement(TextColorPicker, {
            onChange: (subStyle) => onChange(subStyle, 'Checkbox'),
            value: styles[styleId]['Checkbox'],
        }),
        React.createElement('p', null, 'Edit submit settings'),
        React.createElement(BackgroundColorPicker, {
            onChange: (subStyle) => onChange(subStyle, 'Button'),
            value: styles[styleId]['Button'],
        }),
    );
}

export default MultiAnsChoicesSettings;
