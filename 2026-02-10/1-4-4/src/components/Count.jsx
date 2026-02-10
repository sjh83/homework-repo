import useCounter from "../Hooks/useCounter";

export default function Count() {
  const { count, increment, decrement, reset } = useCounter(0, {
    min: 0,
    max: 10,
  });
  return (
    <div>
      <button type="button" onClick={decrement}>
        {" "}
        -{" "}
      </button>
      <span>{count}</span>
      <button type="button" onClick={increment}>
        {" "}
        +{" "}
      </button>
      <button type="button" onClick={reset}>
        초기화
      </button>
    </div>
  );
}
