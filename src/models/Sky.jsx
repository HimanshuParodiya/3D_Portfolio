import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene); // is a hook from the @react-three/drei library for loading 3D models.  //   The result, stored in the sky variable, contains information about the loaded 3D model, including its scene.
  const skyRef = useRef();

  useFrame((_, delta) => {
    //  It represents the time, in seconds, that has passed since the last frame. This is often used in animations to ensure that the movement is smooth and consistent, regardless of the frame rate.
    // if (isRotating) {
    skyRef.current.rotation.y += 0.1 * delta;
    // }
  });
  return (
    <mesh ref={skyRef}>
      {/* why aren't we using background image instead of 3d model because when we gonna drag or rotate the island background will also move  */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;

// *Note If you were using a <div> and getting an error, it's likely because Three.js expects Three.js-specific elements for 3D rendering, and a <div> is not one of them. When you switched to using <mesh>, you are now using a valid Three.js component for creating 3D objects.
