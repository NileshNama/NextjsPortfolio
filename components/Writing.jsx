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
      setProgress(Math.min(100, (current / total) * 100))
    }

    el.addEventListener("scroll", onScroll)
    return () => el.removeEventListener("scroll", onScroll)
  }, [activeWriting])

  return (
    <>
      {/* MAIN SECTION — UNCHANGED */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="writing"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Writing
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          Technical Writing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          Ongoing writing on system design, exam reasoning, and structured thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        >
          {writingData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveWriting(item)}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="pointer-events-none bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
                <div className="pointer-events-auto border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#509187] transition">
                  <Image src={assets.send_icon} alt="open" className="w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          href="https://cohorts.nileshnama.com/app-blog"
          target="_blank"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          View all writing
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4"
          />
        </motion.a>
      </motion.div>

      {/* MODAL */}
      {activeWriting && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveWriting(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-xl max-w-3xl w-full shadow-xl overflow-hidden"
          >
            {/* Reading Progress */}
            <div className="h-1 bg-gray-200 dark:bg-white/10">
              <div
                className="h-full bg-black dark:bg-white transition-all"
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
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              {activeWriting.bgImage && (
                <div className="w-full h-56 relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src={activeWriting.bgImage}
                    alt={activeWriting.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h3 className="text-2xl mb-1">{activeWriting.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {activeWriting.description}
              </p>

              {/* CONTENT — ONLY MARKDOWN FIXED */}
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
                        className="text-lg font-semibold mt-6 mb-2 border-l-4 border-black dark:border-white pl-3"
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

              {/* AUTHOR BOX — SAME AS BEFORE */}
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/10">
                <p className="font-semibold mb-1">About the author</p>
                <p className="text-gray-600 dark:text-gray-400">
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
