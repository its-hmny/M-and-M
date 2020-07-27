import React, { useContext, useState } from 'react';
import Link from './components/atoms/Link';
import Text from './components/Text';
import View from './components/View';

const story = {
  nodes: [
    {
      id: 0,
      name: 'INTRO',
      view: {
        component: 'View',
        children: [
          {
            component: 'Text',
            children: 'Benvenuto nella nostra prova',
          },
          {
            component: 'atoms/Link',
            to: 1,
            children: 'Inizia!',
          },
        ],
      },
    },
    {
      id: 1,
      name: 'QUESTION',
      view: {
        component: 'View',
        children: [
          {
            component: 'Text',
            children: 'Di che colore è il cavallo bianco di Napoleone?',
          },
          {
            component: 'atoms/Link',
            to: 2,
            children: 'Bianco',
          },
          {
            component: 'atoms/Link',
            to: 3,
            children: 'Nero',
          },
        ],
      },
    },
    {
      id: 2,
      view: {
        component: 'View',
        children: [
          {
            component: 'Text',
            children: 'bravo!',
          },
        ],
      },
    },
    {
      id: 3,
      view: {
        component: 'View',
        children: [
          {
            component: 'Text',
            children: 'Sbagliato!',
          },
          {
            component: 'ButtonGroup',
            children: [
              { component: 'atoms/Link', to: 1, children: 'Ritenta' },
              {
                component: 'atoms/Link',
                to: 4,
                children: 'Abbandona',
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      view: {
        component: 'View',
        children: [
          {
            component: 'Text',
            children: 'Peccato!',
          },
        ],
      },
    },
  ],
};

// context: un oggetto con due componenti per mantenere lo stato
//          all'interno dei componenti E PROPAGARLO nell'albero
// provider: una proprietà con un valore qualunque
// consumer: accede al provider
const StoryContext = React.createContext();

function StoryProvider({ children }) {
  const [currentNode, setCurrentNode] = useState(story.nodes[0]);

  const moveTo = id => {
    setCurrentNode(story.nodes[id]);
    console.log(`Moving to ${story.nodes[id].name}`);
  };

  return (
    <StoryContext.Provider value={{ currentNode, moveTo }}>
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
