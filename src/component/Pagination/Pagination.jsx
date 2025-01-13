import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination d-flex justify-content-between align-items-center mt-2">
      <small className="f-12 c-lightGrey">
        {currentPage} of {totalPages} pages
      </small>
      <div className="d-flex gap-2">
        <IoIosArrowBack
          className="icon"
          onClick={() =>
            currentPage != 1 ? onPageChange(currentPage - 1) : undefined
          }
        />
        <IoIosArrowForward
          className="icon"
          onClick={() =>
            totalPages != currentPage
              ? onPageChange(currentPage + 1)
              : undefined
          }
        />
      </div>
    </div>
  );
};

export default Pagination;
