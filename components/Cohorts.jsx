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
            <motion.div
              key={cohort.id || index}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCohort(cohort)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setActiveCohort(cohort)
                }
              }}
              {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                group
                relative
                flex flex-col justify-between
                w-full
                rounded-2xl sm:rounded-[1.4rem]
                border border-gray-200/90 dark:border-white/10
                bg-white dark:bg-[#12161f]
                text-left
                cursor-pointer
                p-3.5 sm:p-4
                shadow-sm
                hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40
                hover:border-[#509187]/50
                focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:outline-none
                transition-all duration-300
              "
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  {/* Top Cover Image (16:9 thumbnail from corresponding YouTube video or background) */}
                  <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-black/5 dark:border-white/10">
                    <Image
                      src={cohort.bgImage || (cohort.videoId ? `https://img.youtube.com/vi/${cohort.videoId}/maxresdefault.jpg` : assets.cohort_nn_bg)}
                      alt={cohort.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content Section with uniform title & description height */}
                  <div className="pt-3.5">
                    <h3 className="font-bold text-gray-900 dark:text-white text-[15px] sm:text-base leading-snug line-clamp-2 min-h-[42px] sm:min-h-[46px] flex items-start group-hover:text-[#509187] dark:group-hover:text-[#67b0a5] transition-colors">
                      {cohort.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 dark:text-gray-400 mt-2 leading-relaxed line-clamp-2 min-h-[36px] sm:min-h-[40px]">
                      {cohort.description}
                    </p>
                  </div>
                </div>

                {/* Badge Tag Pill - always aligned at the exact same vertical line */}
                <div className="mt-4 mb-1 flex items-center justify-end">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase ${
                      cohort.category === 'vebskills' || cohort.badge === 'VEBSKILLS'
                        ? 'bg-[#0070f3] text-white shadow-sm'
                        : 'bg-[#181c24] text-white dark:bg-white/10 dark:text-white border border-black/10 dark:border-white/15'
                    }`}
                  >
                    {cohort.badge || (cohort.category === 'nn' ? 'NN Cohorts' : 'VebSkills')}
                  </span>
                </div>
              </div>

              {/* Bottom Divider & View Details Row (No pricing or % segment) */}
              <div className="border-t border-gray-100 dark:border-white/10 mt-3 pt-3 flex items-center justify-between w-full">
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-[#509187] dark:group-hover:text-[#67b0a5] transition-colors">
                  View Details
                </span>
                <span className="w-8 h-8 rounded-full bg-[#181c24] dark:bg-white text-white dark:text-[#181c24] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#509187] group-hover:text-white shadow-sm">
                  <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
              </div>
            </motion.div>
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
                    activeCohort.category === 'vebskills' || activeCohort.badge === 'VEBSKILLS'
                      ? 'bg-[#0070f3]/15 text-[#0070f3] border border-[#0070f3]/30'
                      : 'bg-[#509187]/15 text-[#509187] border border-[#509187]/30'
                  }`}
                >
                  {activeCohort.badge || (activeCohort.category === 'nn' ? 'NN Cohorts' : 'VebSkills')}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {activeCohort.title}
              </h3>

              {activeCohort.videoId ? (
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
              ) : activeCohort.bgImage ? (
                <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 relative">
                  <Image
                    src={activeCohort.bgImage}
                    alt={activeCohort.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}

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