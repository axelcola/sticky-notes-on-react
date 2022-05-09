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
  title,
}) => {
  const changeTextNote = (e) => {
    const editProps = {
      id: id,
      text: e.target.value,
      color: color,
      title: title,
    };
    editNote(editProps);
  };

  const changeColor = (e) => {
    const editProps = {
      id: id,
      text: text,
      color: e.target.id,
      title: title,
    };
    editNote(editProps);
  };

  const changeTitle = (e) => {
    const editProps = {
      id: id,
      text: text,
      color: color,
      title: e.target.value,
    };
    editNote(editProps);
  };
  return (
    <div className={`note ${color} ${className}`}>
      <textarea
        className={`title-text-area  ${color}`}
        defaultValue={title}
        onChange={changeTitle}
        placeholder="Task Name"
      />

      <textarea
        className={`note-text-area  ${color}`}
        defaultValue={text}
        onChange={changeTextNote}
        placeholder="Add a new task..."
      />
      <div className="note-content">
        <div className="containter-buttons">
          {deleted ? (
            <>
              <button
                onClick={() => deleteNote(id)}
                className={`button  ${color} `}
              >
                {" "}
                <MdOutlineRestorePage
                  size={20}
                  className={`button  ${color}`}
                />
              </button>
              <button
                onClick={() => deletePerm(id)}
                className={`button  ${color}`}
              >
                {" "}
                <BiTrash size={20} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => deleteNote(id)}
                className={`button  ${color}`}
              >
                {" "}
                <BiTrash size={20} />
              </button>

              <ColorDropdown color={color} changeColor={changeColor} />
            </>
          )}
          <small className="date">{date}</small>
        </div>
      </div>
    </div>
  );
};

export default Note;
