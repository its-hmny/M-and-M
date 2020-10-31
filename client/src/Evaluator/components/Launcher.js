import React, { useState } from 'react';

const Launcher = props => {
  const { backgroundColor, img, children, ...style } = props;
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <div className="rcw-widget-container" style={style}>
      <div class="rcw-conversation-container active" style={{ display: open || 'none' }}>
        {open ? children : undefined}
      </div>
      <button
        type="button"
        className="rcw-launcher"
        onClick={toggleChat}
        style={{ ...style, backgroundColor }}
      >
        {/* {!showChat && <Badge badge={badgeCount} />} */}
        {open ? (
          <img
            width="20vw"
            src="http://localhost:8000/clear-button.svg"
            className="rcw-open-launcher"
            alt="Closed"
          />
        ) : (
          <img width="20vw" src={img} className="rcw-close-launcher" alt="Open" />
        )}
      </button>
    </div>
  );
};

export default Launcher;
