import React, { useEffect, useState } from "react";
import NavbarNotes from "./NavbarNotes";
import NewNote from "./NewNote";
import Note from "./Note";
import "./noteList.css";
import { v4 as uuidv4 } from "uuid";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setTasks((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <NavbarNotes number={tasks} searcher={searcherInfo} paperbin={false} />
      <div className="container">
        <NewNote onSubmit={addTask} />
        <Droppable droppableId={uuidv4()} direction="horizontal">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className=" notelist"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvider) => (
                    <div
                      {...draggableProvider.draggableProps}
                      ref={draggableProvider.innerRef}
                      {...draggableProvider.dragHandleProps}
                    >
                      <Note
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
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default NoteList;

// ............................................................
// Function to add a note with the button fixed in the screen
// const [input, setInput] = useState("");
// const [color, setColor] = useState("turquoise");

// const newNoteData = (text, colorProps) => {
//   setInput(text);
//   setColor(colorProps);
//   console.log(input, color, text, colorProps);
// };
// const noteSubmit = () => {
//   const newTask = {
//     id: uuidv4(),
//     text: input,
//     deleted: false,
//     date: getCurrentDate(),
//     color: "yellow",
//     placeholder: "Empty Note",
//   };
//   addTask(newTask);
//   document.getElementById("inputNote").value = "";
//   setColor("turquoise");
//   setInput("");
// };
// ............................................................
/* <button className="new-note-fixed" onClick={noteSubmit}>
  <AiOutlinePlusCircle size={40} />
</button> */
