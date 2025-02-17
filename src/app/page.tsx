"use client"

import { AppProvider } from "@/context/AppContext"
import Home from "@/page-components/Home"
import { MobileProvider } from "@/context/MobileContext"
import dynamic from "next/dynamic"
import { useMobile } from "@/context/MobileContext"
import { useEffect } from 'react'

const Scene = dynamic(() => import('@/components/3DModels/HeroModel/Scene'), {
  ssr: false,
})


export default function Page() {
  const {setIsMobile} = useMobile()

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <MobileProvider>
      <AppProvider>
        <Scene />
        <Home />

      </AppProvider>
    </MobileProvider>
  )
}

