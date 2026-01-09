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
    link: "https://media.nileshnama.com/exam-thinking-interviews",
  },
  {
    title: "How Interviewers Evaluate Depth",
    meta: "Seminar · Live Session",
    description:
      "A breakdown of how depth is probed beyond surface answers during scientist and PSU interviews.",
    link: "https://media.nileshnama.com/interviewer-depth",
  },
  {
    title: "Systems Thinking in Competitive Exams",
    meta: "Talk · Recorded",
    description:
      "Why exam problems reward system-level thinking over isolated topic preparation.",
    link: "https://media.nileshnama.com/systems-thinking-exams",
  },
  {
    title: "Why Most Aspirants Misread Questions",
    meta: "Podcast · Discussion",
    description:
      "Common interpretation failures in exams and how examiners design questions to trigger them.",
    link: "https://media.nileshnama.com/misreading-questions",
  },
]

const Podcasts = ({ isDarkMode }) => {
  const [activeTalk, setActiveTalk] = useState(null)

  /* Lock background scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = activeTalk ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeTalk])

  /* Close modal on ESC */
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActiveTalk(null)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [])

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="talks"
        className="w-full px-[12%] py-20 scroll-mt-24"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-Ovo">
            Talks
          </p>

          <h2 className="text-5xl font-Ovo mb-4">
            Podcasts & Seminars
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-Ovo">
            Recorded discussions, interviews, and seminars on exam thinking and systems.
          </p>
        </div>

        {/* Talks List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {podcastData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveTalk(item)}
              className="
                group cursor-pointer
                border-l-2 border-transparent
                hover:border-black dark:hover:border-white
                pl-4
              "
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold leading-snug mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.meta}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <Image
                  src={assets.send_icon}
                  alt="open"
                  className="w-4 mt-1 opacity-40 group-hover:opacity-100 transition"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA — unchanged */}
        <div className="flex justify-center mt-20">
          <a
            href="https://media.nileshnama.com"
            target="_blank"
            className="
              w-max flex items-center justify-center gap-2
              text-gray-700 dark:text-white
              border-[0.5px] border-gray-700 dark:border-white
              rounded-full py-3 px-10
              hover:bg-[#509187] hover:text-white
              transition duration-500
            "
          >
            View all talks
            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="Right arrow"
              className="w-4"
            />
          </a>
        </div>
      </motion.section>

      {/* MODAL */}
      {activeTalk && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveTalk(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-xl max-w-2xl w-full shadow-xl overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative font-Ovo">
              <button
                onClick={() => setActiveTalk(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h3 className="text-2xl mb-2">{activeTalk.title}</h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {activeTalk.meta}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeTalk.description}
              </p>

              {/* ACTION BUTTON — NEW */}
              {activeTalk.link && (
                <a
                  href={activeTalk.link}
                  target="_blank"
                  className="
                    mt-10 inline-flex items-center justify-center gap-2
                    w-full rounded-lg
                    border border-gray-300 dark:border-white/20
                    py-3 text-sm
                    hover:bg-[#509187] hover:text-white
                    transition
                  "
                >
                  Open session →
                </a>
              )}

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400">
                This session is part of ongoing discussions on exam thinking and systems.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Podcasts
