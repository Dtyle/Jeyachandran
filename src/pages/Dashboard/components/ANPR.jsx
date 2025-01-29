import React from "react";
import anpr from "../../../../public/image/dashboard/anpr/anpr.svg";
import PieChart from "../../../component/chart/PieChart";
import { ColorCodes, StatebasedList, TalukbasedList } from "../utils";

const ANPR = ({ data, id }) => {
  const States = data?.anprClarification?.statebasedCount?.map(
    (item, index) => ({
      label: item.stateCode,
      count: item.count,
      color: ColorCodes[index],
    })
  );
  const Taluk = data?.anprClarification?.rtobasedCount?.map((item, index) => ({
    label: item.rtoOffice,
    count: item.count,
    color: ColorCodes[index],
  }));
  return (
    <section id={id} className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={anpr} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">ANPR Classification</p>
          <p className="f-13 mb-0 c-lightGrey">State & RTO based counts </p>
        </div>
      </div>
      <div className="border-bottom py-3">
        <PieChart title="State based count" list={States || []} />
      </div>
      <div className="py-3 mt-3">
        <PieChart title="RTO based count" list={Taluk?.slice(0, 8) || []} />
      </div>
    </section>
  );
};

export default ANPR;
