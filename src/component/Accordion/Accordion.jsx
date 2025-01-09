import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CCTVIcon from "../Icon/CCTVIcon";

const Accordion = ({ list, setOpen, setDetails }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="accordion">
      {list?.map((item, index) => (
        <div
          className={`${
            openIndex === index ? "bg-lightblue" : "bg-grey"
          } box mt-2 py-2`}
          key={index}
        >
          <div
            className="d-flex justify-content-between align-items-center cursor"
            onClick={() => toggleFaq(index)}
          >
            <p className="question Helvetica Neue fw-700 f-14 px-2 py-1 mb-0">
              {item.question}
            </p>{" "}
            <div className="d-flex align-items-center gap-2">
              <div className="rounded-32 radius-39 d-flex justify-content-center align-items-center bg-white">
                <small className="c-red Helvetica Neue fw-700">
                  {item.count}
                </small>
              </div>
              <div className="arrow ">
                {openIndex !== index ? (
                  <IoIosArrowDown
                    className="cursor-pointer f-18 mx-2"
                    onClick={() => toggleFaq(index)}
                  />
                ) : (
                  <IoIosArrowUp
                    className="cursor-pointer f-18 mx-2"
                    onClick={() => toggleFaq(index)}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`accordion-answer mx-3 ${
              openIndex === index ? "open mt-3" : ""
            }`}
          >
            {/* <p className="mt-2 mb-0">{item.answer}</p> */}
            {item.answer.length > 0 ? (
              <ul className="mb-0 p-0">
                {item.answer.map((ans, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setOpen(true);
                      setDetails({ ...ans, title: item.question });
                    }}
                    className="d-flex f-13 justify-content-between cursor-pointer align-items-center px-3 py-1"
                  >
                    <small className=" fw-700 Helvetica Neue">
                      <CCTVIcon /> {ans.camera}
                    </small>
                    <small className="c-lightGrey">{ans.date_time}</small>
                    <button
                      className="c-blue Helvetica Neue"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Ignore
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-0 text-center f-13">No Data!</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
