import React from 'react';

/* Blocks interaction with the preview */
const ReadOnly = props => {
  const { children, ...options } = props;
  const blockingHandler = event => event.stopPropagation();

  return (
    <div
      onClickCapture={blockingHandler}
      onFocusCapture={blockingHandler}
      onSelectCapture={blockingHandler}
      {...options}
    >
      {children}
    </div>
  );
};

export default ReadOnly;
