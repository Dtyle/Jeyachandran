import React, { useState } from 'react';
import CanvasDraw from './CanvasDraw'; // Adjust path as needed

const ParentComponent = () => {
  const [activeZone, setActiveZone] = useState('zone1');
  const [points, setPoints] = useState({
    zone1: [[50, 50], [150, 50], [100, 150]], // Example points for zone1
    zone2: [[200, 200], [250, 200], [225, 250]], // Example points for zone2
  });

  const zoneNameCtrl = {
    onChange: (newZone) => setActiveZone(newZone),
  };

  return (
    <div>
      <CanvasDraw
        zoneNameCtrl={zoneNameCtrl}
        points={points}
        inpWidth={800}
        inpHeight={600}
        active={activeZone}
        enabled={true}
        canvasFeedSrc="." // Adjust as needed
      />
    </div>
  );
};

export default ParentComponent;
