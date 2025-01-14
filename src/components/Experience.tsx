"use client"
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const companies = [
    {
        company: "Marlin", position: "Frontend Engineer (web3)", logo: "marlin.png", experience: {
            projects: [
                {
                    name: "Marlin Landing Page",
                    image: "marlin.png",
                    link: "https://www.marlin.org/",
                    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Swipper", "Gulp"],
                    achievements: [
                        "Optimized the landing page for better performance to load under 1 second",
                        "Sole responsible for all the animations on the landing page ",
                        "SEO optimization for the landing page",
                        "100% design implementation"
                    ],

                },
                {
                    name: "Marlin Dashboard",
                    image: "marlin.png",
                    link: "https://hub.marlin.org/dashboard/",
                    technologies: ["Svelte", "Tailwind", "HTML", "CSS", "JavaScript", "Web3.js", "Jest"],
                    achievements: [
                        "Integrated smart contracts with the dashboard",
                        "Wallet Integration with Metamask",
                        "Unit Testing with Jest",
                        "Integration with the Marlin API",
                        "Sole responsibel for multiple features on the app"
                    ],


                }
            ]
        }
    },
    {
        company: "Talowiz", position: "Software Development Engineer", logo: "talowiz.svg", experience: {
            projects: [
                {
                    name: "Talowiz Landing Page",
                    image: "talowiz.svg",
                    link: "https://www.talowiz.com/",
                    technologies: ["React", "Tailwind", "CSS", "JavaScript"],
                    achievements: [],

                },
                {
                    name: "Talowiz Dashboard",
                    image: "talowiz.svg",
                    link: "https://app.talowiz.com/",
                    technologies: ["React", "Tailwind", "CSS", "JavaScript", "Chrome Extension"],
                    achievements: [
                        "Integration with the Talowiz API",
                        "Componentization of the app",
                        "Sole responsible for creating a chrome extension that scrapes data from linkedIn, Automates connect requests & Intiates converstions with the potential candidates." ,
                        "UI/UX improvements",
                        "Bug fixes",
                    ],

                }
            ]
        }
    },
    {
        company: "Chee Finance", position: "Frontend Engineer (web3)", logo: "cheeFinance.png", experience: {
            projects: [
                {
                    name: "Chee Finance Dashboard",
                    image: "cheeFinance.png",
                    link: "https://app.chee.finance/",
                    technologies: ["React", "Tailwind", "CSS", "JavaScript", "Web3.js", "AntD"],
                    achievements: [
                        "Integration with the Chee Finance API",
                        "Componentization of the app",
                        "100% UI Implimentation of the design",
                        "Bug fixes",
                    ],

                }
            ]
        }
    },
    {
        company: "Deloitte", position: "Associate Analyst", logo: "Deloitte.jpeg", experience: {
            projects: [
                {
                    name: "Deloitte Internal Dashboard",
                    image: "Deloitte.jpeg",
                    technologies: ["HTML", "CSS", "JavaScript", "Angular", "React Forms", "React"],
                    achievements: [
                        "Integration with the Deloitte API",
                        "Re-Usable Form Integration Component",
                        "Wallet Integration with Metamask",
                        "UI Implimentation of the design",
                        "Bug fixes",
                    ],
                }
            ]
        }
    },
]

const nonSelectedBg = "bg-white/20 backdrop-blur-md shadow-lg border border-white/30"

const isMobile = window.innerWidth < 768;


export default function Experience() {
    const [current, setCurrent] = useState(0);
    const expRef = useRef(null)


    useGSAP(() => {
        // Split text into individual characters
        const Exp = "experience";
        const experienceText = document.querySelector("#experience-title h1");

        // Create animation timeline that can be controlled
        const textAnimation = gsap.timeline({ paused: true });
        const cardsAnimation = gsap.timeline({ paused: true });
        const detailsAnimation = gsap.timeline({ paused: true });


        if (experienceText) {
            // Split text into spans for each character
            let chars = Exp.split("");
            experienceText.textContent = "";
            chars.forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                span.style.display = "inline-block"; // Needed for transform
                experienceText.appendChild(span);
            });

            // Create base animation config
            const baseAnimation = {
                scale: 2,
                x: "30vw",
                y: "30vh",
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            };

            // Animate each character with staggered timing
            for (let i = 0; i < experienceText.children.length; i++) {
                textAnimation.from(experienceText.children[i],
                    baseAnimation,
                    i > 0 ? "-=0.6" : undefined // Overlap all except first animation
                );
            }

            // Final fade animation
            textAnimation.to(experienceText, {
                opacity: 0.2,
                duration: 0.4,
                ease: "power2.inOut"
            });

            cardsAnimation.from("#experience-cards > button", {
                y: 200,
                opacity: 0,
                duration: 1.2,
                ease: "back",
                stagger: {
                    amount: 0.5,
                    from: "start"
                }
            });
            detailsAnimation.from("#experience-details > div", {
                y: 500,
                opacity: 0,
                duration: 1.5,
                ease: "back",
                stagger: {
                    amount: 0.5,
                    from: "start"
                }
            });

            // Update ScrollTrigger to play animation on enter and reverse on leave back
            ScrollTrigger.create({
                trigger: expRef.current,
                start: "top 100%",
                end: "bottom bottom",
                onEnter: () => {
                    textAnimation.progress(0);
                    if(!isMobile){
                        cardsAnimation.progress(0);
                        detailsAnimation.progress(0);
                    }else{
                        cardsAnimation.progress(1);
                        detailsAnimation.progress(1);
                    }
                    textAnimation.play()

                },
                onUpdate: (self) => {
                    // Use toggleActions instead of manual progress checks
                    if (self.progress > 0.5 ) {

                        if(!isMobile){
                            cardsAnimation.play();
                            detailsAnimation.play();
                        }
                    }
                },
            });
        }


    }, { scope: expRef })

    return (
        <div className="relative h-screen w-full" ref={expRef}>
            <div className="text-white h-screen py-36 relative md:max-w-[70%] md:mx-auto  ">
                <div className="absolute top-[60px] left-[10px] md:top-[-4px] md:left-[-132px] w-fit   " id="experience-title">
                    <h1 className="text-white md:text-9xl text-4xl  font-extrabold opacity-10"></h1>
                </div>
                <div className="flex w-full md:gap-36 gap-2 h-full items-center flex-col md:flex-row">
                    <div className="w-[90%] md:w-full overflow-y-hidden overflow-x-scroll md:overflow-x-hidden  md:h-fit h-[220px]">
                        <div className="flex gap-4  h-fit md:p-10 md:flex-col" id="experience-cards">
                            {companies.map((company, index) => (
                                <button
                                    key={`${index}-${company.company}`}
                                    onClick={() => {
                                        const expEle = document.getElementById(`experience-${index}`)
                                        console.log({expEle})
                                        expEle?.scrollIntoView({ behavior: "smooth", block:"start" })
                                        setCurrent(index)
                                    }}
                                >
                                    <ExperienceCard
                                        key={index}
                                        company={company.company}
                                        position={company.position}
                                        logo={company.logo}
                                        inView={index === current}
                                        id={index}
                                    />
                                </button>
                            ))}
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col  gap-4 md:overflow-y-hidden overflow-y-scroll" id="experience-details">
                        {
                            companies.map((company, index) => (

                                <ExperienceDetails
                                    key={index}
                                    company={company.company}
                                    position={company.position}
                                    logo={company.logo}
                                    id={index}
                                    experience={company.experience}
                                />

                            ))
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}


function ExperienceCard({ company, position, logo, inView, id }: { company: string, position: string, logo: string, inView?: true | boolean, id: number }) {
    return (
        <div className={`flex gap-4 h-full p-2 md:p-6 rounded-md md:w-[300px] p-4 w-[200px]  hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 
        ${inView ? "bg-white shadow-lg shadow-cyan-500/50 text-black" : nonSelectedBg} cursor-pointer`} id={`${id}`}


        >
            <Image
                src={`/images/Companies/${logo}`}
                alt="logo" width={isMobile ? 40 : 60} height={isMobile ? 40 : 60}
                className="object-contain "
            />
            <div className="flex flex-col justify-center items-start ">
                <h1 className="md:text-4xl font-bold text-left">{company}</h1>
                <h1 className="text-sm mt-2 text-left">{position}</h1>
            </div>
        </div>
    )
}

function ExperienceDetails({ company, position, logo, id, experience }:
    { company: string, position: string, logo: string, id: number, experience: any }) {
    return (
        <div className="p-8 rounded-2xl w-full text-white min-h-full max-w-[600px] overflow-y-auto " id={`experience-${id}`}>
            <div className="flex gap-4 border-b border-cyan-500 pb-4">
                <Image
                    src={`/images/Companies/${logo}`}
                    alt="logo" width={60} height={60}
                    className="object-contain "
                />
                <div className="flex flex-col justify-center  ">
                    <h1 className="text-4xl font-bold">{company}</h1>
                    <h1 className="text-sm mt-2">{position}</h1>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {experience.projects.map((project: any, index: any) => (
                    <div key={index} className="bg-white/20 backdrop-blur-md shadow-lg border border-white/30 p-4 rounded-md">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold  hover:text-cyan-400 transition-all duration-300">{project.name}</a>
                        <div className="flex gap-2 flex-wrap mt-4">
                            <ul className="ml-4">
                                {
                                    project.achievements.map((achievement: any, index: any) => (
                                        <li key={`${index}-${achievement}`} className="text-sm text-white list-disc ">{achievement}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex gap-2 flex-wrap mt-4">
                            {
                                project.technologies.map((technology: any, index: any) => (
                                    <span key={`${index}-${technology}`} className="text-sm text-gray-400 px-2 py-1 rounded-md bg-black backdrop-blur-md border border-white/30 text-white">{technology}</span>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
