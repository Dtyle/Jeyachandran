import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="pagination d-flex justify-content-between align-items-center mt-2">
      <small className="f-12 c-lightGrey">1 of 1 pages</small>
      <div className="d-flex gap-2">
        <IoIosArrowBack className="icon" />
        <IoIosArrowForward className="icon" />
      </div>
    </div>
  );
};

export default Pagination;
