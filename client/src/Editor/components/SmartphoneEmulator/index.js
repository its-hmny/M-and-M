import React from 'react';
import Preview from '../../../common/Preview';
import StyleDB from '../../../data/styles.json';

import './styles.css';

const SmartphoneEmulator = ({ storyNode, children }) => {
  return (
    <div className="smartphone">
      <Preview components={[...storyNode.components]} styles={StyleDB} />
    </div>
  );
};

export default SmartphoneEmulator;
