"use client"
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules'
import { EffectCube } from 'swiper/modules'
import Nav from '@/components/Nav'
import { useAppContext } from '@/context/AppContext'
import Skills from '@/components/Skills'


const Hero = dynamic(() => import('@/components/Hero'), {
    ssr: false,
})
const Experience = dynamic(() => import('@/components/Experience'), {
    ssr: false,
})


export default function Home() {
    const { setActiveIndex, setSwiper } = useAppContext();

    const commonPageClassesWithAutoMargin = "swiper-slide w-full h-screen mx-auto md:max-w-[80%] max-w-[90%]"
    const commonPageClasses = "swiper-slide w-full h-screen "

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const swiperInstance = new Swiper('.swiper', {
            modules: [Mousewheel, EffectCube],
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true,
            effect: 'cards',
            grabCursor: true,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function (swiper) {
                    setActiveIndex(swiper.activeIndex)
                }
            }
        });
        setSwiper(swiperInstance)

    }, [])


    return (
        <div className="w-full h-full">
            <Nav />

            <div className=" swiper w-full h-screen  overflow-hidden ">
                <div className="swiper-wrapper">
                    <div className={commonPageClasses}>
                    
                        <Hero />
                    </div>
                    <div  className={commonPageClassesWithAutoMargin} >
                        <Experience />
                    </div>

                    <div  className={commonPageClassesWithAutoMargin} >


                        <Skills />
                    </div>
                </div>
            </div>

        </div>

    )
}
