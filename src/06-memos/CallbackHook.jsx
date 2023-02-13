import React, { useCallback, useState } from "react";
import { ShowIncremet } from "./ShowIncremet";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1> useCallback hook : {counter}</h1>
      <hr />

      <ShowIncremet increment={increment} />
    </>
  );
};
