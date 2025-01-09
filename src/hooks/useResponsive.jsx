import { useState, useEffect } from "react";

function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    isMobileDevice: undefined,
    isMobile: undefined,
    isLaptop: undefined,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const isMobileDevice = width < 568;
      const isMobile = width < 768;
      const isLaptop = width > 768;

      setWindowSize({
        width,
        isMobileDevice,
        isMobile,
        isLaptop,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useResponsive;
