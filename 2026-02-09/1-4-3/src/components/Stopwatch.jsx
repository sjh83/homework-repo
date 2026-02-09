import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => stop();
  }, []);
  return (
    <div>
      <h1>{time}ms</h1>
      <button onClick={start} style={{ background: "green" }}>
        start
      </button>
      <button onClick={stop} style={{ background: "red" }}>
        stop
      </button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
