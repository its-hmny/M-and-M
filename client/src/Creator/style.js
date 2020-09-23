import React, { useCallback, useState, useContext, useReducer } from 'react';
import shortid from 'shortid';

export const StylesContext = React.createContext();

const initialState = {
  styleIds: {
    Text: ['DefaultText', 'SpaceText'],
    Button: ['DefaultButton', 'SpaceButton', 'UnderwaterButton'],
  },
  styles: {
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
  },
};

export const actions = {
  ADD_STYLE: 'ADD_STYLE',
  UPDATE_STYLE: 'UPDATE_STYLE',
  REMOVE_STYLE: 'REMOVE_STYLE',
  RENAME_STYLE: 'RENAME_STYLE',
};

const stylesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_STYLE: {
      const { componentName, styleId, baseStyleId } = payload;
      const componentStyles = state.styleIds[componentName];
      const baseStyle = state.styles[baseStyleId] || {};

      return {
        ...state,
        styleIds: {
          ...state.styleIds,
          [componentName]: [...componentStyles, styleId],
        },
        styles: {
          ...state.styles,
          [styleId]: baseStyle,
        },
      };
    }
    case actions.UPDATE_STYLE: {
      const { styleId, ...props } = payload;
      const oldStyle = state.styles[styleId];
      const newStyle = { ...oldStyle, ...props };

      return {
        ...state,
        styles: {
          ...state.styles,
          [styleId]: newStyle,
        },
      };
    }
    case actions.REMOVE_STYLE: {
      const { componentName, styleId } = payload;
      const updatedIds = state.styleIds[componentName].filter(id => id !== styleId);

      return {
        ...state,
        styleIds: {
          ...state.styleIds,
          [componentName]: updatedIds,
        },
        styles: {
          ...state.styles,
          [styleId]: null,
        },
      };
    }
    case actions.RENAME_STYLE: {
      const { componentName, oldId, newId } = payload;
      const style = state.styles[oldId];
      const updatedIds = state.styleIds[componentName].map(id => (id === oldId ? newId : id));

      return {
        ...state,
        styleIds: {
          ...state.styleIds,
          [componentName]: updatedIds,
        },
        styles: {
          ...state.styles,
          [oldId]: null,
          [newId]: style,
        },
      };
    }
    default:
      throw new Error(`[stylesReducer]: Unknown action type ${type}.`);
  }
};

export const StylesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stylesReducer, initialState);
  return <StylesContext.Provider value={[state, dispatch]}>{children}</StylesContext.Provider>;
};
