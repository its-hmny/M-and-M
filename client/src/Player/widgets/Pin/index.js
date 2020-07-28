import React from 'react';

function Pin({ digits }) {


  /* - if focus is on the Pin it should be moved to the first input 
     - every input contains one number
     - once an input is full, focus shifts to next input
     - when deleting, once an input is empty, focus shifts to previous
     */
  return (
    <div className="Pin">
      <input maxLength="1" inputMode="numeric" />
      <input maxLength="1" inputMode="numeric" />
      <input maxLength="1" inputMode="numeric" />
      <input maxLength="1" inputMode="numeric" />
    </div>
  );

}

export default Pin;