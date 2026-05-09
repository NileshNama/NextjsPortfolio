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
        className="w-full px-6 md:px-[12%] py-24 md:py-32 scroll-mt-20 overflow-hidden bg-[#0b1120] text-white"
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

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10"
        >
          {writingData.map((item, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveWriting(item)}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                text-left
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_80px_rgba(90,155,146,0.16)]
                hover:border-[#5A9B92]/35
                transition-all duration-300
                transform-gpu
                will-change-transform
              "
            >
              {/* Glow */}
              <div className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-[#5A9B92]/10
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
              " />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {item.bgImage && (
  <Image
    src={item.bgImage}
    alt={item.title}
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
  />
)}

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5A9B92]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Mobile background glow */}
                <div className="absolute inset-0 opacity-20 sm:hidden bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#56b7a5]/20 blur-3xl sm:hidden" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/90 backdrop-blur-md">
                    WRITING
                  </span>
                </div>

                {/* Card Content */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 dark:bg-black/70 backdrop-blur-md p-4 shadow-lg border border-white/25 dark:border-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-full border border-black/15 dark:border-white/15 w-10 h-10 flex items-center justify-center bg-[#509187] text-white shadow-[0_8px_20px_rgba(80,145,135,0.35)] transition-transform duration-300 group-hover:translate-x-1">
                      <Image src={assets.send_icon} alt="open" className="w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          href="https://cohorts.nileshnama.com/app-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-max
            flex items-center justify-center gap-2
            px-8 py-3
            mt-16 md:mt-20 mx-auto
            rounded-full
            border border-white/20
            text-white
            bg-white/5
            backdrop-blur-sm
            hover:bg-white/10
            hover:scale-[1.02]
            transition-all duration-300
            shadow-sm
          "
        >
          View all writing
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>
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