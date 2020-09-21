import React, { useContext, useState, useCallback } from 'react';
import shortid from 'shortid';

import { ANSWER_VALUE } from '../constants';

// context: un oggetto con due componenti per mantenere lo stato
//          all'interno dei componenti E PROPAGARLO nell'albero
// provider: una proprietà con un valore qualunque
// consumer: accede al provider
const StoryContext = React.createContext({ currentNode: {}, moveTo: () => {} });

function StoryProvider({ children }) {
  const [currentNode, setCurrentNode] = useState(story.nodes[0]);

  const moveTo = useCallback(id => setCurrentNode(story.nodes[id]), []);

  return <StoryContext.Provider value={{ currentNode, moveTo }}>{children}</StoryContext.Provider>;
}

function useStory() {
  const value = useContext(StoryContext);
  if (value == null) {
    throw new Error('useStory must be used inside a StoryProvider');
  }

  return value;
}

export { StoryProvider, useStory };
