"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const FAQ_ITEMS = [
  {
    question: "Who is the NN Cohorts program designed for?",
    answer: "NN Cohorts is built specifically for Computer Science students and aspirants preparing for competitive exams (like GATE, BARC, and ISRO) and high-stakes technical interviews. It is designed for those who want to build conceptual depth and structured reasoning rather than relying on formula memorization.",
  },
  {
    question: "How are the sessions structured?",
    answer: "Our sessions focus on a thinking-aloud methodology. You watch complex problems get decomposed step-by-step in real-time, analyze examiner traps, learn options-elimination frameworks, and practice explaining your technical reasoning under pressure.",
  },
  {
    question: "What core subjects are covered?",
    answer: "We focus on core Computer Science subjects including Operating Systems, Database Management Systems (DBMS), Computer Networks, and Compiler Design. Every subject is approached through system design trade-offs and first principles.",
  },
  {
    question: "How does the cohort scheduling and enrollment work?",
    answer: "Each program (APEX, FORGE, NEXUS, SCHOLAR) has fixed annual intakes with milestone-based timelines. Admissions are outcome-focused. You can find detailed schedules and syllabus roadmaps via our Curriculum and Notion links on the homepage.",
  },
]

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-black/10 dark:border-white/10 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left font-Ovo text-base sm:text-lg font-semibold text-gray-900 dark:text-white hover:opacity-80 transition"
      >
        <span>{item.question}</span>
        <span className="text-[#5A9B92] font-bold text-xl ml-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full px-[8%] py-24 md:py-32 scroll-mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-[#5A9B92]/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Answers to common questions about our preparation methodology, cohort timelines, and core curriculum structure.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
