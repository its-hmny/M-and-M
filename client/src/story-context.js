import React, { useContext, useState } from 'react';

// context: un oggetto con due componenti per mantenere lo stato
//          all'interno dei componenti E PROPAGARLO nell'albero
// provider: una proprietà con un valore qualunque
// consumer: accede al provider
const StoryContext = React.createContext();

function StoryProvider({ story, children }) {
  const [currentNode, setCurrentNode] = useState(story.nodes[0].id);

  const proceed = node => {
    setCurrentNode(node);
    console.log(`chose ${node}`);
  };

  return (
    <StoryContext.Provider
      value={{ nodeData: story.nodes[currentNode], proceed }}
    >
      {children}
    </StoryContext.Provider>
  );
}

function useStory() {
  const value = useContext(StoryContext);
  if (value == null) {
    throw new Error('useStory must be used inside a StoryProvider');
  }

  return value;
}

export { StoryProvider, useStory };
