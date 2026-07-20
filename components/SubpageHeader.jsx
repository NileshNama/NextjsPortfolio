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
        className="font-Ovo text-sm border border-gray-400/80 dark:border-gray-500 rounded-full px-5 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
      >
        ← Back to Home
      </a>
    </header>
  )
}

export default SubpageHeader
