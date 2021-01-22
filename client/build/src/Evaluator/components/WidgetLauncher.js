import React from '../../../web_modules/react.js';

const WidgetLauncher = (props) => {
  const {
    buttonColor,
    icon,
    children,
    open,
    toggleContainer,
    ...style
  } = props;

  return React.createElement(
    'div',
    {
      className: 'rcw-widget-container',
      style: { ...style },
    },
    open &&
      React.createElement(
        'div',
        {
          style: {
            display: open || 'none',
          },
        },
        children,
      ),
    React.createElement(
      'button',
      {
        type: 'button',
        className: 'rcw-launcher',
        onClick: toggleContainer,
        style: {
          backgroundColor: buttonColor,
        },
      },
      open
        ? React.createElement('img', {
            width: '20vw',
            src: 'http://localhost:8000/clear-button.svg',
            className: 'rcw-open-launcher',
            alt: 'Closed',
          })
        : React.createElement('img', {
            width: '20vw',
            src: icon,
            className: 'rcw-close-launcher',
            alt: 'Open',
          }),
    ),
  );
};

export default WidgetLauncher;
