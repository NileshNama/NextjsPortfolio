import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typographyReveal, safeMotion, EASINGS } from '@/lib/animations'

const BeliefSection = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="belief"
      className="
        relative overflow-hidden
        w-full
        px-6 md:px-[8%]
        py-10 sm:py-12 md:py-14
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
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="
            text-xs sm:text-sm
            uppercase
            tracking-[0.3em]
            text-[#5A9B92]
            font-semibold
            mb-3 sm:mb-4
          "
        >
          Core Belief · Method
        </motion.p>

        {/* Main Statement */}
        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            font-Ovo
            leading-[1.12]
            tracking-tight
            max-w-5xl
            mx-auto
          "
        >
          Most aspirants don’t fail from lack of effort.
          <br className="hidden sm:block" />
          <span className="text-[#d9f3ee]">
            {" "}They fail from unclear thinking under pressure.
          </span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="
            max-w-3xl
            mx-auto
            mt-5 sm:mt-6
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            body-text soft-text
          "
        >
          NN Cohorts is built to change that.
        </motion.p>

        {/* Bottom Divider */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.25, duration: 0.5, ease: EASINGS.smoothOut }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div className="h-px w-28 bg-gradient-to-r from-transparent via-[#5A9B92]/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default BeliefSection