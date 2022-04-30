import React, { useEffect, useState } from "react";
import NavbarNotes from "./NavbarNotes";
import NewNote from "./NewNote";
import Note from "./Note";
import "./noteList.css";
import Searcher from "./Searcher";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    if (savedTasks) setTasks(savedTasks);
    if (textsearch) {
      const results = savedTasks.filter((task) =>
        task.text.toLowerCase().includes(textsearch)
      );
      setTasks(results);
    }
  };
  const editNote = (note) => {
    const noteToChange = tasks.map((task) => {
      if (task.id === note.id) {
        task.text = note.text;
        task.color = note.color;
      }
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
    <>
      <NavbarNotes number={tasks} />
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
      <button className="new-note-fixed">
        <AiOutlinePlusCircle size={60} />
      </button>
    </>
  );
};

export default NoteList;
