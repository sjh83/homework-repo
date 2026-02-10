import { useState } from "react";
import React from "react";

export default function useCounter(value = 0, options = {}) {
  const { min, max } = options;
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount((prev) => {
      if (max !== undefined && prev >= max) return prev;
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      if (min !== undefined && prev <= min) return prev;
      return prev - 1;
    });
  };

  const reset = () => {
    setCount(value);
  };

  return { count, increment, decrement, reset };
}
