import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { Route } from "wouter";
import PaperBin from "./Pages/PaperBin";

function App() {
  return (
    <div className="App">
      <Route path="/paper-bin" component={PaperBin} />
      <Route path="/sticky-notes-on-react" component={NoteList} />
    </div>
  );
}

export default App;
