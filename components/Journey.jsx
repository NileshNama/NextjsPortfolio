'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react'
import { typographyReveal, cardMotion, safeMotion, EASINGS } from '@/lib/animations'

const journey = [
  {
    year: '2016 – 2020',
    phase: 'Phase 01',
    badge: 'Foundation',
    title: 'Engineering Foundation',
    desc: 'Built strong fundamentals in computer science, core system design, algorithmic problem-solving, and low-level architectural thinking.',
    tags: ['Core CS', 'Systems Design', 'Algorithms'],
  },
  {
    year: '2020 – 2022',
    phase: 'Phase 02',
    badge: 'Competitive Reasoning',
    title: 'Competitive Exams & Deep Reasoning',
    desc: 'Intensive national competitive exam preparation (GATE/BARC) exposed the gap between surface memorization and genuine first-principles thinking — forging structured reasoning frameworks.',
    tags: ['GATE & BARC', 'Option Elimination', 'Examiner Psychology'],
  },
  {
    year: '2022 – 2026',
    phase: 'Phase 03',
    badge: 'Applied Education',
    title: 'NN Cohorts — Applied Education Systems',
    desc: 'Architected cohort-based learning systems and authored standard reference texts, training thousands of serious engineers to decode questions and reason under pressure.',
    tags: ['Curated Cohorts', 'Standard Reference Texts', 'Live Mentorship'],
  },
  {
    year: '2016 – 2026',
    phase: 'Conclusion · A Decade of Building',
    badge: 'Synthesis & Scale',
    title: 'Software × Learning Infrastructure',
    desc: 'A decade of engineering, writing, and mentorship synthesized into durable platforms — building production software and learning infrastructure that thrive under real-world constraints.',
    tags: ['Production Engineering', 'Full Stack Architecture', 'Durable Ed-Tech'],
    isConclusion: true,
  },
]

const JourneyTimeline = () => {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="journey"
      ref={containerRef}
      className="w-full px-4 sm:px-6 md:px-[8%] py-20 sm:py-24 md:py-28 scroll-mt-20 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-[#5A9B92]/5 blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3"
        >
          Journey Map
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-4xl sm:text-5xl font-semibold font-Ovo tracking-tight"
        >
          A Non-Linear Path
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg"
        >
          Intentionally shaped by systems, reasoning, and long-term thinking across a decade of engineering.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto relative">
        {/* Base Track Vertical Line (Centered on md+, Left-aligned on mobile) */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-6 w-[2px] -translate-x-1/2 bg-gray-200 dark:bg-white/10" />

        {/* Scroll-Linked Active Progress Line */}
        <motion.div
          style={shouldReduceMotion ? { height: '100%' } : { scaleY, transformOrigin: 'top' }}
          className="
            absolute left-6 md:left-1/2 top-4 bottom-6 w-[2px] -translate-x-1/2
            bg-gradient-to-b from-[#509187] via-[#5A9B92] to-teal-400
            shadow-[0_0_12px_rgba(80,145,135,0.7)]
            z-10
          "
        />

        {/* Timeline Milestones */}
        <div className="flex flex-col gap-10 md:gap-14">
          {journey.map((item, index) => {
            const isEven = index % 2 === 0 // 0, 2: Left on desktop; 1, 3: Right on desktop

            return (
              <motion.div
                key={item.title}
                {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
                className="group relative flex items-start"
              >
                {/* Central Milestone Node (Left on mobile, exactly Center on md+) */}
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div
                    className={`
                      w-10 h-10 sm:w-11 sm:h-11 rounded-2xl
                      ${item.isConclusion
                        ? 'bg-[#509187] text-white border-2 border-white dark:border-gray-900 shadow-[0_0_20px_rgba(80,145,135,0.5)]'
                        : 'bg-white dark:bg-[#111827] text-[#509187] border-2 border-[#509187] shadow-[0_0_14px_rgba(80,145,135,0.25)]'
                      }
                      flex items-center justify-center font-mono font-bold text-xs sm:text-sm
                      transition-transform duration-300 group-hover:scale-110
                    `}
                  >
                    0{index + 1}
                    <span className="absolute -inset-1 rounded-2xl bg-[#509187]/20 animate-pulse -z-10" />
                  </div>
                </div>

                {/* Horizontal Bridge Line Connecting Node to Card on Desktop */}
                <div
                  className={`
                    hidden md:block absolute top-[2.875rem] h-[2px] z-10 transition-all duration-300 pointer-events-none
                    ${isEven
                      ? 'right-1/2 mr-5 w-6 bg-gradient-to-l from-[#509187] to-[#509187]/20 group-hover:to-[#509187]'
                      : 'left-1/2 ml-5 w-6 bg-gradient-to-r from-[#509187] to-[#509187]/20 group-hover:to-[#509187]'
                    }
                  `}
                />

                {/* Milestone Card (Full width on mobile offset by 56px, Half width alternating on md+) */}
                <div
                  className={`
                    w-full pl-14 sm:pl-16 md:pl-0
                    ${isEven
                      ? 'md:w-[calc(50%-44px)] md:mr-auto'
                      : 'md:w-[calc(50%-44px)] md:ml-auto'
                    }
                  `}
                >
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`
                      relative rounded-3xl p-6 sm:p-8
                      border backdrop-blur-sm
                      transition-all duration-300
                      ${item.isConclusion
                        ? 'border-[#509187]/50 bg-gradient-to-br from-white via-white to-teal-50/40 dark:from-white/10 dark:via-[#111827] dark:to-[#0c1e1c] shadow-[0_16px_50px_rgba(80,145,135,0.18)] hover:shadow-[0_24px_70px_rgba(80,145,135,0.28)]'
                        : 'border-gray-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-sm hover:border-[#509187]/40 hover:shadow-[0_18px_50px_rgba(90,155,146,0.14)]'
                      }
                    `}
                  >
                    {/* Top Year Pill & Phase Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#509187]/10 dark:bg-[#509187]/20 border border-[#509187]/30 text-[#3b756b] dark:text-[#67b0a5] font-mono text-xs sm:text-sm font-bold tracking-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#509187] animate-pulse" />
                        {item.year}
                      </div>

                      <span className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5">
                        {item.badge}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-Ovo mb-3 text-gray-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>

                    {/* Milestone Narrative Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-5 font-normal">
                      {item.desc}
                    </p>

                    {/* Skill / Focus Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-white/5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Pointer Arrow pointing towards central line on desktop */}
                    <div
                      className={`
                        hidden md:block absolute top-8 w-3 h-3 pointer-events-none
                        border-gray-200 dark:border-white/10 bg-white dark:bg-[#151c27]
                        ${isEven
                          ? '-right-1.5 rotate-45 border-t border-r'
                          : '-left-1.5 -rotate-45 border-t border-l'
                        }
                      `}
                    />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default JourneyTimeline