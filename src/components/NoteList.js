import React, { useEffect, useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import "./noteList.css";
import Searcher from "./Searcher";

const NoteList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updtatedTasks = [task, ...tasks];
      setTasks(updtatedTasks);
      window.localStorage.setItem("notes", JSON.stringify(updtatedTasks));
    }
  };
  const searcherInfo = (textsearch) => {
    if (textsearch) {
      const results = tasks.filter((task) =>
        task.text.toLowerCase().includes(textsearch)
      );
      console.log(results);
      setTasks(results);
    }
  };
  const editNote = (note) => {
    const noteToChange = tasks.map((task) => {
      if (task.id === note.id) {
        task.text = note.text;
        task.color = note.color;
      }
      console.log(note.text);
      return task;
    });
    setTasks(noteToChange);
    window.localStorage.setItem("notes", JSON.stringify(noteToChange));
  };

  const deleteNote = (id) => {
    const deletedNotes = tasks.map((task) => {
      if (task.id === id) {
        task.deleted = !task.deleted;
      }
      return task;
    });
    setTasks(deletedNotes);
    window.localStorage.setItem("notes", JSON.stringify(deletedNotes));
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  return (
    <div className="container">
      <Searcher searcher={searcherInfo} />
      <div className=" notelist">
        <NewNote onSubmit={addTask} />
        {tasks.map((task) => (
          <Note
            key={task.id}
            id={task.id}
            text={task.text}
            deleted={task.deleted}
            date={task.date}
            deleteNote={deleteNote}
            className={task.deleted ? "deleted" : ""}
            color={task.color}
            editNote={editNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
