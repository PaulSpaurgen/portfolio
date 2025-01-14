"use client"
import { useEffect, useRef, useState } from "react";

const expText = ["Frontend Engineer.", "Fullstack Engineer.", "Software Engineer."]

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
    }

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
    }

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
    }

    const addCssClass = (id: string, className: string) => {
        const element = document.getElementById(id) as HTMLElement;
        element.classList.add(className);
    }

    const removeCssClass = (id: string, className: string) => {
        const element = document.getElementById(id) as HTMLElement;
        element.classList.remove(className);
    }

    return (
        <div className=" font-slabo flex h-screen  md:items-center relative z-10 md:p-8 p-0">
            <div className="text-white mt-[100px] md:mt-0">
                <div className="flex gap-2 max-w-fit justify-left h-fit max-h-[40px]" id="title">
                    <h1 className="md:text-4xl w-fit text-2xl" >Hi, I'm Paul</h1>
                </div>
                <div className="max-w-fit mt-4 min-h-[70px]  md:text-6xl text-4xl">
                    <h1 id="proffession" className="font-extrabold line-height-[80px] " >{currentText?.split(" ")[0]} <span className="text-orange-500"> {currentText?.split(" ")[1]}</span></h1>
                </div>
                <p className="text-white mt-6 md:max-w-[600px] max-w-[300px] md:font-semibold font-bold p-5 bg-black/50 rounded-lg">I'm a software engineer with a passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills. Bringing life to the web.</p>
            </div>
        </div>
    );
}
