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
    cta: "View selected engineering work →",
    link: "https://projects.nileshnama.com",
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
    cta: "Explore education systems →",
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
    ],
    closing:
      "This work prioritizes durability, explainability, and conceptual depth over short-form content.",
    cta: "Read selected writing →",
    link: "https://books.nileshnama.com",
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
    cta: "Explore thinking frameworks →",
    link: "https://research.nileshnama.com",
  },
}

const Services = () => {
  const [activeService, setActiveService] = useState(null)

  /* 🔒 Lock background scroll */
  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeService])

  /* ESC close */
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="services"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">What I Build</h4>
        <h2 className="text-center text-5xl font-Ovo">Work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          A snapshot of the systems I build and lead across engineering,
          education, and technical writing. Each category represents a long-term
          body of work, not a client service.
        </p>

        <div className="grid grid-cols-auto gap-6 my-10">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveService(service)}
              className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
            >
              <Image src={service.icon} alt="" className="w-10" />
              <h3 className="text-lg my-4">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-5">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm mt-5 underline">
                View work
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL */}
      {activeService && details && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-xl"
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="text-2xl font-Ovo mb-4">{activeService.title}</h3>

            <p className="text-gray-700 mb-5 font-Ovo">{details.intro}</p>

            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
              {details.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-gray-600 font-Ovo">
              {details.closing}
            </p>

            <a
              href={details.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-Ovo underline"
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
