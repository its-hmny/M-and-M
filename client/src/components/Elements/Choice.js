/** @jsx jsx */
import { jsx } from '@emotion/core';

import shortid from 'shortid';

function Choice({ type, name, label, selected, onSelected, styles }) {
  const id = shortid.generate();

  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        value={label}
        checked={selected}
        onChange={onSelected}
      />
      <label htmlFor={id} css={styles}>
        {label}
      </label>
    </div>
  );
}

const Radio = props => <Choice type="radio" {...props} />;
Radio.displayName = 'Radio';

const Checkbox = props => <Choice type="checkbox" {...props} />;
Checkbox.displayName = 'Checkbox';

export { Radio, Checkbox };
