import React from 'react';

import './styles.css';

const Background = ({ image, children }) => {
  return (
    <div className="Background" style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};

export default Background;
