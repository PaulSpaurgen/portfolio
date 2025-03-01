"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Model from "./Model";
import { gsap } from "gsap";
import { useAppContext } from "@/context/AppContext";
import { useMobile } from "@/context/MobileContext";

export default function Scene() {
  const { activeIndex } = useAppContext();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { isMobile } = useMobile();

  useEffect(() => {
    applyAnimation(activeIndex, isFirstRender);
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [activeIndex]);

  const modelDimensions =
    "fixed z-20 xl:h-[400px] xl:w-[400px] lg:h-[300px] lg:w-[300px] md:h-[300px] md:w-[300px] w-[200px] h-[200px]";
  const firstRenderCss = "right-[5%] bottom-[38%]";

  const applyAnimation = (activeIndex: number, isFirstRender: boolean) => {
    const commonAnimation = {
      duration: isFirstRender ? 0 : 1,
      ease: "power2.inOut",
    };

    const slideOneDesktopAnimation = {
      bottom: "38%",
      right: "5%",
    };

    const slideOneMobileAnimation = {
      bottom: "5%",
      left: "50%",
      transform: "translateX(-50%)",
    };

    const slideTwoDesktopAnimation = {
      bottom: "0%",
      right: "80%",
    };

    const slideTwoMobileAnimation = {
      bottom: "0%",
      left: "0%",
      transform: "translateX(0%)",
    };

    const slideThreeDesktopAnimation = {
      bottom: "30%",
      right: "10%",
    };

    const slideThreeMobileAnimation = {
      bottom: "0%",
      left: "100%",
      transform: "translateX(-100%)",
    };

    switch (activeIndex) {
      case 0:
        gsap.to("#hero-model-robot", {
          ...(isMobile ? slideOneMobileAnimation : slideOneDesktopAnimation),
          ...commonAnimation,
        });
        break;
      case 1:
        gsap.to("#hero-model-robot", {
          ...(isMobile ? slideTwoMobileAnimation : slideTwoDesktopAnimation),
          ...commonAnimation,
        });
        break;
      case 2:
        gsap.to("#hero-model-robot", {
          ...(isMobile
            ? slideThreeMobileAnimation
            : slideThreeDesktopAnimation),
          ...commonAnimation,
        });
        break;
      default:
        break;
    }
  };
  // 6, -5, 12

  return (
    <div
      className={`${modelDimensions} ${isFirstRender ? firstRenderCss : ""}`}
      id="hero-model-robot"
    >
      <Canvas
        gl={{ antialias: true }}
        className="flex justify-center items-center "
        camera={{ position: [0, -2, 5] }}
      >
        <directionalLight position={[5, 2, 5]} intensity={5} color="#ffff" />
        <directionalLight
          position={[0, -10, -5]}
          intensity={2}
          color="#ffa233"
        />
        <Suspense fallback={<></>}>
          <Model isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
