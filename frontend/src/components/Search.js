import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="filter">
      <input
        onChange={onSearchChange}
        value={searchTerm}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
