import React, { useContext, useState, useCallback } from 'react';
import shortid from 'shortid';

import { ANSWER_VALUE } from '../constants';

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
            text: 'Benvenuto nella nostra prova',
          },
          {
            component: 'Elements/Button',
            route: 1,
            text: 'Inizia!',
            styleName: 'SpaceButton',
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
            text: 'Di che colore è il cavallo bianco di Napoleone?',
          },
          {
            component: 'Elements/Choices',
            answers: [
              {
                id: shortid.generate(),
                text: 'Bianco',
                value: ANSWER_VALUE.CORRECT,
              },
              {
                id: shortid.generate(),
                text: 'Verde',
                value: ANSWER_VALUE.WRONG,
              },
              {
                id: shortid.generate(),
                text: 'Blue',
                value: ANSWER_VALUE.WRONG,
              },
              {
                id: shortid.generate(),
                text: 'Nero',
                value: ANSWER_VALUE.WRONG,
              },
            ],
            routes: {
              [ANSWER_VALUE.CORRECT]: 2,
              [ANSWER_VALUE.WRONG]: 3,
            },
            withSubmit: true,
            styleName: '',
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
            text: 'bravo!',
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
            text: 'Sbagliato!',
          },
          {
            component: 'Layout/Footer',
            children: [
              {
                component: 'Elements/ButtonGroup',
                children: [
                  {
                    component: 'Elements/Button',
                    route: 1,
                    text: 'Ritenta',
                  },
                  {
                    component: 'Elements/Button',
                    route: 4,
                    text: 'Abbandona',
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
            text: 'Peccato!',
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

  const moveTo = useCallback(id => setCurrentNode(story.nodes[id]), []);

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
