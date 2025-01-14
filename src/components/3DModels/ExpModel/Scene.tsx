"use client"
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { Suspense, useEffect } from "react";
import { useProgress, Html, ScrollControls, CameraControls } from "@react-three/drei"
import Model from "./Model";

function Loader() {
    const { progress } = useProgress()
    return (
      <Html center>
        {/* <div className="w-64 h-2 bg-white rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div> */}
      </Html>
    )
  }
  
  //  position: [10, 2, 12] 
  // #f97316
  export default function Scene() {
  
    return (
      <div className="h-screen w-full absolute ">
        <Canvas gl={{ antialias: true }} className="relative h-svh " camera={{ position: [0,0.6,1] }}>
          <directionalLight position={[-5, 0, 5]} intensity={5} color="#b5d6ff" />
          
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    )
  }

