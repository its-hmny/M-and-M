import shortid from 'shortid';
import createStore from './createStore';

// Maybe this should be moved somewhere else
const words = [
  'beautiful',
  'sparkly',
  'grim',
  'blue',
  'loving',
  'crappy',
  'distracted',
  'javascript',
  'OCaml...!',
];

const ANSWER_VALUE = {
  CORRECT: '[CORRECT]',
  WRONG: '[WRONG]',
};

const generateText = name =>
  `im a ${words[Math.floor(Math.random() * words.length)]} ${name}`;

export const componentBuilders = {
  Text: () => ({
    name: 'Text',
    text: generateText('Text'),
    styleId: 'DefaultText',
  }),
  Button: () => ({
    name: 'Button',
    text: generateText('Button'),
    styleId: 'DefaultButton',
  }),
  ButtonGroup: () => ({
    name: 'ButtonGroup',
    styleId: 'DefaultButtonGroup',
    children: [],
  }),
  SingleAnsChoices: () => ({
    name: 'SingleAnsChoices',
    styleId: 'DefaultSingleAnsChoices',
    withSubmit: true,
    answers: [
      {
        id: shortid.generate(),
        text: 'Bianco',
        value: ANSWER_VALUE.CORRECT,
        points: 0,
      },
      {
        id: shortid.generate(),
        text: 'Rosso',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
      {
        id: shortid.generate(),
        text: 'Blu',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
      {
        id: shortid.generate(),
        text: 'Verde',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
    ],
  }),
  MultiAnsChoices: () => ({
    name: 'MultiAnsChoices',
    styleId: 'DefaultMultiAnsChoices',
    withSubmit: true,
    answers: [
      {
        id: shortid.generate(),
        text: 'Bianco',
        value: ANSWER_VALUE.CORRECT,
        points: 0,
      },
      {
        id: shortid.generate(),
        text: 'Rosso',
        value: ANSWER_VALUE.CORRECT,
        points: 0,
      },
      {
        id: shortid.generate(),
        text: 'Blu',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
      {
        id: shortid.generate(),
        text: 'Verde',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
    ],
  }),
  TextArea: () => ({
    name: 'TextArea',
    placeholder: 'Default placeholder text',
    rows: 5,
    styleId: 'DefaultTextArea',
  }),
  Input: () => ({
    name: 'Input',
    placeholder: 'Default placeholder text',
    styleId: 'DefaultInput',
  }),
  Image: () => ({
    name: 'Image',
    imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
    fallback: 'This is the default fallback',
    styleId: 'DefaultImage',
  }),
  AudioPlayer: () => ({
    name: 'AudioPlayer',
    srcURL: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
    styleId: 'DefaultAudioPlayer',
  }),
  Background: () => ({
    name: 'Background',
    styleId: 'DefaultBackground',
  }),
  Spacer: () => ({
    name: 'Spacer',
    styleId: 'DefaultSpacer',
  }),
  Camera: () => ({
    name: 'Camera',
    styleId: 'DefaultCamera',
  }),
  SingleAnsChoicesImages: () => ({
    name: 'SingleAnsChoicesImages',
    styleId: 'DefaultSingleAnsChoicesImages',
    withSubmit: true,
    answers: [
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.CORRECT,
        points: 0,
      },
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
    ],
  }),
  MultiAnsChoicesImages: () => ({
    name: 'MultiAnsChoicesImages',
    styleId: 'DefaultMultiAnsChoicesImages',
    withSubmit: true,
    answers: [
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.CORRECT,
        points: 0,
      },
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.CORRECT,
        points: 0,
      },
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
      {
        id: shortid.generate(),
        imgURL: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
        alt: 'alt text',
        value: ANSWER_VALUE.WRONG,
        points: 0,
      },
    ],
  }),
  YoutubePlayer: () => ({
    name: 'YoutubePlayer',
    styleId: 'DefaultYoutubePlayer',
    srcURL: '',
  }),
  Points: () => ({
    name: 'Points',
    styleId: 'DefaultPoints',
    messages: [],
    story: {
      points: 0,
    },
  }),
};

const recursiveFind = (components, targetId) => {
  for (const component of components) {
    if (component.id === targetId) return component;

    if (component.children) {
      const result = recursiveFind(component.children, targetId);
      if (result) return result;
    }
  }

  return undefined;
};

const recursiveFilter = (components, targetId) =>
  components.reduce((filtered, component) => {
    if (component.id === targetId) return filtered;

    if (component.children) {
      component.children = recursiveFilter(component.children, targetId);
    }

    filtered.push(component);
    return filtered;
  }, []);

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const useTemplateStore = createStore(set => ({
  components: [
    {
      id: shortid.generate(),
      name: 'Text',
      text: 'Di che colore è il cavallo bianco di Napoleone?',
      styleId: 'DefaultText',
    },
    {
      id: shortid.generate(),
      name: 'Button',
      text: 'A Button',
      styleId: 'DefaultButton',
    },
    {
      id: shortid.generate(),
      name: 'ButtonGroup',
      styleId: 'DefaultButtonGroup',
      children: [
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Ritenta',
          styleId: 'DefaultButton',
        },
        {
          id: shortid.generate(),
          name: 'Button',
          text: 'Abbandona',
          styleId: 'DefaultButton',
        },
      ],
    },
  ],
  addComponent: (componentName, parentId) => {
    set(state => {
      let components = state.components;
      if (parentId) {
        const parent = recursiveFind(state.components, parentId);
        components = parent.children;
      }

      const component = componentBuilders[componentName]();
      components.push({
        id: shortid.generate(),
        ...component,
      });
    });
  },
  changeStyleId: ({ componentId, newStyleId }) => {
    set(state => {
      const component = recursiveFind(state.components, componentId);
      component.styleId = newStyleId;
      // Exception is not allowed so that error is raised (intended behaviour)
    });
  },
  removeComponent: removedId => {
    set(state => {
      state.components = recursiveFilter(state.components, removedId);
    });
  },
  reorderComponents: (start, end, dragListId) => {
    set(state => {
      if (dragListId) {
        // Update component sublist
        const list = recursiveFind(state.components, dragListId);
        list.children = reorder(list.children, start, end);
      } else {
        // Update top level components list
        state.components = reorder(state.components, start, end);
      }
    });
  },
}));

export default useTemplateStore;
