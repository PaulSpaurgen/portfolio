"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import HeadingTextContainer from "@/atoms/HeadingTextContainer";
import ExperienceDetails from "./sub-components/ExperienceDetails";
import ExperienceCard from "./sub-components/ExperienceCard";
import { useAppContext } from "@/context/AppContext";
import { companies } from "@/Utills/staticData";
import gsap from "gsap";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const { activeIndex } = useAppContext();
  const tabsRef = useRef<HTMLDivElement>(null);
  const animation = useRef<GSAPTimeline | null>(null);
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!animation.current) {
      intialAnimation();
    }
    if (activeIndex === 1) {
      if (animation.current) {
        animation.current.progress(0).play();
      }
    }

    return () => {
      if (animation.current) {
        animation.current.kill();
      }
    };
  }, [activeIndex]);

  const intialAnimation = () => {
    animation.current = gsap.timeline({ paused: true })
      .fromTo(tabsRef.current ? [...tabsRef.current.children] : [],
        {
          opacity: 0,
          y: 100,
          duration: 2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
        }
      );
  };
  const applyAnimationToslider = (index: number) => {
    gsap.fromTo(
      sliderRefs.current[index],
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  };
  return (
    <div className="h-full w-full">
      <HeadingTextContainer id="experience-title" index={1} text="Experience" />

      <div className="h-full w-full flex flex-col items-center  md:justify-center md:mt-16 mt-20">
        <div role="tablist" className="tabs tabs-lift mt-4" ref={tabsRef}>
          {companies.map((company, index) => (
            <React.Fragment key={index}>
              <button
                className={`tab h-full md:mb-4 mb-2 p-0  ${
                  activeTab === index ? "tab-active " : ""
                } ${index === 0 ? "ml-0" : "ml-4"}`}
                onClick={() => {
                  setActiveTab(index);
                  applyAnimationToslider(index);
                }}
              >
                <ExperienceCard
                  logo={company.logo}
                  inView={activeTab === index}
                  id={index}
                />
              </button>

              <div role="tabpanel" className="tab-content  ">
                <ExperienceDetails
                  company={company.name}
                  position={company.position}
                  logo={company.logo}
                  id={index}
                  experience={company.experience}
                  ref={(el: any) => (sliderRefs.current[index] = el)}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
