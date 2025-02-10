"use client"

import { AppProvider } from "@/context/AppContext"
import Home from "@/page-components/Home"
import { MobileProvider } from "@/context/MobileContext"

export default function Page() {
  return (
    <MobileProvider>
      <AppProvider>
        <Home />
      </AppProvider>
    </MobileProvider>
  )
}

