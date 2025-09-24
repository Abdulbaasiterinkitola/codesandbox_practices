import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function createNote(eachNote) {
//   return <Note key={eachNote.key} title={eachNote.title} content={eachNote.content} />;
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((eachNote) => (
        <Note
          key={eachNote.key}
          title={eachNote.title}
          content={eachNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
