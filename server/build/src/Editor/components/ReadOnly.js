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
/* Blocks interaction with the preview */

const ReadOnly = props => {
  const { children, ...options } = props;

  const blockingHandler = event => event.stopPropagation();

  return React.createElement(
    'div',
    _extends(
      {
        onClickCapture: blockingHandler,
        onFocusCapture: blockingHandler,
        onSelectCapture: blockingHandler,
      },
      options
    ),
    children
  );
};

export default ReadOnly;
