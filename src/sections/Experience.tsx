import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Environment, Stats } from "@react-three/drei";
import { useMobile } from "../components/hooks/useMobile";
import { EffectComposer, Vignette } from '@react-three/postprocessing'

const Experience = () => {
  const { isMobile } = useMobile();
  const showStats = import.meta.env.DEV;

  return (
    <Canvas
      shadows={!isMobile}
      dpr={isMobile ? [0.6, 0.9] : [1, 1.2]}
      camera={{ position: [0, 1.5, 5], fov: 75 }}
      performance={{ min: 0.5 }}
      gl={{
        antialias: !isMobile,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
    >
      <fog attach="fog" args={["#F9F9FB", 10, 30]} />
      <color attach="background" args={["#F9F9FB"]} />
      {showStats && <Stats />}
      <Environment preset="sunset" resolution={isMobile ? 64 : 128} />
      <ambientLight intensity={1} />
      <directionalLight
        castShadow={!isMobile}
        position={[6, 10, 4]}
        intensity={1.1}
        shadow-mapSize-width={isMobile ? 256 : 1024}
        shadow-mapSize-height={isMobile ? 256 : 1024}
        shadow-camera-near={0.5}
        shadow-camera-far={40}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-bias={-0.0001}
      />
      <Scene isMobile={isMobile} />
      {!isMobile && (
        <EffectComposer>
          <Vignette />
        </EffectComposer>
      )}
    </Canvas>
  );
};

export default Experience;
