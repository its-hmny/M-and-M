import React, { useState } from 'react';

import { StoryProvider } from './story-context';
import Choice from './components/Choice';

const story = {
  nodes: [
    {
      id: 0,
      answers: { next: 1, stay: 0 },
      question: 'sono sul nodo 0. dove vado?',
    },
    {
      id: 1,
      answers: { next: 2, stay: 1 },
      question: 'sono sul nodo 1. dove vado?',
    },
    {
      id: 2,
      answers: { next: 0, stay: 2 },
      question: 'sono sul nodo 2. dove vado?',
    },
  ],
};

function App() {
  return (
    <StoryProvider story={story}>
      <div className="App">
        <Choice />
      </div>
    </StoryProvider>
  );
}

export default App;
