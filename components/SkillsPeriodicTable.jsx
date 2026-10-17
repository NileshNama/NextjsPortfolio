'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const DARK_TEAL_THEME = {
  accent: '#0a2e29',
  badgeBg: 'bg-[#509187]/15 dark:bg-[#509187]/25 text-[#0a2e29] dark:text-[#67b0a5] border-[#509187]/30',
  symbolColor: 'text-[#0a2e29] dark:text-[#67b0a5]',
  activeTab: 'bg-[#0a2e29] dark:bg-[#07221e] text-white shadow-md shadow-[#0a2e29]/25 border border-[#509187]/40',
  glow: 'group-hover:bg-[#509187]/10 group-hover:border-[#509187]/50',
}

export const SKILL_CATEGORIES = [
  {
    id: 'system-design',
    title: 'System Design & Architecture',
    shortTitle: 'System Design',
    count: 11,
    desc: 'Designing scalable distributed systems, microservices, API contracts, and high-performance software architectures.',
    theme: DARK_TEAL_THEME,
    iconType: 'server',
    skills: [
      { num: '01', sym: 'Sd', name: 'System Design', tag: 'Core', sub: 'Distributed Systems' },
      { num: '02', sym: 'Sa', name: 'Software Architecture', tag: 'Pattern', sub: 'Microservices & Clean' },
      { num: '03', sym: 'Ad', name: 'API Design', tag: 'Contract', sub: 'REST & Contracts' },
      { num: '04', sym: 'Fs', name: 'Full-Stack Development', tag: 'E2E', sub: 'Production Systems' },
      { num: '05', sym: 'Po', name: 'Performance Optimization', tag: 'Speed', sub: 'High QPS & Latency' },
      { num: '06', sym: 'Ca', name: 'Component Architecture', tag: 'Design', sub: 'Atomic & Reusable' },
      { num: '07', sym: 'Sc', name: 'SSR / CSR', tag: 'Render', sub: 'Hydration & Streaming' },
      { num: '08', sym: 'Ar', name: 'Asynchronous Rendering', tag: 'Async', sub: 'Concurrent Mode' },
      { num: '09', sym: 'Cs', name: 'Code Splitting', tag: 'Bundle', sub: 'Chunk Optimization' },
      { num: '10', sym: 'Ll', name: 'Lazy Loading', tag: 'Perf', sub: 'Suspense & Deferral' },
      { num: '11', sym: 'At', name: 'API Throttling', tag: 'Resilience', sub: 'Rate Limiting & Queue' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    shortTitle: 'Frontend',
    count: 6,
    desc: 'Building responsive, modern, and high-performance web applications using React design patterns.',
    theme: DARK_TEAL_THEME,
    iconType: 'layout',
    skills: [
      { num: '12', sym: 'Re', name: 'React.js', tag: 'UI Library', sub: 'v18+ Fiber Engine' },
      { num: '13', sym: 'Nx', name: 'Next.js', tag: 'Framework', sub: 'App Router & SSR' },
      { num: '14', sym: 'Ts', name: 'TypeScript', tag: 'Language', sub: 'Strict Type Safety' },
      { num: '15', sym: 'Js', name: 'JavaScript', tag: 'Language', sub: 'ES6+ & V8 Engine' },
      { num: '16', sym: 'Rt', name: 'Redux Toolkit', tag: 'State', sub: 'RTK Query & Slices' },
      { num: '17', sym: 'Tw', name: 'Tailwind CSS', tag: 'Styling', sub: 'Utility Design System' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    shortTitle: 'Backend',
    count: 6,
    desc: 'Engineered scalable server-side applications, REST APIs, and secure authentication systems.',
    theme: DARK_TEAL_THEME,
    iconType: 'code',
    skills: [
      { num: '18', sym: 'No', name: 'Node.js', tag: 'Runtime', sub: 'Non-Blocking I/O' },
      { num: '19', sym: 'Ex', name: 'Express.js', tag: 'Server', sub: 'Middleware Architecture' },
      { num: '20', sym: 'Ra', name: 'REST APIs', tag: 'Protocol', sub: 'Endpoint Contracts' },
      { num: '21', sym: 'Au', name: 'Authentication', tag: 'Security', sub: 'OAuth & Sessions' },
      { num: '22', sym: 'Az', name: 'Authorization', tag: 'Access', sub: 'RBAC & Policies' },
      { num: '23', sym: 'Jw', name: 'JWT', tag: 'Token', sub: 'Stateless Claims' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    shortTitle: 'Databases',
    count: 5,
    desc: 'Relational and NoSQL database management, data modeling, schema design, and query optimization.',
    theme: DARK_TEAL_THEME,
    iconType: 'database',
    skills: [
      { num: '24', sym: 'Mg', name: 'MongoDB', tag: 'NoSQL', sub: 'Document Aggregation' },
      { num: '25', sym: 'My', name: 'MySQL', tag: 'RDBMS', sub: 'ACID & Relational' },
      { num: '26', sym: 'Sh', name: 'Schema Design', tag: 'Modeling', sub: 'Normalized & Denorm' },
      { num: '27', sym: 'Ix', name: 'Indexing', tag: 'Perf', sub: 'B-Tree & Compound' },
      { num: '28', sym: 'Qo', name: 'Query Optimization', tag: 'Profiling', sub: 'Execution Plans' },
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Engineering Tools',
    shortTitle: 'Cloud & Tools',
    count: 7,
    desc: 'Cloud deployment, version control, automated CI/CD pipelines, and API testing environments.',
    theme: DARK_TEAL_THEME,
    iconType: 'cloud',
    skills: [
      { num: '29', sym: 'Aw', name: 'AWS', tag: 'Cloud', sub: 'S3, EC2 & Lambda' },
      { num: '30', sym: 'Gt', name: 'Git', tag: 'VCS', sub: 'Branching & Rebasing' },
      { num: '31', sym: 'Gh', name: 'GitHub', tag: 'Platform', sub: 'Actions & Code Review' },
      { num: '32', sym: 'Cd', name: 'CI/CD', tag: 'DevOps', sub: 'Automated Pipelines' },
      { num: '33', sym: 'Pm', name: 'Postman', tag: 'API Tool', sub: 'Mocking & Testing' },
      { num: '34', sym: 'Dt', name: 'Chrome DevTools', tag: 'Diagnostics', sub: 'Memory & Network' },
      { num: '35', sym: 'Nf', name: 'Netlify', tag: 'Hosting', sub: 'Serverless Edge' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    shortTitle: 'Testing',
    count: 2,
    desc: 'Unit testing, component integration testing, and automated quality assurance.',
    theme: DARK_TEAL_THEME,
    iconType: 'check',
    skills: [
      { num: '36', sym: 'Jt', name: 'Jest', tag: 'Test Runner', sub: 'Assertions & Runners' },
      { num: '37', sym: 'Tl', name: 'React Testing Library', tag: 'Integration', sub: 'DOM & User Behavior' },
    ],
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    shortTitle: 'Practices',
    count: 5,
    desc: 'Software delivery methodologies, technical planning, code review standards, and cross-functional collaboration.',
    theme: DARK_TEAL_THEME,
    iconType: 'wrench',
    skills: [
      { num: '38', sym: 'Ag', name: 'Agile/Scrum', tag: 'Process', sub: 'Sprints & Retros' },
      { num: '39', sym: 'Cr', name: 'Code Reviews', tag: 'Quality', sub: 'Standards & Mentoring' },
      { num: '40', sym: 'Rs', name: 'Reusable Systems', tag: 'Scale', sub: 'Modularity & DRY' },
      { num: '41', sym: 'Cc', name: 'Cross-Functional Collab', tag: 'Team', sub: 'Product & Design Sync' },
      { num: '42', sym: 'Tp', name: 'Technical Planning', tag: 'Roadmap', sub: 'RFCs & System Specs' },
    ],
  },
]

// Render SVG category icon
const CategoryIcon = ({ type, className = 'w-5 h-5' }) => {
  switch (type) {
    case 'server':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      )
    case 'layout':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    case 'code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case 'database':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    case 'cloud':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    case 'check':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'wrench':
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
  }
}

const SkillsPeriodicTable = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id)
  const currentCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0]

  return (
    <div className="w-full mt-20 sm:mt-24 md:mt-28">
      {/* Centered Systems & Engineering Expertise Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.22em] text-[#5A9B92] font-semibold mb-3"
        >
          SYSTEMS &amp; ARCHITECTURE
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo tracking-tight text-gray-900 dark:text-white"
        >
          Engineering Expertise
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Core architectural capabilities, technical proficiencies, and engineering disciplines organized in an interactive periodic table format.
        </motion.p>
      </div>

      {/* 7-Tab Switcher Bar (Mobile Touch Swipeable, Desktop Grid) */}
      <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-12">
        <div className="w-full p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 backdrop-blur-md shadow-sm">
          <div className="flex sm:grid sm:grid-cols-7 gap-1 sm:gap-1.5 w-full overflow-x-auto no-scrollbar py-0.5 px-0.5">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  title={cat.title}
                  className={`
                    relative shrink-0 sm:shrink sm:w-full
                    px-3 sm:px-2 md:px-2.5 py-1.5 sm:py-2 rounded-full
                    text-xs sm:text-xs md:text-sm font-medium
                    flex items-center justify-center gap-1.5
                    transition-all duration-200 cursor-pointer select-none whitespace-nowrap sm:whitespace-normal
                    ${
                      isActive
                        ? 'bg-[#0a2e29] dark:bg-[#07221e] text-white shadow-md shadow-[#0a2e29]/25 border border-[#509187]/40 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-[#0a2e29] dark:hover:text-[#67b0a5] hover:bg-[#509187]/10'
                    }
                  `}
                >
                  <CategoryIcon
                    type={cat.iconType}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-[#67b0a5]' : 'text-gray-500 dark:text-gray-400'}`}
                  />
                  <span className="truncate">{cat.shortTitle}</span>
                  <span
                    className={`
                      text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold shrink-0
                      ${
                        isActive
                          ? 'bg-[#509187] text-white'
                          : 'bg-black/5 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                      }
                    `}
                  >
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 2-Column Layout: Left = Periodic Table Grid, Right = Tab Metadata */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: All Table Grid */}
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3"
              >
                {currentCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.025 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="
                      group relative
                      rounded-2xl sm:rounded-[1.5rem]
                      border border-[#509187]/35 dark:border-[#509187]/30
                      bg-[#eaf5f2] dark:bg-[#0c3630]/85
                      hover:bg-[#dcf0eb] dark:hover:bg-[#0f423b]
                      backdrop-blur-md
                      p-2.5 sm:p-3
                      min-h-[136px] sm:min-h-[148px]
                      flex flex-col justify-between
                      shadow-[0_4px_16px_rgba(80,145,135,0.08)]
                      hover:shadow-[0_12px_32px_rgba(80,145,135,0.22)]
                      hover:border-[#509187]/70
                      transition-all duration-200
                      cursor-pointer select-none
                    "
                  >
                    {/* Radial Glow on Card Hover */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 35%, rgba(80, 145, 135, 0.2), transparent 70%)',
                      }}
                    />

                    {/* Top Row: Atomic Number & Tag */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                      <span className="font-bold text-[#3b756b] dark:text-[#67b0a5]">
                        {skill.num}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider border border-[#509187]/30 bg-white/70 dark:bg-black/25 text-[#0a2e29] dark:text-[#67b0a5]">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Center: Iconic Chemical Symbol */}
                    <div className="relative z-10 text-center my-auto py-1">
                      <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight transition-transform duration-200 group-hover:scale-105 inline-block text-[#0a2e29] dark:text-[#67b0a5]">
                        {skill.sym}
                      </span>
                    </div>

                    {/* Bottom: Element Name & Subtitle (Full Text Wrapping, No Truncation) */}
                    <div className="relative z-10 text-center pt-1.5 border-t border-[#509187]/20 flex flex-col justify-center min-h-[44px]">
                      <div
                        className="text-xs sm:text-[13px] font-bold font-Ovo text-gray-900 dark:text-white leading-tight"
                        title={skill.name}
                      >
                        {skill.name}
                      </div>
                      <div className="text-[10px] text-gray-600 dark:text-gray-300 font-mono mt-0.5 leading-tight">
                        {skill.sub}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Metadata of Active Tab */}
          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="
                  rounded-3xl
                  border border-[#509187]/25 dark:border-[#509187]/25
                  bg-white/85 dark:bg-[#111827]/85
                  backdrop-blur-md
                  p-6 sm:p-7
                  shadow-[0_12px_35px_rgba(10,46,41,0.06)]
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* Top Header: Icon + Periodic View Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-[#0a2e29] text-[#67b0a5] dark:bg-[#07221e] dark:text-[#509187] border border-[#509187]/30 shadow-md shadow-[#0a2e29]/20 shrink-0">
                      <CategoryIcon type={currentCategory.iconType} className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <span className="text-xs font-mono uppercase tracking-wider text-[#0a2e29] dark:text-[#67b0a5] font-semibold bg-[#509187]/15 dark:bg-[#509187]/25 px-3 py-1 rounded-full border border-[#509187]/30">
                      PERIODIC VIEW · 0{SKILL_CATEGORIES.findIndex((c) => c.id === activeTab) + 1}/07
                    </span>
                  </div>

                  {/* Title & Count Badge */}
                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                    <h4 className="text-xl sm:text-2xl font-bold font-Ovo text-gray-900 dark:text-white leading-tight">
                      {currentCategory.title}
                    </h4>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#0a2e29] text-white dark:bg-[#07221e] dark:text-[#67b0a5] border border-[#509187]/30 shrink-0">
                      {currentCategory.count} Technologies
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {currentCategory.desc}
                  </p>

                  {/* Included Technologies Tags List */}
                  <div className="mt-6 pt-5 border-t border-[#509187]/20">
                    <p className="text-xs uppercase tracking-wider font-mono font-semibold text-[#509187] dark:text-[#67b0a5] mb-3">
                      Included Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentCategory.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#509187]/10 dark:bg-[#509187]/20 text-xs text-[#0a2e29] dark:text-[#67b0a5] font-medium border border-[#509187]/25"
                        >
                          <span className="font-bold text-[#509187] dark:text-[#67b0a5]">✓</span>
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Engineering Portfolio CTA at the Bottom */}
      <div className="w-full flex justify-center mt-14 sm:mt-16">
        <a
          href="https://dev.nileshnama.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group cta-primary px-8 py-3.5 sm:py-4 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
        >
          <span>Engineering Portfolio</span>
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
        </a>
      </div>
    </div>
  )
}

export default SkillsPeriodicTable
