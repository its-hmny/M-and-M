const ExampleStory = {
  title: "Pablo's story",
  nodes: [
    {
      id: 'stringid0',
      label: 'Introduzione',
      components: [
        {
          name: 'Text',
          text: 'Benvenuto nella nostra prova',
        },
        {
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
          name: 'Text',
          text: 'Di che colore è il cavallo bianco di Napoleone?',
        },
        {
          name: 'Button',
          text: 'Bianco',
          story: {
            nextNode: 2,
          },
        },
        {
          name: 'Button',
          text: 'Nero',
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
          name: 'Text',
          text: 'Sbagliato!',
        },
        {
          name: 'Footer',
          children: [
            {
              name: 'ButtonGroup',
              children: [
                {
                  name: 'Button',
                  text: 'Ritenta',
                  story: {
                    nextNode: 1,
                  },
                },
                {
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
      label: 'Sconfitta',
      components: [
        {
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
          name: 'Text',
          text: 'Indovina che animale è quello in figura!',
        },
        {
          name: 'AudioPlayer',
          srcURL: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
        },
        {
          name: 'Image',
          fallback: 'Stringa che andrà nell alt',
          description: "Breve descrizione o titolo dell'immagine",
          imgURL:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cima_da_Conegliano%2C_God_the_Father.jpg/300px-Cima_da_Conegliano%2C_God_the_Father.jpg',
        },
      ],
    },
  ],
};

export default ExampleStory;
