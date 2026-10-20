'use client'

import React, { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import HandnoteHighlight from './HandnoteHeading'

const impactData = [
  {
    id: "01",
    title: "NN Cohorts",
    description:
      "A thinking-first learning ecosystem for GATE, BARC, ISRO, and PSU aspirants — focused on reasoning, decision-making, and examiner psychology.",
    signal:
      "Used by aspirants preparing for GATE, BARC, ISRO, and PSU interviews.",
    meta: "Learning ecosystem",
  },
  {
    id: "02",
    title: "VebSkills Platform",
    description:
      "A hands-on, project-driven software development platform where developers build production-grade web applications, master DevOps workflows, and build proof-of-work portfolios.",
    signal:
      "Applied across full stack architectures, production deployments, and open source engineering.",
    meta: "Engineering ecosystem",
  },
  {
    id: "03",
    title: "Standard Reference Texts",
    description:
      "Authoring long-form, concept-driven reference books for OS, DBMS, CN, and Compiler Design — optimized for depth, not shortcuts.",
    signal:
      "Multi-volume reference texts covering core computer science subjects.",
    meta: "Reference literature",
  },
  {
    id: "04",
    title: "Interview Preparation Frameworks",
    description:
      "Designed interview-core, depth, and simulation frameworks to train explanation, follow-up handling, and performance under pressure.",
    signal:
      "Applied across structured interview cohorts and simulation tracks.",
    meta: "Interview frameworks",
  },
  {
    id: "05",
    title: "Open Learning Content",
    description:
      "Free YouTube and open-series content focused on exam thinking, PYQ decoding, and conceptual clarity.",
    signal:
      "Public learning layer with free access via YouTube and LMS.",
    meta: "Open learning layer",
  },
]

const Impact = ({ isDarkMode }) => {
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const duplicatedData = [...impactData, ...impactData]

  return (
    <motion.section
      id="impact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-20 sm:py-24 md:py-28 bg-[#111827] text-white scroll-mt-20 overflow-hidden"
    >
      <style>{`
        @keyframes swipeImpactTrack {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .impact-swipe-track {
          display: flex;
          width: max-content;
          animation: swipeImpactTrack 38s linear infinite;
        }
        .impact-swipe-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 px-4 sm:px-6 max-w-3xl mx-auto">
        <p className="text-sm text-[#5A9B92] uppercase tracking-[0.2em] font-medium mb-2">Impact</p>
        <p className="section-label mb-2">FIELD NOTES</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          <HandnoteHighlight>Proof of Work &amp; Outcomes</HandnoteHighlight>
        </h2>
        <p className="text-gray-300 font-normal text-sm sm:text-base leading-relaxed">
          Systems, platforms, and learning frameworks built and used in real contexts.
        </p>
      </div>

      {/* Inline Swipe Track Container with Edge Gradient Fades */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent z-10 pointer-events-none" />

        {/* Right Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#111827] via-[#111827]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth py-4 px-4 sm:px-8 cursor-grab active:cursor-grabbing"
        >
          <div
            className={`flex gap-6 sm:gap-7 w-max ${shouldReduceMotion ? '' : 'impact-swipe-track'}`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {duplicatedData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="
                  group relative
                  w-[85vw] max-w-[320px] sm:max-w-none sm:w-[370px] md:w-[410px]
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-md
                  p-6 sm:p-7 md:p-8
                  flex flex-col justify-between
                  shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                  hover:border-[#5A9B92]/50
                  hover:shadow-[0_20px_60px_rgba(90,155,146,0.22)]
                  hover:-translate-y-2
                  transition-all duration-300
                  shrink-0 select-none
                "
              >
                {/* Radial Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#5A9B92]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Meta & Identifier */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#5A9B92]/15 text-[#5A9B92] border border-[#5A9B92]/30">
                      {item.meta}
                    </span>
                    <span className="font-mono text-xs font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-Ovo text-white mb-3 tracking-tight group-hover:text-[#67b0a5] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Micro-impact signal with pulse indicator */}
                <div className="relative z-10 pt-4 border-t border-white/10 mt-auto flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#5A9B92] animate-pulse shrink-0 mt-1.5" />
                  <p className="text-xs sm:text-sm text-[#5A9B92] font-medium leading-relaxed">
                    {item.signal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Impact
