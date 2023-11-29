import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;

// notes
// Whenever we are rendering something in canvas it has to be spacial 3D property to turn this into 3D which is not 3D for this  we have to use react 3 Drei
