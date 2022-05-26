import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { Route, Switch } from "wouter";
import PaperBin from "./Pages/PaperBin";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sticky-notes-on-react/paper-bin" component={PaperBin} />
        <Route path="/sticky-notes-on-react" component={NoteList} />
        <Route path="/" component={NoteList} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
