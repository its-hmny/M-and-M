import React from 'react';


const ReadOnly = (props) => {
  const blockingHandler = event => event.stopPropagation();

  return (
    <div onClickCapture={blockingHandler} onFocusCapture={blockingHandler} onSelectCapture={blockingHandler} >
      {props.children}
    </div>
  );
};


export default ReadOnly;