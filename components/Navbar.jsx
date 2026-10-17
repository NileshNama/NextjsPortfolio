import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"

const Navbar = ({ isDarkMode, setIsDarkMode, isHidden = false }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScroll(window.scrollY > 40)
      }
    }

    // Immediately evaluate scroll position on mount
    handleScroll()

    // Handle browsers that restore scroll position asynchronously after layout/hydration
    const rafId = requestAnimationFrame(handleScroll)
    const timer50 = setTimeout(handleScroll, 50)
    const timer150 = setTimeout(handleScroll, 150)
    const timer300 = setTimeout(handleScroll, 300)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timer50)
      clearTimeout(timer150)
      clearTimeout(timer300)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsScroll(window.scrollY > 40)
        window.history.replaceState(null, '', window.location.pathname)
      }, 150)
    }
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${targetId}`
        return
      }

      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', window.location.pathname)
      }
    }
  }

  const navLinkClass =
    'font-Ovo text-sm transition-opacity hover:opacity-70 cursor-pointer whitespace-nowrap'

  return (
    <>
      {/* Decorative background */}
      <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`
          fixed top-0 left-0 w-full z-40
          px-4 sm:px-8 lg:px-10 xl:px-14 py-3 sm:py-4
          flex items-center justify-between gap-3 sm:gap-4 lg:gap-8
          transition-all duration-300 ease-in-out
          ${isHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
          ${
            isScroll
              ? 'bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm dark:bg-darkTheme/70 dark:border-white/10'
              : 'bg-transparent'
          }
        `}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center shrink-0">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Nilesh Nama"
            className="w-24 sm:w-28 cursor-pointer"
          />
        </a>

        {/* Desktop Nav */}
        <ul
          className={`
            hidden md:flex items-center gap-5 lg:gap-6 xl:gap-7
            px-7 py-2 rounded-full
            transition-all duration-300 shrink-0
            ${
              isScroll
                ? ''
                : 'bg-white/60 backdrop-blur-lg shadow-sm dark:bg-transparent dark:border dark:border-white/20'
            }
          `}
        >
          <li><a className={navLinkClass} href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a className={navLinkClass} href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a className={navLinkClass} href="#books" onClick={(e) => handleNavClick(e, 'books')}>Books</a></li>
          <li><a className={navLinkClass} href="#cohorts" onClick={(e) => handleNavClick(e, 'cohorts')}>Cohorts</a></li>
          <li><a className={navLinkClass} href="#work" onClick={(e) => handleNavClick(e, 'work')}>Work</a></li>
          <li><a className={navLinkClass} href="#writing" onClick={(e) => handleNavClick(e, 'writing')}>Writing</a></li>
          <li><a className={navLinkClass} href="#talks" onClick={(e) => handleNavClick(e, 'talks')}>Talks</a></li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* VebSkills */}
          <motion.a
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            href="https://www.vebskills.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              hidden xl:flex items-center gap-1.5
              px-4 py-1.5 sm:px-4.5 sm:py-2
              rounded-full
              border border-gray-300/80 dark:border-white/15
              bg-white/80 dark:bg-white/[0.06]
              backdrop-blur-xl
              text-gray-700 dark:text-gray-200
              font-Ovo text-xs sm:text-sm font-medium
              shadow-sm
              hover:text-[#386b62] dark:hover:text-[#67b0a5]
              hover:border-[#509187] dark:hover:border-[#509187]
              hover:bg-[#509187]/10 dark:hover:bg-[#509187]/20
              hover:shadow-[0_8px_20px_rgba(80,145,135,0.2)]
              transition-all duration-300
            "
          >
            <span>VebSkills</span>
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 h-3 object-contain transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* NQuestions */}
          <motion.a
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            href="https://nquestions.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              hidden 2xl:flex items-center gap-1.5
              px-4 py-1.5 sm:px-4.5 sm:py-2
              rounded-full
              border border-gray-300/80 dark:border-white/15
              bg-white/80 dark:bg-white/[0.06]
              backdrop-blur-xl
              text-gray-700 dark:text-gray-200
              font-Ovo text-xs sm:text-sm font-medium
              shadow-sm
              hover:text-[#386b62] dark:hover:text-[#67b0a5]
              hover:border-[#509187] dark:hover:border-[#509187]
              hover:bg-[#509187]/10 dark:hover:bg-[#509187]/20
              hover:shadow-[0_8px_20px_rgba(80,145,135,0.2)]
              transition-all duration-300
            "
          >
            <span>NQuestions</span>
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 h-3 object-contain transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* NN Cohorts */}
          <motion.a
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            href="https://cohorts.nileshnama.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              hidden lg:flex items-center gap-1.5
              px-4 py-1.5 sm:px-4.5 sm:py-2
              rounded-full
              border border-gray-300/80 dark:border-white/15
              bg-white/80 dark:bg-white/[0.06]
              backdrop-blur-xl
              text-gray-700 dark:text-gray-200
              font-Ovo text-xs sm:text-sm font-medium
              shadow-sm
              hover:text-[#386b62] dark:hover:text-[#67b0a5]
              hover:border-[#509187] dark:hover:border-[#509187]
              hover:bg-[#509187]/10 dark:hover:bg-[#509187]/20
              hover:shadow-[0_8px_20px_rgba(80,145,135,0.2)]
              transition-all duration-300
            "
          >
            <span>NN Cohorts</span>
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 h-3 object-contain transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 sm:p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Theme"
              className="w-5 sm:w-6"
            />
          </button>

          {/* Mobile menu button */}
          <button
            className="block md:hidden p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Backdrop Overlay for Mobile Drawer */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-72 max-w-[85vw] z-50
            bg-white/95 dark:bg-darkTheme/95 backdrop-blur-2xl
            shadow-[-10px_0_30px_rgba(0,0,0,0.15)] dark:shadow-[-10px_0_30px_rgba(0,0,0,0.6)]
            border-l border-gray-200/60 dark:border-white/10
            transform transition-transform duration-300 ease-out
            flex flex-col justify-between p-6 pt-20
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div
            className="absolute right-5 top-5 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5"
            />
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto">
            <ul className="flex flex-col gap-4 text-base">
              {[
                ['Home', 'home'],
                ['About', 'about'],
                ['Work', 'work'],
                ['Books', 'books'],
                ['Cohorts', 'cohorts'],
                ['Writing', 'writing'],
                ['Talks', 'talks'],
                ['Contact', 'contact'],
              ].map(([label, targetId]) => (
                <li key={label}>
                  <a
                    href={`#${targetId}`}
                    onClick={(e) => handleNavClick(e, targetId)}
                    className="font-Ovo text-gray-800 dark:text-gray-100 hover:text-[#5A9B92] dark:hover:text-[#5A9B92] transition-colors cursor-pointer block py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* External platforms */}
            <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col gap-2.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500">
                Platforms & Resources
              </span>
              <a
                href="https://cohorts.nileshnama.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-full border border-[#5A9B92]/50 bg-[#5A9B92]/10 text-[#509187] dark:text-[#5A9B92] font-medium text-xs shadow-sm"
              >
                <span>NN Cohorts</span>
                <span className="text-xs">↗</span>
              </a>
              <a
                href="https://www.vebskills.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 text-xs hover:border-[#5A9B92]"
              >
                <span>VebSkills</span>
                <span className="text-xs">↗</span>
              </a>
              <a
                href="https://nquestions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 text-xs hover:border-[#5A9B92]"
              >
                <span>NQuestions</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
