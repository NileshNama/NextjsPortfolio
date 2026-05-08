import React from 'react'
import { motion } from 'motion/react'

const painPoints = [
  {
    title: 'Too much content, too little thinking',
    desc: 'Aspirants keep consuming more material instead of improving how they process questions.',
  },
  {
    title: 'Memorization without interpretation',
    desc: 'They remember facts, but struggle to understand what a question is actually asking.',
  },
  {
    title: 'Solving without examiner psychology',
    desc: 'They miss the logic behind why an option is right, wrong, or designed to trap them.',
  },
  {
    title: 'Panic under uncertainty and tricky wording',
    desc: 'When the question becomes ambiguous, confidence drops and decision-making breaks down.',
  },
]

const Struggles = () => {
  return (
    <section
  id="struggles"
  className="w-full px-[8%] py-24 md:py-32 scroll-mt-20 bg-[#111827] text-white"
>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3">
          Why Many Aspirants Stay Stuck
        </p>
        <p className="section-label mb-3">REASONING</p>
        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          Why Most Aspirants Struggle
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-300 dark:text-gray-400 leading-relaxed">
          The problem is not effort. The problem is that most preparation systems reward volume
          instead of clarity, interpretation, and decision-making.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {painPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-sm
              p-7
              hover:shadow-[0_18px_50px_rgba(90,155,146,0.18)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="w-12 h-12 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] text-xl font-bold mb-5">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold mb-4 font-Ovo">{item.title}</h3>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-10 text-center"
      >
        <p className="text-base sm:text-lg font-medium text-gray-100 dark:text-gray-300">
          NN Cohorts is designed to fix these exact gaps.
        </p>
      </motion.div>
    </section>
  )
}

export default Struggles