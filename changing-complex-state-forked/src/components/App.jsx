import React, { useState } from "react";

function App() {
  // const [lName, setLname] = useState("");
  // const [lName, setLname] = useState("");
  const [prevLname, setPrevLname] = useState("");
  const [prevFname, setPrevFname] = useState("");
  const [name, setName] = useState({
    fName: "",
    lName: "",
  });

  // function saveChanges(event) {
  //   if (event.target.name === "fName") {
  //     setPrevFname(event.target.value);
  //   } else if (event.target.name === "lName") {
  //     setPrevLname(event.target.value);
  //   }
  // }

  function whenNameChanged(event) {
    // saveChanges(event);
    if (event.target.name === "fName") {
      setName({ fName: event.target.value });
    } else if (event.target.name === "lName") {
      setName({ lName: event.target.value });
    }
  }

  // function whenFnameChanged(event) {
  //   setFname(event.target.value);
  // }
  // function whenLnameChanged(event) {
  //   setLname(event.target.value);
  // }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={whenNameChanged}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={whenNameChanged}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
