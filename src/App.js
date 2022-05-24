import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { Route } from "wouter";
import PaperBin from "./Pages/PaperBin";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Route path="/sticky-notes-on-react/paper-bin" component={PaperBin} />
      <Route path="/sticky-notes-on-react" component={NoteList} />
      <Route path="/" component={NoteList} />
      <Route path="/:rest*" component={NoteList} />
      <Footer />
    </div>
  );
}

export default App;
