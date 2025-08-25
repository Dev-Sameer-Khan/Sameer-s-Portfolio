
// Cursor.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Inner circle: instant
      gsap.set(innerRef.current, {
        x: clientX - 6,
        y: clientY - 6,
      });

      // Outer circle: smooth
      gsap.to(outerRef.current, {
        duration: 0.2,
        x: clientX - 16,
        y: clientY - 16,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="max-[1025px]:hidden">
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full z-[1000] pointer-events-none mix-blend-difference"
      ></div>

      {/* Inner Circle */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[1000] pointer-events-none mix-blend-difference"
      ></div>
    </div>
  );
};

export default Cursor;
