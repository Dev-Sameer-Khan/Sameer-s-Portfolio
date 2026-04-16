import { useState, useEffect } from "react";

const REFERENCE_WIDTH = 1920;
const MOBILE_THRESHOLD = 990;

export const useMobile = () => {
  const [scaleFactor, setScaleFactor] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth / REFERENCE_WIDTH;
    }
    return 1;
  });

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= MOBILE_THRESHOLD;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setScaleFactor(window.innerWidth / REFERENCE_WIDTH);
      setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    scaleFactor,
    isMobile,
  };
};
