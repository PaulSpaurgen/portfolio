import Image from "next/image";
import { useMobile } from "@/context/MobileContext";

export default function ExperienceCard({
  logo,
  inView,
}: {
  logo: string;
  inView?: true | boolean;
  id: number;
}) {
  const { isMobile } = useMobile();
  const nonSelectedElement =
    "bg-white/10 backdrop-blur-sm shadow-lg border border-white/10";

  const selectedElement =
    "bg-white backdrop-blur-sm shadow-lg border border-white/10";


  return (
    <div
      className={`md:w-[80px] md:h-[80px] w-[60px] h-[60px]  flex items-center justify-center rounded-md ${
        inView ? selectedElement : nonSelectedElement
      } hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer`}
    >
      <Image
        src={`/images/Companies/${logo}`}
        alt="logo"
        width={isMobile ? 20 : 40}
        height={isMobile ? 20 : 40}
        className="object-cover "
      />
    </div>
  );
}
