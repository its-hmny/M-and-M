/** @jsx jsx */
import { css, jsx } from '@emotion/core';

//TODO: pick which we want to keep. can i make "global" classes (for internal use)?
const base = css`
  & {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #3b92f6;
  }

  label {
    display: block;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: #9dc8fa;
    text-align: center;
    cursor: pointer;
  }
`;

function Choice({ type, id, name, label, selected, onSelected, styles }) {
  return (
    <div css={[base, styles]}>
      <input
        id={id}
        type={type}
        name={name}
        value={label}
        checked={selected}
        onChange={onSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

const Radio = props => <Choice type="radio" {...props} />;
Radio.displayName = 'Radio';

const Checkbox = props => <Choice type="checkbox" {...props} />;
Checkbox.displayName = 'Checkbox';

export { Radio, Checkbox };
