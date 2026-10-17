import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typographyReveal, cardMotion, safeMotion, EASINGS } from '@/lib/animations'

const outcomes = [
  {
    title: "Decode Questions Faster",
    desc: "Identify examiner intent within seconds instead of blindly solving.",
    icon: "✦",
  },
  {
    title: "Eliminate Smarter",
    desc: "Learn structured option elimination and reasoning under ambiguity.",
    icon: "✺",
  },
  {
    title: "Solve Under Pressure",
    desc: "Train decision-making during high-pressure exams and interviews.",
    icon: "◈",
  },
  {
    title: "Build Conceptual Depth",
    desc: "Understand systems deeply instead of memorizing isolated tricks.",
    icon: "▣",
  },
]

const Outcomes = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="outcomes"
      className="w-full px-[8%] py-24 md:py-32 scroll-mt-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3"
        >
          NN Cohorts · Systems
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-4xl sm:text-5xl font-semibold font-Ovo"
        >
          What Changes Inside NN Cohorts
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg"
        >
          What Students Learn to Do
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomes.map((item, index) => (
          <motion.div
            key={index}
            {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="
              group
              rounded-3xl
              border border-gray-200 dark:border-white/10
              bg-white/70 dark:bg-white/5
              backdrop-blur-sm
              p-7
              shadow-sm
              hover:shadow-[0_20px_50px_rgba(90,155,146,0.14)]
              hover:border-[#5A9B92]/40
              focus-within:ring-2 focus-within:ring-[#509187]
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-2xl mb-6 text-[#5A9B92] transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 font-Ovo text-gray-900 dark:text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Outcomes