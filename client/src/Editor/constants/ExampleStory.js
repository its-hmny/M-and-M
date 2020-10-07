import shortid from 'shortid';

const ExampleStory = {
  title: "Pablo's story",
  nodes: [
    {
      id: 'stringid0',
      label: 'Introduzione',
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
          story: {
            nextNode: 1,
          },
        },
      ],
    },
    {
      id: 1,
      label: 'Domanda a scelta multipla',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Di che colore è il cavallo bianco di Napoleone?',
          styleId: 'SpaceText'
        },
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Bianco',

          story: {
            nextNode: 2,
          },
        },
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Nero',
          styleId: 'SpaceButton',
          story: {
            nextNode: 3,
          },
        },
      ],
    },
    {
      id: 2,
      label: 'Corretto',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Bravo!',
        },
      ],
    },
    {
      id: 3,
      label: 'Sbagliato',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Sbagliato!',
        },
        {
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

                  styleId: 'SpaceButton',
                  story: {
                    nextNode: 1,
                  },
                },
                {
                  id: shortid.generate(),
                  name: 'Button',
                  text: 'Abbandona',

                  styleId: 'SpaceButton',
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
      label: 'Sconfitta',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Peccato!',
        },
      ],
    },
    {
      id: 5,
      label: 'Test nuovi fragment',
      color: '#fef3f4',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Indovina che animale è quello in figura!',
        },
        {
          id: shortid.generate(),
          name: 'AudioPlayer',
          srcURL: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
        },
        {
          id: shortid.generate(),
          name: 'Image',
          fallback: 'Stringa che andrà nell alt',
          description: "Breve descrizione o titolo dell'immagine",
          imgURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cima_da_Conegliano%2C_God_the_Father.jpg/300px-Cima_da_Conegliano%2C_God_the_Father.jpg',
        },
        {
          id: shortid.generate(),
          name: 'Input',
          inputType: 'text',
          correctAnswer: "xxx",
          placeholder: "Scrivi la tua risposta qui",
        },
        {
          id: shortid.generate(),
          name: 'TextArea',
          placeholder: "Scrivi la tua risposta più ampia qui",
        },
      ],
    },
  ],
};

export default ExampleStory;
