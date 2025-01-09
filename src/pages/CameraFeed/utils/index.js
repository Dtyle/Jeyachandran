import CustomInput from "../../../component/Forms/CustomInput";
import Email from "../../../../public/image/social-media/mail.svg";
import Telegram from "../../../../public/image/social-media/telegram.svg";
import Whatsapp from "../../../../public/image/social-media/whatsapp.svg";

export const CustemAlertField = [
  {
    tag: CustomInput,
    type: "text",
    placeholder: "Enter email address",
    image: Email,
  },
  {
    tag: CustomInput,
    type: "text",
    placeholder: "Enter Whatsapp number",
    image: Whatsapp,
  },
  {
    tag: CustomInput,
    type: "text",
    placeholder: "Enter Telegram number",
    image: Telegram,
  },
];

export const CameraFeedList = [
  {
    title: "CAM 001 / Vehicle-Wrong-Way",
    video: "/public/image/camera-feed/vehicle.mp4",
  },
  {
    title: "CAM 002 / Trespass-in-Counter",
    video: "/public/image/camera-feed/trespass_in_counter.mp4",
  },
  {
    title: "CAM 003 / Counter-Crowd",
    video: "/public/image/camera-feed/counter_crowed.mp4",
  },
  {
    title: "CAM 004 / Bill-Counter-Crowd",
    video: "/public/image/camera-feed/Billcounter_crowed.mp4",
  },
];

export const SolvedCaseList = [
  {
    camera: "CAM0003",
    date_time: "14th August 2024 at 02:54:31 PM",
    image: `/public/image/dashboard/live-alert/tresspasers/trespass_1.png`,
  },
  {
    camera: "CAM0003",
    date_time: "14th August 2024 at 02:54:36 PM",
    image: `/public/image/dashboard/live-alert/tresspasers/trespass_2.png`,
  },
  {
    camera: "CAM0003",
    date_time: "14th August 2024 at 02:54:47 PM",
    image: `/public/image/dashboard/live-alert/tresspasers/trespass_3.png`,
  },
];
export const UnsolvedCaseList = [
  {
    case: [
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:31 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_1.png`,
      },
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:36 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_2.png`,
      },
    ],
  },
  {
    case: [
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:31 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_1.png`,
      },
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:36 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_2.png`,
      },
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:47 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_3.png`,
      },
    ],
  },
  {
    case: [
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:31 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_1.png`,
      },
      {
        camera: "CAM0003",
        date_time: "14th August 2024 at 02:54:36 PM",
        image: `/public/image/dashboard/live-alert/tresspasers/trespass_2.png`,
      },
    ],
  },
];
