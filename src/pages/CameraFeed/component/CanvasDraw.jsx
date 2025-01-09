import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
// import { LiveFeedService } from "../services/live-feed.service"; // Assuming it's already set up

const CanvasDraw = ({
  zoneNameCtrl,
  points,
  inpWidth,
  inpHeight,
  active,
  enabled,
  canvasFeedSrc,
}) => {
  const canvasRef = useRef(null);
  const [canvasCtx, setCanvasCtx] = useState(null);
  const [activePoint, setActivePoint] = useState(null);
  const [isDraggingPolygon, setIsDraggingPolygon] = useState(false);
  const [dragOffset, setDragOffset] = useState([]);
  const [scenarioOptions, setScenarioOptions] = useState({});
  const [palette, setPalette] = useState({});

  // Canvas drawing functions
  const draw = () => {
    if (!canvasCtx) return;

    canvasCtx.clearRect(
      0,
      0,
      canvasRef.current?.width,
      canvasRef.current?.height
    );

    Object.keys(points).forEach((key) => {
      if (key === active) return;

      const pointArray = points[key];
      if (pointArray.length > 0) {
        drawSingle(pointArray, key);
      }
    });
  };

  const drawSingle = (points, key) => {
    if (!canvasCtx) return;

    canvasCtx.beginPath();
    points.forEach((point) => {
      canvasCtx.lineTo(point[0], point[1]);
    });
    canvasCtx.closePath();

    // Set text color and alignment
    const centerX =
      points.reduce((sum, point) => sum + point[0], 0) / points.length;
    const centerY =
      points.reduce((sum, point) => sum + point[1], 0) / points.length;
    canvasCtx.font = "bold 12px Arial";
    canvasCtx.fillStyle = "#FFFFFF";
    canvasCtx.textAlign = "center";
    canvasCtx.fillText(key, centerX, centerY - 10);

    const fillColor = hexToRgb(palette[key] || "#20D1FD");
    canvasCtx.fillStyle = `rgba(${fillColor.r}, ${fillColor.g}, ${fillColor.b}, 0.3)`;
    canvasCtx.fill();
    canvasCtx.stroke();

    // Draw the points
    points.forEach((point) => {
      canvasCtx.fillStyle = "rgb(255,255,255)";
      canvasCtx.strokeStyle = palette[key] || "#20D1FD";
      canvasCtx.fillRect(point[0] - 4, point[1] - 4, 8, 8);
      canvasCtx.strokeRect(point[0] - 4, point[1] - 4, 8, 8);
    });
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const getMousePos = (evt) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x =
      ((evt.pageX - rect.left - window.scrollX) / rect.width) *
      canvasRef.current.width;
    const y =
      ((evt.pageY - rect.top - window.scrollY) / rect.height) *
      canvasRef.current.height;
    return { x, y };
  };

  // Handling Mouse events (mousedown, mouseup, etc.)
  const onMouseDown = (e) => {
    if (!enabled || !canvasCtx) return;

    const pointsArray = points[active];
    if (!pointsArray) return;

    e.preventDefault();

    const { x, y } = getMousePos(e.nativeEvent);
    let minDis = 0;
    let minDisIndex = -1;
    pointsArray.forEach((point, i) => {
      const dis = Math.sqrt(
        Math.pow(x - point[0], 2) + Math.pow(y - point[1], 2)
      );
      if (minDisIndex === -1 || minDis > dis) {
        minDis = dis;
        minDisIndex = i;
      }
    });

    if (minDis < 8 && minDisIndex >= 0) {
      setActivePoint(minDisIndex);
      canvasRef.current.addEventListener("mousemove", movePoint);
    }

    if (pointsArray.length >= 3 && isPointInPolygon(pointsArray, x, y)) {
      setIsDraggingPolygon(true);
      setDragOffset(pointsArray.map((point) => [x - point[0], y - point[1]]));
      canvasRef.current.addEventListener("mousemove", movePolygon);
    }

    let insertAt = pointsArray.length;
    pointsArray.forEach((point, i) => {
      if (i > 1) {
        const lineDis = dotLineLength(
          x,
          y,
          point[0],
          point[1],
          pointsArray[i - 1][0],
          pointsArray[i - 1][1],
          true
        );
        if (lineDis < 6) insertAt = i;
      }
    });

    pointsArray.splice(insertAt, 0, [Math.round(x), Math.round(y)]);
    setActivePoint(insertAt);
    canvasRef.current.addEventListener("mousemove", movePoint);
    draw();
  };

  const movePoint = (e) => {
    const { x, y } = getMousePos(e);
    const updatedPoints = [...points[active]];
    updatedPoints[activePoint][0] = Math.round(x);
    updatedPoints[activePoint][1] = Math.round(y);
    setPalette({ ...palette }); // Trigger rerender of points
    draw();
  };

  const movePolygon = (e) => {
    const { x, y } = getMousePos(e);
    const updatedPoints = [...points[active]];

    updatedPoints.forEach((point, i) => {
      point[0] = Math.round(x - dragOffset[i][0]);
      point[1] = Math.round(y - dragOffset[i][1]);
    });

    setPalette({ ...palette }); // Trigger rerender of points
    draw();
  };

  const stopDrag = () => {
    canvasRef.current.removeEventListener("mousemove", movePoint);
    canvasRef.current.removeEventListener("mousemove", movePolygon);
    setActivePoint(null);
    setIsDraggingPolygon(false);
  };

  // React Lifecycle: Initial Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (context) {
      setCanvasCtx(context);
    }

    if (canvas) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    // Get scenario list once on mount
    //     const fetchScenarioList = async () => {
    //       const scenarioList = await LiveFeedService.getScenarioList();
    //       setScenarioOptions(scenarioList);
    //     };
    //     fetchScenarioList();

    // Cleanup event listeners
    return () => {
      canvas?.removeEventListener("mousemove", movePoint);
      canvas?.removeEventListener("mousemove", movePolygon);
    };
  }, [points, active]);

  useEffect(() => {
    if (zoneNameCtrl) {
      const debouncedZoneChange = debounce((val) => {
        if (active !== val) {
          // handle zone name change logic
        }
      }, 200);
      zoneNameCtrl.onChange(debouncedZoneChange);
    }
  }, [zoneNameCtrl, active]);
  const onRightClick = (e) => {
    e.preventDefault(); // Prevent the default context menu
    // Your right-click logic here
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseUp={stopDrag}
      onContextMenu={onRightClick}
      width={inpWidth}
      height={inpHeight}
    />
  );
};

export default CanvasDraw;
