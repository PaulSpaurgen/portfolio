
import gsap from "gsap";

const baseAnimation = {
    scale: 2,
    x: "30vw",
    y: "30vh",
    opacity: 0,
    duration: 0.4,
    ease: "power2.out"
};

export const splitTextAnimation = (text: string, element: any) => {

    const textAnimation = gsap.timeline({ paused: true });
    const chars = text.split("");
    element.textContent = "";
    chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        element.appendChild(span);
    })

    for (let i = 0; i < element.children.length; i++) {
        textAnimation.from(element.children[i], baseAnimation, i > 0 ? "-=0.2" : undefined);
    }

    textAnimation.play()

}

    


