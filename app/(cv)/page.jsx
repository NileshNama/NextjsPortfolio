"use client"

import { useState } from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const ROLE_CONTENT = {
  frontend: {
    label: "Frontend Engineer",
    title: "Frontend Engineer",
    summary:
      "Frontend-focused engineer with 4+ years of experience building scalable, accessible, and performance-oriented web interfaces using React, TypeScript, and modern UI systems.",
    emphasis: [
      "Component architecture & design systems",
      "Performance optimization & UX clarity",
      "Clean, maintainable frontend codebases",
    ],
  },
  software: {
    label: "Software Engineer",
    title: "Software Engineer",
    summary:
      "Software Engineer experienced in delivering end-to-end features across frontend and backend, with strong emphasis on clarity, maintainability, and production reliability.",
    emphasis: [
      "End-to-end feature ownership",
      "API-driven systems & integrations",
      "Engineering fundamentals & trade-offs",
    ],
  },
  product: {
    label: "Product Manager & Team Lead",
    title: "Product Manager & Team Lead",
    summary:
      "Product-oriented technologist experienced in leading teams, aligning execution with business goals, and making high-quality decisions under real-world constraints.",
    emphasis: [
      "Product ownership & delivery",
      "Technical leadership & mentoring",
      "Decision-making under constraints",
    ],
  },
}

export default function CVPage() {
  const [role, setRole] = useState("frontend")
  const current = ROLE_CONTENT[role]

  return (
    <main className="w-full bg-white text-black font-Ovo px-[12%] py-20">

      {/* ROLE TOGGLE */}
      <section className="max-w-4xl mx-auto mb-14">
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.entries(ROLE_CONTENT).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setRole(key)}
              className={`px-4 py-2 rounded-full text-sm border transition
                ${
                  role === key
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {value.label}
            </button>
          ))}
        </div>
      </section>

      {/* HEADER */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="flex items-start gap-6">
          <Image
            src={assets.profile_img}
            alt="Nilesh Nama"
            className="rounded-full w-24 h-24 object-cover"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-semibold">Nilesh Nama</h1>

            <p className="text-gray-700 mt-1">{current.title}</p>

            <p className="text-sm text-gray-500 mt-1">
              India · Open to remote and hybrid roles
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-3">
              <a href="mailto:nileshnama1997@gmail.com" className="hover:underline">
                nileshnama1997@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/nileshnama/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/NileshNama"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>

            {/* DOWNLOAD BUTTON — spaced correctly */}
            <div className="mt-6">
              <a
                href="/NileshNama-Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-400 rounded-md text-sm hover:bg-gray-100 transition"
              >
                Download CV (PDF)
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="max-w-4xl mx-auto mb-14">
        <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>

        <p className="text-gray-700 leading-relaxed">
          {current.summary}
        </p>

        <p className="text-gray-600 mt-3 text-sm">
          I prefer well-structured, readable systems over clever but fragile abstractions.
        </p>

        <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
          {current.emphasis.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-6">Experience</h2>

        <div className="space-y-10">
          <div>
            <h3 className="font-semibold">Team Lead – Frontend Developer</h3>
            <p className="text-sm text-gray-500">
              W3ITEXPERTS · May 2025 – Present
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Improved frontend load speed and engagement by ~30%.</li>
              <li>Built reusable UI systems from complex Figma designs.</li>
              <li>Implemented scalable SPA patterns (Redux, lazy loading).</li>
              <li>Mentored junior developers and reviewed production code.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Product Manager</h3>
            <p className="text-sm text-gray-500">
              VEB · Aug 2020 – Present
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Owned product vision and delivery execution.</li>
              <li>Balanced scope, timelines, and engineering trade-offs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <p className="text-sm text-gray-600 mb-6">
          Selected projects demonstrating real-world delivery and system quality.
        </p>

        <div className="space-y-12">

          {/* PROJECT 1 */}
          <div>
            <h3 className="font-semibold">Shopify E-Commerce Theme</h3>
            <p className="text-sm text-gray-500">
              Shopify · Liquid · JavaScript · Tailwind
            </p>

            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Built production-ready Shopify theme with modular sections.</li>
              <li>Implemented AJAX cart, filtering, SEO & performance optimizations.</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href="https://github.com/your-repo" target="_blank" className="underline">
                Source Code
              </a>
              <a href="https://github.com/your-repo#readme" target="_blank" className="underline">
                Readme
              </a>
              <a href="https://your-live-demo.com" target="_blank" className="underline">
                Live Demo
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div>
            <h3 className="font-semibold">Health & Medical React Template</h3>
            <p className="text-sm text-gray-500">
              React · Redux Toolkit · REST APIs
            </p>

            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Reusable components for healthcare workflows.</li>
              <li>API-driven routing and state management.</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href="https://github.com/your-repo" target="_blank" className="underline">
                Source Code
              </a>
              <a href="https://github.com/your-repo#readme" target="_blank" className="underline">
                Readme
              </a>
              <a href="https://your-live-demo.com" target="_blank" className="underline">
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-4">Certifications</h2>

        <ul className="list-disc ml-5 space-y-3 text-gray-700">
          <li>
            Google IT Support Professional Certificate —{" "}
            <a
              href="https://www.credly.com/"
              target="_blank"
              className="underline"
            >
              Verify
            </a>
          </li>
          <li>
            Face Recognition using Python (GUVI) —{" "}
            <a
              href="https://www.guvi.in/"
              target="_blank"
              className="underline"
            >
              Verify
            </a>
          </li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <p className="text-gray-700">
          B.Tech in Computer Science — Rajasthan Technical University (2020)
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center border-t pt-8 text-sm text-gray-500">
        Updated: Jan 2026 | cv.nileshnama.com
      </footer>

    </main>
  )
}
