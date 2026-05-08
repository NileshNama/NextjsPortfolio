import React from 'react'
import { motion } from 'motion/react'

const steps = [
  {
    step: '01',
    title: 'Question Intake',
    desc: 'Identify constraints, wording, and hidden signals.',
  },
  {
    step: '02',
    title: 'Context Interpretation',
    desc: 'Understand what the problem is truly asking.',
  },
  {
    step: '03',
    title: 'Examiner Intent',
    desc: 'Detect the underlying concept being tested.',
  },
  {
    step: '04',
    title: 'Structured Elimination',
    desc: 'Remove weak options through reasoning.',
  },
  {
    step: '05',
    title: 'Decision Under Pressure',
    desc: 'Commit with clarity under time constraints.',
  },
  {
    step: '06',
    title: 'Final Validation',
    desc: 'Verify logic before locking the answer.',
  },
]

const QuestionFramework = () => {
  return (
    <section id="framework" className="w-full px-[8%] py-24 md:py-32 scroll-mt-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A9B92] font-semibold mb-4">
          QUESTION DECODING FRAMEWORK
        </p>
        <p className="section-label mb-3">THINKING MODELS</p>
        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          How NN Approaches Questions
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-300 dark:text-gray-400 leading-relaxed">
          A repeatable thinking pipeline that makes the process visible, teachable, and more effective under pressure.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-[#5A9B92]/50 to-transparent mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                group relative
                rounded-3xl border border-white/10
                bg-white/5 backdrop-blur-sm
                p-6 sm:p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#5A9B92]/40
                hover:shadow-[0_18px_60px_rgba(90,155,146,0.22)]
              "
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5A9B92]/10 text-[#5A9B92] font-semibold transition-colors group-hover:bg-[#5A9B92]/15">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold font-Ovo text-white dark:text-gray-100 mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-300 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-10 text-center text-base sm:text-lg font-medium text-gray-100 dark:text-gray-300"
        >
          Strong performance comes from structured interpretation — not random solving.
        </motion.p>
      </div>
    </section>
  )
}

export default QuestionFramework