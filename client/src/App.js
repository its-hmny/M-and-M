import React, { useState, useEffect } from 'react';

function App() {
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function loadStory() {
      const data = await fetch('/stories/mockstory.json');
      const story = await data.json();
      setStory(story);
    }

    loadStory();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
