import React from "react";
import "./note.css";
import { BiSave } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";

const Note = ({ text, date }) => {
  return (
    <div className="note">
      <textarea className="note-text-area">{text}</textarea>
      <div className="note-content">
        <small>{date}</small>
        <div className="note-content">
          <div className="containter">
            <IoIosColorPalette className="color-button" />
            <button className="button">
              {" "}
              <BiSave />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
