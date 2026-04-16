import { useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

import * as THREE from "three";
import { Avatar } from "../components/models/Avatar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import TreeBG from "../components/TreeBG";
import CameraParallax from "../components/MouseMove";

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ isMobile = false }: { isMobile?: boolean }) => {
  const parent = useRef<THREE.Group>(null);

  /** GSAP animates this; mouse parallax adds on top in CameraParallax */
  const cameraBase = useRef({ x: 0, y: 1.5, z: 5 });

  const { viewport } = useThree();

  const avatar = useRef<THREE.Group>(null);
  const roadDashCount = useMemo(
    () => {
      const density = isMobile ? 6 : 3;
      return Math.ceil((viewport.height * 25) / density);
    },
    [isMobile, viewport.height],
  );

  useGSAP(
    () => {
      const avatarGroup = avatar.current;
      const contentGroup = parent.current;
      if (!avatarGroup || !contentGroup) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#parent",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        defaults: { ease: "none" },
      });

      tl.to(
        cameraBase.current,
        {
          x: -5,
          z: 0,
          y: 3,
          duration: 0.5,
        },
        "a",
      )
        .to(
          contentGroup.position,
          {
            x: -5,
            duration: 0.5,
          },
          "a",
        )
        .to(
          contentGroup.position,
          {
            x: -78,
            duration: 5,
          },
          "b",
        );
      // .to(camera.position,{
      //   x : 0
      // },">-4")
      // .to(camera.lookAt,{
      //   x : 10
      // },">")
      // .to(camera.position,{
      //   x : -5
      // },">")
    },
    { dependencies: [] },
  );

  return (
    <>
    {/* <PositionalAudio distance={20} url=""/> */}
      <CameraParallax base={cameraBase} enabled={!isMobile} />
      {/* <SakuraTree position={[0,-2,-10]} scale={0.2}/>
      <SakuraTree position={[0,-2,10]} scale={0.2}/> */}

      <Avatar ref={avatar} scale={isMobile ? 1.8 : 2} position-y={-1} />
      {/* <VelocityGround width={viewport.width * 4} height={viewport.height * 6} /> */}
      <mesh rotation-x={-Math.PI / 2} position-y={-1} receiveShadow={!isMobile}>
        <planeGeometry args={[viewport.width * 6, viewport.height * 10]} />
        <meshStandardMaterial color={"#FFC0CB"} />
      </mesh>

      <group ref={parent}>
        {/* Road */}
        <group rotation-y={Math.PI / 2}>
          <mesh rotation-x={-Math.PI / 2} position-y={-0.98} receiveShadow={!isMobile}>
            {/* Road body */}
            <planeGeometry args={[3, viewport.height * 25]} />
            <meshStandardMaterial color={"#222"} />
          </mesh>
          {/* Center lines (dashes) */}
          <group>
            {Array.from({ length: roadDashCount }).map((_, i) => (
              <mesh
                key={i}
                position={[0, -0.97 + 0.01, -viewport.height * 5 + i * 3 + 1.5]}
                rotation-x={-Math.PI / 2}
                receiveShadow
              >
                <planeGeometry args={[0.2, 1.2]} />
                <meshStandardMaterial color="#fff" />
              </mesh>
            ))}
          </group>
        </group>
        <TreeBG count={isMobile ? 2 : 4} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </group>
    </>
  );
};

export default Scene;
