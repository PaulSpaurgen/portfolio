import Image from "next/image";

const polygonClass = "w-[250px] h-[250px] opacity-20 m-[2.5px] bg-[#636363] flex justify-center items-center hover:opacity-80 hover:scale-105 transition-all duration-300"
const polygonContainerClass = "flex flex-inline mt-[-62.5px] ml-[-125px] even:ml-[2.5px]"

interface PolygonProps {
    imageUrl?: string;
}

export default function HexaSkills() {
    return (
        <div className=" absolute bottom-0 left-0 overflow-hidden h-[100dvh] w-fit z-20 ">
            <div className={polygonContainerClass}>

                <Polygon imageUrl="/images/skills/github.svg" />
                <Polygon imageUrl="/images/skills/react.svg" />
                
            </div>
            <div className={polygonContainerClass}>
                <Polygon imageUrl="/images/skills/nextjs.svg" />

            </div>
            <div className={polygonContainerClass}>
                <Polygon imageUrl="/images/skills/web3.svg" />
                <Polygon  imageUrl="/images/skills/svelte.svg"/>
            </div>
            <div className={polygonContainerClass}>
                <Polygon imageUrl="/images/skills/html.svg" />
                <Polygon imageUrl="/images/skills/css.svg" />
            </div>
            <div className={polygonContainerClass}>
                <Polygon imageUrl="/images/skills/three.svg" />
                <Polygon imageUrl="/images/skills/javascript.svg" />
                <Polygon imageUrl="/images/skills/node-js.svg" />
                <Polygon imageUrl="/images/skills/typescript.svg" />

            </div>
            <div className={polygonContainerClass}>
                <Polygon />
                <Polygon />
                <Polygon />
                <Polygon />
            </div>
        </div>
    )
}


function Polygon({ imageUrl }: PolygonProps) {
    return (
        <div className={polygonClass} 
        style={{ 
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}>
            {imageUrl && <Image src={imageUrl} alt={imageUrl} width={100} height={100} />}
        </div>
    )
}

