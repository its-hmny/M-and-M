import React from 'react';

const Footer = (props) => {
  const { children } = props;
  
  return (
    <footer>
      {children}
    </footer>
  );
}

export default Footer;
