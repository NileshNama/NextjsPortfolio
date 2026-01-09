import { motion } from "motion/react"

const AudienceFilter = () => {
  return (
    <motion.section
      id="audience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full px-[12%] py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-Ovo mb-6">
          Who This Is Not For
        </h3>

        <p className="text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed">
          This site is not for people looking for shortcuts, hacks, or surface-level learning.
          <br /><br />
          I don’t optimize for speed without understanding, or content without structure.
          <br /><br />
          If you care about reasoning, clarity, and systems that hold under pressure —
          you’re in the right place.
        </p>
      </div>
    </motion.section>
  )
}

export default AudienceFilter
