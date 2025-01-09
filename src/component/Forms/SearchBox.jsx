import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="position-relative">
      <input className="search-box" type="text" placeholder="Search" />
      <FiSearch className="f-15 c-lightGrey position-absolute" />
    </div>
  );
};

export default SearchBox;
