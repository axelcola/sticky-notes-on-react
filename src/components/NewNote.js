import React, { useEffect, useState } from "react";
import "./newNote.css";
import { v4 as uuidv4 } from "uuid";
import { BiSave } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillTrashFill, BsFillCircleFill } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

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
                    <Dropdown.Item>
                      <BsFillCircleFill id="yellow" className="circle yellow" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <BsFillCircleFill id="red" className="circle red" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <BsFillCircleFill id="green" className="circle green" />
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
