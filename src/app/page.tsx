"use client"
import dynamic from 'next/dynamic'
import {useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';



const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
})
const Experience = dynamic(() => import('@/components/Experience'), {
  ssr: false,
})

const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: false,
})

const Scene = dynamic(() => import('@/components/3DModels/HeroModel/Scene'), {
  ssr: false,
})


export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const heroRef = useRef(null)
  const expRef = useRef<HTMLDivElement>(null)


  // useGSAP(() => {
  //   // Add toggle animation to existing ScrollTrigger
  //   const enterAnimation = {
  //     borderRadius: "24px 24px 0 0",
  //     borderTopWidth: "4px",
  //     borderColor: "#f97316",
  //     duration: 0.2,
  //     ease: "power2.out"
  //   };

  //   const leaveAnimation = {
  //     borderRadius: 0,
  //     borderTopWidth: 0,
  //     duration: 0.2, 
  //     ease: "power2.in"
  //   };

  //   ScrollTrigger.create({
  //     trigger: expRef.current,
  //     start: "top 80%", 
  //     end: "top 20%",
  //     onEnter: () => gsap.to(expRef.current, enterAnimation),
  //     onEnterBack: () => gsap.to(expRef.current, enterAnimation),
  //     onLeave: () => gsap.to(expRef.current, leaveAnimation),
  //     onLeaveBack: () => gsap.to(expRef.current, leaveAnimation)
  //   });

  //   // Add responsive conditions for pinning
  //   const mm = gsap.matchMedia();

  //   // Hero section pinning remains unchanged
  //   gsap.to(heroRef.current, {
  //     scrollTrigger: {
  //       trigger: heroRef.current,
  //       start: 'top top',
  //       pin: true,
  //       pinSpacing: false,
  //     },
  //   })
  //   gsap.to(expRef.current, {
  //     scrollTrigger: {
  //       trigger: expRef.current,
  //       start: "top top",
  //       endTrigger: "html", // Pin against the entire document
  //       end: "bottom bottom",
  //       pin: true,
  //       pinSpacing: true,
  //       invalidateOnRefresh: true, // Recalculate on resize/refresh
  //       anticipatePin: 1,
  //     },
  //   })
  // }, [heroRef, expRef])

  

  return (
    <div className="w-full">

      <div className="w-full h-screen">
        <Scene />
        <Hero />
      </div>


    </div>
  )
}
