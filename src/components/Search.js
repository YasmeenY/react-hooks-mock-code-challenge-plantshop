import React from "react";

function Search({searchHandler, searchQuery}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
}

export default Search;
