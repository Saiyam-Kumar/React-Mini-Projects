import { useState, useEffect } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div className="container">
      <h1>Stopwatch</h1>

      <h2>
        {String(minutes).padStart(2, "0")} :
        {String(seconds).padStart(2, "0")} :
        {String(milliseconds).padStart(2, "0")}
      </h2>

      <button onClick={() => setRunning(true)}>Start</button>

      <button onClick={() => setRunning(false)}>Stop</button>

      <button
        onClick={() => {
          setTime(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;