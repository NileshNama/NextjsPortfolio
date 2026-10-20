'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typographyReveal, safeMotion, EASINGS } from '@/lib/animations'
import HandnoteHighlight from './HandnoteHeading'

const projects = [
  {
    id: 1,
    title: 'Interviewers',
    category: 'System Architecture',
    desc: 'Mentor–student matching and live evaluation engine designed for structured technical interview preparation and reasoning feedback.',
    tech: ['React', 'Node.js', 'WebRTC', 'Tailwind'],
    live: 'https://www.interviewers.in/',
    source: 'https://github.com/nileshnama/interviewers-platform',
  },
  {
    id: 2,
    title: 'NQuestions',
    category: 'Question Analysis System',
    desc: 'Interactive cognitive puzzle and question-decoding engine built to analyze examiner psychology and trap elimination patterns.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Python'],
    live: 'https://www.nquestions.in/',
    source: 'https://github.com/nileshnama/nquestions',
  },
  {
    id: 3,
    title: 'VebCampus',
    category: 'Campus & EdTech Systems',
    desc: 'Campus-wide technical training and placement ecosystem bridging academic curriculum with production-grade engineering practices.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    live: 'https://www.vebskills.com/',
    source: 'https://github.com/nileshnama/vebcampus',
  },
]

const FeaturedWork = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion()

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
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <HandnoteHighlight>Featured Engineering Work</HandnoteHighlight>
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg"
        >
          Production systems, architecture prototypes, and open-source applications built with first-principles computer science.
        </motion.p>
      </div>

      {/* 3 Main Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: EASINGS.smoothOut,
              }}
              className="
                group relative
                w-full
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
                select-none
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
                    group/btn flex-1 px-4 py-2 sm:py-2.5
                    cta-primary text-xs sm:text-sm
                  "
                >
                  <span>Live Demo</span>
                  <span className="text-xs transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </a>

                {/* Source Link Button */}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/btn flex-1 px-4 py-2 sm:py-2.5
                    cta-secondary text-xs sm:text-sm
                  "
                >
                  <span>Source Code</span>
                  <span className="text-xs transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Portfolio CTA below all 3 projects at center */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex justify-center mt-12 sm:mt-16"
        >
          <a
            href="https://dev.nileshnama.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-primary px-8 py-3.5 sm:py-4 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2 shadow-lg shadow-[#509187]/20 hover:shadow-xl hover:shadow-[#509187]/30 transition-all duration-300"
          >
            <span>Engineering Portfolio</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWork
