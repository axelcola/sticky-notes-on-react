import React, { useState } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { BiSave } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { getCurrentDate } from "./getDate";

const NewNote = (props) => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("red");

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
  };

  const changeColor = (newColor) => {
    setColor(newColor);
    console.log(color);
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
            <div className="containter-buttons">
              <button className="button-newnote">
                {" "}
                <BiSave />
              </button>
              <div className="button">
                <Dropdown className="button newNote">
                  <Dropdown.Toggle variant="none">
                    <IoIosColorPalette />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-target">
                    <button
                      className="drops-buttons"
                      name="group1"
                      value="red"
                      type="radio"
                      id="radio-1"
                      checked={color === "red" ? true : false}
                      onClick={() => changeColor("red")}
                    >
                      <Dropdown.Item className="drop-items">
                        <BsFillCircleFill id="red" className="circle red" />

                        <p className="drop-text"> In progress</p>
                      </Dropdown.Item>
                    </button>
                    <button
                      className="drops-buttons"
                      name="group1"
                      type="radio"
                      value="yellow"
                      id="radio-2"
                      checked={color === "yellow" ? true : false}
                      onClick={() => changeColor("yellow")}
                    >
                      <Dropdown.Item className="drop-items">
                        <BsFillCircleFill
                          id="yellow"
                          className="circle yellow"
                        />
                        <p className="drop-text"> Not started</p>
                      </Dropdown.Item>
                    </button>
                    <button
                      className="drops-buttons"
                      name="group1"
                      type="radio"
                      value="green"
                      id="radio-3"
                      checked={color === "green" ? true : false}
                      onClick={() => changeColor("green")}
                    >
                      <Dropdown.Item className="drop-items">
                        <BsFillCircleFill id="green" className="circle green" />
                        <p className="drop-text"> Completed</p>
                      </Dropdown.Item>
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="color-indicator">
                <BsFillCircleFill
                  id="red"
                  className={`circle indicator ${color}`}
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
