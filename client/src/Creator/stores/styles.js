import createStore from './createStore';

import { SERVER_URL } from '../../common/constants';

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
    Camera: ['DefaultCamera'],
    SingleAnsChoicesImages: ['DefaultSingleAnsChoicesImages'],
    MultiAnsChoicesImages: ['DefaultMultiAnsChoicesImages'],
    YoutubePlayer: ['DefaultYoutubePlayer'],
  },
  styles: {
    DefaultRadio: {},
    DefaultCheckbox: {},
    DefaultChoices: {
      Root: {},
      Radio: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
      Checkbox: {},
      Button: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultSingleAnsChoices: {
      Root: {},
      Radio: {
        color: '#100000',
        backgroundColor: '#8cceb3',
      },
      Checkbox: {},
      Button: {
        color: '#100000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultMultiAnsChoices: {
      Root: {},
      Radio: {},
      Checkbox: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
      Button: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultText: {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#000000',
    },
    SpaceText: {
      fontFamily: 'Arial',
      fontSize: '30px',
    },
    DefaultButton: {
      color: '#000000',
      backgroundColor: '#8cceb3',
    },
    DefaultButtonGroup: {
      backgroundColor: 'transparent',
    },
    SpaceButtonGroup: {
      backgroundColor: '#FFFFFF',
    },
    DefaultTextArea: {
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    DefaultInput: {
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    DefaultImage: {
      width: '100%',
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    DefaultAudioPlayer: {
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
    DefaultSpacer: {
      color: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      height: '20%',
      width: '100%',
    },
    DefaultBackground: {
      backgroundImage: `url(${SERVER_URL}/default_background.jpg)`,
    },
    DefaultCamera: {
      CameraButton: {
        color: '#000000',
      },
      Button: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultSingleAnsChoicesImages: {
      Root: {},
      Image: { width: '100%' },
      Radio: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
      Checkbox: {},

      Button: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultMultiAnsChoicesImages: {
      Root: {},
      Image: { width: '100%' },
      Radio: {},
      Checkbox: { color: '#000000', backgroundColor: '#8cceb3' },
      Button: {
        color: '#000000',
        backgroundColor: '#8cceb3',
      },
    },
    DefaultYoutubePlayer: {
      width: '100%',
      height: '20%',
      color: '#000000',
      backgroundColor: '#FFFFFF',
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
