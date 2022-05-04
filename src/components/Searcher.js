import React from "react";
import "./searcher.css";
import { AiOutlineSearch } from "react-icons/ai";

const Searcher = (props) => {
  const sendInfo = (e) => {
    const info = e.target.value;
    props.searcher(info);
  };
  return (
    <>
      <div className="searcher-box mb-3">
        <AiOutlineSearch className="search-icon" />
        <input
          type="text"
          className="my-searcher"
          placeholder="Search"
          id="searcher"
          onChange={sendInfo}
        />
      </div>
    </>
  );
};

export default Searcher;
