import React from "react";
import Avatar from "../../../../public/image/dashboard/face-recognition/avatar.png";
import Pagination from "../../../component/Pagination/Pagination";
import SearchBox from "../../../component/Forms/SearchBox";
import { PeopleList } from "../utils";

const PersonList = ({ data }) => {
  return (
    <section className="custom-cards personalList p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="flex-grow-1 flex-none">
          <p className="f-13 Helvetica Neue mb-0">
            {data?.data?.detectedPersons?.length} Persons
          </p>
          <p className="f-11 mb-0 c-lightGrey">Today, 08:36 pm</p>
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
      <ul className="mb-0 p-0 mt-2">
        {data?.data?.detectedPersons?.map((item, index) => (
          <li
            key={index}
            className="d-flex f-13 justify-content-between align-items-center p-2"
          >
            <small className=" fw-700 Helvetica Neue">
              <img
                src={`/public/image/dashboard/face-recognition/${
                  index + 1
                }.png`}
                className="radius-39"
                width={23}
                alt="i"
              />
              &nbsp; {item.suspect_name}
            </small>
            <small className="c-lightGrey">{item.timealerts}</small>
          </li>
        ))}
        {data?.data?.detectedPersons?.length === 0 && (
          <li>
            <small className="d-block text-center mb-0">No data found!</small>
          </li>
        )}
      </ul>
      <Pagination />
    </section>
  );
};

export default PersonList;
