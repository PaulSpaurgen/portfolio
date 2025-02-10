import Image from "next/image";
import { useMobile } from "@/context/MobileContext";
const polygonClass =
  "md:w-[150px] w-[100px] md:h-[150px] h-[100px] md:m-[1.5px] m-[1px] bg-gray-800 flex justify-center items-center hover:opacity-80 transition-all duration-300";
const polygonContainerClass =
  "flex flex-inline md:mt-[-37.5px] mt-[-25px] md:ml-[-75px] ml-[-50px] even:md:ml-[1.5px] even:ml-[1px] cursor-pointer";

interface PolygonProps {
  imageUrl?: string;
  url?: string;
}



export default function HexaSkills() {
  
  return (
    <div className="  h-fit w-fit ml-[40px]">

      <div className={polygonContainerClass}>
        <Polygon imageUrl="/images/skills/github.svg" url="https://github.com/PaulSpaurgen" />

        <Polygon imageUrl="/images/skills/react.svg" url="https://react.dev/" />


        <Polygon imageUrl="/images/skills/mongodb.svg" url="https://www.mongodb.com/" />

      </div>
      <div className={polygonContainerClass}>
        <Polygon imageUrl="/images/skills/nextjs.svg" url="https://nextjs.org/" />
        <Polygon imageUrl="/images/skills/gsap.svg" url="https://gsap.com/" />
      </div>

      <div className={polygonContainerClass}>
        <Polygon imageUrl="/images/skills/three.svg" url="https://threejs.org/" />
        <Polygon imageUrl="/images/skills/javascript.svg" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <Polygon imageUrl="/images/skills/node-js.svg" url="https://nodejs.org/en" />

      </div>
      <div className={polygonContainerClass}>
        <Polygon imageUrl="/images/skills/web3.svg" url="https://web3.foundation/" />
        <Polygon imageUrl="/images/skills/svelte.svg" url="https://svelte.dev/" />
      </div>

      <div className={polygonContainerClass}>
        <Polygon imageUrl="/images/skills/html.svg" url="https://developer.mozilla.org/en-US/docs/Web/HTML" />
        <Polygon imageUrl="/images/skills/css.svg" url="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <Polygon imageUrl="/images/skills/typescriptLogoDisp.svg" url="https://www.typescriptlang.org/" />

      </div>
    </div>
  );
}

function Polygon({ imageUrl, url }: PolygonProps) {
  const { isMobile } = useMobile();
  return (
    <a
      className={polygonClass}


      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
      href={url}
      target="_blank"
    >
      {imageUrl && (
        <Image src={imageUrl} alt={imageUrl} width={isMobile ? 30 : 50} height={isMobile ? 30 : 50} />
      )}


    </a>
  );
}
