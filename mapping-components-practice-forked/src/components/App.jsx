import React from "react";
import emojipedia from "../emojipedia.js";
import Card from "./Card";

function CreateEmoji(emojis) {
  return (
    <Card
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
