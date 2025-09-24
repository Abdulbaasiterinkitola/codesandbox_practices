//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const Root = document.getElementById("root");

ReactDOM.render(
<App />,
  Root
);

// function unknown() {
//     if (0 <= currentTime && currentTime < 12) {
//       return <h1 className={"heading red"}>Good Morning</h1>;
//     } else if (12 <= currentTime && currentTime < 18) {
//       return <h1 className={"heading green"}>Good Morning</h1>;
//     } else {
//       return <h1 className={"heading blue"}>Good Morning</h1>;
//     }
//   }

//   ReactDOM.render(
//     <div>
//       {unknown()}
//     </div>,
//     Root
//   );
