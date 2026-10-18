"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"
import Preloader from "@/components/Preloader" 

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

const BookIcon = ({ className = "w-5 h-5 text-[#509187] dark:text-[#5A9B92]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const CogIcon = ({ className = "w-5 h-5 text-[#509187] dark:text-[#5A9B92]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const UsersIcon = ({ className = "w-5 h-5 text-[#509187] dark:text-[#5A9B92]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const HelpIcon = ({ className = "w-4 h-4 text-[#509187] dark:text-[#5A9B92]" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.705 1.917.81 2.049c.098.133 1.39 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
)

const DiscordIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  </svg>
)

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.76v-7.6H6.46M7.84 6.94a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
  </svg>
)

const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
)

const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97a15.353 15.353 0 006.318 6.318l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V21a3 3 0 01-3 3 19.5 19.5 0 01-19.5-19.5z" />
  </svg>
)

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
      badgeColor: "bg-[#061d33] dark:bg-[#509187]",
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
      btnStyle: "bg-[#509187] text-white hover:bg-[#3e6c65] shadow-md shadow-[#509187]/20",
      link: "https://cohorts.nileshnama.com/new-courses/5-nn-gate-barc-pyq-core-program"
    },
    {
      title: "Concepts Pro Program",
      price: "₹41,300/-",
      originalPrice: "₹49,999",
      badge: "Best Value",
      badgeColor: "bg-[#061d33] dark:bg-[#509187]",
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
      btnStyle: "border border-[#509187] dark:border-[#5A9B92] text-[#509187] dark:text-[#5A9B92] hover:bg-[#509187]/5",
      link: "https://cohorts.nileshnama.com/new-courses/4-nn-gate-barc-rank-accelerator-program"
    }
  ],
  gate2028: [
    {
      title: "GATE CS 2-Year Foundation",
      price: "₹14,800/-",
      originalPrice: "₹19,999",
      badge: "Long Term",
      badgeColor: "bg-[#061d33] dark:bg-[#509187]",
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
      btnStyle: "bg-[#509187] text-white hover:bg-[#3e6c65] shadow-md shadow-[#509187]/20",
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

const GATE_RESOURCES = [
  {
    title: "GATE CS & DA Exam Overview",
    desc: "What GATE CS & DA is, who it's for, weightage metrics, and a scientist-built preparation roadmap.",
    tag: "Roadmap & Strategy",
    url: "https://cohorts.nileshnama.com/books"
  },
  {
    title: "GATE CS & DA Syllabus",
    desc: "Subject-wise topics, weightage chart, and core system priority ratings — downloadable as a PDF.",
    tag: "Full Curriculum",
    url: "https://cohorts.nileshnama.com/study-material"
  },
  {
    title: "Online Course & Coaching",
    desc: "How to choose a GATE CS & DA online course, and why first-principles coaching is essential.",
    tag: "Guidance & Selection",
    url: "https://cohorts.nileshnama.com/new-courses?examId=1"
  },
  {
    title: "Course Fees & Intakes",
    desc: "Transparent pricing details for Core, Pro, and the standalone Mentorship Programs.",
    tag: "Transparent Pricing",
    url: "https://cohorts.nileshnama.com/new-courses?examId=6"
  },
  {
    title: "GATE CS & DA Test Series",
    desc: "High-quality mock tests and practice problems built to match the actual GATE CS & DA exam pattern.",
    tag: "Exam Simulation",
    url: "https://cohorts.nileshnama.com/test-series"
  },
  {
    title: "GATE CS & DA Blog & Guides",
    desc: "In-depth guides on operating systems, compilers, database theory, and exam strategies.",
    tag: "Knowledge Base",
    url: "https://cohorts.nileshnama.com/study-material"
  }
]
const FREE_RESOURCES = GATE_RESOURCES

const FAQS = [
  {
    q: "What is GATE CS (Computer Science & Information Technology)?",
    a: "GATE CS is a national-level competitive exam testing core concepts of computer science (DBMS, OS, Compilers, Networks, DSA, etc.) for admission into master's programs (M.Tech/Ph.D) at IITs/IISc and scientist recruitments (BARC, ISRO, DRDO, PSUs)."
  },
  {
    q: "Who are the instructors for the cohorts?",
    a: "The cohorts are designed and taught directly by Nilesh Nama, who Selected in BARC OCES CBT 2022, GATE CS AIR 212, and holds a B.Tech in Computer Science."
  },
  {
    q: "Which coaching is best for GATE CS preparation?",
    a: "The best coaching is one that focuses on first-principles understanding instead of rote formula memorization. Nilesh Nama's cohorts train candidates to think like system designers, enabling them to solve complex examiner-level twisted questions."
  },
  {
    q: "What is the GATE CS syllabus?",
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

// ----------------------------------------------------
// VIDEO CONFIGURATIONS
// ----------------------------------------------------
// "Know the WHY" CTA Button Modal Video ID:
const KNOW_THE_WHY_VIDEO_ID = "sd2SX1wS5iM"

const DUMMY_YOUTUBE_SESSIONS = [
  { id: "sd2SX1wS5iM", title: "OS Paging & Virtual Memory" },
  { id: "xG2e1c9m6Yw", title: "DBMS SQL & Transactions" },
  { id: "6NtbCuU3TLy", title: "Compiler Syntax Analysis" }
]

const NQUESTIONS_FEATURES = [
  {
    title: "Unlimited Topic-Wise Practice",
    desc: "Drill any topic as long as you need. When PYQs run out, generate fresh exam-style questions from your weak areas.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
  {
    title: "All GATE CS & DA PYQs (1987–Present)",
    desc: "Every PYQ in test mode with detailed solutions. Covers CS, DA, EC, EE, ME & CE papers from 1987–2026.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Topic-wise skill scores",
    desc: "Your skill score updates with every question—giving you a live map of your strengths and weaknesses, not just a mock-test percentile.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6m-6 0H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "AI doubt support",
    desc: "An AI copilot grounded in your practice history—giving you personalised explanations, not generic answers.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const DUPLICATED_NQUESTIONS = [
  ...NQUESTIONS_FEATURES,
  ...NQUESTIONS_FEATURES,
  ...NQUESTIONS_FEATURES,
  ...NQUESTIONS_FEATURES,
]

const COACH_PROFILE_IMAGES = [
  assets.profile_img_2,
  assets.profile_img_11,
  assets.profile_img_3,
  assets.profile_img_4,
  assets.profile_img_8,
  assets.profile_img_9,
  assets.profile_img_10,
]

export default function CohortsPage() {
  const [activeYearTab, setActiveYearTab] = useState("gate2027")
  const [heroVideoId, setHeroVideoId] = useState(DUMMY_YOUTUBE_SESSIONS[0]?.id || "z44z1U76dIs")
  const [storyIndex, setStoryIndex] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [coachImageIndex, setCoachImageIndex] = useState(0)
  const [isNQuestionsPaused, setIsNQuestionsPaused] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreDropdownRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSyllabusIdx, setActiveSyllabusIdx] = useState(0)
  const [resourceActiveIdx, setResourceActiveIdx] = useState(1)
  const resourceSliderRef = useRef(null)
  const resourceTrackRef = useRef(null)
  const touchStartXRef = useRef(null)
  const touchEndXRef = useRef(null)

  const handleSliderTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX
    touchEndXRef.current = null
  }

  const handleSliderTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX
  }

  const handleSliderTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return
    const diff = touchStartXRef.current - touchEndXRef.current
    if (diff > 45) {
      // Swiped left -> next
      setResourceActiveIdx((prev) => (prev + 1) % GATE_RESOURCES.length)
    } else if (diff < -45) {
      // Swiped right -> prev
      setResourceActiveIdx((prev) => (prev - 1 + GATE_RESOURCES.length) % GATE_RESOURCES.length)
    }
    touchStartXRef.current = null
    touchEndXRef.current = null
  }

  // Auto-center the active resource card in the slider
  useEffect(() => {
    if (!resourceSliderRef.current || !resourceTrackRef.current) return
    const activeEl = resourceTrackRef.current.children[resourceActiveIdx]
    if (activeEl) {
      const containerWidth = resourceSliderRef.current.offsetWidth
      const elOffset = activeEl.offsetLeft
      const elWidth = activeEl.offsetWidth
      const targetScroll = elOffset - (containerWidth / 2) + (elWidth / 2)
      resourceSliderRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      })
    }
  }, [resourceActiveIdx])

  // Coach Profile Carousel (Changes every 5s like the main hero section)
  useEffect(() => {
    const timer = setInterval(() => {
      setCoachImageIndex((prev) => (prev + 1) % COACH_PROFILE_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Quiz Recommendation States
  const [quizStep, setQuizStep] = useState(1) // 1: target year, 2: prep state, 3: result recommendation
  const [quizYear, setQuizYear] = useState(null)
  const [quizPrep, setQuizPrep] = useState(null)

  // Video Modal State
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false)
  const [selectedYoutubeId, setSelectedYoutubeId] = useState(null)

  // Lock background scroll when modal or mobile menu is open
  useEffect(() => {
    const isLocked = isVideoModalOpen || isYoutubeModalOpen || isMobileMenuOpen
    if (isLocked) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [isVideoModalOpen, isYoutubeModalOpen, isMobileMenuOpen])

  // Close modal, mobile menu, or dropdown on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false)
        setIsYoutubeModalOpen(false)
        setSelectedYoutubeId(null)
        setIsMobileMenuOpen(false)
        setMoreOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setMoreOpen(false)
      }
    }
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [moreOpen])

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
          title: <>Master GATE CS Over <span className="text-[#509187] dark:text-[#5A9B92]">24 Months</span></>,
          sub: "Learn systems reasoning & concept depth from BARC Scientists",
          desc: "A comprehensive, slow-paced study plan covering DBMS, OS, Compilers, and algorithms systematically over 2 years."
        }
      }
      if (quizPrep === "beginner") {
        return {
          title: <>Master GATE CS Concepts from <span className="text-[#509187] dark:text-[#5A9B92]">First Principles</span></>,
          sub: "Deep conceptual training designed for absolute clarity",
          desc: "Everything you need to master Operating Systems, DBMS, Compilers, and algorithms with 1:1 scientist-level strategy and doubt solving."
        }
      }
      return {
        title: <>Decode Examiner Traps & <span className="text-[#509187] dark:text-[#5A9B92]">Boost Your Rank</span></>,
        sub: "Recorded + weekly live sessions focused on trap mitigation",
        desc: "Learn our trademark option elimination frameworks, time pressure execution, and detailed PYQ intention decoding."
      }
    }
    return {
      title: <>India’s Systems-Driven <span className="text-[#509187] dark:text-[#5A9B92]">GATE CS & DA</span> Preparation Platform</>,
      sub: "Learn from BARC & GATE Topper",
      desc: "Master Operating Systems, DBMS, Compilers, and Core Computer Science with recorded + live classes, exam-tested roadmaps, and 1:1 mentorship."
    }
  }

  const heroContent = getPersonalizedHero()
  const prevIndex = (storyIndex - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length
  const currIndex = storyIndex
  const nextIndex = (storyIndex + 1) % SUCCESS_STORIES.length

  return (
    <div className="cohorts-page min-h-screen bg-[#fafbfc] dark:bg-[#070b15] text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-clip">
      <Preloader
        title="NN COHORTS"
        subtitle="GATE / BARC / PSUs Exam Preparation Hub"
      />
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#5A9B92] text-white text-center py-2 px-3 text-[11px] sm:text-sm font-medium z-50 relative">
        <div className="max-w-7xl mx-auto leading-tight">
          <span className="sm:hidden">
            ✦ Explore NN Cohorts & VebSkills Programs.
            <a
              href="https://nileshnama.notion.site/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 px-2.5 py-0.5 rounded-full bg-black text-white text-[12px] font-semibold transition-all duration-300 hover:bg-black/90 hover:shadow-[0_0_18px_rgba(0,0,0,0.28)] inline-block"
            >
              Curriculum
            </a>
          </span>
          <span className="hidden sm:inline">
            ✦ Enrollments Now Open for NN Cohorts & VebSkills Programs.
            <a
              href="https://nileshnama.notion.site/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 px-3 py-1 rounded-full bg-black text-white hover:bg-black/80 transition-all duration-300 font-semibold inline-block"
            >
              Curriculum
            </a>
            • For enquiries WhatsApp at{" "}
            <a
              href="https://wa.me/919509923340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold ml-1 hover:underline"
            >
              +91 9509923340.
            </a>
          </span>
        </div>
      </div>

      {/* 2. CUSTOM NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070b15]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-[8%] py-3.5 sm:py-4 flex items-center justify-between transition-all duration-300">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={assets.logo}
              alt="Nilesh Nama"
              className="w-24 sm:w-28 cursor-pointer dark:hidden"
            />
            <Image
              src={assets.logo_dark}
              alt="Nilesh Nama"
              className="w-24 sm:w-28 cursor-pointer hidden dark:block"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation (Tracks to More) */}
        <nav className="hidden xl:flex items-center justify-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700 dark:text-gray-200 shrink-0">
          <a href="https://cohorts.nileshnama.com/new-courses?examId=6" target="_blank" rel="noopener noreferrer" className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition">Tracks</a>
          <a href="https://cohorts.nileshnama.com/new-courses?examId=1" target="_blank" rel="noopener noreferrer" className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition">Programs</a>
          <a href="https://cohorts.nileshnama.com/new-courses?examId=2" target="_blank" rel="noopener noreferrer" className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition">Interviews</a>
          <a href="https://cohorts.nileshnama.com/new-courses?examId=3" target="_blank" rel="noopener noreferrer" className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition">Mentorship</a>
          <a href="https://cohorts.nileshnama.com/test-series" target="_blank" rel="noopener noreferrer" className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition">Test Series</a>
          <a href="https://nquestions.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition">NQuestions</a>
          
          {/* Custom Dropdown */}
          <div className="relative" ref={moreDropdownRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="hover:text-[#509187] dark:hover:text-[#5A9B92] transition flex items-center gap-1.5 font-semibold"
            >
              More <ChevronIcon isOpen={moreOpen} className="w-3 h-3 text-slate-400" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 mt-3 w-80 rounded-3xl border border-slate-200 dark:border-slate-850 bg-white/95 dark:bg-[#0d1527]/95 backdrop-blur-md p-3 shadow-xl shadow-slate-200/40 dark:shadow-black/40 z-50 flex flex-col gap-1">
                
                <a
                  href="https://cohorts.nileshnama.com/quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Practice</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">CS & DA practice questions</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/new-courses?examId=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Open Access</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Free reference archives</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/books"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Resources</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Guides, Sheets &  Books</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/study-material"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Core Notes</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Handwritten Main, Shorte Notes & Formulas Sheet</p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/new-courses?examId=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">GATE PYQs</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Previous Year Questions </p>
                </a>

                <a
                  href="https://cohorts.nileshnama.com/new-courses?examId=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition text-left"
                >
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Interview PYQs</h5>
                  <p className="text-xs text-slate-400 mt-1 font-normal leading-normal">Interview in-depth prep</p>
                </a>

              </div>
            )}
          </div>
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
          <a
            href="https://cohorts.nileshnama.com/new-courses?examId=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#061d33] hover:bg-black text-white dark:bg-[#509187] dark:hover:bg-[#5A9B92] font-semibold px-3.5 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-sm shrink-0"
          >
            Explore Programs
          </a>

          {/* Mobile & Tablet Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop for Mobile/Tablet Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 xl:hidden transition-opacity duration-300 touch-none"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile/Tablet Slide-in Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-50
          bg-white dark:bg-[#070b15]
          shadow-[-10px_0_30px_rgba(0,0,0,0.3)]
          border-l border-slate-200 dark:border-slate-800
          transform transition-transform duration-300 ease-out
          flex flex-col justify-between p-6 pt-6 xl:hidden overflow-y-auto overscroll-contain
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-[#509187] dark:text-[#5A9B92]">
              NN Cohorts Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition cursor-pointer text-lg font-bold"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-2 text-sm font-semibold text-slate-800 dark:text-gray-100">
            <a
              href="https://cohorts.nileshnama.com/new-courses?examId=6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            >
              Tracks
            </a>
            <a
              href="https://cohorts.nileshnama.com/new-courses?examId=1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            >
              Programs
            </a>
            <a
              href="https://cohorts.nileshnama.com/new-courses?examId=2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            >
              Interviews
            </a>
            <a
              href="https://cohorts.nileshnama.com/new-courses?examId=3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            >
              Mentorship
            </a>
            <a
              href="https://cohorts.nileshnama.com/test-series"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            >
              Test Series
            </a>
            <a
              href="https://nquestions.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition text-[#509187] dark:text-[#5A9B92]"
            >
              NQuestions (Free Practice)
            </a>

            <div className="border-t border-slate-200 dark:border-slate-800 my-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
                Resources &amp; Notes
              </span>
            </div>

            <a
              href="https://cohorts.nileshnama.com/quiz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition text-xs"
            >
              CS &amp; DA Practice Quiz
            </a>
            <a
              href="https://cohorts.nileshnama.com/new-courses?examId=5"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition text-xs"
            >
              Open Access Free Archives
            </a>
            <a
              href="https://cohorts.nileshnama.com/books"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition text-xs"
            >
              Reference Books &amp; Guides
            </a>
            <a
              href="https://cohorts.nileshnama.com/study-material"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition text-xs"
            >
              Handwritten Core Notes &amp; Formulas
            </a>
            <a
              href="https://cohorts.nileshnama.com/new-courses?examId=8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition text-xs"
            >
              GATE &amp; Interview PYQs
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
          <a
            href="https://cohorts.nileshnama.com/new-courses?examId=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#509187] hover:bg-[#3e6c65] text-white font-bold py-3 rounded-xl text-center text-xs sm:text-sm shadow-md transition"
          >
            Explore Programs →
          </a>
          <a
            href="https://wa.me/919509923340"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-800 dark:text-gray-200 font-semibold py-2.5 rounded-xl text-center text-xs transition"
          >
            WhatsApp Support: +91 9509923340
          </a>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f7fc] to-[#e2edf8] text-[#061d33] dark:from-[#070b15] dark:via-[#0d1527] dark:to-[#0f172a] dark:text-white pt-8 sm:pt-10 lg:pt-12 pb-16 px-4 sm:px-6 lg:px-[8%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-[#509187]/5 blur-3xl -z-10" />

        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: TEXT DATA */}
          <div className="lg:col-span-6 xl:col-span-7 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-slate-200/80 bg-slate-100/60 dark:border-white/20 dark:bg-white/10 text-slate-600 dark:text-sky-200 text-[11px] sm:text-xs font-semibold tracking-wide">
              <GraduationIcon className="w-4 h-4" />
              <span>Founded by GATE Topper & Selected in BARC OCES</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-left">
              {heroContent.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#061d33]/90 dark:text-sky-100 tracking-tight text-left">
              {heroContent.sub}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-sky-100/90 leading-relaxed font-normal text-left">
              {heroContent.desc}
            </p>

            <div className="flex flex-col gap-3 pt-3 w-full">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full bg-white hover:bg-slate-100 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Know the WHY</span>
                <PlayIcon className="w-4 h-4 text-[#509187]" />
              </button>

              <a
                href="https://cohorts.nileshnama.com/new-courses/5-gate-barc-pyq-core-program"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#509187] hover:bg-[#3e6c65] text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-[#509187]/20 flex items-center justify-center gap-2 text-center"
              >
                <span>Start PYQ Core Program</span>
                <span className="text-base sm:text-lg">→</span>
              </a>

              <a
                href="https://vebskills.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#061d33] hover:bg-black text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white border border-[#061d33] dark:border-slate-700 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-center"
              >
                <span>Explore VebSkills</span>
                <span className="text-base sm:text-lg">→</span>
              </a>
            </div>

            <div className="flex items-center justify-start gap-2 text-xs text-slate-400 dark:text-sky-200 pt-2 font-medium">
              <CheckIcon className="w-3.5 h-3.5 text-green-500" />
              <span>Trusted by Serious GATE Aspirants</span>
            </div>
          </div>

          {/* RIGHT COLUMN: YOUTUBE VIDEO PLAYER LAYOUT */}
          <div className="lg:col-span-6 xl:col-span-5 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#0d1527]/90 backdrop-blur p-3 sm:p-4 shadow-2xl relative">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-200/60 dark:border-slate-800/80 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                    NN Sessions
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#509187]/15 text-[#509187] dark:text-[#5A9B92]">
                  YouTube
                </span>
              </div>

              {/* YouTube Iframe Container */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-md border border-slate-900/50">
                <iframe
                  className="w-full h-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${heroVideoId}?rel=0&modestbranding=1`}
                  title="GATE CS Sample Session"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Dummy Session Switcher */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/80">
                <p className="text-[11px] font-semibold text-slate-500 dark:text-gray-400 mb-2 text-left">
                Sessions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {DUMMY_YOUTUBE_SESSIONS.map((session) => (
                    <button
                      key={session.id}
                      onClick={() => setHeroVideoId(session.id)}
                      className={`text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                        heroVideoId === session.id
                          ? 'bg-[#509187] text-white border-[#509187] shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <PlayIcon className="w-3 h-3 shrink-0" />
                      <span>{session.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
          {/* 3.5 DIAGNOSTIC PROGRAM SELECTOR WIDGET */}
          {false && (
          <div className="mt-12 max-w-2xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0d1527]/70 backdrop-blur p-6 sm:p-8 shadow-lg text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#509187] dark:text-[#5A9B92]">Prep Matcher</span>
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
                      className="px-6 py-2 rounded-xl bg-[#509187] hover:bg-[#3e6c65] text-white text-xs font-bold transition shadow shadow-[#509187]/20"
                    >
                      View Package
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          )}
      </section>

      {/* 3.5 NQUESTIONS FEATURE SECTION */}
      <section className="py-6 sm:py-8 px-3 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <style>{`
          @keyframes nquestions-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
        <div className="rounded-2xl sm:rounded-3xl border border-[#509187]/25 dark:border-[#5A9B92]/30 bg-gradient-to-b from-[#f2f8f7] via-[#e8f4f2] to-[#f2f8f7] dark:from-[#081514] dark:via-[#061211] dark:to-[#081514] p-4 sm:p-6 md:p-8 shadow-lg shadow-[#509187]/5 text-center relative overflow-hidden">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#509187]/10 border border-[#509187]/20 text-[#509187] dark:text-[#5A9B92] text-[10px] sm:text-[11px] font-semibold tracking-wide mb-3 max-w-full text-center leading-tight">
            <CheckIcon className="w-3 h-3 text-[#509187] dark:text-[#5A9B92] shrink-0" />
            <span>Included free with GATE–BARC PYQ Core Program — worth ₹1499/year</span>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto px-2">
            Unlimited Practice with{" "}
            <a
              href="https://nquestions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#509187] dark:text-[#5A9B92] underline underline-offset-4 decoration-[#509187]/40 hover:decoration-[#509187] transition-all"
            >
              NQuestions
            </a>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-2 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-normal px-2">
            Test series eventually run out. NQuestions doesn’t. Every enrollment includes NQuestions free—giving you unlimited topic-focused practice, complete PYQs, and AI doubt support.
          </p>

          {/* Auto-moving Swiped Cards Track (Moving right to left) */}
          <div
            className="relative w-full overflow-hidden my-5 py-2 select-none"
            onMouseEnter={() => setIsNQuestionsPaused(true)}
            onMouseLeave={() => setIsNQuestionsPaused(false)}
            onTouchStart={() => setIsNQuestionsPaused(true)}
            onTouchEnd={() => setIsNQuestionsPaused(false)}
          >
            {/* Left & Right Gradient edge fades */}
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#f2f8f7] via-[#f2f8f7]/90 to-transparent dark:from-[#081514] dark:via-[#081514]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#f2f8f7] via-[#f2f8f7]/90 to-transparent dark:from-[#081514] dark:via-[#081514]/90 to-transparent z-10 pointer-events-none" />

            <div
              className="flex gap-3.5 sm:gap-4.5 w-max"
              style={{
                animation: "nquestions-marquee 32s linear infinite",
                animationPlayState: isNQuestionsPaused ? "paused" : "running",
              }}
            >
              {DUPLICATED_NQUESTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[260px] sm:w-[290px] md:w-[320px] shrink-0 rounded-2xl bg-white dark:bg-[#0f172a] p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-lg hover:border-[#509187]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#509187] text-white flex items-center justify-center mb-3 shadow-sm shadow-[#509187]/25 shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button (Explore NQuestions removed, single primary CTA retained) */}
          <div className="flex items-center justify-center mt-5 px-4">
            <a
              href="https://nquestions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#509187] hover:bg-[#3e6c65] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md shadow-[#509187]/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>Get started with NQuestions</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Footer note */}
          <p className="text-[10px] sm:text-xs text-slate-400 dark:text-gray-400 mt-3 font-medium px-4">
            Preparing for GATE CS & DA? Practise thousands of topic-wise questions for free on NQuestions.
          </p>

        </div>
      </section>


      {/* 4. WHY CHOOSE SECTION */}
      <section className="bg-[#0b1329] text-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-b border-slate-850">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-sky-400">NN Cohorts</span> for GATE CS & DA?
          </h2>
          <p className="text-xs sm:text-sm text-slate-450 mt-2 max-w-xl mx-auto">We train you to think, apply, and conquer! India's most trusted GATE CS & DA coaching platform.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 text-center">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-[#0d172e]/50 p-5 sm:p-6 hover:bg-[#0d172e] hover:border-slate-700/80 transition duration-300 shadow-sm"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg shadow-blue-500/5">
                  {renderWhyChooseIcon(item.iconType)}
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <a
              href="https://nileshnama.notion.site/schedule"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition"
            >
              See the complete GATE CS curriculum →
            </a>
          </div>
        </div>
      </section>

      {/* 4.5 INSTRUCTOR SPOTLIGHT */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/10 border-t border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full md:w-5/12 lg:w-5/12 flex flex-col items-center md:items-stretch">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 sm:p-3 flex flex-col justify-between w-full h-full max-w-[360px] md:max-w-none">
              {/* Profile Image Carousel */}
              <div className="relative flex-1 w-full h-[280px] sm:h-[340px] md:h-auto min-h-[280px] md:min-h-0 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                {COACH_PROFILE_IMAGES.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                      coachImageIndex === idx
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Nilesh Nama - Coach"
                      priority={idx === 0}
                      fill
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                      className="w-full h-full object-cover object-top rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-3 pb-1 shrink-0">
                {COACH_PROFILE_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCoachImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      coachImageIndex === idx
                        ? "w-5 bg-[#509187]"
                        : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-between space-y-4">
            <div>
              <span className="inline-block text-[#509187] dark:text-[#5A9B92] text-xs font-bold uppercase tracking-wider text-left">
                Meet Your Coach
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white text-left leading-tight mt-1">
                Learn Computer Science and Data Science From a BARC & GATE Topper
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 leading-relaxed text-left mt-3">
                Hi, I'm Nilesh Nama. During my preparation journey, I Selected in BARC OCES CBT 2022 and GATE CS AIR 212. I designed these cohorts with a singular focus: training you to think from first principles. We don't teach shortcuts; we build system-level intuition so you can tackle complex questions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-left">
              <div>
                <h4 className="text-xs sm:text-base lg:text-xl font-bold text-[#509187] dark:text-[#5A9B92] leading-tight">SELECTED IN</h4>
                <p className="text-[8.5px] sm:text-[10px] text-slate-400 font-semibold truncate sm:whitespace-normal">BARC OCES Exam</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-base lg:text-xl font-bold text-[#509187] dark:text-[#5A9B92] leading-tight">AIR 212</h4>
                <p className="text-[8.5px] sm:text-[10px] text-slate-400 font-semibold truncate sm:whitespace-normal">GATE CS Exam</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-base lg:text-xl font-bold text-[#509187] dark:text-[#5A9B92] leading-tight">99.9%</h4>
                <p className="text-[8.5px] sm:text-[10px] text-slate-400 font-semibold truncate sm:whitespace-normal">CS Conceptual Index</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 CURRICULUM EXPLORER */}
      {false && (
      <section id="curriculum" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#509187] dark:text-[#5A9B92]">Deep Subject Depth</span>
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
                    ? "bg-[#509187]/10 border-[#509187] text-[#509187] dark:text-[#5A9B92] dark:bg-[#509187]/20"
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
              <span className="w-1.5 h-6 bg-[#509187] rounded-full" />
              Detailed Modules for {CURRICULUM_DATA[activeSyllabusIdx].subject}
            </h4>
            <ul className="space-y-4">
              {CURRICULUM_DATA[activeSyllabusIdx].topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-gray-300 text-left">
                  <span className="w-5 h-5 rounded-full bg-[#509187]/10 dark:bg-[#509187]/20 text-[#509187] dark:text-[#5A9B92] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      )}

      {/* 5.5 INTERACTIVE CS SANDBOX */}
      {false && (
      <section className="bg-slate-50 dark:bg-slate-900/40 py-20 px-4 sm:px-6 border-t border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#509187]/20 bg-[#509187]/5 dark:bg-[#509187]/20 text-[#509187] dark:text-[#5A9B92] text-[10px] font-bold shadow-sm mb-4">
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
                  <a href="#pricing" className="inline-flex items-center gap-1 bg-[#509187] text-white hover:bg-[#3e6c65] font-bold px-4 py-2 rounded-lg text-xs transition">
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
      )}

      {/* 5. MOVING STRIP (GREEN TEAL) */}
      <div className="w-full bg-[#509187] text-white overflow-hidden py-3 font-semibold text-xs tracking-wider select-none border-t border-b border-[#36605a] relative flex items-center">
        <div className="flex animate-marquee whitespace-nowrap gap-16">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className="flex items-center gap-16 shrink-0">
              <span className="flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-yellow-350 shrink-0" />
                <span>Limited Time Early Bird Offer — 10% OFF on all courses! Enroll now!</span>
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
      {false && (
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
                ${activeYearTab === "gate2027" ? "bg-[#509187] text-white shadow-sm" : "text-slate-500 dark:text-gray-400"}`}
            >
              2027 Courses
            </button>
            <button
              onClick={() => setActiveYearTab("gate2028")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                ${activeYearTab === "gate2028" ? "bg-[#509187] text-white shadow-sm" : "text-slate-500 dark:text-gray-400"}`}
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
                      ? "border-[#509187] dark:border-[#509187]/60 ring-2 ring-[#509187]/10" 
                      : "border-slate-200 dark:border-slate-800"}`}
              >
                {/* Early Bird Ribbon */}
                {p.originalPrice && (
                  <div className="absolute top-[-10px] right-[-10px] bg-[#509187] text-white text-[9px] font-bold px-2 py-2 rounded-full shadow shadow-[#509187]/20 flex flex-col items-center justify-center leading-none w-10 h-10 border border-white z-10">
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
                  <span className="text-2xl font-black text-[#509187] dark:text-[#5A9B92]">{p.price}</span>
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
      )}

      {/* 6.5 COMPARE PROGRAMS MATRIX */}
      {false && (
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#509187] dark:text-[#5A9B92]">Choose Smartly</span>
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
                <th className="p-4 sm:p-5 font-bold text-center text-[#509187] dark:text-[#5A9B92]">PYQ Core</th>
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
      )}

      {/* 7. SUCCESS STORIES CAROUSEL */}
      {false && (
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
            <div className="relative w-full max-w-xl min-h-[300px] rounded-3xl border border-[#509187]/80 bg-[#0d172e] p-6 sm:p-8 shadow-2xl shadow-[#509187]/5 transition-all duration-500 shrink-0 flex flex-col justify-between">
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
                  <div className="w-14 h-14 rounded-full border-2 border-[#509187] bg-[#509187]/10 flex items-center justify-center text-[#5A9B92] font-black text-lg overflow-hidden shrink-0">
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
              className="absolute left-2 md:left-8 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#509187] text-white flex items-center justify-center transition border border-slate-800 backdrop-blur-sm shadow z-20 cursor-pointer select-none"
            >
              ←
            </button>
            <button
              onClick={handleNextStory}
              className="absolute right-2 md:right-8 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#509187] text-white flex items-center justify-center transition border border-slate-800 backdrop-blur-sm shadow z-20 cursor-pointer select-none"
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
      )}


      {/* YOUTUBE LECTURES SECTION */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
            <span className="inline-flex items-center justify-center text-red-600">
              <svg className="w-7 h-7 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            <span>Watch Free <span className="text-red-600 font-extrabold">GATE CS & DA Lectures</span> on YouTube</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
            Free lectures, strategies, and insights — subscribe to stay ahead!
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 text-left">
          {/* Card 1 */}
          <div
            onClick={() => {
              setSelectedYoutubeId("xG2e1c9m6Yw")
              setIsYoutubeModalOpen(true)
            }}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://img.youtube.com/vi/xG2e1c9m6Yw/hqdefault.jpg"
                alt="Why Write GATE DA? Scope & Career Benefits"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/35 transition duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition duration-300">
                  <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
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
            className="group cursor-pointer rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://img.youtube.com/vi/6NtbCuU3TLy/hqdefault.jpg"
                alt="GATE DA Books, Resources & Syllabus"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/35 transition duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition duration-300">
                  <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
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
            className="sm:col-span-2 lg:col-span-1 max-w-md sm:mx-auto lg:max-w-none w-full group cursor-pointer rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1527] overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col"
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
            href="https://www.youtube.com/@nileshnama"
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

      {/* 8. GATE CS & DA RESOURCES SLIDER */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto text-center relative overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[22rem] rounded-full bg-[#509187]/8 dark:bg-[#5A9B92]/10 blur-3xl -z-10 pointer-events-none" />

        <div className="px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            <span className="text-[#509187] dark:text-[#5A9B92]">GATE CS & DA</span> Resources
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-2.5 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything you need to understand the GATE Computer Science, DA & IT exam — the syllabus, exam pattern, fees and scientist-built preparation roadmaps.
          </p>
        </div>

        {/* Carousel Slider Container */}
        <div className="relative w-full mt-8 sm:mt-12 select-none">
          {/* Left Arrow Button (Tablet & Desktop) */}
          <button
            type="button"
            onClick={() => setResourceActiveIdx((prev) => (prev - 1 + GATE_RESOURCES.length) % GATE_RESOURCES.length)}
            className="hidden sm:flex absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white items-center justify-center shadow-2xl backdrop-blur-sm z-30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous resource"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button (Tablet & Desktop) */}
          <button
            type="button"
            onClick={() => setResourceActiveIdx((prev) => (prev + 1) % GATE_RESOURCES.length)}
            className="hidden sm:flex absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white items-center justify-center shadow-2xl backdrop-blur-sm z-30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next resource"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Scroll Track with Touch Swipe */}
          <div
            ref={resourceSliderRef}
            onTouchStart={handleSliderTouchStart}
            onTouchMove={handleSliderTouchMove}
            onTouchEnd={handleSliderTouchEnd}
            className="overflow-x-auto no-scrollbar scroll-smooth py-6 touch-pan-x"
          >
            <div
              ref={resourceTrackRef}
              className="flex items-center gap-4 sm:gap-6 md:gap-8 px-[10vw] sm:px-[22vw] md:px-[28vw] lg:px-[33vw] w-max"
            >
              {GATE_RESOURCES.map((res, i) => {
                const isActive = i === resourceActiveIdx
                return (
                  <div
                    key={i}
                    onClick={() => setResourceActiveIdx(i)}
                    className={`rounded-3xl transition-all duration-500 p-5 sm:p-7 md:p-8 flex flex-col justify-between text-left shrink-0 cursor-pointer ${
                      isActive
                        ? "w-[84vw] max-w-[340px] sm:max-w-none sm:w-[380px] md:w-[410px] bg-[#0c1730] text-white border-2 border-[#509187] shadow-2xl scale-100 sm:scale-105 z-20"
                        : "w-[75vw] max-w-[300px] sm:max-w-none sm:w-[340px] md:w-[370px] bg-white dark:bg-[#0c1629] text-slate-800 dark:text-gray-200 border border-slate-200/90 dark:border-slate-800 shadow-md scale-95 opacity-60 sm:opacity-75 hover:opacity-95"
                    }`}
                  >
                    <div>
                      {/* Code Tag Badge `< >` matching reference image */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono font-bold text-xs sm:text-sm mb-4 sm:mb-5 shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-white text-[#0c1730] shadow-md scale-105"
                            : "bg-[#509187]/15 text-[#509187] dark:text-[#5A9B92]"
                        }`}
                      >
                        <span className="text-sm sm:text-base font-extrabold tracking-tighter">&lt;&gt;</span>
                      </div>

                      <h4
                        className={`text-base sm:text-lg md:text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                          isActive ? "text-white" : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {res.title}
                      </h4>

                      <p
                        className={`text-xs sm:text-sm mt-2.5 sm:mt-3 leading-relaxed font-normal transition-colors duration-300 ${
                          isActive ? "text-slate-200/90" : "text-slate-500 dark:text-gray-400"
                        }`}
                      >
                        {res.desc}
                      </p>
                    </div>

                    <div className="pt-5 sm:pt-6 mt-4 border-t border-white/10 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                      <span className={isActive ? "text-[#5A9B92]" : "text-slate-400"}>
                        {res.tag}
                      </span>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-1 transition-transform duration-300 hover:underline ${
                          isActive ? "text-white translate-x-1" : "text-[#509187] dark:text-[#5A9B92]"
                        }`}
                      >
                        Explore →
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Slider Pagination Controls (Mobile Arrows + Dots) */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setResourceActiveIdx((prev) => (prev - 1 + GATE_RESOURCES.length) % GATE_RESOURCES.length)}
              className="sm:hidden w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous resource"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {GATE_RESOURCES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setResourceActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    resourceActiveIdx === idx
                      ? "w-7 bg-[#509187]"
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to resource slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setResourceActiveIdx((prev) => (prev + 1) % GATE_RESOURCES.length)}
              className="sm:hidden w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next resource"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#070b15] dark:via-[#09101f] dark:to-[#070b15] py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[42rem] h-[24rem] rounded-full bg-[#509187]/8 dark:bg-[#5A9B92]/10 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-sky-400/5 blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#509187]/25 dark:border-[#5A9B92]/30 bg-[#509187]/10 dark:bg-[#5A9B92]/15 text-[#509187] dark:text-[#5A9B92] text-xs font-bold shadow-sm tracking-wide mb-3.5">
              <HelpIcon className="w-4 h-4 text-[#509187] dark:text-[#5A9B92]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Got Questions? We Have <span className="text-[#509187] dark:text-[#5A9B92]">Answers</span>.
            </h2>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-2.5 leading-relaxed font-normal">
              Everything you need to know about our first-principles teaching, BARC/GATE syllabus coverage, and platform features.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaqIndex === i
              return (
                <div
                  key={i}
                  className={`group rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "border-[#509187] dark:border-[#5A9B92] bg-white dark:bg-[#0c1629] shadow-lg shadow-[#509187]/10"
                      : "border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-[#0c1629]/70 backdrop-blur-sm shadow-sm hover:border-[#509187]/50 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="w-full px-4 sm:px-6 py-3.5 sm:py-4.5 flex items-center justify-between text-left gap-3 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-4 flex-1">
                      <span
                        className={`font-mono text-xs font-bold px-2 sm:px-2.5 py-1 rounded-lg shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#509187] text-white shadow-sm shadow-[#509187]/30"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-[#509187]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-xs sm:text-sm md:text-base font-bold transition-colors duration-200 ${
                          isOpen
                            ? "text-[#509187] dark:text-[#5A9B92]"
                            : "text-slate-800 dark:text-white group-hover:text-[#509187] dark:group-hover:text-[#5A9B92]"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#509187]/15 text-[#509187] dark:text-[#5A9B92] rotate-180"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-[#509187]/10 group-hover:text-[#509187]"
                      }`}
                    >
                      <svg className="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Smooth Grid Expand/Collapse Container */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                        <div className="pt-2 pl-0 sm:pl-11">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Support Card */}
          <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0c1629] p-4 sm:p-7 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#509187]/15 text-[#509187] dark:text-[#5A9B92] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-[#509187] dark:text-[#5A9B92]" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Have more questions about admissions or syllabus?
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                  Chat directly with our team on WhatsApp for personalized guidance.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919509923340"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#509187] hover:bg-[#3e6c65] text-white font-bold text-xs transition-all duration-300 shadow-md shadow-[#509187]/20 flex items-center justify-center gap-2 shrink-0 group hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 10. READY TO CRACK BANNER (FOOTER CTA) */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#061d33] via-[#0d2744] to-[#12365c] text-white p-6 sm:p-10 lg:p-14 text-center relative overflow-hidden shadow-lg shadow-[#061d33]/15">
          <div className="absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-blue-400/10 blur-2xl -z-10" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Ready to Crack GATE CS & DA?</h2>
          <p className="text-xs sm:text-sm text-sky-100/90 mt-2 font-medium">Join NN Cohorts today. Learn from BARC & Gate Topper, train with toppers!</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="https://cohorts.nileshnama.com/new-courses/5-gate-barc-pyq-core-program"
              className="bg-[#509187] hover:bg-[#3e6c65] text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-md w-full sm:w-auto text-center"
            >
              Enroll Now →
            </a>
            <a
              href="https://cohorts.nileshnama.com/new-courses/15-nn-gate-barc-thinking-series-free-access"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              Try Open Access Cohort
            </a>
          </div>
        </div>
      </section>

      {/* 11. MULTI-COLUMN FOOTER */}
      <footer className="bg-[#040d1a] text-slate-400 py-12 sm:py-16 px-4 sm:px-6 lg:px-[8%] border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-12">
          
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Image
              src={assets.logo_dark}
              alt="Nilesh Nama"
              className="w-28"
            />
            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              India’s Systems-Driven GATE CS Preparation Platform. Founded by former BARC & GATE topper. Learn, train, and conquer!
            </p>
            {/* Social Icons row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com/in/nileshnama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#0077b5] text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="mailto:hello@nileshnama.com"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#EA4335] text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="Email"
                aria-label="Send Email"
              >
                <MailIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://wa.me/919509923340"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#25D366] text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="WhatsApp Support"
                aria-label="WhatsApp Support"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://www.youtube.com/@nileshnama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/90 hover:bg-[#FF0000] text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="YouTube Channel"
                aria-label="YouTube Channel"
              >
                <YouTubeIcon className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">GATE CS Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://cohorts.nileshnama.com/study-material" className="hover:text-white transition">Exam Overview</a></li>
              <li><a href="https://cohorts.nileshnama.com/study-material" className="hover:text-white transition">Syllabus 2027</a></li>
              <li><a href="https://cohorts.nileshnama.com/new-courses?examId=1" className="hover:text-white transition">Online Courses</a></li>
              <li><a href="https://cohorts.nileshnama.com/" className="hover:text-white transition">Fee Structure</a></li>
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://cohorts.nileshnama.com/new-courses/5-gate-barc-pyq-core-program" className="hover:text-white transition">PYQ Core Program</a></li>
              <li><a href="https://cohorts.nileshnama.com/new-courses?examId=2" className="hover:text-white transition">BARC Mock Interview Program</a></li>
              <li><a href="https://cohorts.nileshnama.com/new-courses?examId=3" className="hover:text-white transition">1:1 Mentorship</a></li>
              <li><a href="https://cohorts.nileshnama.com/new-courses?examId=5" className="hover:text-white transition">Open Access Cohort Batch</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href="mailto:hello@nileshnama.com" 
                  className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition"
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800/90 border border-slate-700/70 flex items-center justify-center text-[#509187] dark:text-[#5A9B92] group-hover:bg-[#509187] group-hover:text-white group-hover:border-[#509187] transition-all duration-300 shadow-sm shrink-0">
                    <MailIcon className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">hello@nileshnama.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919509923340" 
                  className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition"
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800/90 border border-slate-700/70 flex items-center justify-center text-[#509187] dark:text-[#5A9B92] group-hover:bg-[#509187] group-hover:text-white group-hover:border-[#509187] transition-all duration-300 shadow-sm shrink-0">
                    <PhoneIcon className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">+91-9509923340</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919509923340" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition"
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800/90 border border-slate-700/70 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-all duration-300 shadow-sm shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">WhatsApp Support</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
          <div>
            © {new Date().getFullYear()} Nilesh Nama. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://cohorts.nileshnama.com/privacy-policy" className="hover:text-slate-400">Privacy Policy</a>
            <span>·</span>
            <a href="https://cohorts.nileshnama.com/terms" className="hover:text-slate-400">Terms of Service</a>
            <span>·</span>
            <a href="https://cohorts.nileshnama.com/refund-policy" className="hover:text-slate-400">Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* VIDEO PREVIEW MODAL */}
      {isVideoModalOpen && (
        <div 
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all duration-300 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#0d1527] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl cursor-default"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1527]">
              <span className="text-xs sm:text-sm font-extrabold text-[#509187] tracking-wider uppercase">Know the WHY</span>
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
                src={`https://www.youtube.com/embed/${KNOW_THE_WHY_VIDEO_ID}?autoplay=1`}
                title="Know the WHY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* YOUTUBE MODAL PREVIEWER */}
      {isYoutubeModalOpen && selectedYoutubeId && (
        <div 
          onClick={() => {
            setIsYoutubeModalOpen(false)
            setSelectedYoutubeId(null)
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all duration-300 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#0d1527] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl cursor-default"
          >
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
