'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HandnoteHighlight } from '@/components/HandnoteHeading'

// ============================================================================
// AUTHENTIC REFERENCE PALETTE (MATCHED TO REFERENCE PERIODIC TABLE SAMPLE)
// ============================================================================
export const REFERENCE_THEMES = {
  // 1. Midnight Indigo Slate (Row 1: C++, Jv, Py, Js, Sq, Re, Ht)
  midnightSlate: {
    id: 'midnightSlate',
    accent: '#262838',
    cardBg: 'bg-[#262838] dark:bg-[#1A1C29]',
    cardBorder: 'border-[#393C52] dark:border-[#2A2C40]',
    hoverBg: 'hover:bg-[#313348] dark:hover:bg-[#232537]',
    hoverBorder: 'hover:border-slate-300 dark:hover:border-slate-300',
    symbolColor: 'text-white',
    nameColor: 'text-white',
    subColor: 'text-slate-300 dark:text-slate-400',
    tagBadge: 'border-white/20 bg-white/10 text-white',
    numColor: 'text-slate-300',
    activeTab: 'bg-[#262838] text-white shadow-md shadow-[#262838]/30 border border-[#3E4158]',
    tabBadge: 'bg-white/20 text-white',
    tabIconActive: 'text-white',
    panelBg: 'bg-[#262838] text-white border-[#393C52]',
    panelIconBg: 'bg-[#1A1C29] text-white border-[#3E4158]',
    panelBadge: 'bg-white/15 text-white border-white/20',
    glow: 'rgba(38, 40, 56, 0.45)',
  },

  // 2. Warm Earthy Taupe / Cocoa Sand (Row 2: No, Ex, Ra, Sb)
  warmTaupe: {
    id: 'warmTaupe',
    accent: '#9E8E82',
    cardBg: 'bg-[#9E8E82] dark:bg-[#4E433B]',
    cardBorder: 'border-[#B1A196] dark:border-[#65584F]',
    hoverBg: 'hover:bg-[#AA9B8F] dark:hover:bg-[#5C5046]',
    hoverBorder: 'hover:border-amber-100 dark:hover:border-amber-200',
    symbolColor: 'text-white',
    nameColor: 'text-white',
    subColor: 'text-amber-100/90 dark:text-amber-200/80',
    tagBadge: 'border-white/25 bg-white/15 text-white',
    numColor: 'text-amber-100',
    activeTab: 'bg-[#9E8E82] text-white shadow-md shadow-[#9E8E82]/30 border border-[#B1A196]',
    tabBadge: 'bg-white/20 text-white',
    tabIconActive: 'text-white',
    panelBg: 'bg-[#9E8E82] text-white border-[#B1A196]',
    panelIconBg: 'bg-[#76685E] text-white border-white/20',
    panelBadge: 'bg-white/15 text-white border-white/20',
    glow: 'rgba(158, 142, 130, 0.45)',
  },

  // 3. Soft Dusty Mauve Heather (Row 3: My, Ma, Mg, Pg)
  dustyMauve: {
    id: 'dustyMauve',
    accent: '#C0AFBA',
    cardBg: 'bg-[#C0AFBA] dark:bg-[#54454E]',
    cardBorder: 'border-[#D1C1CC] dark:border-[#6B5A65]',
    hoverBg: 'hover:bg-[#CBBC5] dark:hover:bg-[#62515C]',
    hoverBorder: 'hover:border-[#3D2F38] dark:hover:border-[#F2E4EC]',
    symbolColor: 'text-[#281E25] dark:text-[#FAF0F5]',
    nameColor: 'text-[#281E25] dark:text-[#FAF0F5]',
    subColor: 'text-[#483743] dark:text-[#DFC8D7]',
    tagBadge: 'border-[#483743]/30 bg-black/10 dark:bg-white/15 text-[#281E25] dark:text-[#FAF0F5]',
    numColor: 'text-[#3E2E39] dark:text-[#E9D9E4]',
    activeTab: 'bg-[#C0AFBA] text-[#281E25] shadow-md shadow-[#C0AFBA]/30 border border-[#B19FA9]',
    tabBadge: 'bg-black/15 text-[#281E25]',
    tabIconActive: 'text-[#281E25]',
    panelBg: 'bg-[#C0AFBA] text-[#281E25] dark:bg-[#54454E] dark:text-[#FAF0F5] border-[#D1C1CC] dark:border-[#6B5A65]',
    panelIconBg: 'bg-[#A3919D] text-white dark:bg-[#3D3037] border-black/15 dark:border-white/20',
    panelBadge: 'bg-black/10 dark:bg-white/15 text-[#281E25] dark:text-[#FAF0F5] border-black/15 dark:border-white/20',
    glow: 'rgba(192, 175, 186, 0.45)',
  },

  // 4. Warm Clay Stone (Row 3: Dk, Gt, Rd, Jw, Pm)
  clayStone: {
    id: 'clayStone',
    accent: '#D6D0C3',
    cardBg: 'bg-[#D6D0C3] dark:bg-[#49453C]',
    cardBorder: 'border-[#E4DFD3] dark:border-[#5E594F]',
    hoverBg: 'hover:bg-[#DFD9CD] dark:hover:bg-[#565147]',
    hoverBorder: 'hover:border-[#423D32] dark:hover:border-[#EDE8DE]',
    symbolColor: 'text-[#24211A] dark:text-[#F8F5EE]',
    nameColor: 'text-[#24211A] dark:text-[#F8F5EE]',
    subColor: 'text-[#464134] dark:text-[#DDD7CB]',
    tagBadge: 'border-[#464134]/30 bg-black/10 dark:bg-white/15 text-[#24211A] dark:text-[#F8F5EE]',
    numColor: 'text-[#363227] dark:text-[#EDE8DE]',
    activeTab: 'bg-[#D6D0C3] text-[#24211A] shadow-md shadow-[#D6D0C3]/30 border border-[#C5BFB2]',
    tabBadge: 'bg-black/15 text-[#24211A]',
    tabIconActive: 'text-[#24211A]',
    panelBg: 'bg-[#D6D0C3] text-[#24211A] dark:bg-[#49453C] dark:text-[#F8F5EE] border-[#E4DFD3] dark:border-[#5E594F]',
    panelIconBg: 'bg-[#B8B1A2] text-[#24211A] dark:bg-[#37332C] dark:text-white border-black/15 dark:border-white/20',
    panelBadge: 'bg-black/10 dark:bg-white/15 text-[#24211A] dark:text-[#F8F5EE] border-black/15 dark:border-white/20',
    glow: 'rgba(214, 208, 195, 0.45)',
  },

  // 5. Graphite Slate (Row 2: Cs, Tw, Testing)
  graphiteSlate: {
    id: 'graphiteSlate',
    accent: '#525367',
    cardBg: 'bg-[#525367] dark:bg-[#2B2C3B]',
    cardBorder: 'border-[#686980] dark:border-[#3C3D52]',
    hoverBg: 'hover:bg-[#5D5E76] dark:hover:bg-[#343548]',
    hoverBorder: 'hover:border-slate-200 dark:hover:border-slate-300',
    symbolColor: 'text-white',
    nameColor: 'text-white',
    subColor: 'text-slate-200 dark:text-slate-300',
    tagBadge: 'border-white/20 bg-white/10 text-white',
    numColor: 'text-slate-200',
    activeTab: 'bg-[#525367] text-white shadow-md shadow-[#525367]/30 border border-[#686980]',
    tabBadge: 'bg-white/20 text-white',
    tabIconActive: 'text-white',
    panelBg: 'bg-[#525367] text-white border-[#686980]',
    panelIconBg: 'bg-[#3A3B4C] text-white border-white/20',
    panelBadge: 'bg-white/15 text-white border-white/20',
    glow: 'rgba(82, 83, 103, 0.45)',
  },

  // 6. Deep Obsidian Navy (System Design & High-QPS Architecture)
  deepObsidian: {
    id: 'deepObsidian',
    accent: '#202232',
    cardBg: 'bg-[#202232] dark:bg-[#151624]',
    cardBorder: 'border-[#343750] dark:border-[#27293E]',
    hoverBg: 'hover:bg-[#282B3E] dark:hover:bg-[#1E2034]',
    hoverBorder: 'hover:border-slate-300 dark:hover:border-slate-300',
    symbolColor: 'text-white',
    nameColor: 'text-white',
    subColor: 'text-slate-300 dark:text-slate-400',
    tagBadge: 'border-white/20 bg-white/10 text-white',
    numColor: 'text-slate-300',
    activeTab: 'bg-[#202232] text-white shadow-md shadow-[#202232]/30 border border-[#3E4260]',
    tabBadge: 'bg-white/20 text-white',
    tabIconActive: 'text-white',
    panelBg: 'bg-[#202232] text-white border-[#343750]',
    panelIconBg: 'bg-[#151624] text-white border-[#3E4260]',
    panelBadge: 'bg-white/15 text-white border-white/20',
    glow: 'rgba(32, 34, 50, 0.45)',
  },

  // 7. Warm Vanilla Cream Biscuit (Practices & Methodologies)
  vanillaCream: {
    id: 'vanillaCream',
    accent: '#EBE5D6',
    cardBg: 'bg-[#EBE5D6] dark:bg-[#433E32]',
    cardBorder: 'border-[#F4EDE0] dark:border-[#5A5445]',
    hoverBg: 'hover:bg-[#F2ECE0] dark:hover:bg-[#504A3C]',
    hoverBorder: 'hover:border-[#423E32] dark:hover:border-[#F4EFE3]',
    symbolColor: 'text-[#26231A] dark:text-[#FAF6EB]',
    nameColor: 'text-[#26231A] dark:text-[#FAF6EB]',
    subColor: 'text-[#474233] dark:text-[#DDD6C5]',
    tagBadge: 'border-[#474233]/30 bg-black/10 dark:bg-white/15 text-[#26231A] dark:text-[#FAF6EB]',
    numColor: 'text-[#363226] dark:text-[#F4EFE3]',
    activeTab: 'bg-[#EBE5D6] text-[#26231A] shadow-md shadow-[#EBE5D6]/30 border border-[#D9D2BF]',
    tabBadge: 'bg-black/15 text-[#26231A]',
    tabIconActive: 'text-[#26231A]',
    panelBg: 'bg-[#EBE5D6] text-[#26231A] dark:bg-[#433E32] dark:text-[#FAF6EB] border-[#F4EDE0] dark:border-[#5A5445]',
    panelIconBg: 'bg-[#CDC4B2] text-[#26231A] dark:bg-[#342F24] dark:text-white border-black/15 dark:border-white/20',
    panelBadge: 'bg-black/10 dark:bg-white/15 text-[#26231A] dark:text-[#FAF6EB] border-black/15 dark:border-white/20',
    glow: 'rgba(235, 229, 214, 0.45)',
  },
}

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Engineering & Languages',
    shortTitle: 'Frontend',
    count: 8,
    desc: 'Building responsive, modern, and high-performance web applications using React design patterns, TypeScript strict typing, and modern component systems.',
    theme: REFERENCE_THEMES.midnightSlate,
    iconType: 'layout',
    skills: [
      { num: '01', sym: 'C++', name: 'C / C++', tag: 'Systems', sub: 'Memory & Algorithms' },
      { num: '02', sym: 'Py', name: 'Python', tag: 'Language', sub: 'Systems & Tooling' },
      { num: '03', sym: 'Js', name: 'JavaScript', tag: 'Core', sub: 'ES6+ & V8 Engine' },
      { num: '04', sym: 'Ts', name: 'TypeScript', tag: 'Language', sub: 'Strict Type Safety' },
      { num: '05', sym: 'Re', name: 'React.js', tag: 'UI Library', sub: 'v18+ Fiber Engine' },
      { num: '06', sym: 'Nx', name: 'Next.js', tag: 'Framework', sub: 'App Router & SSR' },
      { num: '07', sym: 'Tw', name: 'Tailwind CSS', tag: 'Styling', sub: 'Design System & Utility' },
      { num: '08', sym: 'Ht', name: 'HTML5 / CSS3', tag: 'Web Core', sub: 'Semantics & Responsive' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering & Services',
    shortTitle: 'Backend',
    count: 6,
    desc: 'Engineered scalable server-side applications, robust REST APIs, distributed authentication, and stateless token validation.',
    theme: REFERENCE_THEMES.warmTaupe,
    iconType: 'code',
    skills: [
      { num: '09', sym: 'No', name: 'Node.js', tag: 'Runtime', sub: 'Non-Blocking Async I/O' },
      { num: '10', sym: 'Ex', name: 'Express.js', tag: 'Server', sub: 'Middleware Architecture' },
      { num: '11', sym: 'Ra', name: 'REST APIs', tag: 'Protocol', sub: 'Endpoint Contracts' },
      { num: '12', sym: 'Sb', name: 'Spring Boot', tag: 'Enterprise', sub: 'Java Microservices' },
      { num: '13', sym: 'Au', name: 'Authentication', tag: 'Security', sub: 'OAuth & Sessions' },
      { num: '14', sym: 'Jw', name: 'JWT Tokens', tag: 'Auth', sub: 'Stateless Claims' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    shortTitle: 'Databases',
    count: 6,
    desc: 'Relational, NoSQL, and memory-cache database management, schema design, index planning, and query optimization.',
    theme: REFERENCE_THEMES.dustyMauve,
    iconType: 'database',
    skills: [
      { num: '15', sym: 'Mg', name: 'MongoDB', tag: 'NoSQL', sub: 'Document Aggregation' },
      { num: '16', sym: 'Pg', name: 'PostgreSQL', tag: 'RDBMS', sub: 'Relational & JSONB' },
      { num: '17', sym: 'My', name: 'MySQL', tag: 'RDBMS', sub: 'ACID Transactions' },
      { num: '18', sym: 'Rd', name: 'Redis', tag: 'Cache', sub: 'In-Memory & TTL' },
      { num: '19', sym: 'Sh', name: 'Schema Design', tag: 'Modeling', sub: 'Normalized & Denorm' },
      { num: '20', sym: 'Qo', name: 'Query Optimization', tag: 'Perf', sub: 'Execution Plans & Index' },
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Engineering Tools',
    shortTitle: 'Cloud & Tools',
    count: 7,
    desc: 'Cloud deployment, containerization with Docker, automated CI/CD pipelines, and deep diagnostic toolchains.',
    theme: REFERENCE_THEMES.clayStone,
    iconType: 'cloud',
    skills: [
      { num: '21', sym: 'Dk', name: 'Docker', tag: 'Containers', sub: 'Images & Compose' },
      { num: '22', sym: 'Aw', name: 'AWS Cloud', tag: 'Cloud', sub: 'S3, EC2 & Lambda' },
      { num: '23', sym: 'Gt', name: 'Git VCS', tag: 'VCS', sub: 'Branching & Rebasing' },
      { num: '24', sym: 'Gh', name: 'GitHub Actions', tag: 'CI/CD', sub: 'Automated Releases' },
      { num: '25', sym: 'Pm', name: 'Postman', tag: 'API Tool', sub: 'Mocking & Testing' },
      { num: '26', sym: 'Dt', name: 'Chrome DevTools', tag: 'Diagnostics', sub: 'Memory & Network Profiling' },
      { num: '27', sym: 'Nf', name: 'Netlify Edge', tag: 'Hosting', sub: 'Serverless Functions' },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design & Architecture',
    shortTitle: 'System Design',
    count: 10,
    desc: 'Designing scalable distributed architectures, microservices, API contracts, low-latency caching, and resilience patterns.',
    theme: REFERENCE_THEMES.deepObsidian,
    iconType: 'server',
    skills: [
      { num: '28', sym: 'Sd', name: 'System Design', tag: 'Core', sub: 'Distributed Systems' },
      { num: '29', sym: 'Sa', name: 'Software Architecture', tag: 'Pattern', sub: 'Clean Architecture' },
      { num: '30', sym: 'Mi', name: 'Microservices', tag: 'Arch', sub: 'Service Decoupling' },
      { num: '31', sym: 'Ad', name: 'API Contracts', tag: 'Spec', sub: 'REST & GraphQL' },
      { num: '32', sym: 'Fs', name: 'Full-Stack Systems', tag: 'E2E', sub: 'Production Hardened' },
      { num: '33', sym: 'Po', name: 'Performance Optimization', tag: 'Speed', sub: 'High QPS & Latency' },
      { num: '34', sym: 'Ca', name: 'Component Architecture', tag: 'Design', sub: 'Atomic & Reusable' },
      { num: '35', sym: 'Ds', name: 'Data Structures', tag: 'Theory', sub: 'Trees, Graphs & Heaps' },
      { num: '36', sym: 'Al', name: 'Algorithms', tag: 'Theory', sub: 'Dynamic Programming & Search' },
      { num: '37', sym: 'At', name: 'API Throttling', tag: 'Resilience', sub: 'Rate Limiting & Queues' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    shortTitle: 'Testing',
    count: 3,
    desc: 'Unit testing, component integration testing, and automated end-to-end quality assurance.',
    theme: REFERENCE_THEMES.graphiteSlate,
    iconType: 'check',
    skills: [
      { num: '38', sym: 'Jt', name: 'Jest', tag: 'Test Runner', sub: 'Unit Assertions & Mocks' },
      { num: '39', sym: 'Tl', name: 'Testing Library', tag: 'Integration', sub: 'DOM & User Interactions' },
      { num: '40', sym: 'E2', name: 'E2E Testing', tag: 'Integration', sub: 'End-to-End Workflows' },
    ],
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    shortTitle: 'Practices',
    count: 5,
    desc: 'Software delivery methodologies, technical planning, code review standards, and cross-functional collaboration.',
    theme: REFERENCE_THEMES.vanillaCream,
    iconType: 'wrench',
    skills: [
      { num: '41', sym: 'Ag', name: 'Agile/Scrum', tag: 'Process', sub: 'Sprints & Retros' },
      { num: '42', sym: 'Cr', name: 'Code Reviews', tag: 'Quality', sub: 'Standards & Mentorship' },
      { num: '43', sym: 'Rs', name: 'Reusable Systems', tag: 'Scale', sub: 'Design Systems & DRY' },
      { num: '44', sym: 'Cc', name: 'Cross-Team Collab', tag: 'Team', sub: 'Product & Design Sync' },
      { num: '45', sym: 'Tp', name: 'Technical Planning', tag: 'Roadmap', sub: 'RFCs & System Specs' },
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
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    case 'wrench':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

const SkillsPeriodicTable = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id)
  const currentCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0]
  const activeTheme = currentCategory.theme

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
          <HandnoteHighlight>Engineering Expertise</HandnoteHighlight>
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

      {/* Warm Vanilla Cream Category Filter Tabs (Matched to Reference Image) */}
      <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-12">
        <div className="w-full p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-[#FAF7EE] dark:bg-[#1E1C16] border border-[#EBE3CD] dark:border-[#383327] shadow-sm">
          <div className="flex sm:grid sm:grid-cols-7 gap-1 sm:gap-1.5 w-full overflow-x-auto no-scrollbar py-0.5 px-0.5">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id
              const catTheme = cat.theme
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
                        ? `${catTheme.activeTab} font-semibold scale-[1.02]`
                        : 'bg-[#F4EFCF]/75 dark:bg-[#27241C] text-[#332E20] dark:text-[#EAE4CA] border border-[#E5DFBE] dark:border-[#3B3628] hover:bg-[#EAE3BE] dark:hover:bg-[#322E22]'
                    }
                  `}
                >
                  <CategoryIcon
                    type={cat.iconType}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? catTheme.tabIconActive : 'text-[#5A533E] dark:text-[#C5BEA5]'}`}
                  />
                  <span className="truncate">{cat.shortTitle}</span>
                  <span
                    className={`
                      text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold shrink-0
                      ${
                        isActive
                          ? catTheme.tabBadge
                          : 'bg-black/10 dark:bg-white/10 text-[#4A4433] dark:text-[#DDD6C0]'
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
                    className={`
                      group relative
                      rounded-2xl sm:rounded-[1.4rem]
                      border ${activeTheme.cardBorder}
                      ${activeTheme.cardBg}
                      ${activeTheme.hoverBg}
                      ${activeTheme.hoverBorder}
                      backdrop-blur-md
                      p-2.5 sm:p-3
                      min-h-[136px] sm:min-h-[148px]
                      flex flex-col justify-between
                      shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]
                      transition-all duration-200
                      cursor-pointer select-none
                    `}
                  >
                    {/* Radial Glow on Card Hover */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-[1.4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 35%, ${activeTheme.glow}, transparent 70%)`,
                      }}
                    />

                    {/* Top Row: Atomic Number & Tag */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                      <span className={`font-bold ${activeTheme.numColor}`}>
                        {skill.num}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider border ${activeTheme.tagBadge}`}>
                        {skill.tag}
                      </span>
                    </div>

                    {/* Center: Iconic Chemical Symbol */}
                    <div className="relative z-10 text-center my-auto py-1">
                      <span className={`text-2xl sm:text-3xl font-black font-mono tracking-tight transition-transform duration-200 group-hover:scale-105 inline-block ${activeTheme.symbolColor}`}>
                        {skill.sym}
                      </span>
                    </div>

                    {/* Bottom: Element Name & Subtitle (Full Text Wrapping, No Truncation) */}
                    <div className="relative z-10 text-center pt-1.5 border-t border-black/10 dark:border-white/10 flex flex-col justify-center min-h-[44px]">
                      <div
                        className={`text-xs sm:text-[13px] font-bold font-Ovo leading-tight ${activeTheme.nameColor}`}
                        title={skill.name}
                      >
                        {skill.name}
                      </div>
                      <div className={`text-[10px] font-mono mt-0.5 leading-tight ${activeTheme.subColor}`}>
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
                className={`
                  rounded-3xl
                  border ${activeTheme.cardBorder}
                  ${activeTheme.panelBg}
                  backdrop-blur-md
                  p-6 sm:p-7
                  shadow-xl
                  flex flex-col justify-between
                  transition-colors duration-300
                `}
              >
                <div>
                  {/* Top Header: Icon + Periodic View Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center ${activeTheme.panelIconBg} shadow-md shrink-0`}>
                      <CategoryIcon type={currentCategory.iconType} className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <span className={`text-xs font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full border ${activeTheme.panelBadge}`}>
                      PERIODIC VIEW · 0{SKILL_CATEGORIES.findIndex((c) => c.id === activeTab) + 1}/07
                    </span>
                  </div>

                  {/* Title & Count Badge */}
                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                    <h4 className="text-xl sm:text-2xl font-bold font-Ovo leading-tight">
                      {currentCategory.title}
                    </h4>
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${activeTheme.panelBadge} shrink-0`}>
                      {currentCategory.count} Technologies
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed mt-2.5 opacity-90">
                    {currentCategory.desc}
                  </p>

                  {/* Included Technologies Tags List */}
                  <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/15">
                    <p className="text-xs uppercase tracking-wider font-mono font-semibold mb-3 opacity-90">
                      Included Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentCategory.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${activeTheme.panelBadge}`}
                        >
                          <span className="font-bold">✓</span>
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
    </div>
  )
}

export default SkillsPeriodicTable
