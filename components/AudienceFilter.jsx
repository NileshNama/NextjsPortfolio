import React from 'react'
import { motion } from 'motion/react'

const points = [
  'Looking for shortcuts, hacks, or surface-level learning',
  'Optimizing for speed without understanding',
  'Wanting content without structure',
]

const WhoThisIsNotFor = () => {
  return (
    <section
      id="not-for"
      className="w-full px-[8%] py-24 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3">
          Clear Fit
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          Who This Is Not For
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-sm p-8 sm:p-10 shadow-sm"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            NN Cohorts is not for people looking for shortcuts, hacks, or surface-level learning.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {points.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-800 dark:text-gray-200 leading-relaxed text-base sm:text-lg font-medium">
            I don’t optimize for speed without understanding, or content without structure.
          </p>

          <p className="mt-4 text-gray-800 dark:text-gray-200 leading-relaxed text-base sm:text-lg font-semibold">
            If you care about reasoning, clarity, and systems that hold under pressure — you’re in the right place.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoThisIsNotFor