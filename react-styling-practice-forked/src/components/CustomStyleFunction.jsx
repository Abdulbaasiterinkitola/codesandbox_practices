import React from "react";

function CustomStyleFunction() {
  const today = new Date();
  const currentTime = today.getHours();

  let unknown;

  const customStyle = {
    color: "",
  };

  if (0 <= currentTime && currentTime < 12) {
    unknown = "Good Morning";
    customStyle.color = "red";
  } else if (12 <= currentTime && currentTime < 18) {
    unknown = "Good Afternoon";
    customStyle.color = "green";
  } else {
    unknown = "Good Evening";
    customStyle.color = "blue";
  }

  return customStyle;
}

export default CustomStyleFunction;
