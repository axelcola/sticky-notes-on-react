import React from "react";
import "./note.css";
import { CgColorBucket } from "react-icons/cg";
import { BiTrash } from "react-icons/bi";
import { MdOutlineRestorePage } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
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

                <Dropdown className={`button  ${color} dropdown `}>
                  <Dropdown.Toggle variant="none">
                    <CgColorBucket />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-target dropdown">
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
