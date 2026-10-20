'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'

const Preloader = ({
  isDarkMode,
  badge = "✳ INTRODUCING",
  title = "NILESH NAMA",
  subtitle = "ENGINEER · EDUCATOR · AUTHOR",
}) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Lock scroll on both html and body during preloader display
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const startTime = performance.now()
    const targetDuration = 1450 // Smooth ~1.45s loading sequence

    let animationFrameId

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime
      const timeFraction = Math.min(elapsed / targetDuration, 1)

      // Ease-out cubic curve for natural smooth deceleration
      const easeOut = 1 - Math.pow(1 - timeFraction, 3)
      const currentProgress = Math.min(Math.round(easeOut * 100), 100)

      setProgress(currentProgress)

      if (timeFraction < 1) {
        animationFrameId = requestAnimationFrame(updateProgress)
      } else {
        // Hold briefly at 100% so the user clearly registers completion before swipe-up
        setTimeout(() => {
          setIsComplete(true)
          // Restore page scroll once the swipe-up curtain has lifted
          setTimeout(() => {
            document.documentElement.style.overflow = originalHtmlOverflow || ''
            document.body.style.overflow = originalBodyOverflow || ''
          }, 850)
        }, 220)
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.documentElement.style.overflow = originalHtmlOverflow || ''
      document.body.style.overflow = originalBodyOverflow || ''
    }
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          className="fixed inset-0 z-[9999] w-full h-full max-w-[100vw] max-h-[100vh] flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 bg-white dark:bg-darkTheme text-gray-900 dark:text-white select-none overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
        >
          {/* User Provided Background Image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20">
            <Image
              src="/preloader-bg.png"
              alt="Nilesh Nama Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right md:object-[80%_center] opacity-55 dark:opacity-45 transition-transform duration-1000 scale-100"
            />
            {/* Elegant multi-stop gradient scrim to guarantee flawless text contrast in light and dark mode */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-[#191919]/90 dark:via-[#191919]/70 dark:to-[#191919]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/70 dark:from-[#191919]/85 dark:via-transparent dark:to-[#191919]/75" />
          </div>

          {/* Exact soft ambient aura background from Home / Hero section */}
          <div className="absolute -top-10 left-1/4 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[#5A9B92]/10 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#5A9B92]/5 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[560px] h-40 sm:h-72 rounded-full bg-[#509187]/15 blur-3xl -z-10 pointer-events-none" />

          {/* Full-Width Center Content Wrapper */}
          <div className="w-full max-w-[94vw] mx-auto flex flex-col items-center text-center relative z-10 px-2 sm:px-4 overflow-hidden">
            
            {/* Top Pill: ✳ INTRODUCING */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-[#509187] dark:text-[#67b0a5] text-xs sm:text-sm font-mono font-bold tracking-[0.22em] uppercase mb-4 sm:mb-6 border border-[#509187]/25 shadow-sm"
            >
              <span>{badge}</span>
            </motion.div>

            {/* Big Hero Typography */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[92vw] mx-auto preloader-hero-text font-black text-gray-900 dark:text-white select-none text-center"
              style={{
                fontSize: "clamp(2rem, 11.5vw, 14rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
              }}
            >
              {title}
            </motion.h1>

            {/* Subheading Below Title */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[11px] sm:text-sm md:text-base font-mono sm:font-sans font-semibold tracking-[0.12em] sm:tracking-[0.25em] text-gray-600 dark:text-gray-300 uppercase mt-3 sm:mt-5 text-center max-w-4xl px-4 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* Ultra-Modern High-End Progress Bar */}
            <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl mt-10 sm:mt-14 md:mt-16 flex flex-col gap-2.5 px-2 sm:px-0">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono px-0.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#509187] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#509187]" />
                  </span>
                  <span className="tracking-[0.2em] uppercase text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {progress < 100 ? 'INITIALIZING EXPERIENCE' : 'SYSTEM READY'}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white tabular-nums tracking-tight font-mono">
                    {progress}
                  </span>
                  <span className="text-[11px] font-semibold text-[#509187] dark:text-[#67b0a5] font-mono">%</span>
                </div>
              </div>

              {/* Glowing Glass Progress Track */}
              <div className="w-full h-2 sm:h-2.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden p-0.5 relative border border-black/5 dark:border-white/10 backdrop-blur-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#2c6158] via-[#509187] to-[#7ce0d5] relative shadow-[0_0_15px_rgba(80,145,135,0.85)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                >
                  {/* Glowing leading beam */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 rounded-full bg-white/90 shadow-[0_0_10px_#ffffff,0_0_20px_#7ce0d5]" />
                </motion.div>
              </div>

              {/* Engineering Scale Markers */}
              <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-gray-400 dark:text-gray-500 px-0.5 pt-0.5 select-none">
                <span className={progress >= 0 ? "text-[#509187] font-semibold transition-colors" : ""}>00</span>
                <span className={progress >= 25 ? "text-[#509187] font-semibold transition-colors" : ""}>25</span>
                <span className={progress >= 50 ? "text-[#509187] font-semibold transition-colors" : ""}>50</span>
                <span className={progress >= 75 ? "text-[#509187] font-semibold transition-colors" : ""}>75</span>
                <span className={progress >= 100 ? "text-[#509187] font-bold transition-colors" : ""}>100</span>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
