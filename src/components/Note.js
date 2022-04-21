import React from "react";
import "./note.css";
import { BiSave } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillTrashFill, BsFillCircleFill } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

const Note = ({
  text,
  id,
  date,
  deleteNote,
  deletePerm,
  deleted,
  className,
}) => {
  return (
    <div className={className}>
      <textarea className="note-text-area" defaultValue={text} />
      <div className="note-content">
        <small>{date}</small>
        <div className="note-content">
          <div className="containter-buttons">
            <button className="button">
              {" "}
              <BiSave />
            </button>
            <div className="button">
              <Dropdown>
                <Dropdown.Toggle variant="none">
                  <IoIosColorPalette />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-target">
                  <Dropdown.Item>
                    <BsFillCircleFill id="yellow" className="circle yellow" />
                    <p className="drop-text"> In progress</p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <BsFillCircleFill id="red" className="circle red" />
                    <p className="drop-text"> Not started</p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <BsFillCircleFill id="green" className="circle green" />
                    <p className="drop-text"> Completed</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* <button className="button">
              {" "}
            </button> */}
            {deleted ? (
              <>
                <button onClick={() => deleteNote(id)} className="button">
                  {" "}
                  <FaTrashRestore className="color-button" />
                </button>
                <button onClick={() => deletePerm(id)} className="button">
                  {" "}
                  <BsFillTrashFill />
                </button>
              </>
            ) : (
              <button onClick={() => deleteNote(id)} className="button">
                {" "}
                <BsFillTrashFill />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
