"use client"

import { AppProvider } from "@/context/AppContext"
import Home from "@/page-components/Home"
import { MobileProvider } from "@/context/MobileContext"
import dynamic from "next/dynamic"

const Scene = dynamic(() => import('@/components/3DModels/HeroModel/Scene'), {
  ssr: false,
})

export default function Page() {
  return (
    <MobileProvider>
      <AppProvider>
        <Scene />
        <Home />

      </AppProvider>
    </MobileProvider>
  )
}

