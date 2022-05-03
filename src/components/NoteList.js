import React, { useEffect, useState } from "react";
import NavbarNotes from "./NavbarNotes";
import NewNote from "./NewNote";
import Note from "./Note";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import "./noteList.css";
import { getCurrentDate } from "./getDate";

const NoteList = () => {
  const [tasks, setTasks] = useState([]);
  // ..........................................................
  // Function to add a note with the fixed button in de screen
  const [input, setInput] = useState("");
  const [color, setColor] = useState("turquoise");

  const newNoteData = (text, colorProps) => {
    setInput(text);
    setColor(colorProps);
    console.log(input, color, text, colorProps);
  };
  const noteSubmit = () => {
    const newTask = {
      id: uuidv4(),
      text: input,
      deleted: false,
      date: getCurrentDate(),
      color: color,
      placeholder: "Empty Note",
    };
    addTask(newTask);
    document.getElementById("inputNote").value = "";
    setColor("turquoise");
    setInput("");
  };
  // ............................................................
  // ............................................................
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
      <NavbarNotes number={tasks} searcher={searcherInfo} />
      <div className="container">
        <div className=" notelist">
          <NewNote onSubmit={addTask} newNoteData={newNoteData} />
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
            />
          ))}
        </div>
      </div>
      <button className="new-note-fixed" onClick={noteSubmit}>
        <AiOutlinePlusCircle size={40} />
      </button>
    </>
  );
};

export default NoteList;
