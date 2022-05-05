import React, { useState, useEffect } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { getCurrentDate } from "./getDate";
import ColorDropdown from "./ColorDropdown";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const NewNote = (props) => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("turquoise");

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

  const textInput = (e) => {
    setInput(e.target.value);
    // props.newNote(e.target.value, color);
  };
  const titleInput = (e) => {
    setTitle(e.target.value);
    // props.newNote(e.target.value, color);
  };

  const textSubmit = (e) => {
    const newTask = {
      id: uuidv4(),
      text: input,
      title: title,
      deleted: false,
      date: getCurrentDate(),
      color: color,
      placeholder: "Add a new task...",
    };
    props.onSubmit(newTask);
    document.getElementById("inputNote").value = "";
    setInput("");
    setColor("turquoise");
    setTitle("");
  };
  const sendPrevent = (e) => {
    e.preventDefault();

    textSubmit();
  };

  const changeColor = (e) => {
    setColor(e.target.id);
  };

  return (
    <form>
      <div className={`note ${color}`}>
        <TextareaAutosize
          id="inputNote"
          onChange={titleInput}
          className={`title-text-area ${color}`}
          placeholder="Title."
          type="text"
        />
        <TextareaAutosize
          id="inputNote"
          onChange={textInput}
          className={`addNote-text-area ${color}`}
          placeholder="Add a new task..."
          type="text"
        />
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
