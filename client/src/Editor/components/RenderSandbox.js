import React from 'react';
import Preview from '../../common/Preview';
import StyleDB from '../../data/styles.json';

const RenderSanbox = ({ components }) => {
  return <Preview components={components} styles={StyleDB} />;
};

export default RenderSanbox;
