import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { Route } from "wouter";
import PaperBin from "./Pages/PaperBin";
import Footer from "./components/Footer";
import errorPage from "./Pages/errorPage";
function App() {
  return (
    <div className="App">
      <Route path="/sticky-notes-on-react/paper-bin" component={PaperBin} />
      <Route path="/sticky-notes-on-react" component={NoteList} />
      <Route path="/" component={NoteList} />

      <Footer />
    </div>
  );
}

export default App;
