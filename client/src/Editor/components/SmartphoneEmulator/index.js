import React from 'react';
import RenderSanbox from '../RenderSandbox';

import './styles.css';

const SmartphoneEmulator = ({ storyNode, children }) => {
  return (
    <div className="smartphone">
      <RenderSanbox components={[...storyNode.components]} />
    </div>
  );
};

export default SmartphoneEmulator;
