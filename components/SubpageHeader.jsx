import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const SubpageHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-darkTheme/70 backdrop-blur-xl border-b border-black/5 dark:border-white/10 px-6 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between transition-all duration-300">
      <a href="/" className="flex items-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Nilesh Nama"
          className="w-28 cursor-pointer"
        />
      </a>

      <a
        href="/"
        className="group cta-secondary px-5 py-2 text-xs sm:text-sm font-Ovo"
      >
        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">←</span>
        <span>Back to Home</span>
      </a>
    </header>
  )
}

export default SubpageHeader
