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
    file: 'interviewers/README.md',
    desc: 'Mentor–student matching and live evaluation engine designed for structured technical interview preparation and reasoning feedback.',
    intent: 'To design interview preparation as a system of reasoning, feedback, and performance — not passive content delivery.',
    tech: ['React', 'Node.js', 'WebRTC', 'Tailwind'],
    live: 'https://www.interviewers.in/',
    source: 'https://github.com/nileshnama/interviewers-platform',
    readme: 'https://github.com/nileshnama/interviewers-platform#readme',
  },
  {
    id: 2,
    title: 'NQuestions',
    category: 'Question Analysis System',
    file: 'nquestions/README.md',
    desc: 'Interactive cognitive puzzle and question-decoding engine built to analyze examiner psychology and trap elimination patterns.',
    intent: 'To decode examiner traps and cognitive reasoning models in competitive examinations through structured puzzles.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Python'],
    live: 'https://www.nquestions.in/',
    source: 'https://github.com/nileshnama/nquestions',
    readme: 'https://github.com/nileshnama/nquestions#readme',
  },
  {
    id: 3,
    title: 'VebCampus',
    category: 'Campus & EdTech Systems',
    file: 'vebcampus/README.md',
    desc: 'Campus-wide technical training and placement ecosystem bridging academic curriculum with production-grade engineering practices.',
    intent: 'To transform university engineering cohorts into production-ready software engineers through verifiable proof-of-work.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    live: 'https://www.vebskills.com/',
    source: 'https://github.com/nileshnama/vebcampus',
    readme: 'https://github.com/nileshnama/vebcampus#readme',
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
                rounded-[1.75rem] sm:rounded-[2rem]
                border border-gray-200/90 dark:border-white/10
                bg-white dark:bg-[#0d1117]
                overflow-hidden
                flex flex-col justify-between
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_50px_rgba(80,145,135,0.18)]
                hover:border-[#509187]/50
                hover:-translate-y-1.5
                transition-all duration-300
              "
            >
              {/* README.md File Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-100 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03]">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  </span>
                  <span className="text-gray-300 dark:text-gray-600 text-xs font-mono">|</span>
                  <span className="font-mono text-xs text-gray-700 dark:text-gray-300 font-medium tracking-tight">
                    {project.file}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-gray-200/70 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                  markdown
                </span>
              </div>

              {/* Main README Document Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Badge & Index Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#509187]/10 dark:bg-[#509187]/20 text-[#3b756b] dark:text-[#67b0a5] border border-[#509187]/30">
                      <span>#</span> {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500">
                      0{project.id}
                    </span>
                  </div>

                  {/* Project Name (Markdown Header Style) */}
                  <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white mb-3 group-hover:text-[#509187] dark:group-hover:text-[#67b0a5] transition-colors duration-200">
                    <span className="text-[#509187] opacity-60 mr-1.5 select-none">#</span>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {project.desc}
                  </p>

                  {/* Markdown Blockquote Intent */}
                  <div className="border-l-2 border-[#509187] pl-3 py-1.5 mb-5 bg-gray-50/70 dark:bg-white/[0.02] rounded-r text-xs text-gray-500 dark:text-gray-400 italic leading-relaxed">
                    <span className="not-italic font-mono text-[10px] text-[#509187] block mb-0.5 uppercase tracking-wider font-semibold">
                      Architecture Intent:
                    </span>
                    &ldquo;{project.intent}&rdquo;
                  </div>

                  {/* Tech Stack Code Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded font-mono text-[11px] bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                      >
                        <code>{tag}</code>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons: Live Link, Source Code & readme.md */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/10 mt-auto flex flex-col gap-2 w-full">
                  {/* Live Link Button (Primary) */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/btn w-full
                      flex items-center justify-center gap-2
                      px-4 py-2.5 rounded-xl
                      cta-primary text-xs sm:text-sm font-semibold
                      shadow-sm
                    "
                  >
                    <span>Live Demo</span>
                    <span className="text-xs transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                  </a>

                  {/* Secondary Buttons Row: Source Code & readme.md */}
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {/* Source Code */}
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/btn
                        flex items-center justify-center gap-1.5
                        px-2.5 py-2 rounded-xl
                        cta-secondary text-xs font-mono font-medium
                        whitespace-nowrap
                      "
                    >
                      <svg className="w-3.5 h-3.5 fill-current opacity-70 group-hover/btn:opacity-100 transition-opacity shrink-0" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Source Code</span>
                      <span className="text-xs transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                    </a>

                    {/* readme.md */}
                    <a
                      href={project.readme || `${project.source}#readme`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/btn
                        flex items-center justify-center gap-1.5
                        px-2.5 py-2 rounded-xl
                        cta-secondary text-xs font-mono font-medium
                        border border-[#509187]/40 text-[#3b756b] dark:text-[#67b0a5]
                        hover:bg-[#509187]/10 dark:hover:bg-[#509187]/20
                        whitespace-nowrap
                      "
                    >
                      {/* Premium Document / Markdown SVG Icon */}
                      <svg
                        className="w-3.5 h-3.5 stroke-[2] shrink-0 text-[#509187] dark:text-[#67b0a5]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <line x1="10" y1="9" x2="8" y2="9" />
                      </svg>
                      <span>readme.md</span>
                      <span className="text-xs transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                    </a>
                  </div>
                </div>
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
