import React from 'react';
import clearButton from '../assets/svgs/clear-button.svg';

const WidgetLauncher = props => {
  const { buttonColor, icon, children, open, toggleContainer, ...style } = props;

  return (
    <div className="rcw-widget-container" style={{ ...style }}>
      {open && <div style={{ display: open || 'none' }}>{children}</div>}
      <button
        type="button"
        className="rcw-launcher"
        onClick={toggleContainer}
        style={{ backgroundColor: buttonColor }}
      >
        {open ? (
          <img
            width="20vw"
            src={clearButton}
            className="rcw-open-launcher"
            alt="Closed"
          />
        ) : (
          <img width="20vw" src={icon} className="rcw-close-launcher" alt="Open" />
        )}
      </button>
    </div>
  );
};

export default WidgetLauncher;
