import React from 'react'
import { motion } from 'motion/react'

const people = [
  'Aspirants serious about deep understanding',
  'Students preparing for GATE, BARC, and PSU interviews',
  'Learners tired of endless random content',
  'People who want reasoning clarity under pressure',
]

const WhoThrives = () => {
  return (
    <section
      id="who-thrives"
      className="w-full px-[8%] py-24 md:py-32 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3">
          Ideal Students
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          Who Thrives Inside NN Cohorts
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          NN Cohorts is designed for students who want deeper understanding, calm reasoning, and structured thinking under pressure.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

        {people.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-gray-200
              bg-white/70
              backdrop-blur-sm
              p-7
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
              flex items-start gap-4
            "
          >
            <div className="w-10 h-10 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] text-lg font-bold shrink-0">
              ✓
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              {item}
            </p>
          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 italic">
          This is not built for passive learning — it is built for thinking-first preparation.
        </p>
      </motion.div>
    </section>
  )
}

export default WhoThrives