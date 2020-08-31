import React from 'react';

const CustomColorPicker = ({ classNames }) => {
  const [colorState, setColorState] = React.useState("#000000");
    
  return (
    <div>
      <label className={classNames.colorLabel} htmlFor="colorpicker">Color: </label> 
      <input 
        className={classNames.colorButton} id="colorpicker" 
        type="color" value={colorState} onChange={(e) => setColorState(e.target.value)} 
      />   
    </div>);
};

export default CustomColorPicker;