import React, { useState, useEffect } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { getCurrentDate } from "./getDate";
import ColorDropdown from "./ColorDropdown";

const NewNote = (props) => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("turquoise");

  const textInput = (e) => {
    setInput(e.target.value);
    // props.newNote(e.target.value, color);
  };

  const textSubmit = (e) => {
    const newTask = {
      id: uuidv4(),
      text: input,
      deleted: false,
      date: getCurrentDate(),
      color: color,
      placeholder: "Add a new task...",
    };
    props.onSubmit(newTask);
    document.getElementById("inputNote").value = "";
    setColor("turquoise");
    setInput("");
  };
  const sendPrevent = (e) => {
    e.preventDefault();

    textSubmit();
  };

  const changeColor = (e) => {
    setColor(e.target.id);
  };
  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 13 && e.ctrlKey) {
        e.preventDefault();
        textSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <form>
      <div className={`note ${color}`}>
        <textarea
          id="inputNote"
          onChange={textInput}
          className={`addNote-text-area ${color}`}
          placeholder="Add a new task..."
          type="text"
        ></textarea>
        <div className="dropdown">
          <div className="note-content">
            <div className="containter-buttons">
              <button
                onClick={sendPrevent}
                className={`button-newnote ${color}`}
              >
                {" "}
                <AiOutlinePlusCircle />
              </button>
              <div className="button">
                <ColorDropdown color={color} changeColor={changeColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewNote;
