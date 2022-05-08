import React from "react";
import { Link } from "wouter";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsTrash, BsTrashFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Searcher from "./Searcher";
import Button from "react-bootstrap/Button";

const NavbarNotes = (props) => {
  const nNotes = props.number.filter((note) => note.deleted).length;

  return (
    <nav className="navbar navbar-expand-sm navbar-ligth bg-ligth mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand home" to="/sticky-notes-on-react">
          Sticky Notes
        </Link>
        {props.paperbin ? (
          <></>
        ) : (
          <div className="searcher ml-auto s-screen">
            <Searcher searcher={props.searcher} />
          </div>
        )}
        <button
          className="navbar-toggler  bg-ligth toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            {" "}
            <GiHamburgerMenu size={30} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sticky-notes-on-react"
              >
                {props.paperbin ? (
                  <AiOutlineHome className="icons" />
                ) : (
                  <AiFillHome className="icons" />
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sticky-notes-on-react/paper-bin"
              >
                {props.paperbin ? (
                  <BsTrashFill className="icons" />
                ) : (
                  <BsTrash className="icons" />
                )}
              </Link>
            </li>
            <li className="nav-item number-notes">
              <p className="icons">{nNotes}</p>
            </li>
          </ul>
          {props.paperbin ? (
            <></>
          ) : (
            <div className="searcher ml-auto l-screen">
              <Searcher searcher={props.searcher} />
            </div>
          )}
          <div className="white"></div>
          {props.paperbin ? (
            <>
              <Button variant="danger" onClick={props.deleteAll}>
                Delete All
              </Button>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarNotes;
