import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      gsap.to(".custom-cursor", {
        duration: 1.3,
        x: event.clientX - 5,
        y: event.clientY - 3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor fixed z-[99999] w-3 h-3 bg-[#e4e4e7] rounded-full pointer-events-none mix-blend-difference max-[999px]:hidden"
      style={{
        opacity: 0.7,
      }}
    />
  );
};

export default Cursor;
