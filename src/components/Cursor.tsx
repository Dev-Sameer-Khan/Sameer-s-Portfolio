
// Cursor.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveOuterX = gsap.quickTo(outerRef.current, "x", {
      duration: 0.2,
      ease: "power2.out",
    });
    const moveOuterY = gsap.quickTo(outerRef.current, "y", {
      duration: 0.2,
      ease: "power2.out",
    });

    const moveInnerX = gsap.quickSetter(innerRef.current, "x", "px");
    const moveInnerY = gsap.quickSetter(innerRef.current, "y", "px");

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      moveInnerX(clientX - 6);
      moveInnerY(clientY - 6);
      moveOuterX(clientX - 16);
      moveOuterY(clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor-shell" aria-hidden="true">
      <div
        ref={outerRef}
        className="cursor-outer"
      />

      <div
        ref={innerRef}
        className="cursor-inner"
      />
    </div>
  );
};

export default Cursor;