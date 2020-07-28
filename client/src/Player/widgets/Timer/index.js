import React, { useState, useEffect } from 'react';

const toTicks = (min, sec) => min * 60 + sec;

function Timer({ minutes, seconds, onTimeout, paused = false }) {
  const [ticks, setTicks] = useState(toTicks(minutes, seconds));

  useEffect(() => {
    if (ticks === 0) {
      onTimeout();
    } else {
      if (!paused) {
        const timeout = setTimeout(() => setTicks(ticks - 1), 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [ticks, paused, onTimeout]);

  return (
    <div className="Timer">
      <div className="Timer-minutes">{Math.floor(ticks / 60)}</div>
      <div className="Timer-seconds">{ticks % 60}</div>
    </div>
  );
}

export default Timer;
