import createStore from './createStore';

const useStylesStore = createStore(set => ({
  styleIds: {
    Text: ['DefaultText', 'SpaceText'],
    Button: ['DefaultButton', 'SpaceButton', 'UnderwaterButton'],
    ButtonGroup: ['DefaultButtonGroup', 'SpaceButtonGroup'],
    Radio: ['DefaultRadio'],
    Checkbox: ['Checkbox'],
    SingleAnsChoices: ['DefaultSingleAnsChoices'],
    MultiAnsChoices: ['DefaultMultiAnsChoices'],
    TextArea: ['DefaultTextArea'],
    Input: ['DefaultInput'],
    Image: ['DefaultImage'],
    AudioPlayer: ['DefaultAudioPlayer'],
    Spacer: ['DefaultSpacer'],
    Background: ['DefaultBackground'],
  },
  styles: {
    DefaultRadio: {},
    DefaultCheckbox: {},
    DefaultChoices: {
      Root: {},
      Radio: {
        color: '#000',
        backgroundColor: '#8cceb3',
      },
      Checkbox: {},
      Button: {
        color: '#000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultSingleAnsChoices: {
      Root: {},
      Radio: {
        color: '#100',
        backgroundColor: '#8cceb3',
      },
      Checkbox: {},
      Button: {
        color: '#100',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultMultiAnsChoices: {
      Root: {},
      Radio: {
        color: '#000',
        backgroundColor: '#8cceb3',
      },
      Checkbox: {},
      Button: {
        color: '#000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultText: {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#000',
    },
    SpaceText: {
      fontFamily: 'Arial',
      fontSize: '30px',
    },
    DefaultButton: {
      color: '#000',
      backgroundColor: '#8cceb3',
    },
    SpaceButton: {
      fontFamily: 'Arial',
      backgroundColor: 'blue',
      color: 'white',
    },
    UnderwaterButton: {
      fontFamily: 'Arial',
      backgroundColor: 'aqua',
      color: 'white',
    },
    DefaultButtonGroup: {
      backgroundColor: 'transparent',
    },
    SpaceButtonGroup: {
      backgroundColor: 'white',
    },
    DefaultTextArea: {
      color: 'black',
      backgroundColor: 'white',
    },
    DefaultInput: {
      color: 'black',
      backgroundColor: 'white',
    },
    DefaultImage: {
      width: '100%',
      color: 'black',
      backgroundColor: 'white',
    },
    DefaultAudioPlayer: {
      color: 'black',
      backgroundColor: 'white',
    },
    DefaultSpacer: {
      color: 'white',
      backgroundColor: 'white',
      height: '20%',
      width: '100%',
    },
    DefaultBackground: {
      backgroundImage: 'url(http://localhost:8000/default_background.jpg)',
    },
  },
  addStyle: ({ componentName, styleId, baseStyleId }) => {
    set(state => {
      state.styleIds[componentName].push(styleId);
      state.styles[styleId] = state.styles[baseStyleId] || {};
    });
  },
  updateStyle: ({ styleId, ...subStyle }, parentStyleId) => {
    set(state => {
      if (parentStyleId) {
        console.log(parentStyleId, styleId, subStyle);
        state.styles[parentStyleId][styleId] = {
          ...state.styles[parentStyleId][styleId],
          ...subStyle,
        };
      } else {
        state.styles[styleId] = { ...state.styles[styleId], ...subStyle };
      }
    });
  },
  removeStyle: ({ componentName, styleId }) => {
    set(state => {
      const updatedIds = state.styleIds[componentName].filter(id => id !== styleId);
      state.styleIds[componentName] = updatedIds;
      state.styles[styleId] = null;
    });
  },
  renameStyle: ({ componentName, oldId, newId }) => {
    set(state => {
      const updatedIds = state.styleIds[componentName].map(id =>
        id === oldId ? newId : id
      );
      state.styleIds[componentName] = updatedIds;
      state.styles[newId] = state.styles[oldId];
      state.styles[oldId] = null;
    });
  },
}));

export default useStylesStore;
