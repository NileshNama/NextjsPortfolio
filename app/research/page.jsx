"use client"

import { useState, useEffect, useMemo } from "react"

const RESEARCH_TYPES = [
  "All",
  "Technical Research",
  "Exam & Interview Research",
  "Learning Systems",
  "Exploratory Notes",
]

const researchData = [
  {
    id: "page-replacement-decision",
    title: "Rethinking Page Replacement as a Decision System",
    type: "Technical Research",
    status: "Working Note",
    summary:
      "An analysis of page replacement algorithms as decision-making systems rather than isolated heuristics.",
    details:
      "This research explores how common page replacement strategies (LRU, FIFO, Optimal) can be better understood when framed as constrained decision systems under incomplete information. The focus is not on implementation but on reasoning models useful for exams and interviews.",
  },
  {
    id: "barc-interview-evaluation",
    title: "How BARC Interviews Evaluate Depth",
    type: "Exam & Interview Research",
    status: "Ongoing",
    summary:
      "Observed patterns in how examiner follow-up questions escalate depth during scientist interviews.",
    details:
      "Based on analysis of previous interview discussions and candidate feedback, this note documents common probing patterns, traps, and reasoning expectations used by panels during scientist-level interviews.",
  },
  {
    id: "cohort-thinking-design",
    title: "Designing Thinking-First Learning Systems",
    type: "Learning Systems",
    status: "Published",
    summary:
      "Principles used to design NN Cohorts as a thinking-first learning environment.",
    details:
      "This work outlines how cohort structure, question sequencing, and feedback loops were designed to promote reasoning clarity instead of content consumption.",
  },
]

const ResearchPage = () => {
  const [activeItem, setActiveItem] = useState(null)
  const [search, setSearch] = useState("")
  const [activeType, setActiveType] = useState("All")

  /* Lock scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeItem])

  /* ESC close */
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActiveItem(null)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [])

  /* FILTER + SEARCH */
  const filteredResearch = useMemo(() => {
    let data = [...researchData]

    if (activeType !== "All") {
      data = data.filter(item => item.type === activeType)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      data = data.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      )
    }

    return data
  }, [search, activeType])

  return (
    <>
      {/* MAIN */}
      <section className="w-full px-6 sm:px-[12%] py-20">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-lg font-Ovo mb-2">Research</h4>

          <h2 className="text-4xl sm:text-5xl font-Ovo">
            Applied Research & Thought Work
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 font-Ovo">
            Ongoing and published work on systems thinking, technical depth,
            interview evaluation, and learning design.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search research…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkTheme outline-none"
          />
        </div>

        {/* TYPE FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {RESEARCH_TYPES.map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
                ${
                  activeType === type
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* RESEARCH LIST */}
        <div className="max-w-4xl mx-auto space-y-10">
          {filteredResearch.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="
                cursor-pointer
                border-l-2 border-transparent
                hover:border-black dark:hover:border-white
                pl-4
              "
            >
              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {item.type} · {item.status}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-xl max-w-2xl w-full shadow-xl overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative font-Ovo">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h3 className="text-2xl mb-2">
                {activeItem.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {activeItem.type} · {activeItem.status}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {activeItem.details}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="mb-6">
          <a href="mailto:hello@nileshnama.com" className="underline">
            hello@nileshnama.com
          </a>
        </p>

        <div className="border-t pt-6">
          © {new Date().getFullYear()}{" "}
          <a href="https://nileshnama.com" className="underline">
            nileshnama.com
          </a>
        </div>
      </footer>
    </>
  )
}

export default ResearchPage
