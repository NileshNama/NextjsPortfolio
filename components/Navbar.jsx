import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          px-5 sm:px-8 lg:px-10 xl:px-14 py-4
          flex items-center justify-between gap-4 lg:gap-8
          transition-all duration-300
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
            className="w-28 cursor-pointer"
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
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
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
              hidden sm:flex items-center gap-1.5
              px-4 py-1.5 sm:px-4.5 sm:py-2
              rounded-full
              border border-gray-400/60 dark:border-white/20
              bg-white/70 dark:bg-darkTheme/60
              backdrop-blur-xl
              text-gray-700 dark:text-gray-200
              font-Ovo text-xs sm:text-sm
              shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              hover:text-black dark:hover:text-white
              hover:border-[#5A9B92]/70 dark:hover:border-[#5A9B92]/70
              hover:shadow-[0_6px_20px_rgba(90,155,146,0.15)]
              transition-[color,background-color,border-color,box-shadow] duration-200
            "
          >
            <span>VebSkills</span>
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 h-3 object-contain transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              hidden sm:flex items-center gap-1.5
              px-4 py-1.5 sm:px-4.5 sm:py-2
              rounded-full
              border border-gray-400/60 dark:border-white/20
              bg-white/70 dark:bg-darkTheme/60
              backdrop-blur-xl
              text-gray-700 dark:text-gray-200
              font-Ovo text-xs sm:text-sm
              shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              hover:text-black dark:hover:text-white
              hover:border-[#5A9B92]/70 dark:hover:border-[#5A9B92]/70
              hover:shadow-[0_6px_20px_rgba(90,155,146,0.15)]
              transition-[color,background-color,border-color,box-shadow] duration-200
            "
          >
            <span>NQuestions</span>
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 h-3 object-contain transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              hidden sm:flex items-center gap-1.5
              px-4 py-1.5 sm:px-4.5 sm:py-2
              rounded-full
              border border-gray-400/60 dark:border-white/20
              bg-white/70 dark:bg-darkTheme/60
              backdrop-blur-xl
              text-gray-700 dark:text-gray-200
              font-Ovo text-xs sm:text-sm
              shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              hover:text-black dark:hover:text-white
              hover:border-[#5A9B92]/70 dark:hover:border-[#5A9B92]/70
              hover:shadow-[0_6px_20px_rgba(90,155,146,0.15)]
              transition-[color,background-color,border-color,box-shadow] duration-200
            "
          >
            <span>NN Cohorts</span>
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 h-3 object-contain transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          {/* Dark / Light Mode Toggle (Right side of Login) */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 sm:p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
            className="block md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-64 z-50
            bg-white dark:bg-darkTheme
            transform transition-transform duration-500
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5"
            />
          </div>

          <ul className="flex flex-col gap-5 pt-24 px-10 text-sm">
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
                  className="font-Ovo hover:opacity-70 transition cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
