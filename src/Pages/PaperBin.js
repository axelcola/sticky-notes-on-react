import React, { useEffect, useState } from "react";
import NavbarNotes from "../components/NavbarNotes";
import Note from "../components/Note";

const PaperBin = () => {
  const [delTasks, setDelTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    const delNotes = savedTasks.filter((task) => task.deleted);
    if (delNotes) setDelTasks(delNotes);
  }, []);

  const restoreNote = (id) => {
    const restoredNotes = delTasks.map((task) => {
      if (task.id === id) {
        task.deleted = !task.deleted;
      }
      return task;
    });
    setDelTasks(restoredNotes);
    window.localStorage.setItem("notes", JSON.stringify(restoredNotes));
  };
  const deletePerm = (id) => {
    if (
      window.confirm("Are you sure you want to delete this note permanently?")
    ) {
      let newNotesArray = delTasks.filter((note) => note.id !== id);
      setDelTasks(newNotesArray);
      window.localStorage.setItem("notes", JSON.stringify(newNotesArray));
    }
  };

  return (
    <>
      <NavbarNotes number={delTasks} />
      <div className="container">
        <div className=" notelist">
          {delTasks.map((task) => (
            <Note
              key={task.id}
              id={task.id}
              text={task.text}
              deleted={task.deleted}
              deleteNote={restoreNote}
              className={task.deleted ? "note" : "note deleted"}
              deletePerm={deletePerm}
              date={task.date}
              color={task.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PaperBin;
