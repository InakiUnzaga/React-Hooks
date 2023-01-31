import React, { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 1,
    counter2: 2,
    counter3: 3,
  });

  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>Counter: {state.counter1} </h1>
      <h2>Counter: {state.counter2} </h2>
      <h3>Counter: {state.counter3} </h3>

      <hr />

      <button
        className="btn"
        onClick={() => {
          setCounter({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
