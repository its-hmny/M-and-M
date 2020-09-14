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
      label: 'QUESTION',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            children: 'Di che colore è il cavallo bianco di Napoleone?',
          },
          {
            component: 'Elements/Button',
            to: 2,
            children: 'Bianco',
          },
          {
            component: 'Elements/Button',
            to: 3,
            children: 'Nero',
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
            children: 'bravo!',
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
            children: 'Peccato!',
          },
        ],
      },
    },
  ],
};

export default ExampleStory;
