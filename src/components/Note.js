import React from "react";
import "./note.css";
import { BiSave } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";

const Note = ({ text, id, date, deleteNote, deleted }) => {
  return (
    <div className={deleted ? "note deleted" : "note"}>
      <textarea className="note-text-area" defaultValue={text} />
      <div className="note-content">
        <small>{date}</small>
        <div className="note-content">
          <div className="containter">
            <button className="button">
              {" "}
              <BiSave />
            </button>
            <button className="button">
              {" "}
              <IoIosColorPalette className="color-button" />
            </button>
            {deleted ? (
              <button onClick={() => deleteNote(id)} className="button">
                {" "}
                <FaTrashRestore className="color-button" />
              </button>
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
