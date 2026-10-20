import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typographyReveal, cardMotion, safeMotion, EASINGS } from '@/lib/animations'
import HandnoteHighlight from './HandnoteHeading'

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
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="thinking-principles"
      className="w-full px-[8%] py-20 sm:py-24 md:py-28 scroll-mt-20"
    >
      <div className="text-center mb-16">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3"
        >
          Philosophy
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          <HandnoteHighlight>How I Think & Build</HandnoteHighlight>
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg"
        >
          My work is guided by a few non-negotiable principles.
          They shape how I design systems, teach concepts,
          and make decisions.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {principles.map((item, index) => (
          <motion.div
            key={item.title}
            {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="
              group
              rounded-3xl
              border border-gray-200 dark:border-white/10
              bg-white/75 dark:bg-white/5
              backdrop-blur-sm
              p-8
              shadow-sm
              transition-all duration-300
              hover:border-[#5A9B92]/40
              hover:shadow-[0_18px_50px_rgba(90,155,146,0.14)]
              focus-within:ring-2 focus-within:ring-[#509187]
            "
          >
            <div className="w-12 h-12 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] text-xl font-semibold mb-6 transition-transform duration-300 group-hover:scale-105">
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