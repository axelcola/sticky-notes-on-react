import React, { useEffect, useState } from "react";
import Note from "../components/Note";

const PaperBin = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    const delNotes = savedTasks.filter((task) => task.deleted);
    if (delNotes) setTasks(delNotes);
  }, []);

  const restoreNote = (id) => {
    const restoredNotes = tasks.map((task) => {
      if (task.id === id) {
        task.deleted = !task.deleted;
      }
      return task;
    });
    setTasks(restoredNotes);
    window.localStorage.setItem("notes", JSON.stringify(restoredNotes));
  };
  const deletePerm = (id) => {
    if (
      window.confirm("Are you sure you want to delete this note permanently?")
    ) {
      let newNotesArray = tasks.filter((note) => note.id !== id);
      setTasks(newNotesArray);
      window.localStorage.setItem("notes", JSON.stringify(newNotesArray));
    }
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
              className={task.deleted ? "note" : "note deleted"}
              deletePerm={deletePerm}
              date={task.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PaperBin;
