import React, { useState } from "react";
import { SolvedCaseList, UnsolvedCaseList } from "../utils";
import ModalBox from "../../../component/Modal/ModalBox";
import CCTVIcon from "../../../component/Icon/CCTVIcon";

const ActionManagement = () => {
  const [checkIndex, setCheckIndex] = useState(0);
  const [subCheckIndex, setSubCheckIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  return (
    <section className="custom-cards action-management p-3 mt-3 mb-3">
      <ModalBox title={details.title} open={open} setOpen={setOpen}>
        <React.Fragment>
          <div className="bg-lightblue accordion rounded d-flex f-13 justify-content-between cursor-pointer align-items-center px-3 py-2">
            <small className=" fw-700 Helvetica Neue">
              <CCTVIcon /> {details?.camera}
            </small>
            <small className="c-lightGrey">{details?.date_time}</small>
            <button className="c-red btn-red Helvetica Neue">Ignore</button>
          </div>{" "}
          <img src={details.image} className="w-100 mt-2" alt="trespasers" />
        </React.Fragment>
      </ModalBox>
      <p className="fw-700 f-20 Helvetica Neue">Action Management</p>
      <ul className="px-0">
        {[
          { name: "Solved Cases", count: "3" },
          { name: "Unsolved Cases", count: "7" },
        ].map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer tab ${
              checkIndex === index ? "active-tab" : ""
            }`}
            onClick={() => setCheckIndex(index)}
          >
            <div className="d-flex align-items-center gap-2">
              <small>{item.name}</small>
              <div className="rounded-32 radius-39 d-flex justify-content-center align-items-center bg-grey">
                <small className="c-red Helvetica Neue fw-700">
                  {item.count}
                </small>
              </div>
            </div>
          </li>
        ))}{" "}
      </ul>
      {checkIndex === 0 && (
        <div>
          <ul className="mb-0 p-0">
            {SolvedCaseList.map((ans, i) => (
              <li
                key={i}
                onClick={() => {
                  setOpen(true);
                  setDetails({ ...ans, title: "Solved Case" });
                }}
                className="bg-lightblue accordion rounded d-flex f-13 justify-content-between cursor-pointer align-items-center px-3 py-2 mb-2"
              >
                <small className=" fw-700 Helvetica Neue">
                  <CCTVIcon /> {ans.camera}
                </small>
                <small className="c-lightGrey">{ans.date_time}</small>
                <button
                  className="c-red Helvetica Neue btn-red"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Ignore
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {checkIndex === 1 && (
        <div>
          <ul className="px-0">
            {["Priority 1", "Priority 2", "Priority 3"].map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer priority ${
                  subCheckIndex === index ? "active" : ""
                }`}
                onClick={() => setSubCheckIndex(index)}
              >
                <small>{item}</small>
              </li>
            ))}{" "}
          </ul>
          <div>
            <ul className="mb-0 p-0">
              {UnsolvedCaseList[subCheckIndex].case.map((ans, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setOpen(true);
                    setDetails({ ...ans, title: "Unsolved Case" });
                  }}
                  className="bg-lightblue accordion rounded d-flex f-13 justify-content-between cursor-pointer align-items-center px-3 py-2 mb-2"
                >
                  <small className=" fw-700 Helvetica Neue">
                    <CCTVIcon /> {ans.camera}
                  </small>
                  <small className="c-lightGrey">{ans.date_time}</small>
                  <button
                    className="c-red btn-red Helvetica Neue"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Ignore
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ActionManagement;
