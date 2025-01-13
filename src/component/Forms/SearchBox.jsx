import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="position-relative">
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
      <FiSearch className="f-15 c-lightGrey position-absolute" />
    </div>
  );
};

export default SearchBox;
