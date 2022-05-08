import React, { useState, useEffect } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineSave } from "react-icons/ai";
import { getCurrentDate } from "./getDate";
import ColorDropdown from "./ColorDropdown";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import OutsideClickHandler from "react-outside-click-handler";

const NewNote = (props) => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("yellow");
  const [templateColor, setTemplate] = useState("white");
  var colorsList = [
    "yellow",
    "red",
    "green",
    "orange",
    "turquoise",
    "blue",
    "dark-blue",
    "violet",
    "pink",
    "brown",
    "grey",
  ];
  var rand = Math.floor(Math.random() * colorsList.length);
  var rColor = colorsList[rand];

  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 13 && e.ctrlKey && input !== "") {
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
    if (templateColor === "white") {
      setColor(rColor);
    }

    const newTask = {
      id: uuidv4(),
      text: input,
      title: title,
      deleted: false,
      date: getCurrentDate(),
      color: color,
    };
    props.onSubmit(newTask);
    setInput("");
    setTitle("");
    setTemplate("white");
    document.getElementById("inputNote").value = "";
  };
  const outsideSend = () => {
    if (input !== "") {
      textSubmit();
    }
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
      <OutsideClickHandler onOutsideClick={outsideSend}>
        <div className={`newNote ${templateColor} `}>
          <TextareaAutosize
            id="inputNote"
            onChange={titleInput}
            className={`newTitle ${templateColor}`}
            placeholder="Task Name"
            type="text"
            value={title}
          />
          <TextareaAutosize
            id="inputNote"
            onChange={textInput}
            className={`newTextarea ${templateColor}`}
            placeholder="Add a new task..."
            type="text"
            value={input}
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
      </OutsideClickHandler>
    </form>
  );
};

export default NewNote;
