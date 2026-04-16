import * as THREE from "three";


// For meshStandardNodeMaterial JSX element if needed
import type { MeshStandardNodeMaterial } from "three/webgpu";
import type { ThreeElements, ThreeElement } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshStandardNodeMaterial: ThreeElement<typeof MeshStandardNodeMaterial>;
  }
}


