import { motion } from "motion/react"

const impactData = [
  {
    title: "NN Cohorts",
    description:
      "A thinking-first learning ecosystem for GATE, BARC, ISRO, and PSU aspirants — focused on reasoning, decision-making, and examiner psychology.",
    signal:
      "Used by aspirants preparing for GATE, BARC, ISRO, and PSU interviews.",
    meta: "Learning ecosystem",
  },
  {
    title: "Standard Reference Texts",
    description:
      "Authoring long-form, concept-driven reference books for OS, DBMS, CN, and Compiler Design — optimized for depth, not shortcuts.",
    signal:
      "Multi-volume reference texts covering core computer science subjects.",
    meta: "Reference literature",
  },
  {
    title: "Interview Preparation Frameworks",
    description:
      "Designed interview-core, depth, and simulation frameworks to train explanation, follow-up handling, and performance under pressure.",
    signal:
      "Applied across structured interview cohorts and simulation tracks.",
    meta: "Interview frameworks",
  },
  {
    title: "Open Learning Content",
    description:
      "Free YouTube and open-series content focused on exam thinking, PYQ decoding, and conceptual clarity.",
    signal:
      "Public learning layer with free access via YouTube and LMS.",
    meta: "Open learning layer",
  },
]

const Impact = () => {
  return (
    <motion.section
      id="impact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-[12%] py-20"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm text-gray-500 mb-2">Impact</p>
        <h2 className="text-4xl font-Ovo mb-4">
          Proof of Work & Outcomes
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-Ovo">
          Systems, platforms, and learning frameworks built and used in real contexts.
        </p>
      </div>

      {/* Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="border border-gray-200 dark:border-white/10 rounded-xl p-6 bg-white dark:bg-darkTheme"
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {item.description}
            </p>

            {/* Micro-impact signal */}
            <p className="text-xs text-gray-500 mb-3">
              {item.signal}
            </p>

            {/* Meta label */}
            <p className="text-xs text-gray-500">
              {item.meta}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Impact
