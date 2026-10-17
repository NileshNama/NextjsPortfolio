"use client"

import { useState, useEffect, useRef } from "react"
import { assets, writingData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

/* ---------- INLINE MARKDOWN RENDERER (ONLY ** and *) ---------- */
const renderInlineMarkdown = (text) => {
  return text.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }

    return <span key={i}>{part}</span>
  })
}

const writingMeta = [
  {
    category: "System Design & OS",
    readTime: "10 min read",
    tags: ["Scheduling", "Virtual Memory", "Concurrency & Locks"],
  },
  {
    category: "Databases & Theory",
    readTime: "9 min read",
    tags: ["ACID Guarantees", "Isolation Levels", "Query Constraints"],
  },
  {
    category: "Computer Networks",
    readTime: "8 min read",
    tags: ["TCP/IP Stack", "Flow & Congestion", "Layer Abstractions"],
  },
  {
    category: "Compilers & Automata",
    readTime: "11 min read",
    tags: ["LR Parsing", "Syntax-Directed Translation", "Intermediate Code"],
  },
]

const Writing = ({ isDarkMode }) => {
  const [activeWriting, setActiveWriting] = useState(null)
  const [progress, setProgress] = useState(0)
  const scrollRef = useRef(null)

  /* Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = activeWriting ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeWriting])

  /* Close on ESC */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveWriting(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  /* Reading progress */
  useEffect(() => {
    if (!scrollRef.current) return

    const el = scrollRef.current
    const onScroll = () => {
      const total = el.scrollHeight - el.clientHeight
      const current = el.scrollTop
      setProgress(total > 0 ? Math.min(100, (current / total) * 100) : 0)
    }

    el.addEventListener("scroll", onScroll)
    onScroll()
    return () => el.removeEventListener("scroll", onScroll)
  }, [activeWriting])

  return (
    <>
      {/* MAIN SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        id="writing"
        className="w-full px-6 md:px-[12%] py-20 sm:py-24 md:py-28 scroll-mt-20 overflow-hidden bg-[#0b1120] text-white"
      >
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            FIELD NOTES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-semibold font-Ovo"
          >
            Technical Writing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-6 text-white/75 font-medium leading-8"
          >
            Ongoing writing on system design, exam reasoning, and structured thinking.
          </motion.p>
        </div>

        {/* Modern Beautiful Horizontal List View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto flex flex-col gap-5 sm:gap-6"
        >
          {writingData.map((item, index) => {
            const meta = writingMeta[index] || {
              category: "Field Notes",
              readTime: "8 min read",
              tags: ["Systems", "Computer Science"],
            }

            return (
              <motion.div
                key={index}
                onClick={() => setActiveWriting(item)}
                whileHover={{ y: -4, scale: 1.008 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="
                  group
                  flex items-stretch gap-3 sm:gap-5
                  cursor-pointer
                  text-left
                "
              >
                {/* Serial Number Box (Matches Card Height) */}
                <div
                  className="
                    w-14 sm:w-24 md:w-32 shrink-0
                    rounded-2xl sm:rounded-3xl
                    border border-white/10
                    bg-[#0f172a]/90 dark:bg-[#07221e]/85
                    backdrop-blur-xl
                    p-2 sm:p-4
                    flex flex-col items-center justify-center
                    shadow-lg shadow-black/25
                    group-hover:border-[#509187]/60
                    group-hover:shadow-[0_16px_45px_rgba(80,145,135,0.25)]
                    transition-all duration-300
                    relative overflow-hidden
                  "
                >
                  {/* Subtle grid pattern */}
                  <div
                    className="
                      absolute inset-0 opacity-[0.04] pointer-events-none
                      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                      [background-size:24px_24px]
                    "
                  />

                  {/* Radial glow on hover */}
                  <div className="absolute inset-0 bg-radial from-[#509187]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <span className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-bold font-Ovo bg-gradient-to-b from-white via-white/90 to-[#509187] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_16px_rgba(80,145,135,0.25)]">
                    {index + 1}
                  </span>
                  <span className="relative z-10 text-[8px] sm:text-[10px] uppercase font-mono tracking-widest text-[#509187] font-semibold mt-0.5 sm:mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    PART
                  </span>
                </div>

                {/* Card Content Box */}
                <div
                  className="
                    flex-1 min-w-0
                    rounded-2xl sm:rounded-3xl
                    border border-white/10
                    bg-[#0f172a]/90 dark:bg-[#07221e]/85
                    backdrop-blur-xl
                    p-3.5 sm:p-6 md:p-7
                    shadow-lg shadow-black/25
                    group-hover:border-[#509187]/60
                    group-hover:shadow-[0_16px_45px_rgba(80,145,135,0.25)]
                    transition-all duration-300
                    relative overflow-hidden
                  "
                >
                  {/* Radial glow on hover */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#509187]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Subtle grid pattern */}
                  <div
                    className="
                      absolute inset-0 opacity-[0.035] pointer-events-none
                      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                      [background-size:28px_28px]
                    "
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full gap-3 sm:gap-4">
                    {/* Top Row: Category + Read Time */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#509187]/15 text-[#5A9B92] dark:text-[#67b0a5] border border-[#509187]/30 text-xs font-mono font-semibold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#509187] animate-pulse" />
                          {meta.category}
                        </span>
                        <span className="text-xs text-white/30 font-mono hidden sm:inline-block">·</span>
                        <span className="text-xs text-white/60 font-mono hidden sm:inline-block">
                          {meta.readTime}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-[#509187] uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline-block">
                        Read Note →
                      </span>
                    </div>

                    {/* Middle Row: Title & Description */}
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-[1.5rem] font-bold font-Ovo text-white group-hover:text-[#67b0a5] transition-colors leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-gray-300 dark:text-gray-300/90 mt-1 sm:mt-1.5 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Row: Tag Pills + Action Button */}
                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-auto">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {meta.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/5 text-white/70 text-xs font-mono border border-white/5 group-hover:border-white/10 group-hover:text-white/90 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#509187] group-hover:text-[#67b0a5] transition-colors self-end sm:self-auto shrink-0">
                        <span className="hidden sm:inline-block">Read Article</span>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#509187] group-hover:bg-[#3f736b] flex items-center justify-center text-white shadow-md shadow-[#509187]/30 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                          <Image src={assets.send_icon} alt="open" className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <div className="w-full flex justify-center mt-14 sm:mt-16 md:mt-20 relative z-10">
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://cohorts.nileshnama.com/app-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-primary py-3.5 sm:py-4 px-8 sm:px-9 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
          >
            <span>View all writing</span>
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow"
              className="w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            />
          </motion.a>
        </div>
      </motion.section>

      {/* MODAL */}
      {activeWriting && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveWriting(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#111827] rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-black/10 dark:border-white/10"
          >
            {/* Reading Progress */}
            <div className="h-1 bg-gray-200 dark:bg-white/10">
              <div
                className="h-full bg-[#509187] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Scroll Area */}
            <div
              ref={scrollRef}
              className="max-h-[80vh] overflow-y-auto p-8 relative font-Ovo text-sm"
            >
              <button
                onClick={() => setActiveWriting(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                ✕
              </button>

              {activeWriting.bgImage && (
                <div className="w-full h-56 relative rounded-2xl overflow-hidden mb-6 border border-black/10 dark:border-white/10">
                  <Image
                    src={activeWriting.bgImage}
                    alt={activeWriting.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h3 className="text-3xl mb-2 font-semibold text-gray-900 dark:text-white">
                {activeWriting.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-7">
                {activeWriting.description}
              </p>

              {/* CONTENT */}
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeWriting.details.map((block, i) => {
                  if (block.startsWith("### ")) {
                    return (
                      <h4
                        key={i}
                        className="text-base font-semibold mt-6 mb-2"
                      >
                        {block.replace("### ", "")}
                      </h4>
                    )
                  }

                  if (block.startsWith("## ")) {
                    return (
                      <h4
                        key={i}
                        className="text-lg font-semibold mt-6 mb-2 border-l-4 border-[#509187] pl-3"
                      >
                        {block.replace("## ", "")}
                      </h4>
                    )
                  }

                  if (block.startsWith("- ")) {
                    return (
                      <ul key={i} className="list-disc ml-5 space-y-1">
                        {block.split("\n").map((line, idx) => (
                          <li key={idx}>
                            {renderInlineMarkdown(line.replace("- ", ""))}
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  if (block === "---") {
                    return (
                      <hr
                        key={i}
                        className="my-6 border-gray-200 dark:border-white/10"
                      />
                    )
                  }

                  return <p key={i}>{renderInlineMarkdown(block)}</p>
                })}
              </div>

              {/* AUTHOR BOX */}
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/10">
                <p className="font-semibold mb-1 text-gray-900 dark:text-white">
                  About the author
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  Nilesh Nama writes thinking-first reference material focused on
                  system design, reasoning, and long-term conceptual clarity for
                  serious computer science learners.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Writing