import React, { useState, useRef, useEffect } from "react";
import camera from "../../../../public/image/icons/camera.svg";
import { GrFormEdit } from "react-icons/gr";
import { LiaCodeBranchSolid, LiaHashtagSolid } from "react-icons/lia";
import { PiArrowUUpLeft, PiArrowUUpRight } from "react-icons/pi";
import { LuRotateCcw } from "react-icons/lu";
import { CameraFeedList } from "../utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CameraMonitor = () => {
  const [currentCamIndex, setCurrentCamIndex] = useState(0);
  const [lines, setLines] = useState([]); // Store lines state
  const [startPoint, setStartPoint] = useState(null); // Start point for line
  const [tempLine, setTempLine] = useState(null); // Temporary line for preview

  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const nextCam = () => {
    setCurrentCamIndex((prevIndex) =>
      prevIndex === CameraFeedList.length - 1 ? 0 : prevIndex + 1
    );
    resetCanvas();
  };

  const prevCam = () => {
    setCurrentCamIndex((prevIndex) =>
      prevIndex === 0 ? CameraFeedList.length - 1 : prevIndex - 1
    );
    resetCanvas();
  };

  // Reset the canvas when switching videos
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setLines([]); // Clear previous lines
      setStartPoint(null); // Clear start point for the new line
      setTempLine(null); // Clear temporary line
    }
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const { offsetX, offsetY } = e.nativeEvent;

    // Calculate percentages
    const xPercent = (offsetX / canvas.width) * 100;
    const yPercent = (offsetY / canvas.height) * 100;

    if (!startPoint) {
      // First click, set start point
      setStartPoint({ x: xPercent, y: yPercent });
      setTempLine(null); // Clear any previous temporary line
    } else {
      // Second click, finalize the line
      setLines((prevLines) => [
        ...prevLines,
        { start: startPoint, end: { x: xPercent, y: yPercent } },
      ]);
      setStartPoint(null); // Reset start point for next line
      setTempLine(null); // Clear temporary line
    }
  };

  const handleMouseMove = (e) => {
    if (startPoint) {
      const canvas = canvasRef.current;
      const { offsetX, offsetY } = e.nativeEvent;

      // Calculate percentages
      const xPercent = (offsetX / canvas.width) * 100;
      const yPercent = (offsetY / canvas.height) * 100;

      // Draw the temporary line while the cursor moves
      setTempLine({ start: startPoint, end: { x: xPercent, y: yPercent } });
    }
  };

  console.log(lines);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Helper to convert percentage to pixel
    const percentToPixel = (percent, total) => (percent / 100) * total;

    // Draw all stored lines
    lines.forEach((line) => {
      const startX = percentToPixel(line.start.x, canvas.width);
      const startY = percentToPixel(line.start.y, canvas.height);
      const endX = percentToPixel(line.end.x, canvas.width);
      const endY = percentToPixel(line.end.y, canvas.height);

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = "#34eb5c";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw a circle at the start point
      ctx.beginPath();
      ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "#34eb5c";
      ctx.fill();

      // Draw a circle at the end point
      ctx.beginPath();
      ctx.arc(endX, endY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "#34eb5c";
      ctx.fill();
    });

    // Draw the temporary line if present
    if (tempLine) {
      const startX = percentToPixel(tempLine.start.x, canvas.width);
      const startY = percentToPixel(tempLine.start.y, canvas.height);
      const endX = percentToPixel(tempLine.end.x, canvas.width);
      const endY = percentToPixel(tempLine.end.y, canvas.height);

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = "#34eb5c";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw circles for the temporary line
      ctx.beginPath();
      ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "#34eb5c";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(endX, endY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "#34eb5c";
      ctx.fill();
    }
  }, [lines, tempLine]);

  useEffect(() => {
    resetCanvas();
  }, [currentCamIndex]);

  const resetDrawing = () => {
    // Clear canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    }

    // Reset lines and currentPath state
    setLines([]);
    setStartPoint(null); // Clear the start point state
    setTempLine(null); // Clear the temporary line
  };

  const Submit = () => {
    const result = lines.map((item) => [item.start.x, item.start.y]);

    // Add the last object's end value
    const lastObject = lines[lines.length - 1];
    result.push([lastObject.end.x, lastObject.end.y]);

    console.log(result);
  };
  return (
    <section className="custom-cards monitor p-3">
      <div className="d-flex justify-content-between pagination">
        <p className="f-14 Helvetica Neue mb-0">
          <img src={camera} alt="i" /> {CameraFeedList[currentCamIndex].title}
        </p>
        <div className="d-flex gap-2">
          <IoIosArrowBack onClick={prevCam} className="icons" />
          <IoIosArrowForward onClick={nextCam} className="icons" />
        </div>
      </div>

      <div className="mt-3 d-flex position-relative">
        <div style={{ position: "relative", width: "100%" }}>
          <video
            ref={videoRef}
            className="w-100"
            autoPlay
            muted
            key={currentCamIndex}
          >
            <source
              src={CameraFeedList[currentCamIndex].video}
              type="video/mp4"
            />
          </video>
          <canvas
            ref={canvasRef}
            width={videoRef.current?.clientWidth || 800}
            height={videoRef.current?.clientHeight || 450}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: "1px solid transparent",
              cursor: "crosshair",
            }}
            onClick={startDrawing} // Handle the line drawing on click
            onMouseMove={handleMouseMove} // Handle the temporary line while moving the cursor
          />
        </div>

        <div
          className="px-3 d-flex flex-column justify-content-between"
          style={{ paddingBottom: "60px" }}
        >
          <div>
            <GrFormEdit className="icon active mb-2" />
            <LiaHashtagSolid className="icon mb-2" />
            <LiaCodeBranchSolid className="icon mb-2" onClick={Submit} />
          </div>
          <div>
            <PiArrowUUpLeft className="icon mb-2" />
            <PiArrowUUpRight className="icon mb-2" />
            <LuRotateCcw className="icon" onClick={resetDrawing} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraMonitor;
