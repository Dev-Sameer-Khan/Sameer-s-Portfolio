import { useEffect, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type CameraBase = { x: number; y: number; z: number };

const PARALLAX_XY = 0.3;
const LERP = 0.08;

const CameraParallax = ({
  base,
  enabled = true,
}: {
  base: MutableRefObject<CameraBase>;
  enabled?: boolean;
}) => {
  const mouse = useRef({ x: 0, y: 0 });
  const offset = useRef(new THREE.Vector3());
  const targetOffset = useRef(new THREE.Vector3());

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, [enabled]);

  useFrame(({ camera }) => {
    const b = base.current;
    if (!enabled) {
      camera.position.set(b.x, b.y, b.z);
      camera.lookAt(0, 0, 0);
      return;
    }

    targetOffset.current.set(
      mouse.current.x * PARALLAX_XY,
      mouse.current.y * PARALLAX_XY,
      0
    );
    offset.current.lerp(targetOffset.current, LERP);

    camera.position.set(
      b.x + offset.current.x,
      b.y + offset.current.y,
      b.z + offset.current.z
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraParallax;
