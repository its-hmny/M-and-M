import React, { useState } from 'react';

const Launcher = props => {
  const { backgroundColor, img, children } = props;
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <>
      {open ? children : undefined}
      <button
        type="button"
        className="rcw-launcher"
        onClick={toggleChat}
        style={{ backgroundColor }}
      >
        {/* {!showChat && <Badge badge={badgeCount} />} */}
        {open ? (
          <img width="20vw" src={img} className="rcw-close-launcher" alt="Open" />
        ) : (
          <img
            width="20vw"
            src="http://localhost:8000/clear-button.svg"
            className="rcw-open-launcher"
            alt="Closed"
          />
        )}
      </button>
    </>
  );
};

export default Launcher;
