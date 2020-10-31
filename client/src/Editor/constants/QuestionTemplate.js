/* Contains question templates formatted as story nodes */
const QuestionTemplate = [
  {
    label: 'Introduzione',
    description:
      "Semplice componente di introduzione per immergere l'utente nella storia",
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
        fallback: 'An optional fallback in case something goes wrong',
      },
      {
        name: 'Input',
        placeholder: 'User response goes here',
      },
    ],
  },
  {
    label: 'Memo vocale',
    description: 'Semplice componente per far ascoltare un audio MP4 al giocatore ',
    components: [
      {
        name: 'AudioPlayer',
        srcURL: '',
      },
      {
        name: 'Input',
        placeholder: 'Placeholder here',
      },
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
  {
    label: 'Single Answer',
    description:
      'Frammento con piu risposte predefinite di cui solo una e pero quella corretta e valida',
    components: [
      {
        name: 'Text',
        text: 'Domanda placeholder',
      },
      {
        name: 'SingleAnsChoices',
        answers: [
          {
            text: 'Risposta 1',
            value: '[CORRECT]',
          },
          {
            text: 'Risposta 2',
            value: '[WRONG]',
          },
          {
            text: 'Risposta 2 Bis',
            value: '[WRONG]',
          },
          {
            text: 'Risposta 3',
            value: '[WRONG]',
          },
        ],
        withSubmit: 'true',
      },
    ],
  },
  {
    label: 'Multiple Answer',
    description:
      'Frammento con piu risposte predefinite e piu risposte corrette, tutte debbono essere selezionate per avere una risposta corretta globalmente',
    components: [
      {
        name: 'Text',
        text: 'Domanda placeholder',
      },
      {
        name: 'MultiAnsChoices',
        answers: [
          {
            text: 'Risposta 1',
            value: '[CORRECT]',
          },
          {
            text: 'Risposta 2',
            value: '[CORRECT]',
          },
          {
            text: 'Risposta 2 Bis',
            value: '[WRONG]',
          },
          {
            text: 'Risposta 3',
            value: '[WRONG]',
          },
        ],
        withSubmit: 'true',
      },
    ],
  },
];

export default QuestionTemplate;
