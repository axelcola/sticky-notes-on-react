import React, { useState } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgColorBucket } from "react-icons/cg";
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

  const changeColor = (e) => {
    setColor(e.target.id);
  };

  return (
    <form onSubmit={textSubmit}>
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
              <button className={`button-newnote ${color}`}>
                {" "}
                <AiOutlinePlusCircle />
              </button>
              <div className="button">
                <Dropdown className={`button ${color}`}>
                  <Dropdown.Toggle variant="none">
                    <CgColorBucket />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-target">
                    <Dropdown.Item>
                      <div
                        onClick={changeColor}
                        id="green"
                        className="squere green"
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div
                        className="squere yellow"
                        onClick={changeColor}
                        id="yellow"
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div
                        className="squere red"
                        onClick={changeColor}
                        id="red"
                      />
                    </Dropdown.Item>
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
