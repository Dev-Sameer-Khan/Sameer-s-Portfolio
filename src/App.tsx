
import Experience from './sections/Experience'
import Sakura from './components/Sakura';
import { useState, useEffect } from 'react';



const App = () => {


const [isMobile, setIsMobile] = useState(() => window.innerWidth < 500);
const [isLowEndDevice] = useState(() => {
  const nav = navigator as Navigator & {
    deviceMemory?: number;
  };
  const lowCores = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
  return lowCores || lowMemory;
});

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 500);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  
  return (
    <>
    {isMobile && (
      <>
      <div style={{height:"100vh", width : "100%", position:"fixed", pointerEvents :"none", zIndex:9999999,         background: "linear-gradient(135deg, #ffe3ee 0%, #ffe8f5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden", textTransform: "uppercase", textAlign : "center", fontSize : "5vw"}}>
        <h1>Please Rotate Your Phone</h1>
        </div>
        <div style={{height:"100vh", width : "100%", position:"fixed", pointerEvents :"none", zIndex:9999999,}}>
        <Sakura count={isLowEndDevice ? 14 : 30} wind={1.4} speed={1.2} zIndex={1} />
      </div>
      </>
    )}
      <div id='parent' style={{height:"1000vh", width : "100%"}}>
        <div style={{height:"100vh", width : "100%", position:"fixed"}}>
          <Experience/>
        </div>
        <div style={{height:"100vh", width : "100%", position:"fixed", pointerEvents :"none"}}>
          <Sakura
            count={isLowEndDevice ? 16 : isMobile ? 24 : 50}
            wind={1.4}
            speed={isLowEndDevice ? 0.9 : 1.2}
            zIndex={1}
          />
        </div>
      </div>
    </>
  )
}

export default App