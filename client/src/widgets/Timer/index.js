import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ value, paused = false, onTimeout }) => {
  const [seconds, setSeconds] = useState(value);
  const onTimeoutRef = useRef();

  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  });

  useEffect(() => {
    if (seconds === 0) {
      onTimeoutRef.current();
    } else {
      if (!paused) {
        const timeout = setTimeout(() => setSeconds(seconds - 1), 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [seconds, paused]);

  return (
    <div className="Timer">
      <div className="Timer-minutes">{Math.floor(seconds / 60)}</div>
      <div className="Timer-seconds">{seconds % 60}</div>
    </div>
  );
};
export default Timer;
