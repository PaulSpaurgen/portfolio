
import animationData from "../../../public/animation.json";
import { useMobile } from "@/context/MobileContext";
import dynamic from 'next/dynamic';

// Dynamically import Lottie with ssr disabled
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });


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
    </div>
  );
}
