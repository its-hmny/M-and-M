function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

import React from '../../../web_modules/react.js';
import {
  Box,
  List,
  ListItem,
  Typography,
  Collapse,
  makeStyles,
} from '../../../web_modules/@material-ui/core.js';
import DynamicLoadFragments from './EditorFragments/index.js';

const useStyles = makeStyles({
  InspectorElementStyle: {
    margin: 5,
    width: 270,
  },
});
/* Element in the inspector list, contains component name and the logic to expand and show
   the modifiable component properties in <DynamicLoadFragments> */

const CollapsableBox = ({
  name,
  isOpen,
  onClick,
  indentLevel,
  fieldsToSet,
  ...specificProps
}) => {
  const { InspectorElementStyle } = useStyles();

  const ListComponent =
    fieldsToSet.length > 0 &&
    React.createElement(
      List,
      {
        className: InspectorElementStyle,
      },
      React.createElement(
        ListItem,
        {
          button: true,
          onClick: onClick,
          divider: true,
        },
        React.createElement(
          Typography,
          {
            variant: 'h6',
            component: 'h6',
          },
          name
        )
      ),
      React.createElement(
        Collapse,
        {
          in: isOpen,
          unmountOnExit: true,
        },
        React.createElement(
          Box,
          {
            borderLeft: 1,
            borderColor: 'primary.main',
          },
          React.createElement(
            DynamicLoadFragments,
            _extends(
              {
                fieldsToSet: fieldsToSet,
              },
              specificProps
            )
          )
        )
      )
    );
  /* If current component does not have modifiable fields the function will return a disabled listitem
     else the function will return a clickable listitem with a collapsable box */

  return React.createElement(
    Box,
    {
      className: InspectorElementStyle,
    },
    ListComponent
  );
};

export default CollapsableBox;
