import React from 'react';

function NumberField({ onChange }) {
  return (
    <div className="NumberField">
      <input
        type="number"
        className="NumberField-input"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default NumberField;
