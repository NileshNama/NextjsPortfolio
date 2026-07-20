"use client"

import { useState, useEffect } from "react"
import { assets, cohortsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Cohorts = ({ isDarkMode }) => {
  const [activeCohort, setActiveCohort] = useState(null)

  useEffect(() => {
    document.body.style.overflow = activeCohort ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeCohort])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveCohort(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      {/* MAIN SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        id="cohorts"
        className="w-full px-6 md:px-[12%] py-24 md:py-32 scroll-mt-20 overflow-hidden"
      >
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-label mb-3"
          >
            SYSTEMS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-semibold font-Ovo"
          >
            Curated Learning Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-300 font-medium leading-8"
          >
            A focused set of thinking-first cohorts designed for serious computer science aspirants.
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
          {cohortsData.map((cohort, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveCohort(cohort)}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-black/10 dark:border-white/10
                bg-white dark:bg-[#111827]
                text-left
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
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

              {/* Visual */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={cohort.bgImage}
                  alt={cohort.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5A9B92]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/90 backdrop-blur-md">
                    COHORT
                  </span>
                </div>

                {/* Bottom panel */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 dark:bg-black/70 backdrop-blur-md p-4 shadow-lg border border-white/30 dark:border-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-snug">
                        {cohort.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                        {cohort.description}
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
          href="https://www.nileshnama.com/cohorts"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-max
            flex items-center justify-center gap-2
            px-8 py-3
            mt-16 md:mt-20 mx-auto
            rounded-full
            border border-gray-300 dark:border-white/20
            text-gray-700 dark:text-white
            bg-white/80 dark:bg-white/5
            backdrop-blur-sm
            hover:bg-lightHover dark:hover:bg-white/10
            hover:scale-[1.02]
            transition-all duration-300
            shadow-sm
          "
        >
          Explore cohorts
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>
      </motion.section>

      {/* MODAL */}
      {activeCohort && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveCohort(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#111827] rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-black/10 dark:border-white/10"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative">
              <button
                onClick={() => setActiveCohort(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                ✕
              </button>

              <h3 className="text-3xl font-Ovo mb-4 text-gray-900 dark:text-white">
                {activeCohort.title}
              </h3>

              {activeCohort.videoId && (
                <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${activeCohort.videoId}`}
                    title={activeCohort.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <p className="text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed mb-6">
                {activeCohort.longDescription}
              </p>

              {activeCohort.points && (
                <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 font-Ovo">
                  {activeCohort.points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col items-center gap-3">
                {activeCohort.enrollLink && (
                  <a
                    href={activeCohort.enrollLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      w-full rounded-full
                      bg-[#509187] text-white
                      py-3 text-sm font-medium
                      hover:opacity-95
                      hover:scale-[1.01]
                      transition-all duration-300
                    "
                  >
                    Enroll in this cohort →
                  </a>
                )}

                <a
                  href="https://cohorts.nileshnama.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Visit cohorts portal
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cohorts