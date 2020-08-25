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
              component: 'Atoms/Link',
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