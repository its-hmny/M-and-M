import React from 'react';

function Choice({ type, name, label, selected, onSelected }) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={label}
          checked={selected}
          onChange={onSelected}
        />
      </label>
    </div>
  );
}

export const Radio = props => <Choice type="radio" {...props} />;
export const Checkbox = props => <Choice type="checkbox" {...props} />;
