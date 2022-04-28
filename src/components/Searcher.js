import React from "react";

const Searcher = (props) => {
  const sendInfo = (e) => {
    const info = e.target.value;
    props.searcher(info);
    console.log(info);
  };
  return (
    <>
      <input
        type="search"
        className="form-control mb-3"
        placeholder="Search"
        id="searcher"
        onChange={sendInfo}
      />
    </>
  );
};

export default Searcher;
