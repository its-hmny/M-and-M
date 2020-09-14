import React, { useCallback, useState, useContext } from 'react';

const StylesContext = React.createContext();

const initialState = {
  'Elements/Text': {
    DefaultText: {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#000',
    },
    SpaceText: {
      fontFamily: 'Arial',
      fontSize: '30px',
    },
  },
  'Elements/Button': {
    DefaultButton: {
      color: '#000',
      backgroundColor: '#8cceb3',
    },
    SpaceButton: {
      fontFamily: 'Arial',
      backgroundColor: 'blue',
      color: 'white',
    },
    SubmarineButton: {
      fontFamily: 'Arial',
      backgroundColor: 'aqua',
      color: 'white',
    },
  },
};

export const StylesProvider = ({ children }) => {
  const [styles, setStyles] = useState(initialState);

  return (
    <StylesContext.Provider value={{ styles, setStyles }}>
      {children}
    </StylesContext.Provider>
  );
};

export const useStyle = (componentName, styleId) => {
  const value = useContext(StylesContext);
  if (value == null) {
    throw new Error('useStyle must be used inside a StylesProvider');
  }

  const { styles, setStyles } = value;
  if (!styles[componentName][styleId]) {
    throw new Error(`Unknown style with id ${styleId}`);
  }

  const updateStyle = useCallback(
    style => {
      setStyles(styles => {
        return {
          ...styles,
          [componentName]: {
            ...styles[componentName],
            [styleId]: { ...styles[componentName][styleId], ...style },
          },
        };
      });
    },
    [componentName, setStyles, styleId]
  );

  const addStyle = useCallback(
    newStyleId => {
      setStyles(styles => {
        return {
          ...styles,
          [componentName]: {
            ...styles[componentName],
            [newStyleId]: { ...styles[componentName][styleId] },
          },
        };
      });
    },
    [componentName, setStyles, styleId]
  );

  const updateStyleName = useCallback(
    (oldStyleName, newStyleName) => {
      setStyles(styles => {
        const oldStyle = styles[componentName][oldStyleName];
        delete styles[componentName][oldStyleName];

        return {
          ...styles,
          [componentName]: {
            ...styles[componentName],
            [newStyleName]: { ...oldStyle },
          },
        };
      });
    },
    [componentName, setStyles]
  );

  const removeStyle = useCallback(
    target => {
      setStyles(styles => {
        const clean = styles[componentName];
        delete clean[target];
        return {
          ...styles,
          [componentName]: {
            ...clean,
          },
        };
      });
    },
    [componentName, setStyles]
  );

  return {
    style: styles[componentName][styleId],
    addStyle,
    updateStyle,
    updateStyleName,
    removeStyle,
    styleNames: Object.keys(styles[componentName]),
  };
};
