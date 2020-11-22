import React from 'react';

const Launcher = props => {
  const { buttonColor, icon, children, open, toggleContainer, ...style } = props;

  return (
    <div className="rcw-widget-container" style={{ ...style }}>
      {open && (
        <div
          className="rcw-conversation-container active"
          style={{ display: open || 'none' }}
        >
          {children}
        </div>
      )}
      <button
        type="button"
        className="rcw-launcher"
        onClick={toggleContainer}
        style={{ backgroundColor: buttonColor }}
      >
        {open ? (
          <img
            width="20vw"
            src="http://localhost:8000/clear-button.svg"
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

export default Launcher;
