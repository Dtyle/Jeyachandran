import React, { useState } from "react";
import Alert from "../../../../public/image/dashboard/live-alert/alert.svg";
import Trespasers from "../../../../public/image/dashboard/live-alert/trespasers.png";
import Accordion from "../../../component/Accordion/Accordion";
import { AlertList } from "../utils";
import ModalBox from "../../../component/Modal/ModalBox";
import CCTVIcon from "../../../component/Icon/CCTVIcon";
import SingleDatePicker from "../../../component/Forms/SingleDatePicker";
import CustomDateUi from "../../../component/UI/CustomDateUi";

const LiveAlerts = ({ date, setDate, data }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const formattedData = [
    {
      question: "Crowd Alerts",
      count: "5", // Consider dynamically calculating the count if possible
      answer:
        data?.data?.crowsAlert?.map((item) => ({
          camera: item?.cam_name || "Unknown Camera",
          date_time: item?.timealerts || "Unknown Date/Time",
          image: "/image/dashboard/live-alert/tresspasers/trespass_1.png", // Corrected path
        })) || [], // Provide a fallback in case crowsAlert is undefined
    },
  ];

  return (
    <section className="custom-cards alerts p-3">
      <ModalBox title={details.title} open={open} setOpen={setOpen}>
        <React.Fragment>
          <div className="bg-lightblue accordion rounded d-flex f-13 justify-content-between cursor-pointer align-items-center px-3 py-2">
            <small className=" fw-700 Helvetica Neue">
              <CCTVIcon /> {details.camera}
            </small>
            <small className="c-lightGrey">{details.date_time}</small>
            <button className="c-blue Helvetica Neue">Ignore</button>
          </div>{" "}
          <img src={details.image} className="w-100 mt-2" alt="trespasers" />
        </React.Fragment>
      </ModalBox>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <img src={Alert} alt="i" />
          <div>
            <p className="fw-700 Helvetica Neue mb-0">Live Alerts</p>
            <p className="f-13 mb-0 c-lightGrey">All alerts are listed here </p>
          </div>
        </div>
        {/* <div className="Helvetica Neue d-flex align-items-center gap-2 c-lightGrey f-13 fw-700 mb-1">
          Date :{" "}
          <SingleDatePicker
            withoutBorder={true}
            date={date}
            setDate={setDate}
          />{" "}
        </div> */}
      </div>
      {/* <CustomDateUi date={date} setDate={setDate} /> */}
      <div className="d-flex align-items-center justify-content-between mt-3">
        <hr className="flex-grow-1" />
        <span className="mx-2 f-24 fw-700 Helvetica Neue c-blue">
          {data?.data?.liverAlerts}
        </span>
        <hr className="flex-grow-1" />
      </div>
      {/* <p className="text-center c-lightGrey">
        Total incidents in <span className="fw-700 c-black">65</span> areas
      </p> */}

      <Accordion
        list={[...formattedData, ...AlertList]}
        setOpen={setOpen}
        setDetails={setDetails}
      />
    </section>
  );
};

export default LiveAlerts;
