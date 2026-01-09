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
      "Software Engineer experienced in delivering end-to-end features across frontend and backend, with a strong focus on clarity, maintainability, and production reliability.",
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
      "Product-oriented technologist with experience leading teams, aligning execution with business goals, and making high-quality decisions under real constraints.",
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
    <main className="w-full bg-white text-black font-Ovo px-6 sm:px-[12%] py-20">

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
      <section className="max-w-4xl mx-auto mb-16">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Image
            src={assets.profile_img}
            alt="Nilesh Nama"
            className="rounded-full w-24 h-24 object-cover"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-semibold leading-tight">
              Nilesh Nama
            </h1>

            <p className="text-gray-700 mt-1">
              {current.title}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              India · Open to remote and hybrid roles
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-3">
              <a
                href="mailto:nileshnama1997@gmail.com"
                className="hover:underline"
              >
                nileshnama1997@gmail.com
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://www.linkedin.com/in/nileshnama/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://github.com/NileshNama"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>

            <div className="mt-4">
              <a
                href="/NileshNama-Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-gray-100 transition"
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
        <h2 className="text-xl font-semibold mb-3">
          Professional Summary
        </h2>

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
            <h3 className="font-semibold">
              Team Lead – Frontend Developer
            </h3>
            <p className="text-sm text-gray-500">
              W3ITEXPERTS · May 2025 – Present
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Led frontend development using React and Tailwind CSS.</li>
              <li>Converted complex Figma designs into reusable UI systems.</li>
              <li>
                Improved performance, UX clarity, and long-term maintainability
                across production features.
              </li>
              <li>Mentored developers and reviewed production-grade code.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Product Manager</h3>
            <p className="text-sm text-gray-500">
              VEB · Aug 2020 – Present
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Owned product direction and execution strategy.</li>
              <li>Balanced scope, timelines, and technical trade-offs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <p className="text-sm text-gray-600 mb-6">
          Selected projects demonstrating architecture quality, performance,
          and real-world delivery.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="font-semibold">Shopify E-Commerce Theme</h3>
            <p className="text-sm text-gray-500">
              Shopify · Liquid · JavaScript · Tailwind
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Built a production-ready, responsive Shopify theme.</li>
              <li>Implemented AJAX cart flows, filters, and SEO improvements.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Health & Medical React Template</h3>
            <p className="text-sm text-gray-500">
              React · Redux · REST APIs
            </p>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
              <li>Built reusable UI components for healthcare workflows.</li>
              <li>Implemented API-driven routing and state management.</li>
            </ul>
          </div>
        </div>
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
        cv.nileshnama.com
      </footer>

    </main>
  )
}
