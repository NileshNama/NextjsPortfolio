import { motion } from "motion/react"

const philosophyPoints = [
  "I optimize for long-term clarity, not shortcuts.",
  "I design systems that survive scale and pressure.",
  "I value reasoning, trade-offs, and explainability.",
  "I avoid content noise — I build thinking structures.",
]

const Philosophy = () => {
  return (
    <motion.section
      id="philosophy"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-[12%] py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-Ovo mb-4">
          How I Think & Build
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed">
          My work is guided by a few non-negotiable principles.
          They shape how I design systems, teach concepts, and make decisions.
        </p>
      </div>

      {/* Principles */}
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-6">
          {philosophyPoints.map((point, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-[#509187] shrink-0" />
              <p className="text-lg text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                {point}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default Philosophy
