"use client"
import HeadingTextContainer from "@/atoms/HeadingTextContainer";
import HexaSkills from "./hexaSkills";

export default function Skills() {

    return (
        <div className="h-full w-full">
            <HeadingTextContainer id="skills-title" index={2} text="Skills" />
            <div className="h-[100dvh] w-full flex justify-center items-center">
                <HexaSkills />
            </div>
        </div>

    )
}

