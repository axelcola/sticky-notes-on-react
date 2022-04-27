import React from "react";
import "./App.css";
import { BiCommentAdd } from "react-icons/bi";
import NavbarNotes from "./components/NavbarNotes";
import NoteList from "./components/NoteList";
import { Route } from "wouter";
import PaperBin from "./Pages/PaperBin";

function App() {
  return (
    <div className="App">
      <NavbarNotes />
      <Route path="/paper-bin" component={PaperBin} />
      <Route path="/sticky-notes-on-react" component={NoteList} />
      <BiCommentAdd className="addbuttoncoso" />
    </div>
  );
}

export default App;
