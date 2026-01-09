import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
      {/* Decorative background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`
          fixed top-0 left-0 w-full z-50
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
        <a href="#top" className="flex items-center">
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
          <li><a className={navLinkClass} href="#top">Home</a></li>
          <li><a className={navLinkClass} href="#about">About</a></li>
          <li><a className={navLinkClass} href="#services">Work</a></li>
          <li><a className={navLinkClass} href="#work">Books</a></li>
          <li><a className={navLinkClass} href="#cohorts">Cohorts</a></li>
          <li><a className={navLinkClass} href="#writing">Writing</a></li>
          <li><a className={navLinkClass} href="#talks">Talks</a></li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            className="opacity-80 hover:opacity-100 transition"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle theme"
              className="w-6"
            />
          </button>

          {/* LMS Login (NEW) */}
          <a
            href="https://cohorts.nileshnama.com/login"
            target="_blank"
            className="
              hidden lg:flex items-center gap-2
              px-8 py-2.5 rounded-full text-sm font-Ovo
              border border-gray-500
              hover:bg-lightHover hover:text-white
              transition dark:border-white/40
            "
          >
            Login
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

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
              ['Home', '#top'],
              ['About', '#about'],
              ['Work', '#services'],
              ['Books', '#work'],
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
