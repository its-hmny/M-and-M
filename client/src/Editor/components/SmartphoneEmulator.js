import React from 'react';
import RenderSanbox from './RenderSandbox';

import './styles.css';

const SmartphoneEmulator = ({ storyNode, children }) => {
  return (
    <div class="smartphone">
      <div class="content">
        <RenderSanbox 
            style={{ width: '100%', border: 'none', height: '100%' }} 
            components={storyNode.components} 
        />
      </div>
    </div>
  );
};

export default SmartphoneEmulator;
