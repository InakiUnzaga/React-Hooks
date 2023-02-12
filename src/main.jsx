import React from "react";
import ReactDOM from "react-dom/client";
//import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHookj";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { HooksApp } from "./HooksApp";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Layout />
  //</React.StrictMode>
);
