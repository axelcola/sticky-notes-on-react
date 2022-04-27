import React, { useState } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { BiCommentAdd } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { Dropdown } from "react-bootstrap";
import { getCurrentDate } from "./getDate";

const NewNote = (props) => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("newNote");

  const textInput = (e) => {
    setInput(e.target.value);
  };

  const textSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      deleted: false,
      date: getCurrentDate(),
      color: color,
    };
    props.onSubmit(newTask);
    document.getElementById("inputNote").value = "";
    setColor("newNote");
  };

  const changeColor = (newColor) => {
    setColor(newColor);
    console.log(color);
  };

  return (
    <form onSubmit={textSubmit}>
      <div className={`note ${color}`}>
        <textarea
          id="inputNote"
          onChange={textInput}
          className={`addNote-text-area ${color}`}
          placeholder="Add a new task.."
          type="text"
        ></textarea>
        <div className="dropdown">
          <div className="note-content">
            <div className="containter-buttons">
              <button className={`button-newnote ${color}`}>
                {" "}
                <BiCommentAdd />
              </button>
              <div className="button">
                <Dropdown className={`button ${color}`}>
                  <Dropdown.Toggle variant="none">
                    <IoIosColorPalette />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-target">
                    <button
                      className="drops-buttons squere red"
                      name="group1"
                      value="red"
                      type="radio"
                      id="radio-1"
                      checked={color === "red" ? true : false}
                      onClick={() => changeColor("red")}
                    >
                      <Dropdown.Item className="drop-items"></Dropdown.Item>
                    </button>
                    <button
                      className="drops-buttons squere yellow"
                      name="group1"
                      type="radio"
                      value="yellow"
                      id="radio-2"
                      checked={color === "yellow" ? true : false}
                      onClick={() => changeColor("yellow")}
                    >
                      <Dropdown.Item className="drop-items"></Dropdown.Item>
                    </button>
                    <button
                      className="drops-buttons squere green"
                      name="group1"
                      type="radio"
                      value="green"
                      id="radio-3"
                      checked={color === "green" ? true : false}
                      onClick={() => changeColor("green")}
                    >
                      <Dropdown.Item className="drop-items"></Dropdown.Item>
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewNote;
