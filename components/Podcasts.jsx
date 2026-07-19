"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const podcastData = [
  {
    title: "Exam Thinking for High-Stakes Interviews",
    meta: "Podcast · YouTube",
    description:
      "How interviewers evaluate reasoning, decision clarity, and follow-up depth in high-stakes technical interviews.",
    link: "https://cohorts.nileshnama.com/app-blog/3",
  },
  {
    title: "How Interviewers Evaluate Depth",
    meta: "Seminar · Live Session",
    description:
      "A breakdown of how depth is probed beyond surface answers during scientist and PSU interviews.",
    link: "https://cohorts.nileshnama.com/app-blog/5",
  },
  {
    title: "Systems Thinking in Competitive Exams",
    meta: "Talk · Recorded",
    description:
      "Why exam problems reward system-level thinking over isolated topic preparation.",
    link: "https://cohorts.nileshnama.com/app-blog/4",
  },
  {
    title: "Why Most Aspirants Misread Questions",
    meta: "Podcast · Discussion",
    description:
      "Common interpretation failures in exams and how examiners design questions to trigger them.",
    link: "https://cohorts.nileshnama.com/app-blog/6-why-most-aspirants-misread-questions?page=0",
  },
]

const Podcasts = ({ isDarkMode }) => {
  const [activeTalk, setActiveTalk] = useState(null)

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

  return (
    <>
      <section
        id="talks"
        className="w-full px-[7%] sm:px-[10%] lg:px-[12%] py-24 scroll-mt-24 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#5A9B92]/10 blur-3xl rounded-full"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <p className="text-sm tracking-[4px] uppercase text-[#5A9B92] font-semibold mb-4">
            Talks & Discussions
          </p>

          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Podcasts & Seminars
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg">
            Recorded conversations, interview breakdowns, and systems-thinking
            discussions focused on clarity, reasoning, and high-pressure decision-making.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 relative z-10">
          {podcastData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveTalk(item)}
              className="
                group cursor-pointer
                rounded-3xl
                border border-gray-200/70 dark:border-white/10
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                hover:border-[#5A9B92]/40
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition-all duration-500
              "
            >

              {/* Meta Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A9B92]/10 border border-[#5A9B92]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#5A9B92]"></div>
                <span className="text-sm font-medium text-[#3E7E76]">
                  {item.meta}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold leading-snug mb-4 group-hover:text-[#3E7E76] transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-8 text-[15px]">
                {item.description}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100 dark:border-white/10">

                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Open Session
                </span>

                <div className="
                  w-12 h-12 rounded-full
                  border border-gray-300 dark:border-white/20
                  flex items-center justify-center
                  group-hover:bg-[#5A9B92]
                  group-hover:border-[#5A9B92]
                  transition-all duration-300
                ">
                  <Image
                    src={assets.right_arrow_bold}
                    alt=""
                    className="w-4 group-hover:invert transition"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 relative z-10"
        >
          <a
            href="https://cohorts.nileshnama.com/app-blog/7-podcasts--seminars?page=0"
            target="_blank"
            className="
              group
              px-8 py-4 rounded-full
              bg-[#509187]
              text-white
              font-medium
              flex items-center gap-3
              hover:scale-[1.03]
              hover:shadow-[0_10px_30px_rgba(80,145,135,0.35)]
              transition-all duration-300
            "
          >
            Explore All Talks

            <span className="group-hover:translate-x-1 transition">
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
            <div className="p-8 sm:p-10 relative">

              {/* Close */}
              <button
                onClick={() => setActiveTalk(null)}
                className="
                  absolute top-6 right-6
                  w-10 h-10 rounded-full
                  bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
                  transition
                "
              >
                ✕
              </button>

              {/* Meta */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A9B92]/10 border border-[#5A9B92]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#5A9B92]"></div>
                <span className="text-sm font-medium text-[#3E7E76]">
                  {activeTalk.meta}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold leading-tight mb-6 text-gray-900 dark:text-white">
                {activeTalk.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-8 text-[16px]">
                {activeTalk.description}
              </p>

              {/* CTA */}
              <a
                href={activeTalk.link}
                target="_blank"
                className="
                  mt-10 inline-flex items-center justify-center gap-3
                  w-full rounded-2xl
                  bg-[#509187]
                  text-white
                  py-4
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                Open Session →
              </a>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400 leading-7">
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