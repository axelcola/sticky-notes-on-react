import React, { useEffect, useState } from "react";
import NavbarNotes from "../components/NavbarNotes";
import Note from "../components/Note";
import "./paperBin.css";

const PaperBin = () => {
  const [tasks, setTasks] = useState([]);
  const [delTasks, setDelTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    setTasks(savedTasks);
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
      window.confirm(
        "Are you sure you want to permanently erase the items in the Trash? You can't undo this item"
      )
    ) {
      let newNotesArray = delTasks.filter((note) => note.id !== id);
      setDelTasks(newNotesArray);
      window.localStorage.setItem("notes", JSON.stringify(newNotesArray));
    }
  };
  const searcherInfo = (textsearch) => {
    const savedTasks = JSON.parse(localStorage.getItem("notes"));
    if (savedTasks) setDelTasks(savedTasks);
    if (textsearch) {
      const results = savedTasks.filter(
        (task) =>
          task.text.toLowerCase().includes(textsearch) ||
          task.title.toLowerCase().includes(textsearch)
      );
      setDelTasks(results);
    }
  };
  const deleteAllNotes = () => {
    if (
      window.confirm(
        "Are you sure you want to permanently erase all this items in the Trash? You can't undo this item"
      )
    ) {
      const newArrayNotes = tasks.filter((task) => !task.deleted);
      setDelTasks(newArrayNotes);
      setDelTasks([]);
      window.localStorage.setItem("notes", JSON.stringify(newArrayNotes));
    }
  };

  return (
    <>
      <NavbarNotes
        searcher={searcherInfo}
        number={delTasks}
        paperbin={true}
        deleteAll={deleteAllNotes}
      />
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
              title={task.title}
            />
          ))}
        </div>
      </div>
      {delTasks.length ? (
        <></>
      ) : (
        <>
          <div className="title-container">
            <h4>Deleted notes will appear here.</h4>
          </div>
        </>
      )}
    </>
  );
};

export default PaperBin;
