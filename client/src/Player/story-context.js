import React, { useContext, useState } from 'react';

const story = {
  nodes: [
    {
      id: 0,
      name: 'INTRO',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            children: 'Benvenuto nella nostra prova',
          },
          {
            component: 'Atoms/Link',
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
            component: 'Elements/Text',
            children: 'Di che colore è il cavallo bianco di Napoleone?',
          },
          {
            component: 'Atoms/Link',
            to: 2,
            children: 'Bianco',
          },
          {
            component: 'Atoms/Link',
            to: 3,
            children: 'Nero',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'VICTORY',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            children: 'bravo!',
          },
        ],
      },
    },
    {
      id: 3,
      name: 'WRONG_ANSWER',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            children: 'Sbagliato!',
          },
          {
            component: 'Layout/Footer',
            children: [
              {
                component: 'Elements/ButtonGroup',
                children: [
                  { component: 'Atoms/Link', to: 1, children: 'Ritenta' },
                  {
                    component: 'Atoms/Link',
                    to: 4,
                    children: 'Abbandona',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      name: 'DEFEAT',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
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
