import React from "react";
import "./App.css";
import NavbarNotes from "./components/NavbarNotes";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="App">
      <NavbarNotes />
      <NoteList />
    </div>
  );
}

export default App;
