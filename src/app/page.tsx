"use client"

import { AppProvider } from "@/context/AppContext"
import Home from "@/page-components/Home"
import { MobileProvider } from "@/context/MobileContext"
import dynamic from "next/dynamic"
import { useMobile } from "@/context/MobileContext"
import { useEffect } from 'react'




export default function Page() {
  const {setIsMobile} = useMobile()


  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768)
    })
  }, [])

  return (
    <MobileProvider>
      <AppProvider>
        <Home />

      </AppProvider>
    </MobileProvider>
  )
}

