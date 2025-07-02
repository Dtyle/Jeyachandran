import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import CustomInput from "../../../component/Forms/CustomInput";
import {
  FaUserAlt,
  FaUserCheck,
  FaUserSecret,
  FaWalking,
  FaRegEye,
  FaExclamationTriangle,
  FaCarCrash,
  FaPeopleArrows,
  FaDoorOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import CustomButton from "../../../component/Button/CustomButton";
import { usePostData } from "../../../hooks/useServiceApi";
import { toast } from "react-toastify";
import { postCameraDetails } from "../../../services/apiUrls";

// Use case options with icons
const useCaseOptions = [
  { id: "inout", label: "People In/Out", icon: <FaPeopleArrows /> },
  { id: "face", label: "Face Recognition", icon: <FaUserCheck /> },
  { id: "trespass", label: "Trespass", icon: <FaUserSecret /> },
  { id: "loitering", label: "Loitering", icon: <FaWalking /> },
  { id: "intrusion", label: "Intrusion", icon: <FaExclamationTriangle /> },
  { id: "doorOpen", label: "Door Open", icon: <FaDoorOpen /> },
  { id: "motion", label: "Motion Detection", icon: <FaRegEye /> },
  { id: "accident", label: "Accident", icon: <FaCarCrash /> },
  { id: "location", label: "Location Zone", icon: <FaMapMarkerAlt /> },
  { id: "unknown", label: "Unknown Person", icon: <FaUserAlt /> },
];
const initialValue = {
  rtsp_url: "",
  ip_address: "",
  username: "",
  password: "",
  port: "",
  camera_path: "",
  camera_name: "",
};
const RuleDetails = ({ lines }) => {
  const [rtspDetails, setRtspDetails] = useState(initialValue);
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const { mutate, data, isSuccess, isError, error, isPending } = usePostData({
    key: "postCameraDetails",
    url: postCameraDetails,
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      setRtspDetails(initialValue);
      setSelectedUseCase(null);
    } else if (isError) {
      toast.error(error?.response?.data?.message);
    }
  }, [isSuccess, isError]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRtspDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (
      rtspDetails.rtsp_url &&
      rtspDetails.ip_address &&
      rtspDetails.username &&
      rtspDetails.password &&
      rtspDetails.port &&
      rtspDetails.camera_path &&
      selectedUseCase &&
      Array.isArray(lines) &&
      lines.length > 0
    ) {
      const values = {
        ...rtspDetails,
        use_case_type: selectedUseCase,
        coordinates: lines,
      };

      console.log("RTSP Details Saved:", values);
      mutate(values);
    } else {
      toast.error("Please fill all details and select coordinates");
    }
  };

  const handleUseCaseSelect = (id) => {
    setSelectedUseCase(id);
  };

  return (
    <section
      className="custom-cards rule p-4 mb-4"
      style={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <h4 className="fw-bold mb-2">Use Case Details</h4>
      <small className="text-muted mb-3 d-block">Choose the Model</small>
      {/* Use Case Icons */}
      <h5 className="fw-bold mb-3">Select Use Case Type</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2">
        {useCaseOptions.map((useCase) => (
          <div
            key={useCase.id}
            className="col mb-3"
            onClick={() => handleUseCaseSelect(useCase.id)}
          >
            <div
              className="text-center h-100"
              style={{
                cursor: "pointer",
                border:
                  selectedUseCase === useCase.id
                    ? "2px solid #007bff"
                    : "1px solid #ddd",
                borderRadius: "6px",
                padding: "10px 6px",
                transition: "0.2s",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                {useCase.label}
              </div>
              <div style={{ fontSize: "24px", marginTop: "6px" }}>
                {useCase.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h5 className="fw-bold my-3">RTSP Camera Details</h5>
      <Row>
        <Col md={4} className="mb-3">
          <CustomInput
            label="Camera Name"
            type="text"
            placeholder="Enter camera name"
            key_name="camera_name"
            value={rtspDetails?.camera_name}
            Onchange={handleChange}
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomInput
            label="RTSP URl"
            type="text"
            placeholder="rtsp://46.123.43534.656"
            key_name="rtsp_url"
            value={rtspDetails?.rtsp_url}
            Onchange={handleChange}
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomInput
            label="IP Address"
            type="text"
            placeholder="e.g. 192.168.1.100"
            key_name="ip_address"
            value={rtspDetails?.ip_address}
            Onchange={handleChange}
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomInput
            label="Username"
            type="text"
            key_name="username"
            placeholder="Enter username"
            value={rtspDetails?.username}
            Onchange={handleChange}
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomInput
            label="Password"
            type="password"
            key_name="password"
            placeholder="Enter password"
            value={rtspDetails?.password}
            Onchange={handleChange}
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomInput
            label="Port"
            type="number"
            placeholder="e.g. 554"
            value={rtspDetails?.port}
            key_name="port"
            Onchange={handleChange}
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomInput
            label="Camera Path"
            type="text"
            value={rtspDetails?.camera_path}
            placeholder="e.g. /live/stream"
            key_name="camera_path"
            Onchange={handleChange}
          />
        </Col>
        <Col md={12} className="d-flex justify-content-end mb-3">
          <CustomButton btnName="Connect" handleClick={handleSave} />
        </Col>
      </Row>
    </section>
  );
};

export default RuleDetails;
