import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  console.log("render");

  function btnPlus() {
    setCounter(++counter);
  }
  function btnMinus() {
    setCounter(--counter);
  }
  return (
    <div className="App">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">Counter</h1>
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">{counter}</p>
      <button onClick={btnMinus} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        -
      </button>
      <button onClick={btnPlus} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        +
      </button>
    </div>
  );
}

export default App;
