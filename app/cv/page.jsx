"use client"

import { useState } from "react"
import Image from "next/image"
import SubpageHeader from "@/components/SubpageHeader"
import { assets } from "@/assets/assets"

const ROLE_CONTENT = {
  teamlead: {
    label: "MERN Stack Team Lead",
    title: "MERN Stack Team Lead",
    summary:
      "Full Stack (MERN) Team Lead with 4+ years of experience in designing and delivering scalable web applications. Expertise in leading end-to-end development across React.js, Node.js, Express.js, and MongoDB, including system architecture, API design, and performance optimization. Experienced in managing development teams, defining technical roadmaps, and aligning engineering with business goals. Strong focus on building production-ready systems, improving user experience, and delivering measurable business impact.",
    emphasis: [
      "Technical leadership & team mentoring",
      "System architecture & API design",
      "Agile/Scrum & roadmap planning",
    ],
    skills: [
      "MERN Stack",
      "System Design",
      "Node.js & Express.js",
      "React.js & Redux",
      "MongoDB & MySQL",
      "API Design & Dev",
      "Agile/Scrum",
      "Team Leadership",
      "Technical Roadmaps",
      "Figma (basic)",
    ],
  },
  frontend: {
    label: "Frontend Engineer",
    title: "Frontend Engineer",
    summary:
      "Frontend-focused engineer with 4+ years of experience building scalable, accessible, and performance-oriented web interfaces using React.js, Tailwind CSS, and modern UI systems. Experienced in converting complex Figma designs into responsive component libraries, improving load speeds, and enhancing user experience.",
    emphasis: [
      "Component architecture & design systems",
      "Performance optimization & UX clarity",
      "Clean, maintainable frontend codebases",
    ],
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap 5",
      "Figma-to-Code",
      "Responsive Layouts",
      "Jest & RTL Testing",
      "Asynchronous rendering",
    ],
  },
  software: {
    label: "Software Engineer",
    title: "Software Engineer",
    summary:
      "Software Engineer experienced in delivering end-to-end features across frontend and backend, with a strong focus on schema design, query optimization, secure authentication (JWT/RBAC), and production reliability.",
    emphasis: [
      "End-to-end feature ownership",
      "MongoDB schema optimization",
      "Secure authentication & authorization",
    ],
    skills: [
      "JavaScript / TypeScript",
      "React.js / Redux",
      "Node.js & Express.js",
      "MongoDB / MySQL",
      "RESTful API Development",
      "JWT & Role-Based Access Control",
      "Git & GitHub",
      "Jest & React Testing Library",
      "Asynchronous patterns",
    ],
  },
}

export default function CVPage() {
  const [role, setRole] = useState("teamlead")
  const current = ROLE_CONTENT[role]

  return (
    <>
      <SubpageHeader />
      <div className="min-h-screen bg-[#f3f2ef] dark:bg-[#0f172a] text-slate-900 dark:text-gray-100 font-Ovo transition-colors duration-300">
        <main className="max-w-6xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          
          {/* ROLE TOGGLE */}
          <section className="mb-10 flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/30 dark:border-slate-700/30 shadow-inner">
              {Object.entries(ROLE_CONTENT).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setRole(key)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                    ${
                      role === key
                        ? "bg-white dark:bg-[#0f172a] text-[#0077b5] dark:text-[#70b5f9] shadow-sm scale-[1.02]"
                        : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </section>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            
            {/* SIDEBAR */}
            <aside className="space-y-6">
              
              {/* Profile Card (LinkedIn Style) */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm flex flex-col">
                {/* LinkedIn Banner Background */}
                <div className="h-24 bg-gradient-to-r from-[#0077b5] to-[#004b7c] w-full" />
                
                <div className="px-6 pb-6 text-center flex flex-col items-center">
                  {/* Overlapping Avatar */}
                  <div className="relative mt-[-48px] w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-[#1e293b] shadow-md bg-white">
                    <Image
                      src={assets.profile_img}
                      alt="Nilesh Nama"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  
                  <h1 className="text-xl font-bold font-Ovo mt-3 tracking-tight text-slate-900 dark:text-white">Nilesh Nama</h1>
                  <p className="text-slate-500 dark:text-gray-400 text-xs mt-1.5 leading-snug max-w-[200px]">{current.title}</p>
                  <p className="text-[11px] text-slate-400 dark:text-gray-500 mt-1">Jaipur, Rajasthan, India</p>
                  
                  <div className="w-full border-t border-slate-100 dark:border-slate-800 my-4" />

                  <div className="w-full text-left space-y-3 text-xs text-slate-600 dark:text-gray-300">
                    <a href="mailto:nileshnama1997@gmail.com" className="flex items-center gap-2 hover:text-[#0077b5] dark:hover:text-[#70b5f9] transition">
                      <span className="text-[#0077b5] dark:text-[#70b5f9] text-sm">✉</span> nileshnama1997@gmail.com
                    </a>
                    <a href="tel:+919602323340" className="flex items-center gap-2 hover:text-[#0077b5] dark:hover:text-[#70b5f9] transition">
                      <span className="text-[#0077b5] dark:text-[#70b5f9] text-sm">📞</span> +91-9602323340
                    </a>
                    <a href="https://www.linkedin.com/in/nileshnama/" target="_blank" className="flex items-center gap-2 hover:text-[#0077b5] dark:hover:text-[#70b5f9] transition">
                      <span className="text-[#0077b5] dark:text-[#70b5f9] text-sm">🔗</span> linkedin.com/in/nileshnama
                    </a>
                    <a href="https://github.com/NileshNama" target="_blank" className="flex items-center gap-2 hover:text-[#0077b5] dark:hover:text-[#70b5f9] transition">
                      <span className="text-[#0077b5] dark:text-[#70b5f9] text-sm">💻</span> github.com/NileshNama
                    </a>
                    <a href="https://nileshnama.notion.site" target="_blank" className="flex items-center gap-2 hover:text-[#0077b5] dark:hover:text-[#70b5f9] transition">
                      <span className="text-[#0077b5] dark:text-[#70b5f9] text-sm">📄</span> nileshnama.notion.site
                    </a>
                  </div>

                  <div className="w-full mt-5">
                    <a
                      href="/NileshNama-Resume.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-1.5 w-full py-2 border border-[#0077b5] dark:border-[#70b5f9] text-[#0077b5] dark:text-[#70b5f9] hover:bg-[#0077b5]/5 dark:hover:bg-[#70b5f9]/5 font-semibold rounded-full text-xs transition-all duration-300"
                    >
                      Download CV (PDF) <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-400 mb-4">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {current.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#0077b5]/10 dark:bg-[#70b5f9]/10 text-[#006097] dark:text-[#70b5f9] border border-[#0077b5]/5 dark:border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-400 mb-4">Education</h3>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Rajasthan Technical University</p>
                  <p className="text-xs text-[#0077b5] dark:text-[#70b5f9] font-semibold mt-1">Graduated 2020</p>
                </div>
              </div>

            </aside>

            {/* MAIN CONTENT AREA */}
            <div className="space-y-6">
              
              {/* Summary Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold font-Ovo mb-4 text-slate-900 dark:text-white">Professional Summary</h2>
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {current.summary}
                </p>
                <p className="text-slate-500 dark:text-gray-400 mt-3 text-xs sm:text-sm italic">
                  "I prefer well-structured, readable systems over clever but fragile abstractions."
                </p>
                <div className="border-t border-slate-100 dark:border-slate-800 my-5" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Emphasis Areas</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.emphasis.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                      <span className="text-[#0077b5] dark:text-[#70b5f9] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold font-Ovo mb-6 text-slate-900 dark:text-white">Experience</h2>
                
                <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-8">
                  {/* EXP 1 */}
                  <div className="relative">
                    <div className="absolute left-[-29px] top-1.5 h-3.5 w-3.5 rounded-full bg-white dark:bg-[#1e293b] border-2 border-[#0077b5] dark:border-[#70b5f9] ring-4 ring-[#0077b5]/10" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-white">Frontend Team Lead</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-gray-400 self-start sm:self-center">
                        May 2025 – July 2025
                      </span>
                    </div>
                    <p className="text-xs text-[#0077b5] dark:text-[#70b5f9] font-semibold mt-1">W3ITEXPERTS</p>
                    <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-slate-600 dark:text-gray-300">
                      <li>Led frontend architecture and development using React.js and Tailwind CSS, achieving 30% improvement in load speed and user engagement.</li>
                      <li>Built scalable and reusable component libraries, reducing development time and ensuring consistency across applications.</li>
                      <li>Collaborated with backend teams to define API contracts and ensure seamless integration of dynamic data.</li>
                      <li>Focused on performance optimization, accessibility, and responsive design across all platforms.</li>
                      <li>Improved user engagement and application performance, contributing to better retention and usability.</li>
                      <li>Delivered scalable solutions aligned with business goals, ensuring high performance and reliability in production.</li>
                      <li>Designed and developed RESTful APIs using Node.js and Express.js for handling authentication, user management, and business workflows.</li>
                      <li>Structured and optimized MongoDB database schemas, improving query response times by 40% through indexing and query optimizations.</li>
                      <li>Implemented secure authentication and authorization using JWT and role-based access control.</li>
                      <li>Led full-stack feature development, ensuring seamless integration between frontend (React) and backend services.</li>
                      <li>Improved system performance through API optimization, lazy loading, and efficient state management.</li>
                    </ul>
                  </div>

                  {/* EXP 2 */}
                  <div className="relative">
                    <div className="absolute left-[-29px] top-1.5 h-3.5 w-3.5 rounded-full bg-white dark:bg-[#1e293b] border-2 border-slate-300 dark:border-slate-700 ring-4 ring-slate-100 dark:ring-slate-800" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-white">Team Lead</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-gray-400 self-start sm:self-center">
                        Aug 2020 – May 2025
                      </span>
                    </div>
                    <p className="text-xs text-[#0077b5] dark:text-[#70b5f9] font-semibold mt-1">VebGlitch</p>
                    <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-slate-600 dark:text-gray-300">
                      <li>Led end-to-end frontend architecture and development for client-facing platforms using React.js and Tailwind CSS, driving a 30% improvement in load speed and user engagement, while mentoring junior developers and enforcing best practices.</li>
                      <li>Led a team of 3–5 developers, managing sprint planning, task allocation, and delivery timelines in Agile environment.</li>
                      <li>Conducted code reviews and ensured adherence to coding standards and best practices.</li>
                      <li>Translated complex Figma designs into scalable, reusable component systems, establishing design consistency, improving development efficiency, and standardizing UI across multiple modules.</li>
                      <li>Collaborated and coordinated with cross-functional teams (designers, backend engineers, and stakeholders) to define API contracts, streamline integration of REST APIs, and ensure seamless delivery of responsive, production-ready applications.</li>
                      <li>Designed and developed RESTful APIs using Node.js and Express.js for handling authentication, user management, and business workflows.</li>
                      <li>Structured and optimized MongoDB database schemas, improving query response times by 40% through indexing and query optimizations.</li>
                      <li>Implemented secure authentication and authorization using JWT and role-based access control.</li>
                      <li>Led full-stack feature development, ensuring seamless integration between frontend (React) and backend services.</li>
                      <li>Improved system performance through API optimization, lazy loading, and efficient state management.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold font-Ovo mb-2 text-slate-900 dark:text-white">Featured Projects</h2>
                <p className="text-xs text-slate-400 mb-6">Demonstrating architecture quality, performance, and real-world delivery.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* PROJECT 1 */}
                  <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-white text-base">Full-Stack eCommerce Platform</h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Razorpay/Stripe"].map((t) => (
                          <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-gray-400">{t}</span>
                        ))}
                      </div>
                      <ul className="list-disc ml-4 mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-gray-300">
                        <li>Built a high-performance full-stack eCommerce platform designed to handle 10,000+ concurrent requests with catalog, cart, checkout, and auth.</li>
                        <li>Developed REST APIs for product management, user accounts, and order processing using Node.js and Express.js.</li>
                        <li>Designed MongoDB schemas for products, users, and transactions, reducing database lookup latency by 35%.</li>
                        <li>Integrated payment gateway (Razorpay/Stripe) for secure transactions and order flow.</li>
                        <li>Implemented admin dashboard for managing inventory, orders, and users.</li>
                        <li>Optimized application performance, reducing load time and improving user experience across devices.</li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-3.5 mt-5 border-t border-slate-100 dark:border-slate-850 pt-4 text-xs font-semibold text-[#0077b5] dark:text-[#70b5f9]">
                      <a href="https://github.com/NileshNama" target="_blank" className="hover:underline">Source</a>
                      <span className="text-slate-350 dark:text-slate-700">|</span>
                      <a href="https://github.com/NileshNama#readme" target="_blank" className="hover:underline">Readme</a>
                      <span className="text-slate-355 dark:text-slate-700">|</span>
                      <a href="https://nileshnama.notion.site" target="_blank" className="hover:underline">Live Demo</a>
                    </div>
                  </div>

                  {/* PROJECT 2 */}
                  <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-white text-base">Health & Medical React Template</h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {["React.js", "Bootstrap 5", "Redux Toolkit", "SCSS", "REST APIs"].map((t) => (
                          <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-gray-400">{t}</span>
                        ))}
                      </div>
                      <ul className="list-disc ml-4 mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-gray-300">
                        <li>Developed a responsive and visually engaging medical web interface using React.js and Bootstrap 5.</li>
                        <li>Created reusable components for appointments, services, doctor profiles, departments, blogs, and testimonials.</li>
                        <li>Ensured cross-browser compatibility and fully responsive design for desktop, tablet, and mobile devices.</li>
                        <li>Collaborated with backend teams to integrate REST APIs, achieving a 25% decrease in page rendering times on Netlify & AWS.</li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-3.5 mt-5 border-t border-slate-100 dark:border-slate-850 pt-4 text-xs font-semibold text-[#0077b5] dark:text-[#70b5f9]">
                      <a href="https://github.com/NileshNama" target="_blank" className="hover:underline">Source</a>
                      <span className="text-slate-350 dark:text-slate-700">|</span>
                      <a href="https://github.com/NileshNama#readme" target="_blank" className="hover:underline">Readme</a>
                      <span className="text-slate-355 dark:text-slate-700">|</span>
                      <a href="https://nileshnama.notion.site" target="_blank" className="hover:underline">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold font-Ovo mb-4 text-slate-900 dark:text-white">Certifications</h2>
                <ul className="space-y-4">
                  <li className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white">Google IT Support Professional Certificate</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Issued: 2022 by Google</p>
                    </div>
                    <a href="https://www.credly.com/" target="_blank" className="text-xs font-semibold text-[#0077b5] dark:text-[#70b5f9] border border-[#0077b5]/20 dark:border-[#70b5f9]/20 hover:bg-[#0077b5]/5 dark:hover:bg-[#70b5f9]/5 px-3 py-1.5 rounded-full transition">
                      Verify ↗
                    </a>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white">Face Recognition Application using Python</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Issued: 2022 by GUVI</p>
                    </div>
                    <a href="https://www.guvi.in/" target="_blank" className="text-xs font-semibold text-[#0077b5] dark:text-[#70b5f9] border border-[#0077b5]/20 dark:border-[#70b5f9]/20 hover:bg-[#0077b5]/5 dark:hover:bg-[#70b5f9]/5 px-3 py-1.5 rounded-full transition">
                      Verify ↗
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* FOOTER */}
          <footer className="text-center border-t dark:border-slate-800 pt-8 mt-16 text-xs text-slate-400">
            Updated: July 2026 | nileshnama.com/cv
          </footer>

        </main>
      </div>
    </>
  )
}
