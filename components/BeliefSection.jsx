import React from 'react'
import { motion } from 'motion/react'

const BeliefSection = () => {
  return (
    <motion.section
      id="belief"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="
        relative overflow-hidden
        w-full
        px-6 md:px-[8%]
        py-24 md:py-32
        bg-[#0b1120]
        text-white
        scroll-mt-20
      "
    >

      {/* Premium Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[42rem]
          h-[42rem]
          rounded-full
          bg-[#5A9B92]/10
          blur-3xl
        " />

        <div className="
          absolute
          bottom-[-220px]
          right-[-120px]
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-[#5A9B92]/5
          blur-3xl
        " />

      </div>

      {/* subtle grid texture */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="
            text-xs sm:text-sm
            uppercase
            tracking-[0.3em]
            text-[#5A9B92]
            font-semibold
            mb-6
          "
        >
          Core Belief
        </motion.p>
        <p className="section-label mb-3">METHOD</p>
        {/* Main Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-semibold
            font-Ovo
            leading-[1.08]
            tracking-tight
            max-w-5xl
            mx-auto
          "
        >
          Most aspirants don’t fail from lack of effort.
          <br className="hidden sm:block" />
          <span className="text-[#d9f3ee]">
            They fail from unclear thinking under pressure.
          </span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          className="
            max-w-3xl
            mx-auto
            mt-10
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            body-text soft-text
          "
        >
          NN Cohorts is designed to build calm reasoning,
          interpretation clarity, and decision-making under constraints.
        </motion.p>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div className="h-px w-28 bg-gradient-to-r from-transparent via-[#5A9B92]/70 to-transparent" />
        </motion.div>

      </div>
    </motion.section>
  )
}

export default BeliefSection