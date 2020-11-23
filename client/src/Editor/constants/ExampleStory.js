import shortid from 'shortid';

const ExampleStory = {
  title: "Pablo's story",
  nodes: [
    {
      id: 'stringid0',
      name: 'Introduzione',
      mission: 'Missione 1',
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
            nextNode: 'stringid1',
          },
        },
      ],
    },
    {
      id: 'stringid1',
      name: 'Domanda a scelta multipla',
      mission: 'Missione 1',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Di che colore è il cavallo bianco di Napoleone?',
          styleId: 'SpaceText',
        },
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Bianco',

          story: {
            nextNode: 'stringid2',
          },
        },
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Nero',
          styleId: 'SpaceButton',
          story: {
            nextNode: 'stringid3',
          },
        },
      ],
    },
    {
      id: 'stringid2',
      name: 'Corretto',
      mission: 'Missione 1',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Bravo!',
        },
      ],
    },
    {
      id: 'stringid3',
      name: 'Sbagliato',
      mission: 'Missione 2',
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

                  styleId: 'SpaceButton',
                  story: {
                    nextNode: 'stringid1',
                  },
                },
                {
                  id: shortid.generate(),
                  name: 'Button',
                  text: 'Abbandona',

                  styleId: 'SpaceButton',
                  story: {
                    nextNode: 'stringid4',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'stringid4',
      name: 'Sconfitta',
      mission: 'Missione 2',
      components: [
        {
          id: shortid.generate(),
          name: 'Text',
          text: 'Peccato!',
        },
      ],
    },
    {
      id: 'stringid5',
      name: 'Test nuovi fragment',
      mission: 'Missione 3',
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
          srcURL:
            'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
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
          correctAnswer: 'xxx',
          placeholder: 'Scrivi la tua risposta qui',
        },
        {
          id: shortid.generate(),
          name: 'TextArea',
          placeholder: 'Scrivi la tua risposta più ampia qui',
        },
      ],
    },
    {
      id: 'stringid6',
      name: 'Test singleanschoice',
      mission: 'Missione 3',
      components: [
        {
          id: shortid.generate(),
          name: 'SingleAnsChoices',
          answers: [
            {
              value: '[CORRECT]',
              id: shortid.generate(),
              text: 'Risposta 1',
            },
            {
              value: '[WRONG]',
              id: shortid.generate(),
              text: 'Risposta 2',
            },
          ],
        },
      ],
    },
    {
      id: 'stringid7',
      name: 'Test multianschoice',
      mission: 'Missione 3',
      components: [
        {
          id: shortid.generate(),
          name: 'MultiAnsChoices',
          answers: [
            {
              value: '[CORRECT]',
              id: shortid.generate(),
              text: 'Risposta 1',
            },
            {
              value: '[CORRECT]',
              id: shortid.generate(),
              text: 'Risposta 2',
            },
          ],
        },
      ],
    },
  ],
};

export default ExampleStory;
