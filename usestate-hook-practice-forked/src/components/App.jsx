import React from "react";
import { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  // function updateTime() {
  //   let currentTime = new Date().toLocaleTimeString();
  //   setTime(currentTime);
  // }

  setInterval(() => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
