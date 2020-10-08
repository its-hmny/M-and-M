import shortid from 'shortid';
import createStore from './createStore';

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
      text: 'Some Button inside ButtonGroup',
      styleId: 'DefaultButton',
    },
    {
      id: shortid.generate(),
      name: 'ButtonGroup',
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
  addComponent: componentName => {
    set(state => {
      state.components.push({
        id: shortid.generate(),
        name: componentName,
        text: 'Lorem ipsum dolor sit amet',
        styleId: `Default${componentName}`,
      });
    });
  },
  changeStyleId: ({ componentId, newStyleId }) => {
    set(state => {
      const component = state.components.find(component => component.id === componentId);
      component.styleId = newStyleId;
    });
  },
  removeComponent: removedId => {
    set(state => {
      state.components = state.components.filter(component => component.id !== removedId);
    });
  },
  reorderComponents: newValue => {
    set(state => void (state.components = newValue));
  },
}));

export default useTemplateStore;
