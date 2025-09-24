import React from "react";

function Input(props) {
  return (
    <div>
      <input type={props.text} placeholder={props.username} />
      <input type={props.password} placeholder={props.passwordText} />
      <button type="submit">Login</button>;
    </div>
  );
}

export default Input;
