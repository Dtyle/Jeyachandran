import React from "react";
import emotion from "../../../../public/image/dashboard/gender/emotion.svg";
import DonutChart from "../../../component/chart/DonutChart";
import { EmotionbasedList, GenderbasedList } from "../utils";

const GenderAndEmotion = ({ data }) => {
  const GenderList = data?.data?.genderCounts?.map((item, index) => ({
    label: item.gender,
    count: item.percentage,
    color: ["#7263E9", "#E7B92E"][index],
  }));
  const EmotionList = data?.data?.emotionCounts?.map((item, index) => ({
    label: item.emotion,
    count: item.percentage,
    color: ["#52CC7B", "#FF4444", "#FFCD35"][index],
  }));
  return (
    <section className="custom-cards p-3 mb-3">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={emotion} alt="i" />
        <div>
          <p className="fw-700 Helvetica Neue mb-0">
            Gender & Emotion based count
          </p>
          <p className="f-13 mb-0 c-lightGrey">Men, women and others</p>
        </div>
      </div>
      <div className="border-bottom">
        <DonutChart title="State based count" list={GenderList || []} />
      </div>
      <div className="mt-3">
        <DonutChart title="RTO based count" list={EmotionList || []} />
      </div>
    </section>
  );
};

export default GenderAndEmotion;
