import React from 'react';

function View({ children }) {
  return (
    <div>
      <h1>Main View</h1>
      {children}
    </div>
  );
}

export default View;
