import React from 'react'
import { motion } from 'motion/react'

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
  return (
    <section
      id="outcomes"
      className="w-full px-[8%] py-24 md:py-32 scroll-mt-20"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3">
          NN Cohorts
        </p>

        <p className="section-label mb-3">SYSTEMS</p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          What Changes Inside NN Cohorts
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          What Students Learn to Do
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {outcomes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              group
              rounded-3xl
              border border-gray-200
              bg-white/70
              backdrop-blur-sm
              p-7
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-2xl mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 font-Ovo">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Outcomes