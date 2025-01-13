import React, { useState } from "react";
import Avatar from "../../../../public/image/dashboard/face-recognition/avatar.png";
import Pagination from "../../../component/Pagination/Pagination";
import SearchBox from "../../../component/Forms/SearchBox";

const PersonList = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // Filter detected persons based on the search query
  const filteredPersons = data?.data?.detectedPersons?.filter((person) =>
    person.suspect_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPersons = filteredPersons?.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil((filteredPersons?.length || 0) / itemsPerPage);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on search
  };

  return (
    <section className="custom-cards personalList p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="flex-grow-1 flex-none">
          <p className="f-13 Helvetica Neue mb-0">
            {filteredPersons?.length} Persons
          </p>
        </div>
        <div>
          <SearchBox onSearch={handleSearch} />
        </div>
      </div>
      <ul className="mb-0 p-0 mt-2">
        {currentPersons?.map((item, index) => (
          <li
            key={index}
            className="d-flex f-13 justify-content-between align-items-center p-2"
          >
            <small className="fw-700 Helvetica Neue">
              {/* <img
                src={`/public/image/dashboard/face-recognition/${
                  index + 1
                }.png`}
                className="radius-39"
                width={23}
                alt="i"
              /> */}
              {item.suspect_name}
            </small>
            <small className="c-lightGrey">{item.timealerts}</small>
          </li>
        ))}
        {currentPersons?.length === 0 && (
          <li className="f-13 p-2">
            <small className="d-block text-center mb-0">No data found!</small>
          </li>
        )}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default PersonList;
