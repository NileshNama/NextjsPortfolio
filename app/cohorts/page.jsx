"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"

// ----------------------------------------------------
// PREMIUM INLINE SVG ICON COMPONENTS
// ----------------------------------------------------

const SparklesIcon = ({ className = "w-4 h-4 text-yellow-350 shrink-0" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const LightningIcon = ({ className = "w-4 h-4 text-amber-300 shrink-0" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const CheckIcon = ({ className = "w-4 h-4 text-emerald-500 shrink-0" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ChevronIcon = ({ isOpen, className = "w-4 h-4 text-slate-400 transition-transform duration-300" }) => (
  <svg className={`${className} ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const TrophyIcon = ({ className = "w-5 h-5 text-amber-500" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0v4m0 0H9m3 0h3M4 9h16v1a5 5 0 01-5 5H9a5 5 0 01-5-5V9z" />
  </svg>
)

const GraduationIcon = ({ className = "w-4 h-4 text-slate-500 dark:text-sky-300" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.22" />
  </svg>
)

const BookIcon = ({ className = "w-5 h-5 text-[#0f62fe] dark:text-[#38bdf8]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const CogIcon = ({ className = "w-5 h-5 text-[#0f62fe] dark:text-[#38bdf8]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const UsersIcon = ({ className = "w-5 h-5 text-[#0f62fe] dark:text-[#38bdf8]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const HelpIcon = ({ className = "w-4 h-4 text-[#0f62fe] dark:text-[#38bdf8]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.023-5.116-2.887-6.98C16.576 1.897 14.1 1.072 11.9 1.072c-5.437 0-9.861 4.42-9.865 9.865-.001 1.8.49 3.558 1.42 5.114l-.955 3.49 3.547-.932zm12.355-6.607c-.31-.156-1.836-.906-2.12-.1.1-.284-.156-.425-.213-.679-.057-.254-.254-.849-.254-1.217s.14-.566.254-.679c.113-.113.254-.142.34-.142s.17.028.254.028c.084 0 .17-.028.254.028.085.057.34.821.37.878.028.057.028.142-.028.254-.056.113-.142.254-.226.34-.085.085-.17.17-.057.34.113.197.508.826 1.084 1.34.744.662 1.37.867 1.56.96.19.094.283.085.39-.028.1-.113.45-.538.56-.68.1-.14.22-.113.34-.056.113.056.736.347.849.405.113.056.19.085.22.14.03.056.03.31-.085.65-.113.34-.68 1.67-1.47 1.75-.8.08-1.55-.25-2.23-.79z"/>
  </svg>
)

const DiscordIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  </svg>
)

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

// ----------------------------------------------------
// DATA CONFIGURATIONS
// ----------------------------------------------------

const WHY_CHOOSE_ITEMS = [
  {
    iconType: "trophy",
    title: "GATE Toppers",
    desc: "Learn from the best"
  },
  {
    iconType: "book",
    title: "Clear Concepts",
    desc: "No jargon, just clarity"
  },
  {
    iconType: "cog",
    title: "Systems CS",
    desc: "Academia meets systems"
  },
  {
    iconType: "users",
    title: "Community",
    desc: "Learn together, grow together"
  }
]

const CURRICULUM_DATA = [
  {
    subject: "Databases (DBMS)",
    lessons: "12 Modules · 45 hrs Lectures",
    topics: [
      "Relational Model & Keys (Super keys, Candidate keys, Foreign keys)",
      "Normal Forms (1NF, 2NF, 3NF, BCNF, 4NF - decomposition trade-offs)",
      "SQL Query Optimization (Join algorithms, Index structures, execution plans)",
      "Transaction Concurrency Control (ACID, Serializability, 2PL, Timestamp protocols)",
      "Crash Recovery Systems (Log-based recovery, Checkpoints, ARIES algorithm)"
    ]
  },
  {
    subject: "Operating Systems",
    lessons: "15 Modules · 50 hrs Lectures",
    topics: [
      "Process Management & CPU Scheduling (Preemptive vs Non-preemptive)",
      "Threads & Synchronization (Semaphores, Mutexes, Monitors, Deadlock avoidance)",
      "Memory Management (Paging, Segmented paging, Multi-level page tables, TLB hits)",
      "Virtual Memory Page Replacement Algorithms (LRU, FIFO, Optimal, Belady's anomaly)",
      "File Systems & Disk Scheduling (Inodes, Allocation methods, RAID layouts)"
    ]
  },
  {
    subject: "Compiler Design",
    lessons: "8 Modules · 30 hrs Lectures",
    topics: [
      "Lexical Analysis & Regular Expressions (DFA minimization, Lex structures)",
      "Syntax Analysis & Parsing (LL(1), Operator precedence, LR(0), SLR(1), LALR(1), CLR(1))",
      "Syntax Directed Translation (SDTs, S-attributed and L-attributed definitions)",
      "Intermediate Code Generation (Three-address code, Quadruples, Triples)",
      "Code Optimization & Code Generation (Basic blocks, DAG representation, Register allocation)"
    ]
  },
  {
    subject: "Algorithms & DSA",
    lessons: "14 Modules · 55 hrs Lectures",
    topics: [
      "Asymptotic Analysis & Recurrences (Master's Theorem, Substitution method)",
      "Divide & Conquer, Greedy Algorithms (Fractional knapsack, Huffman coding)",
      "Dynamic Programming (Matrix chain multiplication, LCS, optimal search trees)",
      "Graph Algorithms (BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Prim, Kruskal)",
      "Complexity Theory (P, NP, NP-Hard, NP-Complete reductions, NPC classes)"
    ]
  }
]

const PROGRAMS_DATA = {
  gate2027: [
    {
      title: "GATE CS Free Demo",
      price: "Free",
      originalPrice: null,
      badge: "Start Free",
      badgeColor: "bg-slate-500",
      scarcity: null,
      description: "Experience our teaching and sample study materials completely free.",
      bullets: [
        "Sample book chapters (DBMS, OS)",
        "Introductory training sessions",
        "Basic question decoding guide",
        "Community study group access"
      ],
      btnText: "Start Learning",
      btnStyle: "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5",
      link: "https://cohorts.nileshnama.com"
    },
    {
      title: "GATE-BARC PYQ Core",
      price: "₹8,260/-",
      originalPrice: "₹9,999",
      badge: "Most Popular",
      badgeColor: "bg-[#061d33] dark:bg-[#0f62fe]",
      scarcity: "84% Filled • Limited Seats Left",
      description: "Recorded + weekly live sessions focused on decoding examiner traps.",
      bullets: [
        "How to decode PYQ intent in 10s",
        "Option elimination frameworks",
        "Weekly practice sheets & DPPs",
        "Traps & mistake correction models",
        "Core GATE CS subject deep-dives"
      ],
      btnText: "Enroll Now",
      btnStyle: "bg-[#0f62fe] text-white hover:bg-[#0043ce] shadow-md shadow-[#0f62fe]/20",
      link: "https://cohorts.nileshnama.com/new-courses/5-nn-gate-barc-pyq-core-program"
    },
    {
      title: "Concepts Pro Program",
      price: "₹41,300/-",
      originalPrice: "₹49,999",
      badge: "Best Value",
      badgeColor: "bg-[#061d33] dark:bg-[#0f62fe]",
      scarcity: "Only 4 early-bird seats left",
      description: "Advanced conceptual training with scientist-level depth.",
      bullets: [
        "Everything in PYQ Core Program",
        "Monthly live meet with Nilesh Nama",
        "Elite query support group",
        "System-level coding projects",
        "Customized exam strategy roadmap",
        "Advanced boundary cases analysis"
      ],
      btnText: "More Details",
      btnStyle: "bg-slate-900 text-white hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 shadow-md",
      link: "https://cohorts.nileshnama.com/new-courses/11-nn-gate-barc-concepts-pro-program"
    },
    {
      title: "Rank Accelerator 1:1",
      price: "₹12,400/-",
      originalPrice: "₹15,999",
      badge: "Mentorship",
      badgeColor: "bg-emerald-500",
      scarcity: "Waitlist open",
      description: "Intense pressure-based exam execution rank accelerator program.",
      bullets: [
        "Attempt vs skip decision drills",
        "Time pressure execution test series",
        "Traps & cognitive error logging",
        "Daily 1:1 review check-ins",
        "Risk mitigation & exam day strategies"
      ],
      btnText: "Join Waitlist",
      btnStyle: "border border-[#0f62fe] dark:border-[#38bdf8] text-[#0f62fe] dark:text-[#38bdf8] hover:bg-[#0f62fe]/5",
      link: "https://cohorts.nileshnama.com/new-courses/4-nn-gate-barc-rank-accelerator-program"
    }
  ],
  gate2028: [
    {
      title: "GATE CS 2-Year Foundation",
      price: "₹14,800/-",
      originalPrice: "₹19,999",
      badge: "Long Term",
      badgeColor: "bg-[#061d33] dark:bg-[#0f62fe]",
      scarcity: "Early pre-enrollment active",
      description: "Slow-paced fundamental conceptual build up over 24 months.",
      bullets: [
        "All core CS subjects from zero",
        "120+ live classes per year",
        "Gradual database & compiler logic building",
        "Double validity test series access",
        "Step-by-step programming modules"
      ],
      btnText: "Pre-Enroll",
      btnStyle: "bg-[#0f62fe] text-white hover:bg-[#0043ce] shadow-md shadow-[#0f62fe]/20",
      link: "https://cohorts.nileshnama.com"
    }
  ]
}

const SUCCESS_STORIES = [
  {
    name: "Harsh Raja",
    rank: "AIR 16",
    year: "GATE 2026",
    college: "AI, IISc Bangalore",
    prevRank: "AIR 80, GATE 2025",
    verificationUrl: "https://linkedin.com",
    watchVideoId: "xG2e1c9m6Yw",
    quote: "Securing a top rank was about how to think under pressure. The database transactions and query tuning framework helped me clear complex multi-layered questions in minutes. Nilesh's focus on structured problem-solving was the key game changer."
  },
  {
    name: "Jay Bansal",
    rank: "AIR 9",
    year: "GATE 2026",
    college: "IIT Bombay",
    verificationUrl: "https://linkedin.com",
    watchVideoId: "6NtbCuU3TLy",
    quote: "Intuitively understanding the OS concepts rather than rote formulas saved me in the exam. Under Nilesh's guidance, I stopped memorizing scheduling and paging math, and started reasoning through the hardware constraints. The best program for core CS."
  },
  {
    name: "Rohan Khamitkar",
    rank: "AIR 44",
    year: "GATE 2025",
    college: "IIT Bombay",
    verificationUrl: "https://linkedin.com",
    watchVideoId: "fmnOetlPwcg",
    quote: "The mock interview practice and deep compiler design insights allowed me to excel. If you want raw depth in CS concepts instead of superficial formula tricks, this is the only prep program you should join."
  }
]

const FREE_RESOURCES = [
  {
    title: "GATE CS Exam Overview",
    desc: "What GATE CS is, who it's for, weightage metrics, and a scientist-built preparation roadmap."
  },
  {
    title: "GATE CS Syllabus 2027",
    desc: "Subject-wise topics, weightage chart, and core system priority ratings — downloadable as a PDF."
  },
  {
    title: "Online Course & Coaching",
    desc: "How to choose a GATE CS online course, and why first-principles coaching is essential."
  },
  {
    title: "Course Fees & Intakes",
    desc: "Transparent pricing details for Core, Pro, and the standalone Mentorship Programs."
  },
  {
    title: "GATE CS Test Series",
    desc: "High-quality mock tests and practice problems built to match the actual GATE CS exam pattern."
  },
  {
    title: "GATE CS Blog & Guides",
    desc: "In-depth guides on operating systems, compilers, database theory, and exam strategies."
  }
]

const FAQS = [
  {
    q: "What is GATE CS (Computer Science & Information Technology)?",
    a: "GATE CS is a national-level competitive exam testing core concepts of computer science (DBMS, OS, Compilers, Networks, DSA, etc.) for admission into master's programs (M.Tech/Ph.D) at IITs/IISc and scientist recruitments (BARC, ISRO, DRDO, PSUs)."
  },
  {
    q: "Who are the instructors for the cohorts?",
    a: "The cohorts are designed and taught directly by Nilesh Nama, a former BARC Scientist who secured BARC AIR 12, GATE CS AIR 202, and holds a B.Tech in Computer Science."
  },
  {
    q: "Which coaching is best for GATE CS preparation?",
    a: "The best coaching is one that focuses on first-principles understanding instead of rote formula memorization. Nilesh Nama's cohorts train candidates to think like system designers, enabling them to solve complex examiner-level twisted questions."
  },
  {
    q: "What is the GATE CS 2027 syllabus?",
    a: "The syllabus comprises Engineering Mathematics, Discrete Mathematics, Digital Logic, Computer Organization, Programming & Data Structures, Algorithms, Theory of Computation, Compiler Design, Operating Systems, Databases, and Computer Networks."
  },
  {
    q: "Are the classes live or recorded?",
    a: "The cohorts feature a hybrid model combining structured recorded lectures for standard concepts with weekly interactive live doubt-solving, question-decoding drills, and strategy sessions."
  },
  {
    q: "What is the difference between Core and Pro plans?",
    a: "The Core program focuses on PYQ decoding and elimination strategies. The Pro program adds advanced conceptual classes, system-level coding projects, and direct monthly 1:1 strategy meetings with Nilesh Nama."
  }
]

const SIMULATED_ACTIVITY = [
  "🚀 Jay B. started practicing Transactions & Concurrency questions in DBMS",
  "💡 Doubt Solved: 'Why is 2PL sufficient but not necessary for serializability?' resolved by Coach Nilesh",
  "🎓 Student Aman K. achieved 100% score on the Compiler Design Syntax Analysis test",
  "🔥 Limited Seats Update: Only 4 early-bird spots remaining in GATE 2027 Concepts Pro",
  "🚀 Student Shreya S. verified rank link and joined the exclusive GATE CS group",
  "💡 Doubt Solved: 'Decidability of equivalence of two regular grammars' answered in Mentorship thread"
]

export default function CohortsPage() {
  const [activeYearTab, setActiveYearTab] = useState("gate2027")
  const [storyIndex, setStoryIndex] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [moreOpen, setMoreOpen] = useState(false)
  const [activeSyllabusIdx, setActiveSyllabusIdx] = useState(0)

  // Quiz Recommendation States
  const [quizStep, setQuizStep] = useState(1) // 1: target year, 2: prep state, 3: result recommendation
  const [quizYear, setQuizYear] = useState(null)
  const [quizPrep, setQuizPrep] = useState(null)

  // Video Modal State
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false)
  const [selectedYoutubeId, setSelectedYoutubeId] = useState(null)

  // Sandbox State
  const [sandboxAnswer, setSandboxAnswer] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  // Live Activity State
  const [activityIdx, setActivityIdx] = useState(0)
  const [activeActivity, setActiveActivity] = useState("")
  const [fadeState, setFadeState] = useState(true)

  useEffect(() => {
    setActiveActivity(SIMULATED_ACTIVITY[0])
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false)
      setTimeout(() => {
        setActivityIdx((prev) => {
          const next = (prev + 1) % SIMULATED_ACTIVITY.length
          setActiveActivity(SIMULATED_ACTIVITY[next])
          setFadeState(true)
          return next
        })
      }, 300)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const handleNextStory = () => {
    setStoryIndex((prev) => (prev + 1) % SUCCESS_STORIES.length)
  }

  const handlePrevStory = () => {
    setStoryIndex((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length)
  }

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx)
  }

  const renderWhyChooseIcon = (type) => {
    switch (type) {
      case "trophy":
        return <TrophyIcon className="w-6 h-6 text-sky-400" />
      case "book":
        return <BookIcon className="w-6 h-6 text-sky-400" />
      case "cog":
        return <CogIcon className="w-6 h-6 text-sky-400" />
      case "users":
        return <UsersIcon className="w-6 h-6 text-sky-400" />
      default:
        return null
    }
  }

  // Quiz Recommendation Logic
  const getRecommendation = () => {
    if (quizYear === "2028") {
      return {
        title: "GATE CS 2-Year Foundation",
        desc: "Designed for steady, slow-paced concept building over 24 months.",
        anchor: "#pricing"
      }
    }
    if (quizPrep === "beginner") {
      return {
        title: "Concepts Pro Program",
        desc: "Deep focus on fundamental CS concepts with 1:1 strategy meetings.",
        anchor: "#pricing"
      }
    }
    return {
      title: "GATE-BARC PYQ Core Program",
      desc: "Ideal for student looking to practice option elimination and decode exam traps.",
      anchor: "#pricing"
    }
  }

  const recommendation = getRecommendation()

  // Dynamic Page Personalization Logic
  const getPersonalizedHero = () => {
    if (quizStep === 3) {
      if (quizYear === "2028") {
        return {
          title: <>Master GATE CS Over <span className="text-[#0f62fe] dark:text-[#38bdf8]">24 Months</span></>,
          sub: "Learn systems reasoning & concept depth from BARC Scientists",
          desc: "A comprehensive, slow-paced study plan covering DBMS, OS, Compilers, and algorithms systematically over 2 years."
        }
      }
      if (quizPrep === "beginner") {
        return {
          title: <>Master GATE CS Concepts from <span className="text-[#0f62fe] dark:text-[#38bdf8]">First Principles</span></>,
          sub: "Deep conceptual training designed for absolute clarity",
          desc: "Everything you need to master Operating Systems, DBMS, Compilers, and algorithms with 1:1 scientist-level strategy and doubt solving."
        }
      }
      return {
        title: <>Decode Examiner Traps & <span className="text-[#0f62fe] dark:text-[#38bdf8]">Boost Your Rank</span></>,
        sub: "Recorded + weekly live sessions focused on trap mitigation",
        desc: "Learn our trademark option elimination frameworks, time pressure execution, and detailed PYQ intention decoding."
      }
    }
    return {
      title: <>India’s Trusted <span className="text-[#0f62fe] dark:text-[#38bdf8]">GATE CS</span> Preparation Platform</>,
      sub: "Learn from BARC Scientists & GATE Toppers",
      desc: "Master Operating Systems, DBMS, Compilers, and Core Computer Science with recorded + live classes, exam-tested roadmaps, and 1:1 mentorship."
    }
  }

  const heroContent = getPersonalizedHero()
  const prevIndex = (storyIndex - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length
  const currIndex = storyIndex
  const nextIndex = (storyIndex + 1) % SUCCESS_STORIES.length

  return (
    <div className="cohorts-page min-h-screen bg-[#fafbfc] dark:bg-[#070b15] text-slate-900 dark:text-gray-100  transition-colors duration-300">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0f62fe] text-white text-center py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2 border-b border-[#0b4ec2] z-50 relative">
        <WhatsAppIcon className="w-4 h-4 text-[#e2f3f1]" />
        For any enquiries please WhatsApp at <a href="https://wa.me/919509923340" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300 font-bold">+91 9509923340</a>
      </div>

      {/* 2. CUSTOM NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070b15]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 lg:px-[8%] py-4 flex items-center justify-between transition-all duration-300">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={assets.logo}
            alt="Nilesh Nama"
            className="w-28 cursor-pointer dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="Nilesh Nama"
            className="w-28 cursor-pointer hidden dark:block"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700 dark:text-gray-200">
          <a href="https://cohorts.nileshnama.com/new-courses?examId=6" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition">Tracks</a>
          <a href="https://cohorts.nileshnama.com/new-courses?examId=1" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition">Programs</a>
          <a href="https://cohorts.nileshnama.com/new-courses?examId=2" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition">Interviews</a>
          <a href="https://cohorts.nileshnama.com/new-courses?examId=3" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition">Mentorship</a>
          <a href="https://cohorts.nileshnama.com/test-series" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition">Test Series</a>
          <a href="https://nquestions.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition">NQuestions</a>
          
          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="hover:text-[#0f62fe] dark:hover:text-[#38bdf8] transition flex items-center gap-1.5 font-semibold"
            >
              More <ChevronIcon isOpen={moreOpen} className="w-3 h-3 text-slate-400" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 mt-3 w-80 rounded-3xl border border-slate-200 dark:border-slate-850 bg-white/95 dark:bg-[#0d1527]/95 backdrop-blur-md p-3 shadow-xl shadow-slate-200/40 dark:shadow-black/40 z-50 flex flex-col gap-1">
                
                <a
                  href="https://cohorts.nileshnama.com/practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Practice</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Daily coding & CS questions</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/open-access"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Open Access</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Free reference archives</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Resources</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Guides, sheets & study links</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/core-notes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Core Notes</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Scientist-written summaries</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/pyqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">GATE PYQs</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Previous Year Questions database</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/interview-pyqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Interview PYQs</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Systems & coding rounds prep</p>
                </a>

              </div>
            )}
          </div>
        </nav>

        <a
          href="https://cohorts.nileshnama.com/new-courses?examId=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#061d33] hover:bg-black text-white dark:bg-[#0f62fe] dark:hover:bg-[#38bdf8] font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300 shadow-sm shrink-0"
        >
          Explore Programs
        </a>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f7fc] to-[#e2edf8] text-[#061d33] dark:from-[#070b15] dark:via-[#0d1527] dark:to-[#0f172a] dark:text-white pt-20 pb-24 text-center px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#0f62fe]/5 blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 bg-slate-100/60 dark:border-white/20 dark:bg-white/10 text-slate-600 dark:text-sky-200 text-xs font-semibold tracking-wide mb-6">
            <GraduationIcon className="w-4 h-4" />
            <span>Founded by BARC AIR 12 & GATE Toppers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {heroContent.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-bold mt-5 text-[#061d33]/90 dark:text-sky-100 tracking-tight">
            {heroContent.sub}
          </p>

          <p className="max-w-2xl mx-auto mt-4 text-xs sm:text-sm md:text-base text-slate-500 dark:text-sky-100/90 leading-relaxed font-normal">
            {heroContent.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://cohorts.nileshnama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#0f62fe]/20 w-full sm:w-auto text-center"
            >
              Start PYQ Core Program →
            </a>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-white hover:bg-slate-100 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 font-bold px-7 py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Play Sample Class</span>
              <PlayIcon className="w-4 h-4 text-[#0f62fe]" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-sky-200 mt-6 font-medium">
            <CheckIcon className="w-3.5 h-3.5 text-green-500" />
            <span>Trusted by Serious GATE Aspirants</span>
          </div>
          {/* 3.5 DIAGNOSTIC PROGRAM SELECTOR WIDGET */}
          <div className="mt-12 max-w-2xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0d1527]/70 backdrop-blur p-6 sm:p-8 shadow-lg text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f62fe] dark:text-[#38bdf8]">Prep Matcher</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Find Your Ideal GATE Cohort</h3>
            <p className="text-xs text-slate-500 dark:text-sky-100/70 mt-1">Answer 2 simple questions to get your personalized learning path.</p>

            <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-6">
              {quizStep === 1 && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-200">1. Which GATE exam year are you targeting?</p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setQuizYear("2027")
                        setQuizStep(2)
                      }}
                      className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-750 shadow-sm transition"
                    >
                      GATE 2027
                    </button>
                    <button
                      onClick={() => {
                        setQuizYear("2028")
                        setQuizStep(3)
                      }}
                      className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-750 shadow-sm transition"
                    >
                      GATE 2028
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-200">2. What is your current preparation status?</p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setQuizPrep("beginner")
                        setQuizStep(3)
                      }}
                      className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-750 shadow-sm transition"
                    >
                      Need Full Concepts
                    </button>
                    <button
                      onClick={() => {
                        setQuizPrep("advanced")
                        setQuizStep(3)
                      }}
                      className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-750 shadow-sm transition"
                    >
                      Revision & Traps Practice
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold animate-pulse">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Recommendation Ready</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-2">
                    {recommendation.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                    {recommendation.desc}
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setQuizStep(1)
                        setQuizYear(null)
                        setQuizPrep(null)
                      }}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition text-slate-500"
                    >
                      Restart Quiz
                    </button>
                    <a
                      href={recommendation.anchor}
                      className="px-6 py-2 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-bold transition shadow shadow-[#0f62fe]/20"
                    >
                      View Package
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SECTION */}
      <section className="bg-[#0b1329] text-white py-24 px-4 sm:px-6 border-t border-b border-slate-850">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-sky-400">Nilesh Nama</span> for GATE CS?
          </h2>
          <p className="text-xs sm:text-sm text-slate-450 mt-2">We train you to think, apply, and conquer! India's most trusted GATE CS coaching platform.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800/80 bg-[#0d172e]/50 p-6 hover:bg-[#0d172e] hover:border-slate-700/80 transition duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/5">
                  {renderWhyChooseIcon(item.iconType)}
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#curriculum"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition"
            >
              See the complete GATE CS curriculum →
            </a>
          </div>
        </div>
      </section>

      {/* 4.5 INSTRUCTOR SPOTLIGHT */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/10 border-t border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 text-center md:text-left relative flex flex-col items-center gap-3 justify-center">
            <div className="w-48 h-48 rounded-3xl bg-gradient-to-tr from-[#0f62fe] to-[#0f62fe] p-1.5 shadow-xl relative overflow-hidden group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
              <div className="w-full h-full bg-slate-900 dark:bg-[#070b15] rounded-2xl flex flex-col items-center justify-center text-white relative">
                <span className="text-4xl font-extrabold text-[#0f62fe]">AIR 12</span>
                <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase mt-1">BARC Scientist</span>
                <div className="absolute bottom-2 text-[9px] bg-[#0f62fe]/10 text-[#0f62fe] px-2 py-0.5 rounded-full font-bold">Nilesh Nama</div>
                
                {/* Modal Play Overlay / Permanent Play Icon */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-300 group-hover:bg-black/50">
                  <div className="w-12 h-12 rounded-full bg-[#0f62fe] flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition duration-300">
                    <PlayIcon className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="text-xs font-bold text-[#0f62fe] hover:text-[#38bdf8] hover:underline flex items-center gap-1.5 transition"
            >
              <span>Watch Sample Class Video</span>
            </button>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <span className="inline-block text-[#0f62fe] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-wider text-left">Meet Your Coach</span>
            <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 dark:text-white text-left leading-tight">
              Learn Computer Science From a Former BARC Scientist
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 leading-relaxed text-left">
              Hi, I'm Nilesh Nama. During my preparation journey, I secured **BARC AIR 12** and **GATE CS AIR 202**. I designed these cohorts with a singular focus: training you to think from first principles. We don't teach shortcuts; we build system-level intuition so you can tackle complex questions.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-left">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#0f62fe] dark:text-[#38bdf8]">AIR 12</h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold">BARC Scientist Exam</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#0f62fe] dark:text-[#38bdf8]">AIR 202</h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold">GATE CS Exam</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#0f62fe] dark:text-[#38bdf8]">99.9%</h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold">CS Conceptual Index</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 CURRICULUM EXPLORER */}
      <section id="curriculum" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0f62fe] dark:text-[#38bdf8]">Deep Subject Depth</span>
          <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 dark:text-white mt-1">
            Explore the Scientist-Built Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">Click on the subjects below to inspect the topics taught in full depth.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
            {CURRICULUM_DATA.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSyllabusIdx(idx)}
                className={`w-full text-left px-5 py-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border flex flex-col gap-1 whitespace-nowrap md:whitespace-normal
                  ${activeSyllabusIdx === idx
                    ? "bg-[#0f62fe]/10 border-[#0f62fe] text-[#0f62fe] dark:text-[#38bdf8] dark:bg-[#0f62fe]/20"
                    : "bg-white dark:bg-[#0d1527] border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850"}`}
              >
                <span>{item.subject}</span>
                <span className="text-[10px] text-slate-400 dark:text-gray-500 font-medium">{item.lessons}</span>
              </button>
            ))}
          </div>

          {/* Details Content Box */}
          <div className="w-full md:w-2/3 bg-white dark:bg-[#0d1527] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#0f62fe] rounded-full" />
              Detailed Modules for {CURRICULUM_DATA[activeSyllabusIdx].subject}
            </h4>
            <ul className="space-y-4">
              {CURRICULUM_DATA[activeSyllabusIdx].topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-gray-300 text-left">
                  <span className="w-5 h-5 rounded-full bg-[#0f62fe]/10 dark:bg-[#0f62fe]/20 text-[#0f62fe] dark:text-[#38bdf8] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5.5 INTERACTIVE CS SANDBOX */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 px-4 sm:px-6 border-t border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#0f62fe]/20 bg-[#0f62fe]/5 dark:bg-[#0f62fe]/20 text-[#0f62fe] dark:text-[#38bdf8] text-[10px] font-bold shadow-sm mb-4">
            <span>Concept Sandbox</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Test Your Concept Strength
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
            Solve this real GATE-level DBMS question. Proves if you rely on shortcuts or understand first-principles reasoning.
          </p>

          <div className="mt-8 bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-left shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider">DBMS • Concurrency</span>
              <span className="text-[10px] text-red-500 font-bold">Medium Difficulty</span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-gray-100 leading-relaxed">
              Question: In a DBMS, which transaction isolation level guarantees complete prevention of all three read anomalies: Dirty Reads, Non-Repeatable Reads, and Phantom Reads?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                { key: "A", text: "Read Uncommitted", isCorrect: false },
                { key: "B", text: "Read Committed", isCorrect: false },
                { key: "C", text: "Repeatable Read", isCorrect: false },
                { key: "D", text: "Serializable", isCorrect: true }
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => {
                    setSelectedOption(opt.key)
                    setSandboxAnswer(opt.isCorrect ? "correct" : "incorrect")
                  }}
                  className={`w-full p-4 rounded-xl text-left border text-xs sm:text-sm transition-all duration-300 flex items-center justify-between
                    ${selectedOption === opt.key
                      ? opt.isCorrect
                        ? "border-emerald-500 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300"
                        : "border-red-500 bg-red-500/5 text-red-700 dark:text-red-300"
                      : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-gray-300"
                    }`}
                >
                  <span><strong>{opt.key}.</strong> {opt.text}</span>
                  {selectedOption === opt.key && (
                    <span className="font-bold">
                      {opt.isCorrect ? "✓ Correct" : "✗ Incorrect"}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {sandboxAnswer === "correct" && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 transition-all duration-300">
                🎉 <strong>Perfect!</strong> Serializable isolation guarantees correct execution schedules by locking ranges. Ready to study in-depth DBMS concurrency schedules with BARC Scientist mentors? 
                <div className="mt-3">
                  <a href="#pricing" className="inline-flex items-center gap-1 bg-[#0f62fe] text-white hover:bg-[#0043ce] font-bold px-4 py-2 rounded-lg text-xs transition">
                    View Recommended Cohorts →
                  </a>
                </div>
              </div>
            )}

            {sandboxAnswer === "incorrect" && (
              <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs sm:text-sm text-red-800 dark:text-red-300 transition-all duration-300">
                💡 <strong>Hint:</strong> The selected level allows anomalies. Recall that Repeatable Read locks rows but not index ranges, which leaves it vulnerable to Phantom Reads. Try choosing the strictest level!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. MOVING STRIP (GREEN TEAL) */}
      <div className="w-full bg-[#0f62fe] text-white overflow-hidden py-3 font-semibold text-xs tracking-wider select-none border-t border-b border-[#0b4ec2] relative flex items-center">
        <div className="flex animate-marquee whitespace-nowrap gap-16">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className="flex items-center gap-16 shrink-0">
              <span className="flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-yellow-350 shrink-0" />
                <span>Limited Time Early Bird Offer — 30% OFF on all courses! Enroll now!</span>
              </span>
              <span className="flex items-center gap-2">
                <LightningIcon className="w-4 h-4 text-amber-350 shrink-0" />
                <span>BARC Interview Preparation Batch starts soon. Only a few seats left!</span>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* 6. ONLINE COURSES & PRICING CARDS */}
      <section id="pricing" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 dark:text-white">
            GATE CS Online Courses & Test Series
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">Choose the perfect course for your GATE CS journey</p>
          
          {/* Year Switch Tab */}
          <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 mt-8 shadow-inner">
            <button
              onClick={() => setActiveYearTab("gate2027")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                ${activeYearTab === "gate2027" ? "bg-[#0f62fe] text-white shadow-sm" : "text-slate-500 dark:text-gray-400"}`}
            >
              2027 Courses
            </button>
            <button
              onClick={() => setActiveYearTab("gate2028")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                ${activeYearTab === "gate2028" ? "bg-[#0f62fe] text-white shadow-sm" : "text-slate-500 dark:text-gray-400"}`}
            >
              2028 Courses
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          {PROGRAMS_DATA[activeYearTab].map((p, idx) => {
            const isRecommended = quizStep === 3 && (
              p.title.toLowerCase().includes(recommendation.title.toLowerCase()) ||
              recommendation.title.toLowerCase().includes(p.title.toLowerCase())
            )
            return (
              <div
                key={idx}
                className={`relative rounded-3xl border flex flex-col justify-between bg-white dark:bg-[#0d1527] p-6 shadow-sm hover:shadow-md transition duration-300
                  ${isRecommended 
                    ? "border-amber-500 ring-4 ring-amber-500/10 scale-[1.02] z-10"
                    : p.badge === "Most Popular" 
                      ? "border-[#0f62fe] dark:border-[#0f62fe]/60 ring-2 ring-[#0f62fe]/10" 
                      : "border-slate-200 dark:border-slate-800"}`}
              >
                {/* Early Bird Ribbon */}
                {p.originalPrice && (
                  <div className="absolute top-[-10px] right-[-10px] bg-[#0f62fe] text-white text-[9px] font-bold px-2 py-2 rounded-full shadow shadow-[#0f62fe]/20 flex flex-col items-center justify-center leading-none w-10 h-10 border border-white z-10">
                    <span>30%</span>
                    <span className="text-[7px]">OFF</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 text-white rounded-full ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    {isRecommended && (
                      <span className="text-[9px] font-extrabold bg-amber-500 text-black px-2 py-0.5 rounded-full tracking-wide">
                        ✨ Best Match
                      </span>
                    )}
                  </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">{p.title}</h3>
                
                {/* Scarcity Seat Limit Badge */}
                {p.scarcity && (
                  <div className="mt-2 text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                    <span>{p.scarcity}</span>
                  </div>
                )}

                {/* Price tag */}
                <div className="flex items-baseline gap-1.5 mt-3">
                  <span className="text-2xl font-black text-[#0f62fe] dark:text-[#38bdf8]">{p.price}</span>
                  {p.originalPrice && (
                    <span className="text-xs text-slate-400 line-through font-semibold">{p.originalPrice}</span>
                  )}
                  {p.price !== "Free" && <span className="text-[9px] text-slate-400 font-medium">+ GST</span>}
                </div>

                <p className="text-xs text-slate-500 dark:text-gray-400 mt-2.5 leading-relaxed">{p.description}</p>
                <div className="border-t border-slate-100 my-4 dark:border-slate-800" />

                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-gray-300">
                  {p.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-500 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-1 ${p.btnStyle}`}
                >
                  {p.btnText}
                </a>
              </div>
            </div>
          )
        })}
        </div>
      </section>

      {/* 6.5 COMPARE PROGRAMS MATRIX */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0f62fe] dark:text-[#38bdf8]">Choose Smartly</span>
          <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 dark:text-white mt-1">
            Compare Cohort Offerings
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">Find the right support level for your preparation goals.</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-gray-200">
              <tr>
                <th className="p-4 sm:p-5 font-bold">Preparation Features</th>
                <th className="p-4 sm:p-5 font-bold text-center">Free Demo</th>
                <th className="p-4 sm:p-5 font-bold text-center text-[#0f62fe] dark:text-[#38bdf8]">PYQ Core</th>
                <th className="p-4 sm:p-5 font-bold text-center">Concepts Pro</th>
                <th className="p-4 sm:p-5 font-bold text-center">Rank 1:1</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-gray-300">
              <tr>
                <td className="p-4 sm:p-5 font-semibold">Standard Recorded Lectures</td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold">Weekly Live Question Drills</td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">Sample only</span></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold">Advanced Concepts Modules</td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold">1:1 Strategy Meetings (Monthly)</td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold">Elite Query Support Group</td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold">Daily Pressure Execution Tests</td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold">Daily 1:1 Performance Review</td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><span className="text-slate-400">-</span></td>
                <td className="p-4 sm:p-5 text-center"><CheckIcon className="w-4 h-4 text-emerald-500 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. SUCCESS STORIES CAROUSEL */}
      <section className="bg-[#0b1329] text-white py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center scroll-mt-20" id="results">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GATE CS Toppers & Success Stories
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">20+ toppers in GATE CS — hear directly from our students</p>

          {/* Carousel Slider Row */}
          <div className="relative mt-12 flex items-center justify-center gap-4 sm:gap-6 overflow-hidden py-4 w-full select-none">
            
            {/* LEFT PREVIEW CARD */}
            <div
              onClick={handlePrevStory}
              className="hidden lg:flex flex-col justify-between w-80 h-72 rounded-3xl border border-slate-800/80 bg-[#0d172e]/40 p-6 opacity-35 scale-90 cursor-pointer transition-all duration-500 hover:opacity-50 shrink-0 select-none text-left"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-400 font-bold text-sm overflow-hidden shrink-0">
                    {SUCCESS_STORIES[prevIndex].name.split(" ")[0][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-300">{SUCCESS_STORIES[prevIndex].name}</h4>
                    <p className="text-[11px] text-sky-400 font-semibold mt-0.5">{SUCCESS_STORIES[prevIndex].rank}</p>
                    <p className="text-[10px] text-emerald-500/80 font-medium mt-0.5">{SUCCESS_STORIES[prevIndex].college}</p>
                  </div>
                </div>
                <div className="text-sky-500/10 text-3xl font-black leading-none mt-2">“</div>
                <p className="text-slate-400 text-xs mt-1 line-clamp-4 leading-relaxed">
                  {SUCCESS_STORIES[prevIndex].quote}
                </p>
              </div>
            </div>

            {/* CENTER FOCUS CARD */}
            <div className="relative w-full max-w-xl min-h-[300px] rounded-3xl border border-[#0f62fe]/80 bg-[#0d172e] p-6 sm:p-8 shadow-2xl shadow-[#0f62fe]/5 transition-all duration-500 shrink-0 flex flex-col justify-between">
              {/* Top Right Watch Button */}
              {SUCCESS_STORIES[currIndex].watchVideoId && (
                <button
                  onClick={() => {
                    setSelectedYoutubeId(SUCCESS_STORIES[currIndex].watchVideoId)
                    setIsYoutubeModalOpen(true)
                  }}
                  className="absolute top-6 right-6 inline-flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Watch</span>
                </button>
              )}

              <div>
                <div className="flex items-center gap-4 mb-5 text-left">
                  <div className="w-14 h-14 rounded-full border-2 border-[#0f62fe] bg-[#0f62fe]/10 flex items-center justify-center text-[#38bdf8] font-black text-lg overflow-hidden shrink-0">
                    {SUCCESS_STORIES[currIndex].name.split(" ")[0][0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-white">{SUCCESS_STORIES[currIndex].name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-black text-sky-400">{SUCCESS_STORIES[currIndex].rank}</span>
                      <span className="text-[10px] text-slate-400 font-medium">({SUCCESS_STORIES[currIndex].year})</span>
                    </div>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">{SUCCESS_STORIES[currIndex].college}</p>
                  </div>
                </div>

                {/* Quote Mark */}
                <div className="text-sky-500/20 text-4xl font-black leading-none mb-1 text-left">“</div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left -mt-2">
                  {SUCCESS_STORIES[currIndex].quote}
                </p>
              </div>

              {/* LinkedIn Rank Verification Link */}
              {SUCCESS_STORIES[currIndex].verificationUrl && (
                <div className="mt-6 pt-4 border-t border-slate-850 text-left">
                  <a
                    href={SUCCESS_STORIES[currIndex].verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-sky-400 hover:underline flex items-center gap-1"
                  >
                    Verify Rank ✓
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT PREVIEW CARD */}
            <div
              onClick={handleNextStory}
              className="hidden lg:flex flex-col justify-between w-80 h-72 rounded-3xl border border-slate-800/80 bg-[#0d172e]/40 p-6 opacity-35 scale-90 cursor-pointer transition-all duration-500 hover:opacity-50 shrink-0 select-none text-left"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-400 font-bold text-sm overflow-hidden shrink-0">
                    {SUCCESS_STORIES[nextIndex].name.split(" ")[0][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-300">{SUCCESS_STORIES[nextIndex].name}</h4>
                    <p className="text-[11px] text-sky-400 font-semibold mt-0.5">{SUCCESS_STORIES[nextIndex].rank}</p>
                    <p className="text-[10px] text-emerald-500/80 font-medium mt-0.5">{SUCCESS_STORIES[nextIndex].college}</p>
                  </div>
                </div>
                <div className="text-sky-500/10 text-3xl font-black leading-none mt-2">“</div>
                <p className="text-slate-400 text-xs mt-1 line-clamp-4 leading-relaxed">
                  {SUCCESS_STORIES[nextIndex].quote}
                </p>
              </div>
            </div>

            {/* Circular Arrow Navigation Buttons */}
            <button
              onClick={handlePrevStory}
              className="absolute left-2 md:left-8 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#0f62fe] text-white flex items-center justify-center transition border border-slate-800 backdrop-blur-sm shadow z-20 cursor-pointer select-none"
            >
              ←
            </button>
            <button
              onClick={handleNextStory}
              className="absolute right-2 md:right-8 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#0f62fe] text-white flex items-center justify-center transition border border-slate-800 backdrop-blur-sm shadow z-20 cursor-pointer select-none"
            >
              →
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {SUCCESS_STORIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setStoryIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${storyIndex === i ? "bg-sky-500 w-6" : "bg-slate-700"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIVE ACTIVITY FEED */}
      <div className="w-full bg-[#061d33] dark:bg-[#090f1d] py-3 text-white border-t border-b border-slate-800 overflow-hidden relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto flex items-center gap-3 px-4 text-xs font-semibold select-none flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 bg-red-500 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
            Live Activity
          </span>
          <div className="h-5 flex items-center justify-center min-w-[200px]">
            <span className={`text-slate-200 dark:text-gray-350 text-[10px] sm:text-xs transition-opacity duration-300 ${fadeState ? "opacity-100" : "opacity-0"}`}>
              {activeActivity}
            </span>
          </div>
        </div>
      </div>

      {/* YOUTUBE LECTURES SECTION */}
      <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold  text-slate-900 dark:text-white flex items-center justify-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center justify-center text-red-600">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            Watch Free <span className="text-red-600 font-extrabold">GATE DA Lectures</span> on YouTube
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Free lectures, strategies, and insights — subscribe to stay ahead!
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
          {/* Card 1 */}
          <div
            onClick={() => {
              setSelectedYoutubeId("xG2e1c9m6Yw")
              setIsYoutubeModalOpen(true)
            }}
            className="group cursor-pointer rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://img.youtube.com/vi/xG2e1c9m6Yw/hqdefault.jpg"
                alt="Why Write GATE DA? Scope & Career Benefits"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/35 transition duration-300">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition duration-300">
                  <PlayIcon className="w-6 h-6 ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-red-600 transition leading-snug">
                  Why Write GATE DA? Scope & Career Benefits
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
                  Scope, opportunities & career benefits of GATE DA...
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => {
              setSelectedYoutubeId("6NtbCuU3TLy")
              setIsYoutubeModalOpen(true)
            }}
            className="group cursor-pointer rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://img.youtube.com/vi/6NtbCuU3TLy/hqdefault.jpg"
                alt="GATE DA Books, Resources & Syllabus"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/35 transition duration-300">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition duration-300">
                  <PlayIcon className="w-6 h-6 ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-red-600 transition leading-snug">
                  GATE DA Books, Resources & Syllabus
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
                  Complete preparation guide with books and resources
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => {
              setSelectedYoutubeId("fmnOetlPwcg")
              setIsYoutubeModalOpen(true)
            }}
            className="group cursor-pointer rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://img.youtube.com/vi/fmnOetlPwcg/hqdefault.jpg"
                alt="GATE DA/CS 2027 Course Launch"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/35 transition duration-300">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition duration-300">
                  <PlayIcon className="w-6 h-6 ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white group-hover:text-red-600 transition leading-snug">
                  GATE DA/CS 2027 Course Launch
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
                  Course launch details and updates for GATE DA 2027
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Link */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          <a
            href="https://www.youtube.com/@themlhub-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-red-600 hover:text-red-500 flex items-center gap-1.5 transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Subscribe to our Channel →</span>
          </a>
        </div>
      </section>

      {/* 8. FREE GATE CS RESOURCES */}
      <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 dark:text-white">
          Free <span className="text-[#0f62fe] dark:text-[#38bdf8]">GATE CS</span> Resources
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
          Everything you need to understand the GATE Computer Science & IT exam — the syllabus, exam pattern, fees and scientist-built preparation roadmaps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {FREE_RESOURCES.map((res, i) => (
            <div key={i} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] p-6 hover:shadow-md transition">
              <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white">{res.title}</h4>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed">{res.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[10px] font-bold shadow-sm mb-4">
              <HelpIcon className="w-3.5 h-3.5" />
              <span>FAQs</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold  text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Everything you need to know about GATE CS preparation and our learning systems.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden transition">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-slate-800 dark:text-white gap-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-400 px-2 py-1 rounded">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronIcon isOpen={openFaqIndex === i} />
                </button>

                {openFaqIndex === i && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed border-t border-slate-50 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. READY TO CRACK BANNER (FOOTER CTA) */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#061d33] via-[#0d2744] to-[#12365c] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-lg shadow-[#061d33]/15">
          <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-blue-400/10 blur-2xl -z-10" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Crack GATE CS 2027?</h2>
          <p className="text-sm text-sky-100/90 mt-2 font-medium">Join Nilesh Nama today. Learn from BARC scientists, train with toppers!</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#pricing"
              className="bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-md w-full sm:w-auto text-center"
            >
              Enroll Now →
            </a>
            <a
              href="https://cohorts.nileshnama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              Try Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* 11. MULTI-COLUMN FOOTER */}
      <footer className="bg-[#040d1a] text-slate-400 py-16 px-6 lg:px-[8%] border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <Image
              src={assets.logo_dark}
              alt="Nilesh Nama"
              className="w-28"
            />
            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              India's most trusted GATE CS preparation systems. Founded by former BARC scientists & GATE toppers. Learn, train, and conquer!
            </p>
            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition"
                title="Discord"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://linkedin.com/in/nileshnama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0f62fe] text-white flex items-center justify-center transition"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:nileshnama1997@gmail.com"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-650 text-white flex items-center justify-center transition"
                title="Email"
              >
                <MailIcon />
              </a>
              <a
                href="https://wa.me/919509923340"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition"
                title="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://github.com/NileshNama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center transition"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">GATE CS Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#pricing" className="hover:text-white transition">Exam Overview</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Syllabus 2027</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Online Courses</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Fee Structure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#pricing" className="hover:text-white transition">PYQ Core Program</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Concepts Pro Program</a></li>
              <li><a href="#pricing" className="hover:text-white transition">1:1 Mentorship</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Free Demo Batch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>✉ <a href="mailto:nileshnama1997@gmail.com" className="hover:text-white transition text-slate-400">nileshnama1997@gmail.com</a></li>
              <li>📞 <a href="tel:+919509923340" className="hover:text-white transition text-slate-400">+91-9509923340</a></li>
              <li>💬 <a href="https://wa.me/919509923340" target="_blank" className="hover:text-white transition text-slate-400">WhatsApp Support</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
          <div>
            © {new Date().getFullYear()} Nilesh Nama. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400">Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* VIDEO PREVIEW MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-[#0d1527] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1527]">
              <span className="text-xs sm:text-sm font-extrabold text-[#0f62fe] tracking-wider uppercase">Sample Lecture Preview</span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-black transition"
              >
                ✕
              </button>
            </div>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-none"
                src="https://www.youtube.com/embed/z44z1U76dIs?autoplay=1"
                title="GATE CS Sample Class"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* YOUTUBE MODAL PREVIEWER */}
      {isYoutubeModalOpen && selectedYoutubeId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-[#0d1527] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1527]">
              <span className="text-xs sm:text-sm font-extrabold text-red-600 tracking-wider uppercase">YouTube Video Lecture</span>
              <button
                onClick={() => {
                  setIsYoutubeModalOpen(false)
                  setSelectedYoutubeId(null)
                }}
                className="text-slate-400 hover:text-white text-lg font-black transition"
              >
                ✕
              </button>
            </div>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-none"
                src={`https://www.youtube.com/embed/${selectedYoutubeId}?autoplay=1`}
                title="YouTube Video Lecture"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
