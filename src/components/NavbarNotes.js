import React from "react";
import { Link } from "wouter";
import { BiHomeAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import "./navbar.css";
import "bootstrap/dist/js/bootstrap.min.js";

const NavbarNotes = (props) => {
  const nNotes = props.number.filter((note) => note.deleted).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/sticky-notes-on-react">
          Sticky Notes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sticky-notes-on-react"
              >
                <BiHomeAlt className="icons" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sticky-notes-on-react/paper-bin"
              >
                <BsTrash className="icons" />
              </Link>
            </li>
            <li className="nav-item number-notes">
              <p className="icons">{nNotes}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNotes;
