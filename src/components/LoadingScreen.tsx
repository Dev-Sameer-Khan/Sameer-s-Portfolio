import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";


const LoadingScreen = () => {
  const { progress, loaded, total } = useProgress();
  const [showButton, setShowButton] = useState(false);
  const [_hide, setHide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // GSAP animate the progress bar and on complete, show the button
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (progress === 100 && loaded === total && !showButton) {
      // Animate out the loading text, animate in the button
      gsap.to(".loading-text", {
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => setShowButton(true),
      });
    }
  }, [progress, loaded, total, showButton]);

  // When button is clicked, gracefully fade out loading screen
  const handleContinue = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.7,
        ease: "power1.inOut",
        onComplete: () => setHide(true),
      });
    }
  };


  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        zIndex: 99999999,
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #ffe3ee 0%, #ffe8f5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Sakura petals falling in the background */}
      {/* <Sakura zIndex={0} count={35} wind={1.2} speed={1} /> */}

      <div
        style={{
          zIndex: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 340,
          maxWidth: "90%",
          padding: "2.2rem 2rem",
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.77)",
          borderRadius: 30,
          boxShadow: "0 8px 60px 0 rgba(255,190,220,0.35)"
        }}
      >
        {/* Sakura blossom icon */}
        <span
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            userSelect: "none",
            filter: "drop-shadow(0 2px 8px #ffb6d5e0)"
          }}
        >
          🌸
        </span>

        {/* Loading text and progress bar */}
        {!showButton && (
          <>
            <div
              className="loading-text"
              style={{
                fontWeight: 700,
                fontSize: "1.4rem",
                marginBottom: "2.5rem",
                letterSpacing: "0.02em",
                color: "#d13b85",
                transition: "opacity 0.5s",
                textShadow: "0 1px 8px #fff8, 0 0px 2px #d13b8540",
                textAlign: "center",
              }}
            >
              Loading your hanami experience...
            </div>
            <div
              style={{
                width: "210px",
                height: "14px",
                borderRadius: "12px",
                background: "#ffe1f1",
                boxShadow: "0 1px 10px #ffd1eb30",
                overflow: "hidden",
                marginBottom: "0.8rem",
              }}
            >
              <div
                ref={progressBarRef}
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #ff81b7 0%, #ffe3ee 100%)",
                  borderRadius: "12px",
                  boxShadow: "0 0 4px #fff3fb80",
                  transition: "width 0.5s",
                }}
              />
            </div>
            <div style={{ color: "#d13b85", fontWeight: 500, fontSize: "1rem" }}>{Math.round(progress)}%</div>
          </>
        )}
        {showButton && (
          <button
            aria-label="Continue"
            onClick={handleContinue}
            style={{
              marginTop: "2rem",
              padding: "0.8em 2.6em",
              borderRadius: "22px",
              border: "none",
              fontWeight: 700,
              fontSize: "1.15rem",
              letterSpacing: "0.02em",
              color: "#fff",
              background: "linear-gradient(90deg,#ff81b7 15%,#f97bb9 55%,#ffe3ee 100%)",
              boxShadow: "0 4px 30px #ffb5d720, 0 0 0 2px #fff2",
              cursor: "pointer",
              transition: "transform 0.2s,box-shadow 0.2s,background 0.3s",
              outline: "none",
            }}
            onMouseDown={e => (e.currentTarget.style.transform = "scale(0.98)")}
            onMouseUp={e => (e.currentTarget.style.transform = "")}
          >
            Enter the garden
          </button>
        )}
      </div>
      {showButton && (
      <iframe style={{position : "absolute" , opacity :0, pointerEvents : "none"}} width="560" height="315" src="https://www.youtube.com/embed/ss0laiW8Yw4?si=7cbViwGmkEqe5Ahw&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )}
    </div>
  );
};

export default LoadingScreen;