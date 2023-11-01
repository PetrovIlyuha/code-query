'use client'
import Navbar from '@/components/shared/navbar/Navbar'
import LeftSidebar from '@/components/shared/sidebars/LeftSidebar'
import { useTheme } from '@/context/ThemeProvider'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme()
  return (
    <main
      className={`relative ${mode === 'dark' ? 'bg-dark-100' : 'bg-light-850'}`}
    >
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </div>
        Right Sidebar
      </div>
      Toaster
    </main>
  )
}

export default Layout
