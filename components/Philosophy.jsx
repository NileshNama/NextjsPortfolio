import React from 'react'
import { motion } from 'motion/react'

const principles = [
  {
    title: 'Long-Term Clarity',
    desc: 'I optimize for long-term clarity, not shortcuts.',
  },
  {
    title: 'Systems That Survive Pressure',
    desc: 'I design systems that survive scale and pressure.',
  },
  {
    title: 'Reasoning & Trade-Offs',
    desc: 'I value reasoning, trade-offs, and explainability.',
  },
  {
    title: 'Thinking Over Noise',
    desc: 'I avoid content noise — I build thinking structures.',
  },
]

const ThinkingPrinciples = () => {
  return (
    <section
      id="thinking-principles"
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
          Philosophy
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          How I Think & Build
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
          My work is guided by a few non-negotiable principles.
          They shape how I design systems, teach concepts,
          and make decisions.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

        {principles.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="
              group
              rounded-3xl
              border border-gray-200 dark:border-white/10
              bg-white/75 dark:bg-white/5
              backdrop-blur-sm
              p-8
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#5A9B92]/40
              hover:shadow-[0_18px_50px_rgba(90,155,146,0.12)]
            "
          >
            <div className="w-12 h-12 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] text-xl font-semibold mb-6">
              0{index + 1}
            </div>

            <h3 className="text-2xl font-semibold font-Ovo mb-4 text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default ThinkingPrinciples