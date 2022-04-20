import React, { useEffect, useState } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { BiSave } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";

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
      deleted: false,
    };
    props.onSubmit(newTask);
    document.getElementById("inputNote").value = "";
  };

  return (
    <form onSubmit={textSubmit}>
      <div id="newNote" className="note noteList">
        <input
          id="inputNote"
          onChange={textInput}
          className="addNote-text-area "
          placeholder="Add a new task.."
        ></input>
        <div className="dropdown">
          <div className="note-content">
            <div className="containter">
              <IoIosColorPalette className="color-button" />
              <button className="button-newnote">
                {" "}
                <BiSave />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewNote;
