'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cardMotion, safeMotion } from '@/lib/animations'
import Outcomes from './Outcomes'
import Struggles from './Struggles'
import BeliefSection from './BeliefSection'
import StudentProof from './StudentProof'
import NNSessions from './NNSessions'
import StudentTestimonial from './StudentTestimonial'
import WhoThrives from './WhoThrives'
import AudienceFilter from './AudienceFilter'
import QuestionFramework from './QuestionFramework'
import Faq from './Faq'
import VebSkillsContent from './VebSkillsContent'

const modalDetails = {
  nncohorts: {
    id: 'nncohorts',
    badge: 'Live Mentorship Cohort',
    title: 'NN Cohorts — Applied Education Systems',
    icon: '/nncohorts.png',
    portalUrl: 'https://cohorts.nileshnama.com/',
    portalLabel: 'Visit cohorts.nileshnama.com',
    properties: [
      { label: 'Category', value: 'Live Interactive Cohorts' },
      { label: 'Core Focus', value: 'GATE, BARC & First-Principles CS' },
      { label: 'Format', value: 'Live Breakdown + Standard Reference Texts' },
      { label: 'Pedagogy', value: 'Option Elimination & Cognitive Psychology' },
    ],
    callout: 'Most aspirants memorize solutions. NN Cohorts trains you to think aloud, decode unfamiliar questions under pressure, and eliminate examiner traps with mathematical rigor.',
    sections: [
      {
        heading: 'The Core Methodology',
        desc: 'Our cohorts are not lecture dumps. They are rigorous cognitive training labs where every question is treated as a reasoning puzzle.',
        bullets: [
          'Semantic Question Decoding: Pinpoint the hidden premise and boundary conditions in complex GATE/BARC questions.',
          'Standard Reference Foundations: Ground all explanations in Cormen, Tanenbaum, Galvin, and Sipser.',
          'Trap Recognition Framework: Identify intentional ambiguities and distractor options before doing heavy computation.',
          'Live Thinking-Aloud Practice: Solve unseen problems live in front of the cohort with real-time feedback.',
        ],
      },
      {
        heading: 'Cohort Pillars',
        desc: 'Each cohort is intentionally kept small to guarantee personalized question critique and mentorship.',
        bullets: [
          'Small-Batch Live Classes with interactive voice discussion.',
          'Curated Problem Sets with zero formula reliance.',
          'Comprehensive Standard Reference Notes & Framework Sheets.',
          'Direct 1-on-1 Guidance on examination strategy and test anxiety management.',
        ],
      },
    ],
  },
  vebskills: {
    id: 'vebskills',
    badge: 'Applied Engineering Platform',
    title: 'VebSkills — Hands-on Software Engineering',
    icon: '/vebskills.png',
    portalUrl: 'https://www.vebskills.com/',
    portalLabel: 'Visit vebskills.com',
    properties: [
      { label: 'Category', value: 'Practical Engineering Platform' },
      { label: 'Core Focus', value: 'Full Stack, DevOps & Open Source' },
      { label: 'Format', value: 'Real Repositories · Code Reviews · Proof of Work' },
      { label: 'Outcome', value: 'Job-Ready Portfolio & 100x Engineering Habits' },
    ],
    callout: 'Tutorials give the illusion of competence. VebSkills teaches you how to read production code, handle real-world edge cases, and ship software that handles real traffic.',
    sections: [
      {
        heading: 'What You Build in VebSkills',
        desc: 'We bypass shallow todo apps and cloned interfaces in favor of real, multi-tier architectural systems.',
        bullets: [
          'End-to-End Production Architectures: PostgreSQL, Redis caching, microservices, and modern frontend frameworks.',
          'Real Open Source Contributions: Learn git rebase workflows, issue triage, and PR reviews in real community codebases.',
          'DevOps & Deployment Mastery: Docker containerization, CI/CD with GitHub Actions, Nginx reverse proxies, and cloud infrastructure.',
          'Proof-of-Work Engineering: Stand out to tech recruiters and engineering leads with demonstrable production artifacts.',
        ],
      },
      {
        heading: 'The Engineering Standards',
        desc: 'Learn the habits practiced by top engineering teams.',
        bullets: [
          'Code Reviews & Clean Code: Writing maintainable, well-documented, and test-covered TypeScript/Python.',
          'System Observability: Implementing structured logging, monitoring, and error tracking.',
          'Career Acceleration: Personal portfolio audits, technical interview preparation, and architectural defense.',
        ],
      },
    ],
  },
}

const FeaturedPrograms = ({ isDarkMode, onModalToggle }) => {
  const [activeModal, setActiveModal] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  // Background scroll lock when modal is open and notify parent to hide navbar
  useEffect(() => {
    onModalToggle?.(Boolean(activeModal))
    if (activeModal) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveModal(null)
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
        onModalToggle?.(false)
      }
    } else {
      onModalToggle?.(false)
    }
  }, [activeModal, onModalToggle])

  const activeModalData = activeModal ? modalDetails[activeModal] : null

  return (
    <section
      id="nn-sessions"
      aria-label="Featured Programs - NN Sessions"
      className="w-full py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 relative z-20 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2.5 sm:pb-3 border-b border-gray-200/80 dark:border-white/10 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#509187]/10 dark:bg-[#509187]/20 border border-[#509187]/30 text-[#3b756b] dark:text-[#67b0a5] font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#509187] animate-pulse" />
              Featured Programs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold font-Ovo tracking-tight text-gray-900 dark:text-white">
              NN Sessions
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
            Structured live mentorship cohorts and applied engineering environments designed for serious engineers.
          </p>
        </div>

        {/* 2-Part Grid: Left = NN Cohorts, Right = VebSkills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column: NN Cohorts */}
          <motion.div
            {...safeMotion(cardMotion.reveal(0), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              group relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              rounded-tl-[42px] sm:rounded-tl-[58px]
              bg-[#0a2e29] dark:bg-[#07221e]
              border border-[#509187]/20 dark:border-[#509187]/15
              p-5 sm:p-6 md:p-8
              shadow-xl shadow-black/15
              text-white flex flex-col justify-between
              transition-all duration-300
              h-full min-h-[350px] sm:min-h-[385px] md:min-h-[415px]
            "
          >
            {/* Background Image from user (High visibility logo) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Image
                src="/nn-bg.png"
                alt="NN Cohorts Background"
                fill
                className="object-cover object-center opacity-75 dark:opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/30 dark:from-black/75 dark:via-black/55 dark:to-black/35 backdrop-blur-[0.5px]" />
            </div>

            {/* Radial gradient glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#509187]/20 blur-3xl pointer-events-none" />

            {/* Grid texture */}
            <div
              className="
                absolute inset-0 opacity-[0.05] pointer-events-none
                [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                [background-size:48px_24px]
              "
            />

            <div className="relative z-10">
              {/* Header Badge with Icon */}
              <div className="flex items-center gap-2.5 mb-3 sm:mb-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2a2a29] border border-white/20 p-1 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                  <Image
                    src="/nncohorts.png"
                    alt="NN Cohorts"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-lg"
                    unoptimized
                  />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#5A9B92] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#5A9B92]/10 border border-[#5A9B92]/20">
                  Live Mentorship &amp; Systems
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold font-Ovo text-white tracking-tight leading-snug mb-2 sm:mb-2.5">
                NN Cohorts
              </h3>

              <p className="text-white/80 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4 sm:mb-5 font-normal">
                Curated live cohort programs designed to build structural clarity in core computer science, competitive exam reasoning (GATE/BARC), and technical interviews. Learn to decode questions, avoid traps, and reason under pressure.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {[
                  "Live Problem Solving",
                  "Standard Reference Books",
                  "Examiner Psychology",
                  "Trap Elimination System"
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-white/90 text-xs sm:text-[13px] font-medium border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action: Know More Button */}
            <div className="relative z-10 pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
              <button
                type="button"
                onClick={() => setActiveModal('nncohorts')}
                className="group/btn cta-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm w-full sm:w-fit"
              >
                <span>Know More</span>
                <span className="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5">→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: VebSkills */}
          <motion.div
            {...safeMotion(cardMotion.reveal(1), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              group relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              rounded-tr-[42px] sm:rounded-tr-[58px]
              bg-[#0a2e29] dark:bg-[#07221e]
              border border-[#509187]/20 dark:border-[#509187]/15
              p-5 sm:p-6 md:p-8
              shadow-xl shadow-black/15
              text-white flex flex-col justify-between
              transition-all duration-300
              h-full min-h-[350px] sm:min-h-[385px] md:min-h-[415px]
            "
          >
            {/* Background Image from user (Centered and symmetric) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Image
                src="/vebskills-bg.png"
                alt="VebSkills Background"
                fill
                className="object-cover object-center opacity-70 dark:opacity-75 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e29]/70 via-[#0a2e29]/50 to-[#0a2e29]/75 dark:from-[#07221e]/75 dark:via-[#07221e]/55 dark:to-[#07221e]/80 backdrop-blur-[0.5px]" />
            </div>

            {/* Radial gradient glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#509187]/20 blur-3xl pointer-events-none" />

            {/* Grid texture */}
            <div
              className="
                absolute inset-0 opacity-[0.05] pointer-events-none
                [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                [background-size:48px_24px]
              "
            />

            <div className="relative z-10">
              {/* Header Badge with Icon */}
              <div className="flex items-center gap-2.5 mb-3 sm:mb-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-white/20 p-1 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                  <Image
                    src="/vebskills.png"
                    alt="VebSkills"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain p-0.5"
                    unoptimized
                  />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#5A9B92] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#5A9B92]/10 border border-[#5A9B92]/20">
                  Applied Engineering &amp; Open Source
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold font-Ovo text-white tracking-tight leading-snug mb-2 sm:mb-2.5">
                VebSkills
              </h3>

              <p className="text-white/80 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4 sm:mb-5 font-normal">
                A hands-on, project-driven software development platform where developers build production-grade web applications, master DevOps workflows, contribute to real open source repositories, and build proof-of-work portfolios.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {[
                  "Full Stack Architecture",
                  "Real Production Apps",
                  "Open Source Contributions",
                  "CI/CD & Deployment"
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-white/90 text-xs sm:text-[13px] font-medium border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action: Know More Button */}
            <div className="relative z-10 pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
              <button
                type="button"
                onClick={() => setActiveModal('vebskills')}
                className="group/btn cta-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm w-full sm:w-fit"
              >
                <span>Know More</span>
                <span className="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Notion-Style Center Open Modal */}
      <AnimatePresence>
        {activeModal && activeModalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
            />

            {/* Full Screen Page Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.99, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: 6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative z-10 w-full h-full
                bg-white dark:bg-[#0b1329]
                overflow-hidden flex flex-col
              "
            >
              {/* Ultra-Compact Top Bar */}
              <div className="flex items-center justify-between px-6 sm:px-10 lg:px-14 py-2.5 sm:py-3 border-b border-gray-100 dark:border-white/10 shrink-0 bg-gray-50/90 dark:bg-[#0b1329]/95 backdrop-blur-md">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#509187]/10 dark:bg-[#509187]/20 border border-[#509187]/30 text-[#3b756b] dark:text-[#67b0a5] font-mono text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#509187] animate-pulse" />
                  {activeModalData.badge}
                </div>

                {/* Close Controls */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-mono font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full border border-gray-200/80 dark:border-white/10">
                    ESC
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    aria-label="Close modal"
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer text-xs"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              {activeModal === 'nncohorts' ? (
                <div className="overflow-y-auto flex-1 w-full bg-white dark:bg-[#070d1e] text-gray-900 dark:text-white">
                  <Outcomes isDarkMode={isDarkMode} />
                  <Struggles isDarkMode={isDarkMode} />
                  <BeliefSection isDarkMode={isDarkMode} />
                  <StudentProof isDarkMode={isDarkMode} />
                  <NNSessions isDarkMode={isDarkMode} />
                  <StudentTestimonial isDarkMode={isDarkMode} />
                  <WhoThrives isDarkMode={isDarkMode} />
                  <AudienceFilter isDarkMode={isDarkMode} />
                  <QuestionFramework isDarkMode={isDarkMode} />
                  <Faq isDarkMode={isDarkMode} />
                </div>
              ) : activeModal === 'vebskills' ? (
                <div className="overflow-y-auto flex-1 w-full bg-white dark:bg-[#070d1e] text-gray-900 dark:text-white">
                  <VebSkillsContent isDarkMode={isDarkMode} />
                </div>
              ) : null}

              {/* Slim Sticky Action Footer */}
              <div className="px-6 sm:px-10 lg:px-14 py-2.5 sm:py-3 bg-gray-50/95 dark:bg-[#0b1329]/95 border-t border-gray-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="text-xs font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition cursor-pointer order-2 sm:order-1"
                >
                  Close [Esc]
                </button>

                <a
                  href={activeModalData.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/cta cta-primary
                    px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm
                    w-full sm:w-auto order-1 sm:order-2
                  "
                >
                  <span>{activeModalData.portalLabel}</span>
                  <span className="inline-block transition-transform duration-300 ease-out group-hover/cta:translate-x-1.5">→</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedPrograms
