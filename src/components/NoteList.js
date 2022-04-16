import React, { useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import "./noteList.css";

const NoteList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updtatedTasks = [task, ...tasks];
      setTasks(updtatedTasks);
    }
  };
  return (
    <div className="container">
      <div className="notelist">
        <NewNote onSubmit={addTask} />
        {tasks.map((task) => (
          <Note key={task.id} id={task.id} text={task.text} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
