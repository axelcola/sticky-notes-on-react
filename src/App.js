import React from "react";
import "./App.css";
import NavbarNotes from "./components/NavbarNotes";
import NoteList from "./components/NoteList";
import { Route } from "wouter";
import PaperBin from "./Pages/PaperBin";

function App() {
  return (
    <div className="App">
      <NavbarNotes />
      <Route path="/paper-bin" component={PaperBin} />
      <Route path="/home" component={NoteList} />
    </div>
  );
}

export default App;
