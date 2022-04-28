import React, { useState } from "react";
import "./note.css";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
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
  color,
  editNote,
}) => {
  let currentColor;
  const changeNote = (e) => {
    const editProps = {
      id: id,
      text: e.target.value,
      color: currentColor,
    };
    editNote(editProps);
  };
  const changeColor = (e) => {
    currentColor = e.target.value;
    const editProps = {
      id: id,
      text: text,
      color: e.target.id,
    };
    editNote(editProps);
    console.log(editProps);
  };

  return (
    <div className={`note ${color} ${className}`}>
      <textarea
        className={`note-text-area  ${color}`}
        defaultValue={text}
        onChange={changeNote}
      />
      <div className="note-content">
        <div className="note-content">
          <div className="containter-buttons">
            {deleted ? (
              <>
                <button
                  onClick={() => deleteNote(id)}
                  className={`button  ${color} `}
                >
                  {" "}
                  <FaTrashRestore className={`button  ${color}`} />
                </button>
                <button
                  onClick={() => deletePerm(id)}
                  className={`button  ${color}`}
                >
                  {" "}
                  <BsFillTrashFill />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => deleteNote(id)}
                  className={`button  ${color}`}
                >
                  {" "}
                  <BsFillTrashFill />
                </button>

                <Dropdown className={`button  ${color}`}>
                  <Dropdown.Toggle variant="none">
                    <IoIosColorPalette />
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
              </>
            )}
            <small className="date">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
