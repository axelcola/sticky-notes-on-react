import React from "react";
import "./note.css";

const Note = ({text, date}) => {
  return (
    <div className="note">
        <textarea  className="note-text-area">
         {text}
        </textarea>
        <div className="note-content">
          <small>{date}</small>
          <span>D</span>
          <span>S</span>
        </div>
      </div>
  );
};

export default Note;
