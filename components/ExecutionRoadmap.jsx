'use client'

import React from 'react'
import { motion } from 'motion/react'

const months = ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']

const MONTH_WIDTH = 210

const SCHEDULE_LINK =
  'https://nileshnama.notion.site/schedule'

const cohorts = [
  {
    name: 'NN APEX',
    subtitle: 'Technical Cohort',
    focus: 'GATE + BARC',
    intake: 'JULY',

    // CHANGE THIS LINK
    cohortLink:
      'https://cohorts.nileshnama.com/new-courses/12-nn-gate-barc-thinking-program-all-access',

    theme: {
      soft: 'bg-emerald-50/80',
      line: 'bg-emerald-500',
      text: 'text-emerald-900',
      badge: 'bg-emerald-600',
      border: 'border-emerald-200',
      ring: 'ring-emerald-200/70',
      glow:
        'shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_18px_40px_rgba(16,185,129,0.10)]',
    },

    milestones: [
      { title: 'Foundation', desc: 'Build strong basics', start: 0, span: 2 },
      { title: 'Core Concepts', desc: 'Build conceptual clarity', start: 2, span: 2 },
      { title: 'Advanced + PYQs', desc: 'Deepen understanding', start: 4, span: 1 },
      { title: 'Practice Series', desc: 'Problem solving', start: 5, span: 2 },
      { title: 'Revision + Mocks', desc: 'Strengthen & improve', start: 7, span: 2 },
      { title: 'GATE Exam', desc: 'FEB 2026', start: 9, span: 1 },
      { title: 'BARC OCES Exam', desc: 'MAR 2026', start: 10, span: 1 },
      { title: 'Interviews & Selection', desc: 'Final rounds', start: 11, span: 1 },
    ],
  },

  {
    name: 'NN FORGE',
    subtitle: 'Recruitment Cohort',
    focus: 'PSU + TECH JOBS',
    intake: 'JANUARY',

    // CHANGE THIS LINK
    cohortLink:
      'https://cohorts.nileshnama.com/new-courses/10-nn-forge',

    theme: {
      soft: 'bg-blue-50/80',
      line: 'bg-blue-600',
      text: 'text-blue-900',
      badge: 'bg-blue-600',
      border: 'border-blue-200',
      ring: 'ring-blue-200/70',
      glow:
        'shadow-[0_0_0_1px_rgba(37,99,235,0.08),0_18px_40px_rgba(37,99,235,0.10)]',
    },

    milestones: [
      { title: 'Core Concepts', desc: 'Conceptual clarity', start: 6, span: 2 },
      { title: 'PYQs & Exam Orientation', desc: 'Pattern mastery', start: 8, span: 2 },
      { title: 'Practice Series', desc: 'Solve & improve', start: 10, span: 1 },
      { title: 'Interviews & Selection', desc: 'Final rounds', start: 11, span: 1 },
    ],
  },

  {
    name: 'NN NEXUS',
    subtitle: 'Tech Cohort',
    focus: 'IBPS SO / BANK SO',
    intake: 'JULY',

    // CHANGE THIS LINK
    cohortLink:
      'https://cohorts.nileshnama.com/new-courses/13-nn-nexus',

    theme: {
      soft: 'bg-violet-50/80',
      line: 'bg-violet-600',
      text: 'text-violet-900',
      badge: 'bg-violet-600',
      border: 'border-violet-200',
      ring: 'ring-violet-200/70',
      glow:
        'shadow-[0_0_0_1px_rgba(124,58,237,0.08),0_18px_40px_rgba(124,58,237,0.10)]',
    },

    milestones: [
      { title: 'Mains Concepts', desc: 'Build strong base', start: 0, span: 2 },
      { title: 'Sectional Tests', desc: 'Topic-wise practice', start: 2, span: 2 },
      { title: 'Full Length Tests', desc: 'Exam readiness', start: 4, span: 2 },
      { title: 'Revision & Strategy', desc: 'Refine performance', start: 6, span: 2 },
      { title: 'IBPS SO Mains Exam', desc: 'NOV 2026', start: 9, span: 1 },
      { title: 'Interviews & Selection', desc: 'Final rounds', start: 11, span: 1 },
    ],
  },

  {
    name: 'NN SCHOLAR',
    subtitle: 'Research Cohort',
    focus: 'UGC NET CS',
    intake: 'AUGUST',

    // CHANGE THIS LINK
    cohortLink:
      'https://cohorts.nileshnama.com/new-courses/14-nn-scholar',

    theme: {
      soft: 'bg-cyan-50/80',
      line: 'bg-cyan-700',
      text: 'text-cyan-900',
      badge: 'bg-cyan-700',
      border: 'border-cyan-200',
      ring: 'ring-cyan-200/70',
      glow:
        'shadow-[0_0_0_1px_rgba(8,145,178,0.08),0_18px_40px_rgba(8,145,178,0.10)]',
    },

    milestones: [
      { title: 'Foundation', desc: 'Concepts & syllabus', start: 1, span: 1 },
      { title: 'Advanced Study', desc: 'Deepen concepts', start: 2, span: 1 },
      { title: 'Practice & PYQs', desc: 'Topic mastery', start: 3, span: 2 },
      { title: 'Mock Tests + Revision', desc: 'Performance boost', start: 5, span: 2 },
      { title: 'UGC NET Exam', desc: 'JUNE 2026', start: 7, span: 1 },
      { title: 'Strategy & Fine Tuning', desc: 'Final preparation', start: 8, span: 2 },
      { title: 'UGC NET Exam', desc: 'DEC 2026', start: 10, span: 1 },
      { title: 'JRF / AP Eligibility', desc: 'Next steps', start: 11, span: 1 },
    ],
  },
]

function MilestoneCard({ item, theme, isFinal }) {
  const width = Math.max(item.span * MONTH_WIDTH - 30, 176)
  const left = item.start * MONTH_WIDTH + 15

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      style={{ left, width }}
      className="absolute top-5"
    >
      <div
        className={`
          relative min-h-[166px] rounded-[22px] border bg-white p-4
          transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
          ${theme.border}
          ${theme.glow}
        `}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex h-3 w-3 rounded-full ${theme.line} ring-4 ${theme.ring}`}
          />

          {isFinal ? (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              End
            </span>
          ) : null}
        </div>

        <h4 className="mt-4 text-[15px] font-semibold leading-tight text-slate-900">
          {item.title}
        </h4>

        <p className="mt-1.5 text-sm leading-snug text-slate-500">
          {item.desc}
        </p>

        <div className="absolute bottom-4 left-4 right-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`h-full rounded-full ${theme.line}`}
          />
        </div>
      </div>
    </motion.div>
  )
}

function CohortRow({ cohort, index }) {
  const theme = cohort.theme
  const timelineWidth = months.length * MONTH_WIDTH + 60

  return (
    <div className="grid grid-cols-1 gap-4 border-b border-slate-100 p-4 sm:p-5 lg:grid-cols-[280px_minmax(0,1fr)]">
      {/* LEFT PANEL */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className={`self-start rounded-3xl border bg-white p-4 sm:p-5 ${theme.border} ${theme.glow}`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`mt-1 h-3 w-3 rounded-full ${theme.line} ring-4 ${theme.ring}`}
          />

          <div className="min-w-0">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ${theme.badge}`}
            >
              {cohort.intake}
            </span>

            <h3
              className={`mt-3 text-2xl font-extrabold tracking-tight ${theme.text}`}
            >
              {index + 1}. {cohort.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              {cohort.subtitle}
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Focus: {cohort.focus}
            </p>
          </div>
        </div>

        {/* TAGS */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs">
          <div
            className={`rounded-2xl ${theme.soft} px-2 py-2 font-semibold ${theme.text}`}
          >
            Fixed intake
          </div>

          <div
            className={`rounded-2xl ${theme.soft} px-2 py-2 font-semibold ${theme.text}`}
          >
            Guided path
          </div>

          <div
            className={`rounded-2xl ${theme.soft} px-2 py-2 font-semibold ${theme.text}`}
          >
            Outcome focus
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-4">
          <motion.a
            href={cohort.cohortLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`
              group inline-flex w-full items-center justify-center gap-2
              rounded-2xl border px-4 py-2.5 text-sm font-semibold
              transition-all duration-300 hover:shadow-md
              ${theme.border}
              ${theme.soft}
              ${theme.text}
            `}
          >
            Program Details

            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT TIMELINE */}
      <div className="hidden lg:block min-w-0 rounded-[28px] border border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-4">
        <div className="overflow-x-auto pb-2">
          <div style={{ width: timelineWidth }} className="relative">
            {/* MONTHS */}
            <div className="grid grid-cols-12 gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-center text-xs font-bold tracking-[0.22em] text-white shadow-sm">
              {months.map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>

            {/* TIMELINE */}
            <div className="relative mt-5 h-[224px]">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-slate-200" />

              {cohort.milestones.map((item, idx) => (
                <MilestoneCard
                  key={item.title + item.start}
                  item={item}
                  theme={theme}
                  isFinal={idx === cohort.milestones.length - 1}
                />
              ))}
            </div>

            {/* PROGRESS */}
            <div className={`mt-2 h-2 rounded-full ${theme.line}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExecutionRoadmapPremium() {
  return (
    <section id="cohorts" className="bg-[#f7fafb] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#5A9B92]">
            EXECUTION ROADMAP
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            One Year. Four Paths. One System.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
            A structured cohort timeline for fixed intakes, exam milestones,
            and outcome tracking.
          </p>
        </motion.div>

        {/* MAIN CONTAINER */}
        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          {/* TOP INFO */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-4 py-4 sm:px-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              {[
                { label: 'Fixed intake', value: 'Plan your start' },
                { label: 'Technical focused', value: 'High-impact preparation' },
                { label: 'Mentorship', value: 'Guidance that stays' },
                { label: 'Career outcomes', value: 'Results that matter' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </div>

                  <div className="mt-1 font-semibold text-slate-800">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROWS */}
          <div className="divide-y divide-slate-100">
            {cohorts.map((cohort, index) => (
              <CohortRow
                key={cohort.name}
                cohort={cohort}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex justify-center">
          <motion.a
            href={SCHEDULE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="
              group inline-flex items-center gap-3 rounded-full
              border border-slate-300 bg-white px-8 py-3 text-sm
              font-medium text-slate-700 shadow-sm transition-all
              duration-300 hover:border-transparent hover:bg-[#5A9B92]
              hover:text-white
              hover:shadow-[0_18px_40px_rgba(90,155,146,0.22)]
            "
          >
            Curriculum

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
