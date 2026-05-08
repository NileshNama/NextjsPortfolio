import React from 'react'
import { motion } from 'motion/react'

const journey = [
  {
    title: 'Engineering Foundation',
    desc: 'Built strong fundamentals in computer science, problem-solving, and system-level thinking.',
  },
  {
    title: 'Competitive Exams & Deep Reasoning',
    desc: 'Years of exam preparation revealed a gap between content and thinking — leading to structured reasoning systems.',
  },
  {
    title: 'NN Cohorts — Applied Education Systems',
    desc: 'Designed cohort-based learning systems focused on clarity, decision-making, and exam-oriented thinking.',
  },
  {
    title: 'Software × Learning Infrastructure',
    desc: 'Now working at the intersection of software engineering and learning systems — building scalable, explainable systems that survive real-world constraints.',
  },
]

const JourneyTimeline = () => {
  return (
    <section
      id="journey"
      className="w-full px-[8%] py-24 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3">
          Journey
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo">
          A Non-Linear Path
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
          Intentionally shaped by systems, reasoning,
          and long-term thinking.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#5A9B92]/40 via-[#5A9B92]/20 to-transparent hidden sm:block" />

        <div className="flex flex-col gap-12">

          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative flex gap-6 items-start"
            >

              {/* Timeline Dot */}
              <div className="hidden sm:flex relative z-10 w-10 h-10 rounded-2xl bg-[#5A9B92]/10 border border-[#5A9B92]/20 items-center justify-center text-[#5A9B92] font-semibold shrink-0">
                0{index + 1}
              </div>

              {/* Card */}
              <div
                className="
                  group flex-1
                  rounded-3xl
                  border border-gray-200
                  bg-white/75
                  backdrop-blur-sm
                  p-8
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#5A9B92]/40
                  hover:shadow-[0_18px_50px_rgba(90,155,146,0.12)]
                "
              >
                <h3 className="text-2xl font-semibold font-Ovo mb-4 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default JourneyTimeline