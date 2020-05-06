import React, { useState, useRef } from 'react';
import Timer from './widgets/Timer';
import NumberField from './widgets/NumberField';

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef();

  function togglePause() {
    setIsPaused(!isPaused);
  }

  return (
    <div className="App">
      <NumberField ref={ref}>
        enter number:
      </NumberField>
      <button type="button" onClick={() => console.log(ref.current.value)}>
        giovanni
      </button>
    </div>
  );
}

export default App;
