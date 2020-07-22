import React, { useState, useEffect } from 'react';
import Screen from './Screen';

import story from './stories/mockstory.json';

function App() {
  const { nodes } = story;
  const { layout } = nodes[7];
  //const [story, setStory] = useState(null);

  //useEffect(() => {
  //  async function loadStory() {
  //    const data = await fetch('/stories/mockstory.json');
  //    const story = await data.json();
  //    setStory(story);
  //  }

  //  loadStory();
  //}, []);

  return (
    <div className="App">
      <Screen layout={layout} />
    </div>
  );
}

export default App;
