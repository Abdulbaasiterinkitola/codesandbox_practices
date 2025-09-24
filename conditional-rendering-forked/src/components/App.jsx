import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );

  // How && is Used:
  // <div className="container">{
  //   isLoggedIn && <h1>Hello</h1>
  // }</div>;
}

export default App;
