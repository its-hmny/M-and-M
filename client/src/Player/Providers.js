import React from 'react';

import { StylesProvider } from './context/styles';
import { StoryProvider } from './context/story';

import styles from '../data/styles.json';

function Providers({ children }) {
  return (
    <StylesProvider styles={styles}>
      <StoryProvider>{children}</StoryProvider>
    </StylesProvider>
  );
}

export default Providers;
