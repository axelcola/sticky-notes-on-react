import React, { useState, useEffect } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineSave } from "react-icons/ai";
import { getCurrentDate } from "./getDate";
import ColorDropdown from "./ColorDropdown";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const NewNote = (props) => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("turquoise");
  const [templateColor, setTemplate] = useState("white");

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
    setTemplate("white");
  };
  const sendPrevent = (e) => {
    e.preventDefault();

    textSubmit();
  };

  const changeColor = (e) => {
    setColor(e.target.id);
    setTemplate(e.target.id);
  };

  return (
    <form>
      <div className={`newNote ${templateColor} `}>
        <TextareaAutosize
          id="inputNote"
          onChange={titleInput}
          className={`newTitle ${templateColor}`}
          placeholder="Title."
          type="text"
        />
        <TextareaAutosize
          id="inputNote"
          onChange={textInput}
          className={`newTextarea ${templateColor}`}
          placeholder="Add a new task..."
          type="text"
        />
        <div className="dropdown">
          <div className="newNote-content">
            <div className="containter-buttons">
              <button
                onClick={sendPrevent}
                className={`button-newnote ${templateColor}`}
              >
                {" "}
                <AiOutlineSave size={20} />
              </button>
              <div>
                <ColorDropdown
                  color={templateColor}
                  changeColor={changeColor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewNote;
