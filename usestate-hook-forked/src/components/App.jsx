import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function OnClickIncrease() {
    setCount(count + 1);
  }
  function OnClickDecrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={OnClickIncrease}>+</button>
      <button onClick={OnClickDecrease}>-</button>
    </div>
  );
}

export default App;
