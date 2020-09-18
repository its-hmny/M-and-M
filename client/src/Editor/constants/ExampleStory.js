const ExampleStory = {
  nodes: [
    {
      id: 0,
      label: 'Introduzione',
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
      label: 'Domanda a scelta multipla',
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
      label: 'Corretto',
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
      label: 'Sbagliato',
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
      label: 'Sconfitta',
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
    {
      id: 5,
      label: 'Test nuovi fragment',
      color: '#fef3f4',
      view: {
        component: 'View',
        children: [
          {
            component: 'Elements/Text',
            text: 'Indovina che animale è quello in figura!',
          },
          {
            component: 'Elements/Image',
            fallback: 'Stringa che andrà nell alt',
            description: "Breve descrizione o titolo dell'immagine",
            imgURL:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cima_da_Conegliano%2C_God_the_Father.jpg/300px-Cima_da_Conegliano%2C_God_the_Father.jpg',
          },
        ],
      },
    },
  ],
};

export default ExampleStory;
