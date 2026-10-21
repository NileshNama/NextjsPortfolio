'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home')
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom
        // Show button once scrolled past the home section
        setIsVisible(homeBottom < 80)
      } else {
        // Fallback scroll threshold if home section is not present
        setIsVisible(window.scrollY > 450)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          aria-label="Scroll to top"
          className="
            fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40
            w-11 h-11 sm:w-12 sm:h-12
            rounded-full
            bg-[#0B1528] hover:bg-[#13223f] dark:bg-[#1E293B] dark:hover:bg-[#283548]
            text-white
            flex items-center justify-center
            shadow-[0_10px_25px_-5px_rgba(11,21,40,0.4)]
            hover:shadow-[0_15px_30px_-5px_rgba(11,21,40,0.5)]
            border border-white/10 dark:border-white/15
            backdrop-blur-sm
            cursor-pointer
            group
          "
        >
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
