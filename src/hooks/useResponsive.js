import { useState, useEffect } from "react";

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: windowWidth <= 480,
    isTablet: windowWidth > 480 && windowWidth <= 768,
    isDesktop: windowWidth > 768 && windowWidth <= 1024,
    isLargeDesktop: windowWidth > 1024,
    windowWidth,
  };
};

export default useResponsive;
