import React from 'react';

import Player from '../../Player';
import { useView } from '../context/view';

function Preview({ components }) {
  return (
    <div>
      <Player />
    </div>
  );
}

export default Preview;
