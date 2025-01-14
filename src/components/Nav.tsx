"use client"
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const commonClasses = "text-white nav-link text-md  ";

    const onmouseoverEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove("nav-link-out");
    }

    const onmouseoutEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.add("nav-link-out");
    }

    return (
        <div className="fixed top-0 w-full z-40 ">
            <nav className="absolute top-0 w-full ">
                <div className="relative flex gap-8 items-center p-8 justify-center">
                    <div className={commonClasses} onMouseOver={onmouseoverEvent} onMouseOut={onmouseoutEvent} onClick={()=>{
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                        <h1>Home</h1>
                    </div>
                    <div className={commonClasses} onMouseOver={onmouseoverEvent} onMouseOut={onmouseoutEvent} onClick={()=>{
                        const expEle = document.getElementById("experience-main-render");
                        expEle?.scrollIntoView({ block: "start", behavior: "smooth" });
                    }}>
                        <h1>Experience</h1>
                    </div>
                    <div className={`${commonClasses} relative`} onMouseOver={onmouseoverEvent} onMouseOut={onmouseoutEvent} onClick={()=>{
                        setIsOpen(true);
                    }}
                
                    >
                        <h1>Contact</h1>
                       
                    </div>
                    <div className={commonClasses} onMouseOver={onmouseoverEvent} onMouseOut={onmouseoutEvent}>
                        <a href="https://drive.google.com/drive/folders/1YJgttfnxTbtCHJxRTj5XYEaA3GLMh6et?usp=sharing" target="_blank">
                            <h1>Resume</h1>
                        </a>
                    </div>
                    <ContactModal setIsOpen={setIsOpen} isOpen={isOpen} />
                </div>
            </nav>
           
        </div>
    )
}