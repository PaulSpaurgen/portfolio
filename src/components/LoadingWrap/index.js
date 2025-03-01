import Lottie from "react-lottie";
import animationData from "../../../public/animation.json";
import { useMobile } from "@/context/MobileContext";

export default function LoadingWrap() {
  const { isMobile } = useMobile();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black flex flex-col justify-center items-center z-50">
      <Lottie options={defaultOptions} height={isMobile ? 300 : 400} width={isMobile ? 300 : 600} />

      <p className="text-white text-2xl font-bold mt-4 animate-pulse">Loading</p>
    </div>
  );
}
