import shortid from 'shortid';

export const ANSWER_VALUE = {
  CORRECT: '[CORRECT]',
  WRONG: '[WRONG]',
};

export const fakeStories = {
  0: {
    nodes: [
      {
        id: 0,
        name: 'INTRO',
        components: [
          {
            id: shortid.generate(),
            name: 'Text',
            text: 'Benvenuto nella nostra prova',
          },
          {
            id: shortid.generate(),
            name: 'Button',
            text: 'Inizia!',
            styleId: 'SpaceButton',
            story: {
              nextNode: 1,
            },
          },
        ],
      },
      {
        id: 1,
        name: 'QUESTION',
        components: [
          {
            id: shortid.generate(),
            name: 'Text',
            text: 'Di che colore è il cavallo bianco di Napoleone?',
          },
          {
            id: shortid.generate(),
            name: 'Choices',
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
            story: {
              nextNode: {
                [ANSWER_VALUE.CORRECT]: 2,
                [ANSWER_VALUE.WRONG]: 3,
              },
            },
            withSubmit: true,
            styleId: '',
          },
        ],
      },
      {
        id: 2,
        name: 'VICTORY',
        components: [
          {
            id: shortid.generate(),
            name: 'Text',
            text: 'bravo!',
          },
        ],
      },
      {
        id: 3,
        name: 'WRONG_ANSWER',
        components: [
          {
            id: shortid.generate(),
            name: 'Text',
            text: 'Sbagliato!',
          },
          {
            id: shortid.generate(),
            name: 'Footer',
            children: [
              {
                id: shortid.generate(),
                name: 'ButtonGroup',
                children: [
                  {
                    id: shortid.generate(),
                    name: 'Button',
                    text: 'Ritenta',
                    story: {
                      nextNode: 1,
                    },
                  },
                  {
                    id: shortid.generate(),
                    name: 'Button',
                    text: 'Abbandona',
                    story: {
                      nextNode: 4,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'DEFEAT',
        components: [
          {
            id: shortid.generate(),
            name: 'Text',
            text: 'Peccato!',
          },
        ],
      },
    ],
  },
};
