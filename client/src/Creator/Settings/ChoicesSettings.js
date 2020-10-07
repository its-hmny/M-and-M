import React, { useContext } from 'react';
import ColorPickerInput from './atoms/ColorPicker';
import { StylesContext, actions } from '../style';
import TextSettings from './TextSettings';

function ChoicesSettings({ styleId }) {
    const [state, dispatch] = useContext(StylesContext);
    const onChange = subStyle => {
        dispatch({ type: actions.UPDATE_STYLE, payload: { styleId, ...subStyle } });
    };

    return (
        <div>
            <TextSettings styleId={styleId} />
        </div>);
}

export default ChoicesSettings;