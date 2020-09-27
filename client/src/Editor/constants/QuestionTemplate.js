/* Contains question templates formatted as story nodes */
const QuestionTemplate = [
  {
    label: 'Introduzione',
    description: "Semplice componente di introduzione per immergere l'utente nella storia",
    components: [
      {
        name: 'Text',
        text: 'Benvenuto nella nostra prova (testo di default)',
      },
      {
        name: 'Button',
        text: 'Inizia a giocare!',
        story: {
          nextNode: undefined,
        },
        styleId: 'DefaultButton',
      },
    ],
  },
  {
    label: 'Scelta multipla',
    description:
      'Possibili scelte ognuna con un proprio pulsante cliccabile, ogni scelta puó portare ad una strada diversa',
    components: [
      {
        name: 'Text',
        text: 'Di che colore è il cavallo bianco di Napoleone?',
      },
      {
        name: 'Button',
        story: {
          nextNode: undefined,
        },
        text: 'Bianco',
      },
      {
        name: 'Button',
        story: {
          nextNode: undefined,
        },
        text: 'Verde',
      },
    ],
  },
  {
    label: 'Domanda e immagine',
    description:
      "L'utente deve rispondere a una domanda controllando/valutando l'immagine",
    components: [
      {
        name: 'Text',
        text: 'Chi è quello?',
      },
      {
        name: 'Image',
        imgURL: '',
        description: 'Optional description',
        fallback: 'An optional fallback in case something goes wrong'
      },
      {
        name: 'Input',
        placeholder: 'User response goes here',
      },
    ],
  },
  {
    label: 'Memo vocale',
    description:
      'Semplice componente per far ascoltare un audio MP4 al giocatore ',
    components: [
      {
        name: 'AudioPlayer',
        srcURL: '',
      },
      {
        name: 'Input',
        placeholder: 'Placeholder here'
      }
    ],
  },
  {
    label: 'Epilogo',
    description: 'Un componente che permette di chiudere la storia in maniera narrativa',
    components: [
      {
        name: 'Text',
        text: 'É stato bell giocare con te!',
      },
    ],
  },
];

export default QuestionTemplate;
