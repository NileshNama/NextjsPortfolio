"use client"

import { useState, useEffect } from "react"
import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  const [activeBook, setActiveBook] = useState(null)

  useEffect(() => {
    document.body.style.overflow = activeBook ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeBook])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveBook(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const volumeLabels = ["Volume I", "Volume II", "Reference Series", "Volume IV"]

  return (
    <>
      {/* MAIN SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="books"
        className="w-full px-6 md:px-[12%] py-24 md:py-28 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-2 text-sm uppercase tracking-[0.22em] text-[#5A9B92] font-medium"
        >
          Books
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-semibold font-Ovo"
        >
          Standard Reference Texts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mt-5 mb-14 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          A curated set of reference-level books focused on system thinking,
          clarity, and long-term understanding across core computer science
          subjects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
        >
          {workData.map((project, index) => {
            const label = project.volumeLabel || volumeLabels[index] || `Volume ${index + 1}`

            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => setActiveBook(project)}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="
  group
  relative
  text-left
  overflow-hidden
  rounded-[2rem]
  border border-black/10 dark:border-white/10
  bg-white dark:bg-[#111827]
  shadow-[0_20px_60px_rgba(0,0,0,0.14)]
  hover:shadow-[0_28px_80px_rgba(0,0,0,0.22)]
  transition-all duration-300
  transform-gpu
  will-change-transform
"
              >
                {/* Book body */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
  src={project.bgImage}
  alt={project.title}
  fill
  className="object-contain object-center p-2"
/>

                  {/* realism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* spine */}
                  <div className="absolute left-0 top-0 h-full w-[14px] bg-black/35" />
                  <div className="absolute left-[14px] top-0 h-full w-[2px] bg-white/15" />

                  {/* top label */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/90 backdrop-blur-md">
                      {label}
                    </span>
                  </div>

                  {/* bottom info panel */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 dark:bg-black/70 backdrop-blur-md p-4 shadow-lg border border-white/30 dark:border-white/10">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h2 className="font-semibold text-gray-900 dark:text-white text-lg leading-snug">
                          {project.title}
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="shrink-0 rounded-full border border-black/20 dark:border-white/20 w-10 h-10 flex items-center justify-center bg-[#509187] text-white shadow-[0_8px_20px_rgba(80,145,135,0.35)] transition-transform duration-300 group-hover:translate-x-1">
                        <Image src={assets.send_icon} alt="open" className="w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
          href="https://cohorts.nileshnama.com/books"
          target="_blank"
          rel="noreferrer"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 rounded-full py-3 px-10 mx-auto mt-16 hover:bg-lightHover duration-300 dark:text-white dark:border-white/20 dark:hover:bg-white/10 transition-transform hover:scale-[1.02]"
        >
          View all books
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>
      </motion.section>

      {/* MODAL */}
      {activeBook && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveBook(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-black/10 dark:border-white/10"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative">
              <button
                onClick={() => setActiveBook(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                ✕
              </button>

              <h3 className="text-3xl font-Ovo mb-4 text-gray-900 dark:text-white">
                {activeBook.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed mb-6">
                {activeBook.description}
              </p>

              {activeBook.details && (
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-Ovo">
                  {Array.isArray(activeBook.details)
                    ? activeBook.details.map((item, i) => <p key={i}>{item}</p>)
                    : <p>{activeBook.details}</p>}
                </div>
              )}

              {activeBook.purchaseLink && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <a
                    href={activeBook.purchaseLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#509187] text-white py-3 text-sm font-medium hover:opacity-95 transition-transform hover:scale-[1.02]"
                  >
                    Get the full reference →
                  </a>

                  {activeBook.sampleLink && (
                    <a
                      href={activeBook.sampleLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      Read a sample chapter
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Work