"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const MEDIA_TYPES = [
  "All",
  "Podcast",
  "Seminar",
  "Talk",
  "Discussion",
]

const mediaData = [
  {
    id: "exam-thinking-interviews",
    title: "Exam Thinking for High-Stakes Interviews",
    meta: "Podcast · YouTube",
    type: "Podcast",
    description:
      "How interviewers evaluate reasoning, decision clarity, and follow-up depth in high-stakes technical interviews.",
    link: "https://media.nileshnama.com/exam-thinking-interviews",
  },
  {
    id: "interviewer-depth",
    title: "How Interviewers Evaluate Depth",
    meta: "Seminar · Live Session",
    type: "Seminar",
    description:
      "A breakdown of how depth is probed beyond surface answers during scientist and PSU interviews.",
    link: "https://media.nileshnama.com/interviewer-depth",
  },
  {
    id: "systems-thinking-exams",
    title: "Systems Thinking in Competitive Exams",
    meta: "Talk · Recorded",
    type: "Talk",
    description:
      "Why exam problems reward system-level thinking over isolated topic preparation.",
    link: "https://media.nileshnama.com/systems-thinking-exams",
  },
  {
    id: "misreading-questions",
    title: "Why Most Aspirants Misread Questions",
    meta: "Podcast · Discussion",
    type: "Discussion",
    description:
      "Common interpretation failures in exams and how examiners design questions to trigger them.",
    link: "https://media.nileshnama.com/misreading-questions",
  },
]

const MediaPage = () => {
  const [activeItem, setActiveItem] = useState(null)
  const [search, setSearch] = useState("")
  const [activeType, setActiveType] = useState("All")

  /* Lock scroll on modal */
  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeItem])

  /* Close modal on ESC */
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActiveItem(null)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [])

  /* FILTER + SEARCH */
  const filteredMedia = useMemo(() => {
    let data = [...mediaData]

    if (activeType !== "All") {
      data = data.filter(item => item.type === activeType)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      data = data.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.meta.toLowerCase().includes(q)
      )
    }

    return data
  }, [search, activeType])

  return (
    <>
      {/* MAIN SECTION */}
      <section className="w-full px-6 sm:px-[12%] py-20">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-lg font-Ovo mb-2">Media</h4>

          <h2 className="text-4xl sm:text-5xl font-Ovo">
            Talks, Podcasts & Seminars
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 font-Ovo">
            Recorded discussions, interviews, and seminars focused on
            exam thinking, systems, and decision-making.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search media…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkTheme outline-none"
          />
        </div>

        {/* TYPE FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {MEDIA_TYPES.map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
                ${
                  activeType === type
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* MEDIA LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {filteredMedia.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveItem(item)}
              className="
                group cursor-pointer
                border-l-2 border-transparent
                hover:border-black dark:hover:border-white
                pl-4
              "
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
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
      </section>

      {/* MODAL */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-xl max-w-2xl w-full shadow-xl overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative font-Ovo">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h3 className="text-2xl mb-2">
                {activeItem.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {activeItem.meta}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeItem.description}
              </p>

              {activeItem.link && (
                <a
                  href={activeItem.link}
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

      {/* FOOTER */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="mb-6">
          <a href="mailto:hello@nileshnama.com" className="underline">
            hello@nileshnama.com
          </a>
        </p>

        <div className="border-t pt-6">
          © {new Date().getFullYear()}{" "}
          <a href="https://nileshnama.com" className="underline">
            nileshnama.com
          </a>
        </div>
      </footer>
    </>
  )
}

export default MediaPage
