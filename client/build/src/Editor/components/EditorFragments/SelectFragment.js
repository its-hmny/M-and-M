import React from '../../../../web_modules/react.js';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '../../../../web_modules/@material-ui/core.js';
import { useEditor } from '../../context/EditorContext.js';

const SelectFragment = ({ classNames, path, fragmentSpecificProps }) => {
  const {
    specificPath,
    valToChange,
    label,
    data,
    dataName,
  } = fragmentSpecificProps;

  const { story, getFromPath, setPathToValue } = useEditor();

  path = path || [];

  const completePath = specificPath ? [...path, ...specificPath] : [...path];

  var items = [];

  const menuItems = story.nodes.map((node) => {
    if (node[data] && !items.includes(node[data])) {
      items.push(node[data]);
      return React.createElement(
        MenuItem,
        {
          key: node[data],
          value: node[data],
        },
        node[dataName],
      );
    }

    return null;
  });

  return React.createElement(
    'div',
    {
      className: classNames.InspectorElement,
    },
    React.createElement(
      FormControl,
      {
        className: classNames.FormControl,
      },
      React.createElement(InputLabel, null, label),
      React.createElement(
        Select,
        {
          value: getFromPath(completePath)[valToChange] || '',
          onChange: (event) =>
            setPathToValue(completePath, valToChange, event.target.value),
        },
        menuItems,
        React.createElement(
          MenuItem,
          {
            key: story.nodes.length,
            value: '',
          },
          '\u00A0',
        ),
      ),
    ),
  );
};

export default SelectFragment;
