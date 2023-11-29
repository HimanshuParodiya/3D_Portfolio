import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../Components";
import { Island, Sky } from "../models";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43]; // for x axis y axis and z axis
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [isIslandScale, isIslandPosition, rotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full  h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }} // object wouldn't render that are near(0.1) to camera and far(1000) from camera
      >
        {/* Canvas is a key component that represents the rendering area where the 3D graphics are displayed (So all 3d light and object will be inside the canvas) */}
        <Suspense
          fallback={<Loader />} // show loader while 3D object is loading
        >
          {/* suspense created as wrapper and it is used for rendering the loading screen */}
          {/* now we need lights to show our object because without lights we can't see objects */}
          {/* Now let's discuss about lights  */}
          {/* -------------------- directionalLight */}
          {/* directionalLight simulates the light coming from distance source like the sunlight to our island */}
          {/* intensity of brightness */}
          {/* position of sunLight  */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* -------------------- ambientLight */}
          {/* ambientLight illuminate all objects in scene equally without casting shadows */}
          {/* Ambient light contributes to the overall brightness of the scene and ensures that objects are visible even in areas where there is no direct light. */}
          <ambientLight intensity={0.5} />
          {/* -------------------- pointLight */}
          {/* Point light emits light in all directions from a single point */}
          {/* in this case we don't need it because we have directionalLight and ambientLight */}
          {/* <pointLight /> */}
          {/* -------------------- spotLight */}
          {/* spotLight is similar to pointLight but here in shape of cone and we can also provide an angle  */}
          {/* in this case we don't need it because we have directionalLight and ambientLight */}
          {/* <spotLight /> */}
          {/* -------------------- hemisphereLight  */}
          {/* it illuminate the scene with gradient */}
          {/* "illuminates the scene," we mean that the light source brightens and lights up the objects and surfaces in a 3D environment */}
          <hemisphereLight
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />

          {/* now let's create some sky at the background to make it more better */}
          <Sky />

          <Island
            position={isIslandPosition}
            scale={isIslandScale}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

// notes
// Whenever we are rendering something in canvas it has to be spacial 3D property to turn this into 3D which is not 3D for this  we have to use react 3 Drei
