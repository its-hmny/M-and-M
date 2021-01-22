import createStore from './createStore';

import defaultBg from '../../assets/default_bg.jpg';

const useStylesStore = createStore(set => ({
  styleIds: {
    Text: ['DefaultText'],
    Button: ['DefaultButton'],
    ButtonGroup: ['DefaultButtonGroup'],
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
    Points: ['DefaultPoints'],
  },
  styles: {
    DefaultRadio: {},
    DefaultCheckbox: {},
    DefaultSingleAnsChoices: {
      Root: {},
      Radio: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
      Checkbox: {},
      Button: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
    },
    DefaultMultiAnsChoices: {
      Root: {},
      Radio: {},
      Checkbox: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
      Button: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
    },
    DefaultText: {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: 'rgba(0, 0, 0, 1.0)',
    },
    DefaultButton: {
      color: 'rgba(0, 0, 0, 1.0)',
      backgroundColor: 'rgba(140, 206, 179, 1.0)',
    },
    DefaultButtonGroup: {},
    DefaultTextArea: {
      color: 'rgba(0, 0, 0, 1.0)',
      backgroundColor: 'rgba(255,255,255,1.0)',
    },
    DefaultInput: {
      color: 'rgba(0, 0, 0, 1.0)',
      backgroundColor: 'rgba(255,255,255,1.0)',
    },
    DefaultImage: {
      width: '100%',
      color: 'rgba(0, 0, 0, 1.0)',
      backgroundColor: 'rgba(255,255,255,1.0)',
    },
    DefaultAudioPlayer: {
      color: 'rgba(0, 0, 0, 1.0)',
      backgroundColor: 'rgba(255,255,255,1.0)',
    },
    DefaultSpacer: {
      backgroundColor: 'rgba(255,255,255,1.0)',
      height: '20%',
      width: '100%',
    },
    DefaultBackground: {
      backgroundImage: `url(${defaultBg})`,
    },
    DefaultCamera: {
      CameraButton: {
        color: 'rgba(0, 0, 0, 1.0)',
      },
      Button: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
    },
    DefaultSingleAnsChoicesImages: {
      Root: {},
      Image: { width: '100%', height: '50%' },
      Radio: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
      Checkbox: {},

      Button: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
    },
    DefaultMultiAnsChoicesImages: {
      Root: {},
      Image: { width: '100%', height: '50%' },
      Radio: {},
      Checkbox: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
      Button: {
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: 'rgba(140, 206, 179, 1.0)',
      },
    },
    DefaultYoutubePlayer: {
      width: '100%',
      height: '20%',
    },
    DefaultPoints: {
      Points: {
        fontSize: 30,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 1.0)',
      },
      Text: {
        fontSize: 16,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 1.0)',
      },
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
