import React from 'react';
import Timer from './widgets/Timer'

function App() {
  return (
    <div className="App">
      <Timer value={5} onTimeout={(value) => {
        console.log(`TIMEOUT! initial value was ${value}`)
      }} />
    </div>
  );
}

export default App;
