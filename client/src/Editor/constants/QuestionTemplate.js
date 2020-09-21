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
        to: undefined,
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
        to: undefined,
        text: 'Bianco',
      },
      {
        name: 'Button',
        to: undefined,
        text: 'Verde',
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
];

export default QuestionTemplate;
