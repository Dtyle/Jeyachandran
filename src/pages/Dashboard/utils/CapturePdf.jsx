import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonWhite from "../../../component/Button/ButtonWhite";
import DownloadIcon from "../../../component/Icon/DownloadIcon";
import moment from "moment/moment";

const CapturePDF = ({ date }) => {
  const [loading, setLoading] = useState(false);

  const captureScreenAsPDF = async () => {
    try {
      setLoading(true);
      toast.info("Generating PDF, please wait...");

      const anprElement = document.getElementById("anpr-section");
      const captureBtnElement = document.getElementById("capture-btn");
      const body = document.body;

      // Hide ANPR section and set PDF mode
      if (anprElement) anprElement.style.display = "none";
      if (captureBtnElement) captureBtnElement.style.display = "none";
      body.classList.add("pdf-mode"); // Add class to adjust styling

      // Capture the full page
      const element = document.documentElement;
      const canvas = await html2canvas(element, {
        scale: 2,
        windowWidth: document.documentElement.scrollWidth, // Full width capture
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let yPosition = 0;

      while (yPosition < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, -yPosition, imgWidth, imgHeight);
        yPosition += 297; // A4 page height
        if (yPosition < imgHeight) pdf.addPage();
      }

      pdf.save(
        `Report_${moment(date)
          .format("MMM_D_YYYY")
          .toUpperCase()}_Jay_Tex_TBM.pdf`
      );

      // Restore the original state
      if (anprElement) anprElement.style.display = "block";
      if (captureBtnElement) captureBtnElement.style.display = "block";
      body.classList.remove("pdf-mode"); // Remove class

      toast.success("PDF downloaded successfully!");
    } catch (error) {
      toast.error("Failed to generate PDF. Please try again.");
      console.error("Error capturing PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="capture-btn">
      <ButtonWhite handleClick={captureScreenAsPDF} disabled={loading}>
        <DownloadIcon /> &nbsp; {loading ? "Generating..." : "Download Report"}
      </ButtonWhite>
    </div>
  );
};

export default CapturePDF;
