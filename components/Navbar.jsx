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

  const navLinkClass =
    'font-Ovo text-sm transition-opacity hover:opacity-70'

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-[60] bg-[#5A9B92] text-white">
  <div className="max-w-7xl mx-auto px-3 py-2 text-[11px] sm:text-sm leading-tight text-center font-medium">
    <span className="sm:hidden"> ✦ Explore NN Cohorts & VebSkills Programs. 
    <a
  href="https://nileshnama.notion.site/schedule"
  target="_blank"
  rel="noopener noreferrer"
  className="
  mx-2
  px-2.5
  py-0.5
  rounded-full
  bg-black
  text-white
  text-[12px]
  font-semibold
  transition-all
  duration-300
  hover:bg-black/90
  hover:shadow-[0_0_18px_rgba(0,0,0,0.28)]
"
>
  Curriculum
</a>
    </span>
    <span className="hidden sm:inline"> ✦ Enrollments Now Open for NN Cohorts & VebSkills Programs. 
      <a
  href="https://nileshnama.notion.site/schedule"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mx-2
    px-3
    py-1
    rounded-full
    bg-black
    text-white
    hover:bg-black/80
    transition-all
    duration-300
    font-semibold
  "
>
  Curriculum
</a>
      • For enquiries WhatsApp at <span className="text-gray-900 font-semibold ml-1">
  +91 9509923340.
</span> </span>
  </div>
</div>
      {/* Decorative background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`
          fixed top-7 left-0 w-full z-50
          px-5 lg:px-8 xl:px-[8%] py-4
          flex items-center justify-between
          transition-all duration-300
          ${
            isScroll
              ? 'bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm dark:bg-darkTheme/70 dark:border-white/10'
              : 'bg-transparent'
          }
        `}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Nilesh Nama"
            className="w-28 cursor-pointer"
          />
        </a>

        {/* Desktop Nav */}
        <ul
          className={`
            hidden md:flex items-center gap-6 lg:gap-8
            px-10 py-2.5 rounded-full
            transition-all duration-300
            ${
              isScroll
                ? ''
                : 'bg-white/60 backdrop-blur-lg shadow-sm dark:bg-transparent dark:border dark:border-white/20'
            }
          `}
        >
          <li><a className={navLinkClass} href="#home">Home</a></li>
          <li><a className={navLinkClass} href="#about">About</a></li>
          <li><a className={navLinkClass} href="#work">Work</a></li>
          <li><a className={navLinkClass} href="#books">Books</a></li>
          <li><a className={navLinkClass} href="#cohorts">Cohorts</a></li>
          <li><a className={navLinkClass} href="#writing">Writing</a></li>
          <li><a className={navLinkClass} href="#talks">Talks</a></li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Theme"
              className="w-6"
            />
          </button>

          {/* LMS Login (NEW) */}
          <motion.a
  whileHover={{
    scale: 1.03,
    y: -2,
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.25 }}
  href="https://cohorts.nileshnama.com/login"
  target="_blank"
  rel="noopener noreferrer"
  className=" hidden sm:flex
    group
    flex
    items-center
    gap-2
    px-6
    py-2.5
    rounded-full
    border border-gray-400/70
    bg-white/70
    backdrop-blur-xl
    text-gray-700
    font-medium
    shadow-[0_6px_18px_rgba(0,0,0,0.05)]
    hover:shadow-[0_18px_45px_rgba(80,145,135,0.16)]
    hover:border-[#5A9B92]/40
    transition-all duration-300
  "
>
  Login

  <Image
    src={assets.arrow_icon}
    alt=""
    className="
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</motion.a>

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
              ['Home', '#home'],
              ['About', '#about'],
              ['Work', '#work'],
              ['Books', '#books'],
              ['Cohorts', '#cohorts'],
              ['Writing', '#writing'],
              ['Talks', '#talks'],
              ['Contact', '#contact'],
            ].map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-Ovo hover:opacity-70 transition"
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
