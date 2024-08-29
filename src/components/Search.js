import React from "react";

function Search( { onSearchChange, search}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" placeholder="Search..." onChange={onSearchChange} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
