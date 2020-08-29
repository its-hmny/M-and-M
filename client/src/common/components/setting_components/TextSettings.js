import React, { useState } from 'react';
import { useView } from '../../../Creator/context/view';
import { view } from '@material-ui/icons';
import { useInputChange } from './useInputChange';
import Button from '../Elements/Button';
import FontFamilyInput from './atoms/FontFamilyInput';
import ColorPickerInput from './atoms/ColorPickerInput';
import FontSizeInput from './atoms/FontSizeInput';
import ImagePropInput from './atoms/ImagePropInput';

function TextSettings({ id }) {
    const [view, addComponent, removeComponent] = useView();
    const textComponent = view.find(component => component.id === id);
    // if it's not there you might as well explode
    const [input, handleInputChange] = useInputChange();

    return (
        <form>
            <FontFamilyInput onChange={handleInputChange} value={input} />
            <ColorPickerInput onChange={handleInputChange} value={input} />
            <FontSizeInput onChange={handleInputChange} value={input} />
            <ImagePropInput onChange={handleInputChange} value={input} />

        </form>
    );
}
export default TextSettings;