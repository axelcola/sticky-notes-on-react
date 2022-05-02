import React from "react";
import "./note.css";
import { BiTrash } from "react-icons/bi";
import { MdOutlineRestorePage } from "react-icons/md";
import ColorDropdown from "./ColorDropdown";

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
  const changeTextNote = (e) => {
    const editProps = {
      id: id,
      text: e.target.value,
      color: color,
    };
    editNote(editProps);
  };
  const changeColor = (e) => {
    const editProps = {
      id: id,
      text: text,
      color: e.target.id,
    };
    editNote(editProps);
  };

  return (
    <div className={`note ${color} ${className}`}>
      <textarea
        className={`note-text-area  ${color}`}
        defaultValue={text}
        onChange={changeTextNote}
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
                  <MdOutlineRestorePage className={`button  ${color}`} />
                </button>
                <button
                  onClick={() => deletePerm(id)}
                  className={`button  ${color}`}
                >
                  {" "}
                  <BiTrash />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => deleteNote(id)}
                  className={`button  ${color}`}
                >
                  {" "}
                  <BiTrash />
                </button>

                <ColorDropdown color={color} changeColor={changeColor} />
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
