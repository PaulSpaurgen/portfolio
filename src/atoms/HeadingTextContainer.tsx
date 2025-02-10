import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import { splitTextAnimation } from "@/Utills/commonUtills";

export default function HeadingTextContainer({
  id,
  index,
  text,
}: {
  id: string;
  index: number;
  text: string;
  className?: string;
}) {
  const { activeIndex } = useAppContext();

  useEffect(() => {
    if (activeIndex === index) {
      const element = document.querySelector(`#${id}`);
      splitTextAnimation(text, element!);
    }
  }, [activeIndex]);
  return (
    <div
      className="absolute top-[40px]  md:top-[40px] w-fit text-white/30 lg:text-9xl md:6xl text-4xl  font-extrabold "
      id={id}
    ></div>
  );
}
