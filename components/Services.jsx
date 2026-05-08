"use client"

import { useState, useEffect } from "react"
import { assets, serviceData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

const SERVICE_DETAILS = {
  "Software Engineering": {
    intro:
      "I design and ship production-grade software systems with an emphasis on clarity, maintainability, and long-term scale.",
    bullets: [
      "Frontend architecture using React, TypeScript, and modern UI systems",
      "Performance optimization, debugging, and production hardening",
      "Reusable component systems and design-system thinking",
      "Collaboration with product and design under real-world constraints",
    ],
    closing:
      "This work spans internal tools, production websites, and long-lived platforms used by real users — not experimental demos.",
    cta: "VebGlitch",
    link: "https://vebglitch.com",
  },

  "Education Systems": {
    intro:
      "I build thinking-first education systems for serious learners preparing for high-stakes exams and technical interviews.",
    bullets: [
      "Cohort-based learning systems focused on reasoning, not memorization",
      "Exam-oriented thinking frameworks and decision-making training",
      "Long-term curriculum design aligned with evaluator expectations",
      "Learning infrastructure that scales clarity, not content volume",
    ],
    closing:
      "This includes NN Cohorts and structured learning programs designed as systems — not courses.",
    cta: "NN Cohorts",
    link: "https://cohorts.nileshnama.com",
  },

  "Author & Writing": {
    intro:
      "I write reference-level technical content designed to improve how engineers and students think, not just what they know.",
    bullets: [
      "Deep-dive explanations of core computer science subjects",
      "Exam- and interview-oriented reasoning documentation",
      "System-level writing focused on trade-offs and design intent",
      "Clarity-driven content meant for long-term reuse",
      "A structured, industry-oriented program designed to bridge the gap between academic learning and real-world execution at VebSkills.",
    ],
    closing:
      "This work prioritizes durability, explainability, and conceptual depth over short-form content.",
    cta: "Read Books",
    link: "https://cohorts.nileshnama.com/books",
  },

  "Research & Systems Thinking": {
    intro:
      "I develop structured reasoning frameworks to analyze problems, decisions, and systems under constraints.",
    bullets: [
      "Question classification and decision-bucket frameworks",
      "Mistake-pattern analysis and examiner psychology models",
      "System decomposition and abstraction control techniques",
      "Research-backed thinking tools for exams and engineering",
    ],
    closing:
      "This work sits at the intersection of research, engineering, and education — focused on how decisions are actually made.",
    cta: "Explore thinking frameworks",
    link: "https://cohorts.nileshnama.com/app-blog",
  },

  "VebSkills": {
    intro:
      "I develop structured reasoning frameworks to analyze problems, decisions, and systems under constraints.",
    bullets: [
      "Question classification and decision-bucket frameworks",
      "Mistake-pattern analysis and examiner psychology models",
      "System decomposition and abstraction control techniques",
      "Research-backed thinking tools for exams and engineering",
    ],
    closing:
      "This work sits at the intersection of research, engineering, and education — focused on how decisions are actually made.",
    cta: "Explore thinking frameworks →",
    link: "https://cohorts.nileshnama.com/app-blog",
  },
}

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeService])

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setActiveService(null)
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [])

  const key = activeService?.title?.trim()
  const details = key ? SERVICE_DETAILS[key] : null

  return (
    <>
      {/* MAIN */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        id="work"
        className="w-full px-6 md:px-[12%] py-24 md:py-28 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-2 text-sm uppercase tracking-[0.22em] text-[#5A9B92] font-medium"
        >
          What I Build
        </motion.h4>
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-2 text-sm uppercase tracking-[0.22em] text-[#5A9B92] font-medium"
        >
          <p className="section-label mb-3">SYSTEMS</p>
        </motion.h4>
      
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-semibold font-Ovo"
        >
          Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mt-5 mb-14 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          A snapshot of the systems I build and lead across engineering,
          education, and technical writing. Each category represents a long-term
          body of work, not a client service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
        >
          {serviceData.map((service, index) => (
            <motion.button
              key={index}
              type="button"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setActiveService(service)}
              className="
                group
                relative
                text-left
                overflow-hidden
                rounded-[2rem]
                border border-black/10 dark:border-white/10
                bg-white dark:bg-[#111827]
                p-8
                cursor-pointer
                transition-all duration-300 ease-out
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_80px_rgba(90,155,146,0.18)]
                hover:border-[#5A9B92]/40
                transform-gpu
                will-change-transform
              "
            >
              {/* Glow Accent */}
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

              {/* Thumbnail / Preview block */}
              <div className="
                relative
                overflow-hidden
                rounded-2xl
                mb-6
                border border-black/5 dark:border-white/10
                bg-[#f5f7f6] dark:bg-white/5
                h-40
                flex items-center justify-center
              ">
                <Image
                  src={service.icon}
                  alt=""
                  className="
                    w-16
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-[#5A9B92]/8
                  to-transparent
                  pointer-events-none
                " />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold font-Ovo mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="
                  flex items-center gap-2
                  text-sm
                  mt-7
                  text-[#5A9B92]
                  font-medium
                ">
                  Explore
                  <Image
                    src={assets.right_arrow}
                    alt=""
                    className="
                      w-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* MODAL */}
      {activeService && details && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setActiveService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#111827] rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl border border-black/10 dark:border-white/10"
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
            >
              ✕
            </button>

            <h3 className="text-3xl font-Ovo mb-4 text-gray-900 dark:text-white">
              {activeService.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-5 font-Ovo leading-relaxed">
              {details.intro}
            </p>

            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {details.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed">
              {details.closing}
            </p>

            <a
              href={details.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-8 rounded-full bg-[#509187] text-white py-3 px-6 text-sm font-medium hover:opacity-95 transition-transform hover:scale-[1.02]"
            >
              {details.cta}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Services