import React, { useEffect, useState } from "react";
import Note from "../components/Note";

const PaperBin = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    const delNotes = savedTasks.filter((task) => task.deleted);
    if (delNotes) setTasks(delNotes);
    console.log(delNotes);
  }, []);

  const restoreNote = (id) => {
    const restoredNotes = tasks.map((task) => {
      if (task.id === id) {
        task.deleted = !task.deleted;
      }
      return task;
    });
    setTasks(restoredNotes);
    console.log(restoredNotes, tasks);
    window.localStorage.setItem("notes", JSON.stringify(restoredNotes));
  };

  return (
    <>
      <div className="container">
        <div className=" notelist">
          {tasks.map((task) => (
            <Note
              key={task.id}
              id={task.id}
              text={task.text}
              deleted={task.deleted}
              deleteNote={restoreNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PaperBin;
