import React, { useState } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";

const NewNote = (props) => {
  const [input, setInput] = useState("");

  const textInput = (e) => {
    setInput(e.target.value);
  };

  const textSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form onSubmit={textSubmit}>
      <div id="newNote" className="note noteList">
        <input
          onChange={textInput}
          className="addNote-text-area "
          placeholder="Add a new task.."
        ></input>
        <div className="dropdown">
          <div className="note-content">
            <p>h</p>
            <div className="containter">
              <button>D</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewNote;
