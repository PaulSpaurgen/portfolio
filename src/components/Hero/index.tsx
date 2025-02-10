"use client";
import { useEffect, useRef, useState } from "react";
import HeadingTextContainer from "@/atoms/HeadingTextContainer";
import { splitTextAnimation } from "@/Utills/commonUtills";
import { useAppContext } from "@/context/AppContext";

const expText = [
  "Frontend Engineer.",
  "Fullstack Engineer.",
  "Software Engineer.",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const isCursorAnimation = useRef(false);
  useEffect(() => {
    if (!isCursorAnimation.current) {
      initiateCursorAnimation();
      isCursorAnimation.current = true;
    }
  }, []);

  const initiateCursorAnimation = () => {
    addCssClass("title", "cursor-animation");
    setTimeout(() => {
      removeCssClass("title", "cursor-animation");
      beginExperienceAnimation();
    }, 1800);
  };

  const beginExperienceAnimation = async () => {
    let count = 0;
    async function animate() {
      if (count === expText.length) {
        count = 0;
      }
      const currentCount = await animateText(count);
      count = currentCount + 1;
      animate();
    }
    animate();
  };

  const animateText = (count: number) => {
    return new Promise<number>((resolve) => {
      removeCssClass("proffession", "reverse-cursor-animation");
      addCssClass("proffession", "cursor-animation");
      setCurrentText(expText[count]);
      setTimeout(() => {
        removeCssClass("proffession", "cursor-animation");
        addCssClass("proffession", "reverse-cursor-animation");

        setTimeout(() => {
          resolve(count);
        }, 2000);
      }, 4000);
    });
  };

  const addCssClass = (id: string, className: string) => {
    const element = document.getElementById(id) as HTMLElement;
    element.classList.add(className);
  };

  const removeCssClass = (id: string, className: string) => {
    const element = document.getElementById(id) as HTMLElement;
    element.classList.remove(className);
  };

  return (
    <div className="flex  h-screen  w-full relative z-10 overflow-hidden bg-black ">
      
      <video
        src="/video/bgVideoMain.webm"
        poster="/images/poster.webp"
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-[30%] left-0 w-full h-full object-cover z-[-1px]"
        preload="auto"
      />
      <div className=" mx-auto md:max-w-[80%] max-w-[90%]  w-full ">
        <div className="text-white absolute top-[30%] md:top-[30%] ">
          <div
            className="flex gap-2 max-w-fit justify-left h-fit max-h-[40px]"

            id="title"
          >
            <h1 className="md:text-4xl w-fit text-2xl">Hi, I'm Paul</h1>
          </div>
          <div className="max-w-fit md:mt-4 mt-2 md:text-6xl text-3xl min-h-[60px] md:min-h-[80px]">
            <h1 id="proffession" className="font-extrabold ">
              {currentText?.split(" ")[0]}{" "}
              <span className="text-orange-500">
                {" "}
                {currentText?.split(" ")[1]}
              </span>
            </h1>
          </div>
          <p className="text-white text-sm md:text-base md:mt-4 md:max-w-[600px] max-w-[250px] md:font-semibold ">
            I'm a software engineer with a passion for creating beautiful and
            functional web applications. I'm a quick learner and I'm always
            looking to improve my skills. Bringing life to the web.
          </p>
        </div>
      </div>
    </div>
  );
}
