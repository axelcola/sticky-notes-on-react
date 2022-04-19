import React, { useEffect, useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import "./noteList.css";

const NoteList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updtatedTasks = [task, ...tasks];
      setTasks(updtatedTasks);
      window.localStorage.setItem("notes", JSON.stringify(updtatedTasks));
      console.log(tasks);
      console.log(updtatedTasks);
      console.log(task);
    }
  };
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  return (
    <div className="container">
      <div className=" notelist">
        <NewNote onSubmit={addTask} />
        {tasks.map((task) => (
          <Note key={task.id} id={task.id} text={task.text} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
