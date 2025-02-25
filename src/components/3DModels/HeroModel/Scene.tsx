"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect  } from "react";
import Model from "./Model";

export default function Scene() {

  const [isMobile, setIsMobile] = useState(false);

 

  // 6, -5, 12

  return (
    <div className="h-screen w-full absolute z-[20] ">
      <Canvas gl={{ antialias: true }} className="relative h-svh " camera={{ position: isMobile ? [6, -6, 12] : [12, 0, 12] }}>
        <directionalLight position={[5, 2, 5]} intensity={5} color="#ffff" />
        <directionalLight position={[0, -10, -5]} intensity={2} color="#ffa233" />
        <Suspense fallback={<></>}>
          <Model isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}