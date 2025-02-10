"use client"

import { AppProvider } from "@/context/AppContext"
import Home from "@/page-components/Home"

export default function Page() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

