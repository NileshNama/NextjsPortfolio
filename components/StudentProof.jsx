import React from 'react'
import { motion } from 'motion/react'

const shifts = [
  {
    before: 'I used to directly apply formulas.',
    after: 'Now I first identify what the question is actually testing.',
  },
  {
    before: 'I solved many PYQs but still made mistakes.',
    after: 'Now I recognize interpretation traps instantly.',
  },
]

const StudentProof = () => {
  return (
    <section id="student-proof" className="w-full px-[8%] py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3">
          Student Proof
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          Student Thinking Shifts
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          Real shifts in thinking create real shifts in performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {shifts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-gray-200 dark:border-white/10
              bg-white/80 dark:bg-white/5
              backdrop-blur-sm
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div className="grid gap-4">
              <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  Before
                </p>
                <p className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                  “{item.before}”
                </p>
              </div>

              <div className="rounded-2xl border border-[#5A9B92]/20 bg-[#5A9B92]/8 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#5A9B92] mb-2 font-medium">
                  After
                </p>
                <p className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                  “{item.after}”
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StudentProof