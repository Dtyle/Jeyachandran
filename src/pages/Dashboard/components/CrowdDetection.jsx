import React, { useState } from "react";
import crowd from "../../../../public/image/dashboard/crowd-detection/crowd.svg";
import { Col, Row } from "react-bootstrap";
import { CrowdBasedList } from "../utils";
import { BsFillSquareFill } from "react-icons/bs";
import MultiLineChart from "../../../component/chart/MultiLineChart";
import SingleDatePicker from "../../../component/Forms/SingleDatePicker";
import { useFetchData } from "../../../hooks/useServiceApi";
import { getTraffic_analysis } from "../../../services/apiUrls";
import moment from "moment";

const CrowdDetection = () => {
  const [date, setDate] = useState(null);
  const { data: Traffic } = useFetchData({
    key: "getTraffic_analysis",
    url: getTraffic_analysis,
  });
  const Slots = Traffic?.data?.timeline?.map((item) =>
    moment(item, "hh:mm:ss A").format("hh:mm A")
  );
  const floorOrder = [
    "groundfloor",
    "firstfloor",
    "secondfloor",
    "thirdfloor",
    "fourthfloor",
  ];

  const sortedData = Traffic?.data?.todayTimelineGraph?.sort(
    (a, b) =>
      floorOrder.indexOf(a.floor_name) - floorOrder.indexOf(b.floor_name)
  );
  let PeopleCounts = Traffic?.data?.floorCount?.sort(
    (a, b) =>
      floorOrder.indexOf(a.floor_name) - floorOrder.indexOf(b.floor_name)
  );
  PeopleCounts = PeopleCounts?.map((item) => item?.totalPeople);
  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={crowd} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">Traffic Analysis</p>
          <p className="f-13 mb-0 c-lightGrey">Section based Traffic</p>
        </div>
      </div>
      <Row>
        {CrowdBasedList.map((item, index) => (
          <Col key={index} xs={6} sm={6} md={3} className="px-1 mb-2">
            <div className="rounded-4 p-3" style={{ background: item.bgColor }}>
              <p className="fw-600 f-13 mb-2 bg-white p-2 rounded">
                {" "}
                <BsFillSquareFill
                  className="f-10 square-icon"
                  style={{ color: item.color }}
                />
                &nbsp; {item.label}
              </p>{" "}
              <h3 className="f-20 mb-0 Helvetica Neue fw-700">
                {PeopleCounts?.[index] ? PeopleCounts[index] : "0"}
              </h3>
            </div>
          </Col>
        ))}
      </Row>
      <div className="mt-3">
        <div className="py-2 mb-2 d-flex justify-content-between">
          <p className="Helvetica Neue f-13 fw-700 mb-1 ps-2 border-with-curved-ends">
            Today Time line Graph analytics
          </p>
          {/* <div className="Helvetica Neue d-flex align-items-center gap-2 c-lightGrey f-13 fw-700 mb-1">
            Date :{" "}
            <SingleDatePicker
              withoutBorder={true}
              date={date}
              setDate={setDate}
            />{" "}
          </div>
          <p></p> */}
        </div>
        <MultiLineChart labels={Slots} list={sortedData} />
      </div>
    </section>
  );
};

export default CrowdDetection;
