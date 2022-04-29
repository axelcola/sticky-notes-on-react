import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { Route } from "wouter";
import PaperBin from "./Pages/PaperBin";

function App() {
  return (
    <div className="App">
      <Route path="/sticky-notes-on-react/paper-bin" component={PaperBin} />
      <Route path="/sticky-notes-on-react" component={NoteList} />
      <Route path="/" component={NoteList} />
      <div className="credits">
        <h6>Made in React ⚛️ By Axel Cola</h6>
        <h6>Fueled by ☕ and 🧉</h6>
      </div>
    </div>
  );
}

export default App;
