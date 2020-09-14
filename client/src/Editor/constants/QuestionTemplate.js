const QuestionTemplate = [
  {
    label: 'Introduzione',
    description: "Semplice componente di introuzione per immergere l'utente nella storia",
    view: {
      component: 'View',
      children: [
        {
          component: 'Elements/Text',
          text: 'Benvenuto nella nostra prova (testo di default)',
        },
        {
          component: 'Elements/Button',
          to: undefined,
          text: 'Inizia a giocare!',
        },
      ],
    },
  },

  {
    label: 'Scelta multipla',
    description:
      'Possibili scelte ognuna con un proprio pulsante cliccabile, ogni scelta puó portare ad una strada diversa',
    view: {
      component: 'View',
      children: [
        {
          component: 'Elements/Text',
          text: 'Di che colore è il cavallo bianco di Napoleone?',
        },
        {
          component: 'Elements/Button',
          to: undefined,
          text: 'Bianco',
        },
        {
          component: 'Elements/Button',
          to: undefined,
          text: 'Verde',
        },
      ],
    },
  },

  {
    label: 'Epilogo',
    description: 'Un componente che permette di chiudere la storia in maniera narrativa',
    view: {
      component: 'View',
      children: [
        {
          component: 'Elements/Text',
          text: 'É stato bell giocare con te!',
        },
      ],
    },
  },
];

export default QuestionTemplate;
