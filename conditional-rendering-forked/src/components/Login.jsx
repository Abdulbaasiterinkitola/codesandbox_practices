import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <div>
      <form className="form">
        <Input
          text="text"
          password="password"
          username="Username"
          passwordText="Password"
        />
      </form>
    </div>
  );
}

export default Login;
