'use client'

import React, { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typographyReveal, safeMotion, EASINGS } from '@/lib/animations'

const projects = [
  {
    id: 1,
    title: 'VebSkills Platform',
    category: 'Full Stack & DevOps',
    desc: 'Hands-on engineering ecosystem simulating production repositories, automated code reviews, Docker setups, and CI/CD pipelines.',
    tech: ['Next.js', 'PostgreSQL', 'Docker', 'Redis'],
    live: 'https://www.vebskills.com/',
    source: 'https://github.com/nileshnama/vebskills',
  },
  {
    id: 2,
    title: 'Interviewers Platform',
    category: 'System Architecture',
    desc: 'Mentor–student matching and live evaluation engine designed for structured technical interview preparation and reasoning feedback.',
    tech: ['React', 'Node.js', 'WebRTC', 'Tailwind'],
    live: 'https://www.interviewers.in/',
    source: 'https://github.com/nileshnama/interviewers-platform',
  },
  {
    id: 3,
    title: 'NN Cohorts LMS',
    category: 'EdTech & Distributed Systems',
    desc: 'Cohort-based learning management system for first-principles computer science, option-elimination frameworks, and live problem breakdowns.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
    live: 'https://cohorts.nileshnama.com/',
    source: 'https://github.com/nileshnama/nn-cohorts-lms',
  },
  {
    id: 4,
    title: 'NQuestions Engine',
    category: 'Question Analysis System',
    desc: 'Interactive cognitive puzzle and question-decoding engine built to analyze examiner psychology and trap elimination patterns.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Python'],
    live: 'https://www.nquestions.in/',
    source: 'https://github.com/nileshnama/nquestions',
  },
  {
    id: 5,
    title: 'ThemeForest Backend Architecture',
    category: 'Backend & Marketplace',
    desc: 'High-throughput marketplace backend implementing authentication, role-based access control, digital product downloads, and Stripe webhooks.',
    tech: ['Express', 'MongoDB', 'Node.js', 'Stripe'],
    live: 'https://dev.nileshnama.com/',
    source: 'https://github.com/nileshnama/themeforest-backend-clone',
  },
  {
    id: 6,
    title: 'VebGlitch Studio Engine',
    category: 'Design Engineering',
    desc: 'High-performance creative engineering agency website and interactive design systems lab with fluid micro-interactions.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Three.js'],
    live: 'https://vebglitch.com',
    source: 'https://github.com/nileshnama/vebglitch',
  },
]

const FeaturedWork = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion()
  const scrollContainerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicated list for seamless infinite marquee scroll
  const duplicatedProjects = [...projects, ...projects]

  return (
    <section
      id="featured-work"
      className="w-full py-20 sm:py-24 md:py-28 scroll-mt-20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-[8%] mb-12 sm:mb-16 text-center">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="text-sm uppercase tracking-[0.2em] text-[#5A9B92] font-medium mb-3"
        >
          Featured Work
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-4xl sm:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white"
        >
          Featured Engineering Work
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg"
        >
          Production systems, architecture prototypes, and open-source applications built with first-principles computer science.
        </motion.p>
      </div>

      {/* Auto-Moving Slider Track */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge blur masks */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-darkTheme dark:via-darkTheme/80 dark:to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-darkTheme dark:via-darkTheme/80 dark:to-transparent z-20 pointer-events-none" />

        {/* Scrollable Container with Marquee Animation */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-8"
        >
          <div
            className={`flex gap-6 py-4 w-max ${isPaused ? '' : 'animate-marquee'}`}
            style={{
              animationDuration: '45s',
              animationTimingFunction: 'linear',
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="
                  group relative
                  w-[85vw] max-w-[320px] sm:max-w-none sm:w-[370px] md:w-[420px]
                  rounded-[2rem]
                  border border-gray-200/90 dark:border-white/10
                  bg-white/85 dark:bg-[#111827]/85
                  backdrop-blur-md
                  p-6 sm:p-7 md:p-8
                  flex flex-col justify-between
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_20px_50px_rgba(80,145,135,0.18)]
                  hover:border-[#509187]/50
                  hover:-translate-y-1.5
                  transition-all duration-300
                  shrink-0 select-none
                "
              >
                {/* Glow backdrop on hover */}
                <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-[#509187]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Category Badge & Index Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#509187]/10 dark:bg-[#509187]/20 text-[#3b756b] dark:text-[#67b0a5] border border-[#509187]/30">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500">
                      0{project.id}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl sm:text-2xl font-bold font-Ovo text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-[#509187] dark:group-hover:text-[#67b0a5] transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.desc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-[11px] font-mono border border-black/5 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons: Live Link & Source Link */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-2.5 sm:gap-3">
                  {/* Live Link Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex-1 px-4 py-2 sm:py-2.5
                      cta-primary text-xs sm:text-sm
                    "
                  >
                    <span>Live Demo</span>
                    <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>

                  {/* Source Link Button */}
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex-1 px-4 py-2 sm:py-2.5
                      cta-secondary text-xs sm:text-sm
                    "
                  >
                    <span>Source Code</span>
                    <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
