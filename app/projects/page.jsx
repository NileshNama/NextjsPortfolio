"use client"

import { useState, useMemo } from "react"
import { motion } from "motion/react"
import SubpageHeader from "@/components/SubpageHeader"

/* =====================================================
   PROJECT DATA — EDIT ONLY THIS SECTION
===================================================== */

const projects = [
  {
    title: "Interviewers",
    description:
      "Mentor–student matching platform and live evaluation engine designed for structured technical interview preparation and reasoning feedback.",
    intent:
      "To design interview preparation as a system of reasoning, feedback, and performance — not passive content delivery.",
    category: "System",
    tech: ["React", "Node.js", "WebRTC", "Tailwind"],
    featured: true,
    readmePreview:
      "A system-first platform designed around live interview reasoning, telemetry, and structured mentor workflows.",
    source: "https://github.com/nileshnama/interviewers-platform",
    demo: "https://www.interviewers.in/",
    readme: "https://github.com/nileshnama/interviewers-platform#readme",
  },
  {
    title: "NQuestions",
    description:
      "Interactive cognitive puzzle and question-decoding engine built to analyze examiner psychology and trap elimination patterns.",
    intent:
      "To decode examiner traps and cognitive reasoning models in competitive examinations through structured puzzles.",
    category: "System",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Python"],
    featured: true,
    readmePreview:
      "Interactive reasoning engine for systematic option elimination and question analysis.",
    source: "https://github.com/nileshnama/nquestions",
    demo: "https://www.nquestions.in/",
    readme: "https://github.com/nileshnama/nquestions#readme",
  },
  {
    title: "VebCampus",
    description:
      "Campus-wide technical training and placement ecosystem bridging academic curriculum with production-grade engineering practices.",
    intent:
      "To transform university engineering cohorts into production-ready software engineers through verifiable proof-of-work.",
    category: "Education",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    featured: true,
    readmePreview:
      "Campus engineering ecosystem connecting universities with industry standard development practices and automated reviews.",
    source: "https://github.com/nileshnama/vebcampus",
    demo: "https://www.vebskills.com/",
    readme: "https://github.com/nileshnama/vebcampus#readme",
  },
]

/* =====================================================
   FILTERS
===================================================== */

const categories = ["All", "System", "Frontend", "Backend", "Education"]
const techFilters = ["All", ...new Set(projects.flatMap(p => p.tech))]

/* =====================================================
   COMPONENT
===================================================== */

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeTech, setActiveTech] = useState("All")
  const [search, setSearch] = useState("")

  const filteredProjects = useMemo(() => {
    let data = [...projects]

    // Featured first
    data.sort((a, b) => Number(b.featured) - Number(a.featured))

    if (activeCategory !== "All")
      data = data.filter(p => p.category === activeCategory)

    if (activeTech !== "All")
      data = data.filter(p => p.tech.includes(activeTech))

    if (search.trim()) {
      const q = search.toLowerCase()
      data = data.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q)
      )
    }

    return data
  }, [activeCategory, activeTech, search])

  return (
    <>
      <SubpageHeader />
      <section className="w-full px-6 sm:px-[12%] pt-32 pb-20">

      {/* HEADER */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-Ovo mb-4">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 font-Ovo">
          Selected work across systems engineering, product thinking,
          and learning infrastructure.
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search projects…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkTheme outline-none"
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TECH FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {techFilters.map(tech => (
          <button
            key={tech}
            onClick={() => setActiveTech(tech)}
            className={`px-3 py-1 rounded-full text-xs border transition
              ${
                activeTech === tech
                  ? "bg-[#509187] text-white border-[#509187]"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
              }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-darkTheme p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
              {p.title}
              {p.featured && (
                <span className="text-xs px-2 py-0.5 rounded bg-[#509187]/10 text-[#509187]">
                  Featured
                </span>
              )}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {p.description}
            </p>

            {/* PROJECT INTENT */}
            {p.intent && (
              <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-3">
                <span className="font-medium not-italic">Intent:</span>{" "}
                {p.intent}
              </p>
            )}

            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-4">
              {p.readmePreview}
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-darkHover text-gray-600 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* PROJECT LINKS */}
            <div className="mt-auto flex flex-col gap-2 text-sm">
              <a href={p.source} target="_blank" className="hover:underline">
                Source Code →
              </a>
              <a href={p.demo} target="_blank" className="hover:underline">
                Live Demo →
              </a>
              <a href={p.readme} target="_blank" className="hover:underline">
                README →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">

        {/* EMAIL ABOVE BORDER */}
        <p className="mb-6">
          <a
            href="mailto:nilesh@nileshnama.com"
            className="underline"
          >
            hello@nileshnama.com
          </a>
        </p>

        {/* BORDER + SITE */}
        <div className="border-t pt-6">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://nileshnama.com"
              className="underline"
            >
              www.nileshnama.com
            </a>
          </p>
        </div>

      </footer>

      </section>
    </>
  )
}
