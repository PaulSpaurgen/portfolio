import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

export default function ExperienceDetails({
  company,
  position,
  logo,
  id,
  experience,
  ref,
}: {
  company: string;
  position: string;
  logo: string;
  id: number;
  experience: any;
  ref: any;
}) {
  const { swiper } = useAppContext();

  const handleMouseEnter = () => {
    if (swiper) {
      swiper?.disable();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper?.enable();
    }
  };

  return (
    <div
      className="p-4 sm:p-6 md:p-8 bg-white  backdrop-blur-sm rounded-2xl w-full text-black h-[60vh] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[1000px] overflow-y-auto"
      id={`experience-${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
      <div ref={ref}>
        <div className="flex gap-4 border-b border-cyan-500 pb-4">
          <Image
            src={`/images/Companies/${logo}`}
            alt="logo"
            width={40}
            height={40}
            className="object-contain "
          />

          <div className="flex flex-col justify-center  ">
            <h1 className="md:text-2xl sm:text-xl text-lg font-bold">
              {company} 
            </h1>
            <h1 className="md:text-sm text-xs ">{position}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:mt-4 mt-2">
          {experience.projects.map((project: any, index: any) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md shadow-lg border border-black/10 p-4 rounded-md"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-2xl text-xl font-bold  hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
              >
                {project.name} <span className="text-cyan-400"><Image src="/images/link.svg" alt="LinkedIn" width={16} height={16} /></span>
              </a>
              <div className="flex gap-2 flex-wrap mt-4">
                <ul className="ml-4">


                  {project.achievements.map((achievement: any, index: any) => (
                    <li
                      key={`${index}-${achievement}`}
                      className="text-sm text-gray-800 list-disc mb-[2px] "
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 flex-wrap mt-4">
                {project.technologies.map((technology: any, index: any) => (
                  <span
                    key={`${index}-${technology}`}
                    className="text-sm text-gray-800 px-2 py-1 rounded-md bg-gray-100 backdrop-blur-md border border-white/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
