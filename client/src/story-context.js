import React, { useContext, useState } from 'react';

import { ANSWER_VALUE } from './constants';

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
            component: 'Elements/Button',
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
            component: 'Logic/Choices',
            answers: [
              {
                text: 'Bianco',
                value: ANSWER_VALUE.WRONG,
              },
              {
                text: 'Verde',
                value: ANSWER_VALUE.CORRECT,
              },
              {
                text: 'Blue',
                value: ANSWER_VALUE.WRONG,
              },
              {
                text: 'Nero',
                value: ANSWER_VALUE.WRONG,
              },
            ],
            routes: {
              [ANSWER_VALUE.CORRECT]: 2,
              [ANSWER_VALUE.WRONG]: 3,
            },
            withSubmit: true,
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
                  { component: 'Elements/Button', to: 1, children: 'Ritenta' },
                  {
                    component: 'Elements/Button',
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
