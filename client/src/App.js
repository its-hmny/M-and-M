import React, { useState } from 'react';
import Timer from './widgets/Timer';

function App() {
  const [isPaused, setIsPaused] = useState(true);

  function togglePause() {
    setIsPaused(!isPaused);
  }

  return (
    <div className="App">
      <Timer
        value={10}
        paused={isPaused}
        onTimeout={() => console.log('TIMEOUT')}
      />
      <button onClick={() => togglePause()}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
}

export default App;
