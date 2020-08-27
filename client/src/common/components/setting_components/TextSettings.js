import React, { useState } from 'react';
import { useView } from '../../../Creator/context/view';
import { view } from '@material-ui/icons';
import { useInputChange } from './useInputChange';
import Button from '../Elements/Button';
import TextPropInput from './atoms/TextPropInput';

function TextSettings({ id }) {
    const [view, addComponent, removeComponent] = useView();
    const textComponent = view.find(component => component.id === id);
    // if it's not there you might as well explode
    const [input, handleInputChange] = useInputChange();
    const handleSubmit = event => {
    }

    return (
        <form>
            <TextPropInput onChange={handleInputChange}/>
            <label> i dunno name maybe?
            <input type="text" name="textInput" onChange={handleInputChange}/>
            </label>
        </form>
    );
}
export default TextSettings;