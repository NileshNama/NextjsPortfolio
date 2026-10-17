"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const podcastData = [
  {
    title: "Exam Thinking for High-Stakes Interviews",
    meta: "Blog · NN Cohorts",
    description:
      "How interviewers evaluate reasoning, decision clarity, and follow-up depth in high-stakes technical interviews.",
    link: "https://cohorts.nileshnama.com/app-blog/3",
    duration: "24 min read",
    tags: ["Interview Reasoning", "Follow-up Depth", "GATE/BARC"],
  },
  {
    title: "How Interviewers Evaluate Depth",
    meta: "Seminar · Live Session",
    description:
      "A breakdown of how depth is probed beyond surface answers during scientist and PSU interviews.",
    link: "https://cohorts.nileshnama.com/app-blog/5",
    duration: "32 min session",
    tags: ["First-Principles", "PSU Interviews", "Technical Defense"],
  },
  {
    title: "Systems Thinking in Competitive Exams",
    meta: "Blog · NN Cohorts",
    description:
      "Why exam problems reward system-level thinking over isolated topic preparation.",
    link: "https://cohorts.nileshnama.com/app-blog/4",
    duration: "18 min read",
    tags: ["Systems Design", "Decision Logic", "Examiner Psychology"],
  },
  {
    title: "Why Most Aspirants Misread Questions",
    meta: "Blog · NN Cohorts",
    description:
      "Common interpretation failures in exams and how examiners design questions to trigger them.",
    link: "https://cohorts.nileshnama.com/app-blog/6-why-most-aspirants-misread-questions?page=0",
    duration: "21 min read",
    tags: ["Trap Recognition", "Premise Boundaries", "Cognitive Biases"],
  },
  {
    title: "VebSkills: Applied Systems & Production Hardening",
    meta: "Workshop · Engineering",
    description:
      "Transitioning from toy tutorials to high-scale backend architectures, Docker workflows, and real open-source contributions.",
    link: "https://www.vebskills.com/",
    duration: "45 min masterclass",
    tags: ["Full Stack", "Docker & CI/CD", "Proof of Work"],
  },
]

const Podcasts = ({ isDarkMode }) => {
  const [activeTalk, setActiveTalk] = useState(null)
  const scrollRef = useRef(null)

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = activeTalk ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeTalk])

  /* ESC close */
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActiveTalk(null)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [])

  /* Swipe by arrows */
  const handleSwipe = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 390
      const offset = direction === "left" ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" })
    }
  }

  return (
    <>
      <section
        id="talks"
        className="w-full px-6 sm:px-8 lg:px-[8%] xl:px-[10%] py-20 sm:py-24 md:py-28 scroll-mt-24 relative overflow-hidden"
      >
        {/* Ambient Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#5A9B92]/10 blur-3xl rounded-full pointer-events-none -z-10" />

        {/* Heading & Swipe Controls Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14"
        >
          <div>
            <p className="text-sm tracking-[4px] uppercase text-[#5A9B92] font-semibold mb-3">
              Talks &amp; Discussions
            </p>

            <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white">
              Talks &amp; Seminars
            </h2>

            <p className="max-w-2xl text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Recorded conversations, interview breakdowns, and systems-thinking
              discussions focused on clarity, reasoning, and high-pressure decision-making.
            </p>
          </div>

          {/* Swipe Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            <button
              type="button"
              onClick={() => handleSwipe("left")}
              aria-label="Swipe left"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-[#509187] hover:border-[#509187] hover:text-white dark:hover:bg-[#509187] dark:hover:border-[#509187] text-gray-700 dark:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 text-lg"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleSwipe("right")}
              aria-label="Swipe right"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-[#509187] hover:border-[#509187] hover:text-white dark:hover:bg-[#509187] dark:hover:border-[#509187] text-gray-700 dark:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 text-lg"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Single-Line Swipe Track with Edge Gradient Masks */}
        <div className="relative w-full overflow-hidden">
          {/* Left & Right Gradient Blur Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-darkTheme dark:via-darkTheme/80 dark:to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-darkTheme dark:via-darkTheme/80 dark:to-transparent z-10 pointer-events-none" />

          {/* Single-Line Scrollable Track */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar scroll-smooth py-4 px-2 sm:px-4 flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {podcastData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveTalk(item)}
                className="
                  group cursor-pointer
                  w-[85vw] max-w-[320px] sm:max-w-none sm:w-[360px] md:w-[390px] shrink-0
                  min-h-[350px] sm:min-h-[370px]
                  rounded-3xl
                  border border-gray-200/90 dark:border-white/10
                  bg-white/85 dark:bg-[#111827]/85
                  backdrop-blur-xl
                  p-6 sm:p-7 md:p-8
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  hover:border-[#509187]/50 dark:hover:border-[#509187]/50
                  hover:shadow-[0_20px_50px_rgba(80,145,135,0.18)]
                  transition-all duration-300
                  flex flex-col justify-between
                  relative overflow-hidden select-none
                "
              >
                {/* Radial Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#509187]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Subtle Grid texture */}
                <div
                  className="
                    absolute inset-0 opacity-[0.035] pointer-events-none
                    [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]
                    dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                    [background-size:28px_28px]
                  "
                />

                <div className="relative z-10">
                  {/* Top Row: Meta Badge & Index */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#509187]/10 dark:bg-[#509187]/20 border border-[#509187]/30">
                      <span className="w-2 h-2 rounded-full bg-[#509187] animate-pulse" />
                      <span className="text-xs font-semibold text-[#3E7E76] dark:text-[#67b0a5] font-mono uppercase tracking-wider">
                        {item.meta}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-Ovo tracking-tight text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-[#509187] dark:group-hover:text-[#67b0a5] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs font-mono border border-black/5 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row: Open Session & Arrow Action */}
                <div className="relative z-10 flex items-center justify-between pt-5 mt-6 border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-[#509187] dark:group-hover:text-[#67b0a5] transition-colors">
                      Open Session
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">·</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                      {item.duration}
                    </span>
                  </div>

                  <div className="
                    w-10 h-10 sm:w-11 sm:h-11 rounded-full
                    border border-gray-300 dark:border-white/20
                    bg-gray-50 dark:bg-white/5
                    flex items-center justify-center
                    group-hover:bg-[#509187] group-hover:border-[#509187]
                    shadow-sm group-hover:shadow-md group-hover:shadow-[#509187]/30
                    transition-all duration-300
                  ">
                    <svg
                      className="w-4 h-4 text-gray-700 dark:text-gray-200 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.4}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14 sm:mt-16 relative z-10"
        >
          <a
            href="https://cohorts.nileshnama.com/app-blog/7-podcasts--seminars?page=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-primary px-8 py-3.5 sm:py-4 text-sm sm:text-base"
          >
            <span>Explore All Talks</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </motion.div>
      </section>

      {/* MODAL */}
      {activeTalk && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-5"
          onClick={() => setActiveTalk(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white dark:bg-[#111827]
              rounded-[32px]
              max-w-2xl
              w-full
              overflow-hidden
              shadow-[0_20px_80px_rgba(0,0,0,0.2)]
              border border-black/10 dark:border-white/10
            "
          >
            <div className="p-5 sm:p-8 md:p-10 relative">
              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveTalk(null)}
                aria-label="Close"
                className="
                  absolute top-4 right-4 sm:top-6 sm:right-6
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full
                  bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
                  flex items-center justify-center text-xs sm:text-sm
                  transition cursor-pointer
                "
              >
                ✕
              </button>

              {/* Meta */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#509187]/10 dark:bg-[#509187]/20 border border-[#509187]/30 mb-5 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-[#509187] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-[#3E7E76] dark:text-[#67b0a5] font-mono uppercase tracking-wider">
                  {activeTalk.meta}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-Ovo leading-tight mb-3 sm:mb-4 text-gray-900 dark:text-white">
                {activeTalk.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6">
                {activeTalk.description}
              </p>

              {/* Tags */}
              {activeTalk.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeTalk.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-mono border border-black/5 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <a
                href={activeTalk.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cta-primary w-full py-4 text-base"
              >
                <span>Open Session</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
              </a>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                This discussion is part of ongoing work around structured
                learning systems, interview reasoning, and exam thinking.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Podcasts
