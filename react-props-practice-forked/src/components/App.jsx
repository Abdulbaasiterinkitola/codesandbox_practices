import React from "react";
import Card from "./Card";
import Detail from "./Detail";
import contacts from "../contacts";

function CreateCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      src={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
      {/* <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name="Jack Bauer"
        src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+000 111 222"
        email="chuck@norris.com"
      /> */}
    </div>
  );
}

export default App;
