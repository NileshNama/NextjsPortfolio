'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { typographyReveal, cardMotion, safeMotion } from '@/lib/animations'
import { HandnoteHighlight } from '@/components/HandnoteHeading'

// ==========================================
// 1. VEBSKILLS OUTCOMES
// ==========================================
const outcomes = [
  {
    title: "Architect Production Systems",
    desc: "Build scalable multi-tier architectures with PostgreSQL, Redis caching, and microservices instead of toy apps.",
    icon: "✦",
  },
  {
    title: "Master Real DevOps & CI/CD",
    desc: "Containerize applications with Docker, configure Nginx reverse proxies, and automate releases with GitHub Actions.",
    icon: "✺",
  },
  {
    title: "Contribute to Open Source",
    desc: "Master git rebase, issue triage, and submit pull requests to real production repositories with confidence.",
    icon: "◈",
  },
  {
    title: "Proof-of-Work Engineering",
    desc: "Replace shallow resume bullet points with verifiable deployed artifacts, architecture docs, and live systems.",
    icon: "▣",
  },
]

const VebSkillsOutcomes = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="vebskills-outcomes" className="w-full px-[8%] pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-14 scroll-mt-20">
      <div className="text-center mb-8 sm:mb-10">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-semibold mb-2 font-mono"
        >
          VEBSKILLS · APPLIED ENGINEERING
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white"
        >
          <HandnoteHighlight>What Changes Inside VebSkills</HandnoteHighlight>
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
        >
          What Engineers Learn to Architect, Build &amp; Ship
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomes.map((item, index) => (
          <motion.div
            key={index}
            {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="
              group rounded-3xl
              border border-gray-200 dark:border-white/10
              bg-white/70 dark:bg-white/5
              backdrop-blur-sm p-7 shadow-sm
              hover:shadow-[0_20px_50px_rgba(90,155,146,0.14)]
              hover:border-[#5A9B92]/40
              transition-all duration-300
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-2xl mb-6 text-[#5A9B92] transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 font-Ovo text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ==========================================
// 2. VEBSKILLS STRUGGLES
// ==========================================
const painPoints = [
  {
    title: 'Passive Tutorial Consumption',
    desc: 'Developers follow along with 40-hour video courses without ever designing a schema or handling an unhandled edge case from scratch.',
  },
  {
    title: 'Copy-Pasting Boilerplate',
    desc: 'Building clone apps where 90% of the architecture is copied from a template, leaving them defenseless in technical interviews.',
  },
  {
    title: 'Zero Production Exposure',
    desc: 'Never having to deal with database connection pooling, race conditions, cache invalidation, or container deployment crashes.',
  },
  {
    title: 'Superficial Resume Portfolios',
    desc: 'Recruiters and engineering leads glance past generic Netflix and Spotify clones that show zero evidence of engineering depth.',
  },
]

const VebSkillsStruggles = () => {
  return (
    <section id="vebskills-struggles" className="w-full px-[8%] py-10 sm:py-12 md:py-14 scroll-mt-20 bg-[#111827] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-semibold mb-2 font-mono">
          WHY MOST DEVELOPERS STAY STUCK IN TUTORIAL HELL
        </p>
        <p className="section-label mb-2 text-[#5A9B92]">INDUSTRY REALITY</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight">
          <HandnoteHighlight>Why Most Developers Struggle</HandnoteHighlight>
        </h2>

        <p className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-300 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
          The problem is not effort or intelligence. The problem is never building software that handles real production constraints.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {painPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-sm p-7
              hover:shadow-[0_18px_50px_rgba(90,155,146,0.18)]
              hover:-translate-y-1 transition-all duration-300
            "
          >
            <div className="w-12 h-12 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] text-xl font-bold mb-5 font-mono">
              0{index + 1}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-Ovo">{item.title}</h3>

            <p className="text-gray-300 leading-relaxed text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-12 text-center"
      >
        <p className="text-base sm:text-lg font-medium text-gray-100 dark:text-gray-300">
          VebSkills is engineered to bridge the gap between tutorial coding and production software engineering.
        </p>
      </motion.div>
    </section>
  )
}

// ==========================================
// 3. VEBSKILLS BELIEF SECTION
// ==========================================
const VebSkillsBelief = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="vebskills-belief"
      className="relative overflow-hidden w-full px-6 md:px-[8%] py-10 sm:py-12 md:py-14 bg-[#0b1120] text-white scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-[#5A9B92]/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-120px] w-[28rem] h-[28rem] rounded-full bg-[#5A9B92]/5 blur-3xl" />
      </div>

      {/* Grid texture */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#5A9B92] font-semibold mb-3 sm:mb-4 font-mono"
        >
          CORE BELIEF · PROOF OF WORK
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-Ovo leading-[1.12] tracking-tight max-w-5xl mx-auto"
        >
          Most developers don’t struggle from lack of syntax.
          <br className="hidden sm:block" />
          <span className="text-[#d9f3ee]">
            {" "}They struggle from never building software that handles real production traffic.
          </span>
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-3xl mx-auto mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-300 leading-relaxed"
        >
          Tutorials give the illusion of competence. Engineering mastery only happens when you debug production environments, defend architectural trade-offs, and ship systems that real users depend on.
        </motion.p>
      </div>
    </section>
  )
}

// ==========================================
// 4. VEBSKILLS DEVELOPER PROOF / THINKING SHIFTS
// ==========================================
const shifts = [
  {
    before: 'I used to blindly follow video tutorials line-by-line and copy code without understanding the underlying data flow.',
    after: 'Now I start with system requirements, design the database schema and API contracts first, and architect end-to-end multi-tier systems independently.',
  },
  {
    before: 'I panicked in technical interviews whenever an interviewer asked how my app handles concurrency, latency, or deployment.',
    after: 'Now I confidently defend system design choices, caching strategies with Redis, Docker configurations, and architectural trade-offs under scrutiny.',
  },
  {
    before: 'Git for me was just git add, git commit, and pushing directly to the main branch.',
    after: 'Now I navigate complex rebase workflows, squash commits, manage branch strategies, and contribute to active open-source production repos.',
  },
  {
    before: 'My portfolio had three identical clone apps that every other bootcamp graduate had.',
    after: 'My portfolio features deployed production systems, benchmarked database queries, automated CI/CD pipelines, and demonstrable proof-of-work.',
  },
]

const VebSkillsProof = () => {
  return (
    <section id="vebskills-proof" className="w-full px-[8%] py-10 sm:py-12 md:py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-semibold mb-2 font-mono">
          ENGINEERING PROOF
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white">
          <HandnoteHighlight>Developer Thinking Shifts</HandnoteHighlight>
        </h2>

        <p className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
          Real shifts in engineering habits create real breakthroughs in careers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {shifts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl border border-gray-200 dark:border-white/10
              bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 sm:p-8
              shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
            "
          >
            <div className="grid gap-4">
              <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/5 p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mb-2 font-mono font-semibold">
                  Before VebSkills
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 leading-relaxed">
                  “{item.before}”
                </p>
              </div>

              <div className="rounded-2xl border border-[#5A9B92]/20 bg-[#5A9B92]/10 p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#5A9B92] mb-2 font-mono font-bold">
                  After VebSkills
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                  “{item.after}”
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ==========================================
// 5. VEBSKILLS LABS (INSIDE SESSIONS)
// ==========================================
const labCards = [
  {
    title: 'Architectural Deconstructions',
    desc: 'Watch real production systems get decomposed layer-by-layer — from database normalization and indexing to distributed caching and WebSocket real-time pipelines.',
    accent: 'from-[#5A9B92]/15 to-transparent',
  },
  {
    title: 'Live PR Critiques & Code Reviews',
    desc: 'Experience rigorous line-by-line code reviews focusing on clean code, type safety, modular design, error handling, and performance bottlenecks.',
    accent: 'from-white/10 to-transparent',
  },
  {
    title: 'DevOps & Deployment Sprints',
    desc: 'Hands-on containerization with Docker multi-stage builds, continuous integration with GitHub Actions, and cloud deployment with SSL and domain routing.',
    accent: 'from-[#5A9B92]/10 to-transparent',
  },
]

const VebSkillsLabs = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="vebskills-labs" className="w-full px-6 md:px-[12%] py-10 sm:py-12 md:py-14 scroll-mt-20 bg-[#111827] text-white">
      <div className="text-center mb-8 sm:mb-10">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="section-label mb-2 text-[#5A9B92]"
        >
          ENGINEERING LABS
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo mb-3 tracking-tight"
        >
          <HandnoteHighlight>Inside VebSkills Engineering Labs</HandnoteHighlight>
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto text-white/75 font-normal leading-relaxed text-sm sm:text-base"
        >
          See how software is architected, code is reviewed to senior standards, and deployments are automated.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {labCards.map((card, index) => (
          <motion.div
            key={index}
            {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="
              group rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-sm p-7 sm:p-8
              hover:border-[#5A9B92]/40 hover:shadow-[0_20px_50px_rgba(90,155,146,0.15)]
              transition-all duration-300 flex flex-col justify-between
            "
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#5A9B92]/10 text-[#5A9B92] font-mono font-bold flex items-center justify-center mb-5 text-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold font-Ovo mb-3 text-white">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ==========================================
// 6. VEBSKILLS TESTIMONIALS
// ==========================================
const developerReviews = [
  {
    name: "Aman Gupta",
    role: "Full Stack Engineer",
    rating: 5,
    review: "VebSkills completely changed how I look at software development. I used to be stuck building basic frontends. In VebSkills, I built a complete microservices architecture with Redis and Docker that became the centerpiece of my interview conversations.",
  },
  {
    name: "Sneha Patel",
    role: "Backend Developer",
    rating: 5,
    review: "The code review standards are what you typically only get in senior engineering teams. My code went from messy spaghetti to clean, testable, production-ready TypeScript with automated CI/CD.",
  },
  {
    name: "Vikram Singh",
    role: "SDE-1",
    rating: 5,
    review: "Contributing to real open-source repos through VebSkills gave me the confidence to apply to top-tier product companies. Landed my dream SDE role within 3 months.",
  },
]

const VebSkillsTestimonials = () => {
  return (
    <section id="vebskills-testimonials" className="w-full px-[8%] py-10 sm:py-12 md:py-14 scroll-mt-20">
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-semibold mb-2 font-mono">
          DEVELOPER IMPACT
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white">
          <HandnoteHighlight>What Developers Say About VebSkills</HandnoteHighlight>
        </h2>

        <p className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
          Real feedback from engineers who transitioned from tutorial purgatory to building and shipping production software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {developerReviews.map((rev, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl border border-gray-200 dark:border-white/10
              bg-white/80 dark:bg-white/5 backdrop-blur-sm p-7 sm:p-8
              shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              flex flex-col justify-between
            "
          >
            <div>
              <div className="flex items-center gap-1 text-[#5A9B92] mb-4 text-sm">
                {"★".repeat(rev.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;{rev.review}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/10">
              <h4 className="font-semibold text-gray-900 dark:text-white font-Ovo text-base">
                {rev.name}
              </h4>
              <p className="text-xs text-[#5A9B92] font-mono mt-0.5">
                {rev.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ==========================================
// 7. WHO THRIVES IN VEBSKILLS
// ==========================================
const whoThrivesList = [
  'Developers tired of shallow CRUD apps and wanting true architectural depth',
  'Self-taught programmers and CS students seeking industry-standard software engineering practices',
  'Engineers preparing for product company interviews and technical architecture rounds',
  'Builders passionate about contributing to real open-source repositories and shipping production tools',
]

const VebSkillsWhoThrives = () => {
  return (
    <section id="vebskills-who-thrives" className="w-full px-[8%] py-10 sm:py-12 md:py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-semibold mb-2 font-mono">
          IDEAL ENGINEERS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white">
          <HandnoteHighlight>Who Thrives Inside VebSkills</HandnoteHighlight>
        </h2>

        <p className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
          VebSkills is engineered for developers who want deep engineering habits, production-level standards, and verifiable proof of work.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {whoThrivesList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl border border-gray-200 dark:border-white/10
              bg-white/70 dark:bg-white/5 backdrop-blur-sm p-7
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              flex items-start gap-4
            "
          >
            <div className="w-10 h-10 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] text-lg font-bold shrink-0">
              ✓
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
          This is not built for passive watching — it is built for builders who write code that runs in production.
        </p>
      </motion.div>
    </section>
  )
}

// ==========================================
// 8. AUDIENCE FILTER
// ==========================================
const notForPoints = [
  'Looking for get-rich-quick coding hacks, shortcuts, or surface-level syntax',
  'Optimizing for superficial certificates over demonstrable production proof of work',
  'Wanting to passively watch video tutorials without writing real code or architecting systems',
]

const VebSkillsAudienceFilter = () => {
  return (
    <section id="vebskills-not-for" className="w-full px-[8%] py-10 sm:py-12 md:py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-semibold mb-2 font-mono">
          CLEAR FIT
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white">
          <HandnoteHighlight>Who This Is Not For</HandnoteHighlight>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-sm p-8 sm:p-10 shadow-sm"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            VebSkills is not for people looking for superficial shortcuts, overnight certificate collecting, or passive tutorial watching.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {notForPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-800 dark:text-gray-200 leading-relaxed text-sm sm:text-base font-medium">
            We don’t optimize for speed without architectural understanding, or superficial clones without production rigor.
          </p>

          <p className="mt-3 text-gray-900 dark:text-white leading-relaxed text-base sm:text-lg font-semibold">
            If you care about writing resilient production software, understanding system design trade-offs, and building verifiable proof of work — you’re in the right place.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// 9. THE 6-STAGE PRODUCTION ENGINEERING PIPELINE
// ==========================================
const engineeringSteps = [
  {
    step: '01',
    title: 'Domain Modeling',
    desc: 'Define entities, schema constraints, API contracts, and boundary conditions.',
  },
  {
    step: '02',
    title: 'Persistence Layer',
    desc: 'Optimize relational database schema, index queries, and configure Redis caching layers.',
  },
  {
    step: '03',
    title: 'Core Architecture',
    desc: 'Implement modular clean architecture, domain services, and defensive error boundaries.',
  },
  {
    step: '04',
    title: 'Automated Testing',
    desc: 'Write unit tests, integration test suites, and load test API endpoints under concurrency.',
  },
  {
    step: '05',
    title: 'Containerization',
    desc: 'Multi-stage Docker builds, environment configuration, and security audits.',
  },
  {
    step: '06',
    title: 'CI/CD & Observability',
    desc: 'Automate deployment pipelines with GitHub Actions, structured logging, and health monitoring.',
  },
]

const VebSkillsFramework = () => {
  return (
    <section id="vebskills-framework" className="w-full px-[8%] py-10 sm:py-12 md:py-14 scroll-mt-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A9B92] font-semibold mb-2 font-mono">
          THE PRODUCTION ENGINEERING PIPELINE
        </p>
        <p className="section-label mb-2 text-[#5A9B92]">SYSTEM DESIGN</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight">
          <HandnoteHighlight>How VebSkills Engineers Build</HandnoteHighlight>
        </h2>

        <p className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-300 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
          A repeatable 6-stage engineering pipeline that transforms ambiguous requirements into scalable, observable production software.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-[#5A9B92]/50 to-transparent mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">
          {engineeringSteps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                group relative rounded-3xl border border-white/10
                bg-white/5 backdrop-blur-sm p-6 sm:p-7 shadow-sm
                transition-all duration-300 hover:-translate-y-1
                hover:border-[#5A9B92]/40 hover:shadow-[0_18px_60px_rgba(90,155,146,0.22)]
              "
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5A9B92]/10 text-[#5A9B92] font-semibold font-mono transition-colors group-hover:bg-[#5A9B92]/15">
                {item.step}
              </div>

              <h3 className="text-lg font-semibold font-Ovo text-white dark:text-gray-100 mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-gray-300 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 10. VEBSKILLS FAQ
// ==========================================
const VEBSKILLS_FAQ_ITEMS = [
  {
    question: "What makes VebSkills different from standard coding bootcamps or YouTube tutorials?",
    answer: "Most bootcamps and tutorials teach syntax through isolated todo apps and clone interfaces where 90% of the architecture is pre-packaged. VebSkills teaches end-to-end production engineering: database indexing, distributed caching with Redis, microservices communication, Docker containerization, CI/CD with GitHub Actions, and real open-source contributions. You build systems that can withstand real traffic and defend them in senior-level technical interviews.",
  },
  {
    question: "What tech stack and tools are used in VebSkills?",
    answer: "We focus on modern, industry-standard production stacks: TypeScript, Next.js, Node.js, Python, PostgreSQL, Redis, Docker, GitHub Actions, Nginx, and cloud deployment platforms. The emphasis is on architectural first principles and system design trade-offs that transfer to any stack.",
  },
  {
    question: "How does open-source contribution work within VebSkills?",
    answer: "We guide you through finding real, impactful issues in active open-source repositories, setting up local development environments, understanding contribution guidelines, executing clean git rebase workflows, and collaborating with repository maintainers through pull request reviews.",
  },
  {
    question: "Do I receive personal code reviews on my projects?",
    answer: "Yes. Every core architectural project goes through a detailed code review covering architectural patterns, type safety, database query efficiency, test coverage, and code maintainability, mirroring the standards practiced by top engineering organizations.",
  },
  {
    question: "How does VebSkills help with technical interviews and job placement?",
    answer: "Hiring managers and engineering leads care about proof of work, not paper certificates. By completing VebSkills, you have demonstrable deployed systems, active GitHub contribution records, and the architectural vocabulary needed to ace system design and deep technical defense rounds.",
  },
]

const VebSkillsFaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-black/10 dark:border-white/10 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left font-Ovo text-base sm:text-lg font-semibold text-gray-900 dark:text-white hover:opacity-80 transition"
      >
        <span>{item.question}</span>
        <span className="text-[#5A9B92] font-bold text-xl ml-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const VebSkillsFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="vebskills-faq" className="w-full px-[8%] pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-[#5A9B92]/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="section-label mb-2 text-[#5A9B92]">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white">
            <HandnoteHighlight>Frequently Asked Questions</HandnoteHighlight>
          </h2>
          <p className="max-w-2xl mx-auto mt-2.5 sm:mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Answers to common questions about our applied engineering methodology, hands-on curriculum, and proof-of-work standards.
          </p>
        </motion.div>

        <div className="space-y-4">
          {VEBSKILLS_FAQ_ITEMS.map((item, index) => (
            <VebSkillsFaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// MAIN EXPORT: VEBSKILLS CONTENT (ALL 10 SECTIONS)
// ==========================================
export default function VebSkillsContent({ isDarkMode }) {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-[#070d1e] text-gray-900 dark:text-white">
      <VebSkillsOutcomes isDarkMode={isDarkMode} />
      <VebSkillsStruggles isDarkMode={isDarkMode} />
      <VebSkillsBelief isDarkMode={isDarkMode} />
      <VebSkillsProof isDarkMode={isDarkMode} />
      <VebSkillsLabs isDarkMode={isDarkMode} />
      <VebSkillsTestimonials isDarkMode={isDarkMode} />
      <VebSkillsWhoThrives isDarkMode={isDarkMode} />
      <VebSkillsAudienceFilter isDarkMode={isDarkMode} />
      <VebSkillsFramework isDarkMode={isDarkMode} />
      <VebSkillsFaq isDarkMode={isDarkMode} />
    </div>
  )
}
