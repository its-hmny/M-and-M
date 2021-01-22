/** @jsx jsx */
import { css, jsx } from '@emotion/core';

//TODO: pick which we want to keep. can i make "global" classes (for internal use)?
const base = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  display: block;
  border-radius: 8px;
  padding: 10px 20px;
  background-color: #9dc8fa;
  text-align: center;
  cursor: pointer;
  margin: 5px;
  word-wrap: break-word;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  input:checked ~ & {
    background-color: #3b92f6;
    margin: 5px;
  }
`;

function Choice({ type, id, name, label, selected, onSelected, style }) {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        value={label}
        checked={selected}
        onChange={onSelected}
        style={{ display: 'none' }}
      />
      <label htmlFor={id} css={[base, style]}>
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
