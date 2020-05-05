import React from 'react';
import GraphCanvas from './GraphCanvas';
import ActivitiesMenu from './ActivitiesMenu';

function Editor() {
  return (
    <div>
      <ActivitiesMenu />
      <GraphCanvas />
    </div>
  );
}

export default Editor;