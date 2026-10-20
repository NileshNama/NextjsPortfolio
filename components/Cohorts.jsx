"use client"

import { useState, useEffect } from "react"
import { assets, cohortsData } from '@/assets/assets'
import Image from 'next/image'
import { motion, useReducedMotion } from "motion/react"
import { typographyReveal, cardMotion, safeMotion, EASINGS } from "@/lib/animations"
import HandnoteHighlight from './HandnoteHeading'

const Cohorts = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion()
  const [activeCohort, setActiveCohort] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

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

  const categories = [
    { key: "all", label: `All Systems (${cohortsData.length})` },
    { key: "nn", label: `NN Cohorts (${cohortsData.filter(c => c.category === 'nn').length})` },
    { key: "vebskills", label: `VebSkills Labs (${cohortsData.filter(c => c.category === 'vebskills').length})` },
  ]

  const filteredCohorts = activeCategory === "all"
    ? cohortsData
    : cohortsData.filter(c => c.category === activeCategory)

  return (
    <>
      {/* MAIN SECTION */}
      <section
        id="cohorts"
        className="w-full px-6 md:px-[8%] py-20 sm:py-24 md:py-28 scroll-mt-20 overflow-hidden"
      >
        <div className="text-center mb-12 sm:mb-14">
          <motion.p
            {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
            className="section-label mb-3 text-[#5A9B92]"
          >
            SYSTEMS
          </motion.p>

          <motion.h2
            {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            <HandnoteHighlight>Curated Learning Systems</HandnoteHighlight>
          </motion.h2>

          <motion.p
            {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
            className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-300 font-medium leading-8"
          >
            A focused set of thinking-first cohorts designed for serious computer science aspirants.
          </motion.p>

          {/* Category Filter Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`
                    px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#509187] text-white shadow-md shadow-[#509187]/25"
                        : "bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10"
                    }
                  `}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
          {filteredCohorts.map((cohort, index) => (
            <motion.button
              key={cohort.id || index}
              type="button"
              onClick={() => setActiveCohort(cohort)}
              {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                group
                relative
                flex flex-col justify-between
                min-h-[400px] sm:min-h-[420px] w-full
                overflow-hidden
                rounded-[2rem]
                border border-black/10 dark:border-white/10
                bg-[#181c24] dark:bg-[#0f1217]
                text-left
                cursor-pointer
                shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                hover:shadow-[0_24px_70px_rgba(80,145,135,0.22)]
                hover:border-[#509187]/50
                focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:outline-none
                transition-all duration-300
                transform-gpu
                will-change-transform
                p-3.5 sm:p-4
              "
            >
              {/* Background Image (visible with high clarity) */}
              <Image
                src={cohort.bgImage}
                alt={cohort.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#509187]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Bar with Badge (Pinned at Top, Never Overlapped) */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[10.5px] font-semibold tracking-[0.16em] backdrop-blur-md shadow-sm ${
                    cohort.badge === 'VEBSKILLS'
                      ? 'bg-[#0070f3]/85 text-white border border-[#00b4d8]/40'
                      : 'bg-black/65 text-white/95 border border-white/15'
                  }`}
                >
                  {cohort.badge || 'COHORT'}
                </span>
              </div>

              {/* Bottom Frosted Glass Panel (Uniform ~70% Transparency, Natural Text Flow) */}
              <div className="relative z-10 w-full min-h-[132px] rounded-2xl bg-white/75 dark:bg-[#111827]/80 backdrop-blur-md p-3.5 sm:p-4 shadow-lg border border-white/60 dark:border-white/15 transition-all duration-300 group-hover:bg-white/85 dark:group-hover:bg-[#111827]/90 group-hover:border-[#509187]/50 flex items-center">
                <div className="flex items-start justify-between gap-2.5 w-full">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-[15px] sm:text-base leading-snug line-clamp-2">
                      {cohort.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed line-clamp-2">
                      {cohort.description}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full border border-black/15 dark:border-white/15 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#509187] group-hover:bg-[#3f736b] text-white shadow-[0_8px_20px_rgba(80,145,135,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:translate-x-1 mt-0.5">
                    <Image src={assets.send_icon} alt="open" className="w-4 sm:w-5" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA Container */}
        <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-16 md:mt-20">
          <motion.a
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASINGS.smoothOut }}
            viewport={{ once: true }}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
            href="https://www.nileshnama.com/cohorts"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-primary px-8 py-3.5 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
          >
            <span>Explore cohorts</span>
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow"
              className="w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            />
          </motion.a>

          <motion.a
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: EASINGS.smoothOut }}
            viewport={{ once: true }}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
            href="https://nileshnama.notion.site/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-secondary px-8 py-3.5 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
          >
            <span>Curriculum</span>
            <span className="text-base transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#509187] dark:text-[#67b0a5]">
              →
            </span>
          </motion.a>
        </div>
      </section>


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
            <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-8 relative">
              <button
                onClick={() => setActiveCohort(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.16em] ${
                    activeCohort.badge === 'VEBSKILLS'
                      ? 'bg-[#0070f3]/15 text-[#0070f3] border border-[#0070f3]/30'
                      : 'bg-[#509187]/15 text-[#509187] border border-[#509187]/30'
                  }`}
                >
                  {activeCohort.badge || 'COHORT'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-Ovo mb-4 text-gray-900 dark:text-white">
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
                    className="group cta-primary w-full py-3.5 text-sm sm:text-base"
                  >
                    <span>{activeCohort.category === 'vebskills' ? 'Explore VebSkills Track' : 'Enroll in this cohort'}</span>
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
                  </a>
                )}

                <a
                  href={activeCohort.category === 'vebskills' ? 'https://www.vebskills.com' : 'https://cohorts.nileshnama.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  {activeCohort.category === 'vebskills' ? 'Visit VebSkills portal' : 'Visit cohorts portal'}
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