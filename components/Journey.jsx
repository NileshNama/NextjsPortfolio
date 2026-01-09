import { motion } from "motion/react"

const journeySteps = [
  {
    title: "Engineering Foundation",
    description:
      "Built strong fundamentals in computer science, problem-solving, and system-level thinking.",
  },
  {
    title: "Competitive Exams & Deep Reasoning",
    description:
      "Years of exam preparation revealed a gap between content and thinking — leading to structured reasoning systems.",
  },
  {
    title: "NN Cohorts — Applied Education Systems",
    description:
      "Designed cohort-based learning systems focused on clarity, decision-making, and exam-oriented thinking.",
  },
  {
    title: "Software × Learning Infrastructure",
    description:
      "Now working at the intersection of software engineering and learning systems — building scalable, explainable systems that survive real-world constraints.",
  },
]

const Journey = () => {
  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-[12%] py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-Ovo mb-4">
          Journey (Condensed)
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed">
          A non-linear path — intentionally shaped by systems, reasoning,
          and long-term thinking.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-10">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {/* Marker */}
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#509187]" />
              {index !== journeySteps.length - 1 && (
                <span className="w-px h-full bg-gray-300 dark:bg-white/20 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <h3 className="text-lg font-semibold font-Ovo mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Journey
