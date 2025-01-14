"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect , useRef } from "react";
import Model from "./Model";
import { useGSAP } from "@gsap/react";

export default function Scene() {

  const [isMobile, setIsMobile] = useState(false);


  useGSAP(() => {
  },{});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 6, -5, 12

  return (
    <div className="h-screen w-full absolute ">
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