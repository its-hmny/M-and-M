import React from 'react';
import { useStory } from '../../story-context';

function Link({ to, children }) {
  const { moveTo } = useStory();
  const onClick = e => {
    e.stopPropagation();
    console.log(`Goto ${to}`);
    moveTo(to);
  };

  return <span onClick={onClick}>{children}</span>;
}

export default Link;
