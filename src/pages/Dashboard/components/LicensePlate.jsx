import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import licence from "../../../../public/image/dashboard/licence/licence.svg";
import vehicle from "../../../../public/image/dashboard/licence/car.svg";
import CustomTable from "../../../component/Table/CustomTable";
import Pagination from "../../../component/Pagination/Pagination";
import { VehicleHead } from "../utils";
import SearchBox from "../../../component/Forms/SearchBox";

const LicensePlate = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter vehicles based on the search query
  const filteredVehicles = data?.vehiclesListed?.filter((vehicle) =>
    vehicle?.licenseNumber?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVehicles = filteredVehicles?.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil((filteredVehicles?.length || 0) / itemsPerPage);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page on search
  };

  return (
    <div className="custom-cards px-2 mb-3">
      <Row className="camera-overview">
        <Col xs={12} md={5} className="p-3 box1 pdf-col">
          <div className="d-flex align-items-center gap-3 mb-3">
            <img src={licence} alt="i" />
            <div>
              <p className="fw-700 Helvetica Neue mb-0">
                License Plate Recognition
              </p>
              <p className="f-13 mb-0 c-lightGrey">Recognized vehicles</p>
            </div>
          </div>
          <p className="mb-0 f-12 fw-700 ms-2 mt-3">Total Number of vehicles</p>
          <small className="f-12 c-lightGrey ms-2">
            Here you can see the total count of vehicles
          </small>
          <div className="d-flex justify-content-center py-3 mt-4">
            <img src={vehicle} alt="vehicle" />
          </div>
          <p className="text-center f-14">Total vehicles</p>
          <h3 className="text-center fw-700 f-32 mb-0">
            {data?.totalNumberOfVehicles}
          </h3>
        </Col>
        <Col xs={12} md={7} id="anpr-section">
          <div className="py-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="f-14 fw-600 mb-0">
                {filteredVehicles?.length || 0} vehicles listed
              </p>
              <SearchBox onSearch={handleSearch} />
            </div>
            <CustomTable header={VehicleHead} list={currentVehicles} />
            {/* Pagination Component */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LicensePlate;
