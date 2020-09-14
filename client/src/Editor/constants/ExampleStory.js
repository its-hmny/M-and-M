const ExampleStory = {
  nodes: [
    {
      id: 0,
      label: 'INTRO',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            text: 'Benvenuto nella nostra prova',
          },
          {
            component: 'Elements/Button',
            to: 1,
            text: 'Inizia!',
          },
        ],
      },
    },
    {
      id: 1,
      label: 'QUESTION',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            text: 'Di che colore è il cavallo bianco di Napoleone?',
          },
          {
            component: 'Elements/Button',
            to: 2,
            text: 'Bianco',
          },
          {
            component: 'Elements/Button',
            to: 3,
            text: 'Nero',
          },
        ],
      },
    },
    {
      id: 2,
      label: 'VICTORY',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            text: 'Bravo!',
          },
        ],
      },
    },
    {
      id: 3,
      label: 'WRONG_ANSWER',
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
                  { component: 'Elements/Button', to: 1, text: 'Ritenta' },
                  {
                    component: 'Elements/Button',
                    to: 4,
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
      label: 'DEFEAT',
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

export default ExampleStory;
