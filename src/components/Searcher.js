import React from "react";

const Searcher = () => {
  return (
    <>
      <div class="form-outline mb-4">
        <input type="search" class="form-control" id="datatable-search-input" />
        <label class="form-label" for="datatable-search-input">
          Search
        </label>
      </div>
      <div id="datatable"></div>
    </>
  );
};

export default Searcher;
