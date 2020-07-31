import React, { useContext } from 'react';

import styles from '../styles.json';

const StylesContext = React.createContext();

function StylesProvider({ children }) {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
}

function useStyles(key) {
  const styles = useContext(StylesContext);
  if (styles == null) {
    throw new Error('useStyles must be used inside a StylesProvider');
  }

  return styles[key] || {};
}

export { StylesProvider, useStyles };
