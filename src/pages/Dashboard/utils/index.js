import people from "../../../../public/image/dashboard/analytics/people_in&out.svg";
import face from "../../../../public/image/dashboard/analytics/face.svg";
import crowd_control from "../../../../public/image/dashboard/analytics/crowd_control.svg";
import trespassers from "../../../../public/image/dashboard/analytics/trespassers.svg";

export const AnalticsList = [
  {
    title: "People",
    image: people,
    count: "peopleIn",
    count1: "peopleOut",
    desc: "People count of enter and exited",
    color: "#E8FDEC",
  },
  {
    title: "Queue Management",
    image: face,
    count: "5",
    desc: "Limits in per queue",
    color: "#FFE9EA",
  },
  {
    title: "Busiest Floor",
    image: crowd_control,
    count: "busiestFloor",
    desc: "Busiest floor in place",
    color: "#EDEBFF",
  },
  {
    title: "Abnormal Behavior",
    image: trespassers,
    count: "0",
    desc: "Abnormalities in zone",
    color: "#FFF9E6",
  },
];

export const AlertList = [
  {
    question: "Abnormal Behavior",
    count: "0",
    answer: [
      // {
      //   camera: "CAM0003",
      //   date_time: "14th August 2024 at 02:54:31 PM",
      //   image: `/public/image/dashboard/live-alert/tresspasers/trespass_1.png`,
      // },
      // {
      //   camera: "CAM0003",
      //   date_time: "14th August 2024 at 02:54:36 PM",
      //   image: `/public/image/dashboard/live-alert/tresspasers/trespass_2.png`,
      // },
      // {
      //   camera: "CAM0003",
      //   date_time: "14th August 2024 at 02:54:47 PM",
      //   image: `/public/image/dashboard/live-alert/tresspasers/trespass_3.png`,
      // },
    ],
  },
  {
    question: "Suspect Identified",
    count: "0",
    answer: [
      // {
      //   camera: "CAM0003",
      //   date_time: "14th August 2024 at 02:54:31 PM",
      //   image: `/public/image/dashboard/live-alert/tresspasers/trespass_1.png`,
      // },
      // {
      //   camera: "CAM0003",
      //   date_time: "14th August 2024 at 02:54:47 PM",
      //   image: `/public/image/dashboard/live-alert/tresspasers/trespass_3.png`,
      // },
    ],
  },
  // {
  //   question: "Theft Alerts",
  //   count: "0",
  //   answer: [],
  // },
];
export const VehicleHead = [
  "License Number",
  "In Time",
  "Out time",
  "Duration",
];

export const StatebasedList = [
  { label: "Tamil Nadu", count: 6, color: "#BEB9E7" },
  // { label: "Kerala", count: 300, color: "#51A8FA" },
  { label: "Karnataka", count: 1, color: "#7187BA" },
  // { label: "Andhra", count: 443, color: "#E7274F" },
  // { label: "Pondichery", count: 375, color: "#F3763F" },
  // { label: "Delhi", count: 230, color: "#7187BA" },
  // { label: "Kolkata", count: 310, color: "#FECF16" },
];
export const ColorCodes = [
  "#BEB9E7",
  "#9D95DB",
  "#7D72C4",
  "#5C4FC3",
  "#4A3F9C",
  "#25204E",
  "#3F3971",
  "#1F1A3A",
  "#6B62A6",
  "#857FBF",
];

export const TalukbasedList = [
  { label: "Bengaluru", count: 1, color: "#BEB9E7" },
  { label: "Chennai(North)", count: 1, color: "#9D95DB" },
  { label: "Nagercoil", count: 1, color: "#7D72C4" },
  { label: "Virugambakkam", count: 1, color: "#5C4FC3" },
  { label: "Sholinganallur", count: 2, color: "#4A3F9C" },
  { label: "K.K. Nagar", count: 1, color: "#25204E" },
  // { label: "Anna Nagar", count: 210, color: "#FECF16" },
];
export const GenderbasedList = [
  { label: "Women", count: 68, color: "#7263E9" },
  { label: "Men", count: 32, color: "#E7B92E" },
];
export const EmotionbasedList = [
  { label: "Happy", count: 68, color: "#52CC7B" },
  { label: "Sad", count: 12, color: "#FF4444" },
  { label: "Neutral", count: 20, color: "#FFCD35" },
];
export const CrowdBasedList = [
  {
    label: "Ground Floor",
    color: "#5C4FC3",
    bgColor: "#F3F2FF",
    percentage: "8%",
  },
  {
    label: "First Floor",
    color: "#FF4444",
    bgColor: "#FFE9EA",
    percentage: "4%",
  },
  {
    label: "Second Floor",
    color: "#52CC7B",
    bgColor: "#E8FDEC",
    percentage: "3%",
  },
  {
    label: "Third Floor",
    color: "#FFCD35",
    bgColor: "#FFF9E6",
    percentage: "85%",
  },
  {
    label: "Fourth Floor",
    color: "#D8C4B6",
    bgColor: "#F5EFE7",
    percentage: "75%",
  },
];
export const AgeList = [
  { label: "13-17", percentage: 8.4 },
  { label: "18-24", percentage: 20.6, color: "#51A8FA" },
  { label: "25-34", percentage: 50.1, color: "#4EE176" },
  { label: "35-44", percentage: 14.1, color: "#E7274F" },
  { label: "45-54", percentage: 4.1, color: "#F3763F" },
  { label: "55+", percentage: 2.4, color: "#FECF16" },
];

export const NumberPlateList = [
  {
    license: "TN05AV2836",
    time: "",
    state: "4:25:40 PM",
    taluk: "-",
  },
  { license: "TN74S9314", time: "", state: "4:27:38 PM", taluk: "-" },
  {
    license: "TN10AV7276",
    time: "04:27:55 PM",
    state: "-",
    taluk: "-",
  },
  { license: "KA05MT5057", time: "", state: "4:33:07 PM", taluk: "-" },
  {
    license: "TN14AD3965",
    time: "",
    state: "4:33:34 PM",
    taluk: "-",
  },
];
export const PeopleList = [
  {
    name: "Raja",
    time: "09:47:25 AM",
  },
  {
    name: "Jhon",
    time: "09:57:45 AM",
  },
  {
    name: "Sathish",
    time: "10:20:25 AM",
  },
  {
    name: "Sweatha",
    time: "11:27:25 AM",
  },
  {
    name: "Jasmine",
    time: "12:45:55 PM",
  },
];
