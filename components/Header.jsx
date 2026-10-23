import { assets } from '@/assets/assets'
import Image from 'next/image'
import indianFlagWavy from '@/public/india-flag-ripple.png'
import React, { useEffect, useState, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { EASINGS, heroEntrance } from '@/lib/animations'

// Authentic ancient reed pen (Kalam) thick yellow calligraphic underline
const KalamUnderline = () => (
  <svg
    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[6px] sm:h-[8px] pointer-events-none overflow-visible -z-10"
    viewBox="0 0 100 12"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Thick calligraphic chisel body of ancient pen */}
    <path
      d="M 1 8.5 C 22 5, 52 9.5, 99 3 C 78 7, 36 5.5, 1 8.5 Z"
      fill="#FACC15"
      className="dark:fill-yellow-400 opacity-90"
    />
    {/* Main reed pen ink stroke */}
    <path
      d="M 2 7.5 C 24 5, 54 8.5, 98 3.5"
      stroke="#EAB308"
      strokeWidth="2.4"
      strokeLinecap="round"
      className="dark:stroke-yellow-300"
    />
  </svg>
)

const Header = () => {
  const shouldReduceMotion = useReducedMotion()
  const manifestoText = "I build products at VebGlitch, shape engineers through VebSkills, and prepare aspirants to crack GATE, BARC and technical interviews through NN Cohorts."

  const profileImages = [
    assets.profile_img_2,
    assets.profile_img_12,
    assets.profile_img_3,
    assets.profile_img_13,
    assets.profile_img_4,
    assets.profile_img_8,
    assets.profile_img_9,
    assets.profile_img_10,
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [profileImages.length])

  const [charIndex, setCharIndex] = useState(manifestoText.length)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('auto')

  useEffect(() => {
    setIsMounted(true)
    setCharIndex(0)
  }, [])

  useEffect(() => {
    if (!contentRef.current) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target) {
          setContentHeight(entry.target.offsetHeight)
        }
      }
    })
    ro.observe(contentRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let timeout

    if (!isDeleting && charIndex < manifestoText.length) {
      // Keystroke cadence modeled after a real developer typing speed
      const prevChar = charIndex > 0 ? manifestoText[charIndex - 1] : ''
      let delay = 40 + Math.floor(Math.random() * 30) // 40-70ms keystrokes

      if (prevChar === '.') {
        delay = 350 + Math.floor(Math.random() * 80) // natural pause between sentences
      } else if (prevChar === ',') {
        delay = 180 + Math.floor(Math.random() * 40) // natural pause at commas
      } else if (prevChar === '&') {
        delay = 110
      } else if (prevChar === ' ') {
        delay = 65 + Math.floor(Math.random() * 25)
      }

      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1)
      }, delay)
    } else if (!isDeleting && charIndex === manifestoText.length) {
      if (isHovered) return // Pause deleting if user is hovering over text or hyperlinks
      // Typing completed! Cursor blinks for 20 seconds before rewriting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 20000)
    } else if (isDeleting && charIndex > 0) {
      // Rapid developer backspace
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1)
      }, 20)
    } else if (isDeleting && charIndex === 0) {
      // Brief pause before typing starts again
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, 600)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isMounted, isHovered, manifestoText])

  const renderTypedSegment = (fullStr, startIdx, endIdx, currentChars) => {
    if (currentChars <= startIdx) return null
    const visibleLength = Math.min(currentChars - startIdx, endIdx - startIdx)
    return fullStr.slice(0, visibleLength)
  }

  const charCount = isMounted ? charIndex : manifestoText.length

  const s1 = renderTypedSegment("I build products at ", 0, 20, charCount)
  const vebGlitchText = renderTypedSegment("VebGlitch", 20, 29, charCount)
  const isVebGlitchComplete = charCount >= 29
  const s2 = renderTypedSegment(", shape engineers through ", 29, 55, charCount)
  const vebSkillsText = renderTypedSegment("VebSkills", 55, 64, charCount)
  const isVebSkillsComplete = charCount >= 64
  const s3 = renderTypedSegment(", and prepare aspirants to crack GATE, BARC and technical interviews through ", 64, 141, charCount)
  const nnCohortsText = renderTypedSegment("NN Cohorts", 141, 151, charCount)
  const isNnCohortsComplete = charCount >= 151
  const s4 = renderTypedSegment(".", 151, 152, charCount)

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-14 mx-auto relative">
        {/* Soft background glow */}
        <div className="absolute -top-10 left-1/4 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[#5A9B92]/10 blur-3xl -z-10" />
        <div className="absolute top-20 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#5A9B92]/5 blur-3xl -z-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Left side: Profile Image (3D Floating & Swing Animation) */}
          <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 flex items-center justify-center lg:justify-start relative py-1 sm:py-4 md:py-6">
            {/* Ambient Background Aura / Deep 3D Atmosphere */}
            <div className="absolute w-56 h-56 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] xl:w-[540px] xl:h-[540px] rounded-full bg-gradient-to-tr from-[#5A9B92]/30 via-[#5A9B92]/15 to-transparent blur-2xl sm:blur-3xl -z-20 pointer-events-none" />

            {/* 3D Floating/Swinging Motion Container */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: EASINGS.smoothOut }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Floating & gentle swing motion wrapper */}
              <motion.div
                animate={shouldReduceMotion ? undefined : {
                  y: [-8, 8, -8],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative group z-10"
              >
                {/* 3D Back Glow / Rim Light */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#5A9B92]/50 via-teal-400/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />

                {/* 3D Beveled Frame with Deep Perspective Shadow */}
                <div
                  className="
                    relative rounded-full p-2 sm:p-2.5
                    bg-gradient-to-b from-white/90 via-white/50 to-gray-200/40
                    dark:from-white/20 dark:via-white/5 dark:to-black/50
                    backdrop-blur-md
                    shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25),0_30px_60px_-15px_rgba(90,155,146,0.3)]
                    dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.7),0_35px_70px_-20px_rgba(90,155,146,0.25)]
                    ring-1 ring-white/60 dark:ring-white/15
                    transition-transform duration-300
                  "
                >
                  {/* Smooth 5-Second Profile Image Carousel */}
                  <div className="relative rounded-full w-44 sm:w-64 md:w-80 lg:w-[380px] xl:w-[440px] 2xl:w-[480px] aspect-square overflow-hidden z-10">
                    {profileImages.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={false}
                        animate={{
                          opacity: currentImageIndex === idx ? 1 : 0,
                          scale: currentImageIndex === idx ? 1 : 1.04,
                        }}
                        transition={{
                          opacity: { duration: 1.2, ease: "easeInOut" },
                          scale: { duration: 1.6, ease: "easeOut" },
                        }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={img}
                          alt="Nilesh Nama"
                          priority={idx === 0}
                          fill
                          sizes="(max-width: 640px) 176px, (max-width: 768px) 256px, (max-width: 1024px) 380px, 480px"
                          className="rounded-full aspect-square object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* 3D Glass Specular Rim Inner Ring */}
                  <div className="absolute inset-1.5 sm:inset-2.5 rounded-full pointer-events-none ring-1 ring-inset ring-white/70 dark:ring-white/20 z-20" />
                </div>

                {/* Corner Badge: Engineering Portfolio (Subtle Dark Teal Accent) */}
                <motion.a
                  href="https://dev.nileshnama.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: EASINGS.smoothOut }}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                  className="
                    absolute -bottom-1 right-0 sm:bottom-4 sm:right-4 md:bottom-6 md:right-4 lg:bottom-6 lg:right-4 xl:bottom-8 xl:right-6
                    z-30
                    flex items-center gap-1.5 sm:gap-2
                    px-3 py-1.5 sm:px-4 sm:py-2.5
                    rounded-full
                    border border-white/25 dark:border-white/20
                    bg-gradient-to-r from-[#437d75] to-[#509187]
                    text-white
                    backdrop-blur-xl
                    text-[11px] sm:text-sm font-semibold
                    shadow-[0_4px_14px_rgba(80,145,135,0.25),0_2px_6px_rgba(0,0,0,0.12)]
                    hover:shadow-[0_6px_20px_rgba(80,145,135,0.38)]
                    hover:brightness-105
                    transition-all duration-300
                    group/badge cursor-pointer
                    whitespace-nowrap
                  "
                >
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white" />
                  </span>
                  <span className="tracking-wide">Engineering Portfolio</span>
                  <span className="text-white font-bold transition-transform duration-200 ease-out group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5">↗</span>
                </motion.a>
              </motion.div>

              {/* 3D Dynamic Cast Ground Shadow (breathes in sync with float) */}
              <motion.div
                animate={shouldReduceMotion ? undefined : {
                  scaleX: [1, 0.82, 1],
                  scaleY: [1, 0.82, 1],
                  opacity: [0.55, 0.28, 0.55],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  w-36 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-3 sm:h-8
                  rounded-[100%]
                  bg-black/35 dark:bg-black/75
                  blur-md sm:blur-xl
                  mt-1.5 sm:mt-4
                  -z-10
                "
              />
            </motion.div>
          </div>

          {/* Right side: Remaining Text */}
          <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 flex flex-col items-center md:items-start text-center md:text-left gap-2 sm:gap-3 md:gap-4 md:pl-0">
            {/* Trust Badge (Above Name) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: EASINGS.smoothOut }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-black text-white text-xs sm:text-sm font-medium shadow-[0_10px_25px_rgba(0,0,0,0.18)] border border-white/10"
            >
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#5A9B92] animate-pulse" />
              Built for Serious Aspirants
            </motion.div>

            {/* Primary Identity (Above Nilesh Nama) */}
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: EASINGS.smoothOut }}
              className="text-xs sm:text-base lg:text-xl text-gray-700 dark:text-gray-200 font-semibold tracking-normal flex items-center justify-center md:justify-start gap-1.5 sm:gap-2"
            >
              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: [0, 3, -3, 2, -1, 0],
                        y: [0, -1.5, 0, -1, 0],
                        scale: [1, 1.05, 1, 1.03, 1],
                        filter: [
                          'drop-shadow(0 2px 4px rgba(0,0,0,0.22)) drop-shadow(0 0 4px rgba(255,153,51,0.2)) brightness(1)',
                          'drop-shadow(0 4px 8px rgba(0,0,0,0.32)) drop-shadow(0 0 8px rgba(255,153,51,0.42)) brightness(1.06)',
                          'drop-shadow(0 2px 4px rgba(0,0,0,0.22)) drop-shadow(0 0 4px rgba(255,153,51,0.2)) brightness(1)',
                        ],
                      }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.25, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center shrink-0 w-[1.28em] h-[1.28em] relative select-none cursor-pointer group"
                title="Proudly Indian 🇮🇳"
                aria-label="Indian Flag"
              >
                {/* 3D background depth shade / elevated drop shadow */}
                <span
                  className="absolute inset-0 bg-black/25 dark:bg-black/45 blur-[2.5px] rounded-lg -z-10 translate-y-[2px] scale-95 group-hover:scale-105 transition-transform"
                  aria-hidden="true"
                />

                {/* Waving Indian Flag */}
                <Image
                  src={indianFlagWavy}
                  alt="Indian Flag"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm"
                  priority
                />
              </motion.span>
              <span>Software Engineer · Technical Educator · Author</span>
            </motion.h2>

            {/* Name */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: EASINGS.smoothOut }}
              className="text-[clamp(2.5rem,6.7vw,4.3rem)] md:text-[3.6rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.4rem] font-black tracking-tight text-gray-900 dark:text-white leading-[0.92] whitespace-nowrap"
            >
              NILESH NAMA
            </motion.h1>

            {/* Main line (Description with Smooth Height-Expanding Typing Animation) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASINGS.smoothOut }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-base lg:text-lg w-full max-w-2xl flex flex-col gap-2 sm:gap-2.5 mt-0.5 sm:mt-1.5 px-1 sm:px-0"
            >
              {/* Smooth height-expanding wrapper: fits 1 line with no extra space, smoothly expands when wrapping to 2 lines to push text below */}
              <motion.div
                animate={isMounted && typeof contentHeight === 'number' ? { height: contentHeight } : { height: 'auto' }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div
                  ref={contentRef}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="font-medium text-gray-800 dark:text-gray-200 text-xs sm:text-base lg:text-lg leading-snug sm:leading-relaxed pb-2"
                >
                  {s1 && <span>{s1}</span>}

                  {vebGlitchText && (
                    isVebGlitchComplete ? (
                      <a
                        href="https://vebglitch.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-bold text-[#0284c7] dark:text-[#38bdf8] hover:text-[#0369a1] dark:hover:text-[#7dd3fc] transition-all duration-200 hover:scale-[1.02] cursor-pointer group/kalam mx-0.5"
                      >
                        <span className="relative z-10">{vebGlitchText}</span>
                        <KalamUnderline />
                      </a>
                    ) : (
                      <span className="relative inline-block font-bold text-[#0284c7] dark:text-[#38bdf8] mx-0.5">
                        <span>{vebGlitchText}</span>
                      </span>
                    )
                  )}

                  {s2 && <span>{s2}</span>}

                  {vebSkillsText && (
                    isVebSkillsComplete ? (
                      <a
                        href="https://www.vebskills.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-bold text-[#059669] dark:text-[#34d399] hover:text-[#047857] dark:hover:text-[#6ee7b7] transition-all duration-200 hover:scale-[1.02] cursor-pointer group/kalam mx-0.5"
                      >
                        <span className="relative z-10">{vebSkillsText}</span>
                        <KalamUnderline />
                      </a>
                    ) : (
                      <span className="relative inline-block font-bold text-[#059669] dark:text-[#34d399] mx-0.5">
                        <span>{vebSkillsText}</span>
                      </span>
                    )
                  )}

                  {s3 && <span>{s3}</span>}

                  {nnCohortsText && (
                    isNnCohortsComplete ? (
                      <a
                        href="https://cohorts.nileshnama.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-bold text-[#d97706] dark:text-[#fbbf24] hover:text-[#b45309] dark:hover:text-[#fde68a] transition-all duration-200 hover:scale-[1.02] cursor-pointer group/kalam mx-0.5"
                      >
                        <span className="relative z-10">{nnCohortsText}</span>
                        <KalamUnderline />
                      </a>
                    ) : (
                      <span className="relative inline-block font-bold text-[#d97706] dark:text-[#fbbf24] mx-0.5">
                        <span>{nnCohortsText}</span>
                      </span>
                    )
                  )}

                  {s4 && <span>{s4}</span>}

                  <span className="inline-block w-[2px] h-[1.15em] bg-[#509187] align-middle ml-1 animate-pulse" />
                </div>
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-base leading-relaxed">
                <p>
                  Software engineer, technical educator, and author building practical products, developing engineering talent, and making complex technical concepts easier to understand through structured thinking.
                </p>
              </div>
            </motion.div>

            {/* CTA Section (2 Buttons: NN Sessions + Featured Engineering Work) */}
            <div className="w-full max-w-2xl mt-1.5 sm:mt-3 mb-1 sm:mb-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {/* Button 1: Dive Into the NN Sessions */}
              <motion.a
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -2.5, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.45, delay: 0.58, ease: EASINGS.smoothOut }}
                href="#nn-sessions"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('nn-sessions')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                    window.history.pushState(null, '', window.location.pathname)
                  }
                }}
                className="group flex-1 w-full py-3 sm:py-3.5 px-4 sm:px-6 cta-primary text-center text-xs sm:text-sm md:text-[15px] focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
              >
                <span>Dive Into the NN Sessions</span>
                <Image
                  src={assets.right_arrow_white}
                  alt=""
                  className="w-3.5 sm:w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </motion.a>

              {/* Button 2: Featured Engineering Work */}
              <motion.a
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={shouldReduceMotion ? undefined : { y: -2.5, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                transition={{ duration: 0.45, delay: 0.62, ease: EASINGS.smoothOut }}
                href="#featured-work"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('featured-work')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                    window.history.pushState(null, '', window.location.pathname)
                  }
                }}
                className="group flex-1 w-full py-3 sm:py-3.5 px-4 sm:px-6 cta-secondary text-center text-xs sm:text-sm md:text-[15px] focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
              >
                <span>Featured Engineering Work</span>
                <span className="text-sm transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#509187] dark:text-[#67b0a5]">→</span>
              </motion.a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
