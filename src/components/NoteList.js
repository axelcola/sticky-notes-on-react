import React, { useEffect, useState } from "react";
import NavbarNotes from "./NavbarNotes";
import NewNote from "./NewNote";
import Note from "./Note";
import "./noteList.css";

const NoteList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    task.text = task.text.trim();
    const updtatedTasks = [task, ...tasks];
    setTasks(updtatedTasks);
    window.localStorage.setItem("notes", JSON.stringify(updtatedTasks));
  };
  const searcherInfo = (textsearch) => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    if (savedTasks) setTasks(savedTasks);
    if (textsearch) {
      const results = savedTasks.filter(
        (task) =>
          task.text.toLowerCase().includes(textsearch) ||
          task.title.toLowerCase().includes(textsearch)
      );
      setTasks(results);
    }
  };
  const editNote = (note) => {
    const noteToChange = tasks.map((task) => {
      if (task.id === note.id) {
        task.text = note.text;
        task.color = note.color;
        task.title = note.title;
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
      <NavbarNotes number={tasks} searcher={searcherInfo} paperbin={false} />
      <div className="container">
        <NewNote onSubmit={addTask} />
        <div className=" notelist">
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
              placeholder={task.placeholder}
              title={task.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
