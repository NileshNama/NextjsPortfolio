import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Operating Systems',
        description: 'Concept-driven reference text for OS fundamentals.',
        bgImage: '/work-1.png',
        volumeLabel: "Volume I",
        details: [
      "This book approaches Operating Systems as a collection of trade-offs, constraints, and architectural decisions — not a checklist of algorithms or definitions.",
      "Every major concept (processes, memory, scheduling, concurrency, file systems) is explained through the lens of why it was designed that way and what problems it solves.",
      "Special emphasis is placed on how examiners and interviewers evaluate OS understanding — focusing on reasoning, explanation clarity, and boundary cases.",
      "Common student misconceptions and shallow intuitions are explicitly surfaced and corrected to prevent false confidence.",
      "Examples are used selectively to strengthen mental models, not to function as a question bank.",
      "Designed for GATE, BARC, ISRO, PSU-level interviews, and serious computer science learners seeking durable conceptual clarity.",,
    ],
    purchaseLink: "https://cohorts.nileshnama.com/books/3-operating-systems",
    sampleLink: "https://drive.google.com/drive/folders/1BjsfOorCIvMoX1TNoZRCqL8iJRBWXqmc?usp=sharing",
    genre: "Standard Text",
    },
    {
        title: 'DBMS',
        description: 'Structured reference text for database systems.',
        bgImage: '/work-2.png',
         volumeLabel: "Volume I",
        details: [
      "This book frames DBMS as a system balancing consistency, performance, durability, and usability — not as isolated SQL commands.",
      "Concepts like normalization, indexing, transactions, and concurrency control are explained through decision-making lenses.",
      "Readers are trained to reason about query execution, locking behavior, and failure handling rather than memorizing definitions.",
      "Special focus is placed on how DBMS questions test understanding of trade-offs, not syntax knowledge.",
      "Common student errors in transaction reasoning and normalization logic are highlighted and corrected.",
      "Designed for GATE, PSU exams, interviews, and engineers who work with real data systems.",
    ],

    purchaseLink: "https://cohorts.nileshnama.com/books/6-data-systems",
    sampleLink: "https://drive.google.com/drive/folders/1xL-g0T8QBX7t1tSOABkaYuw3-VUhvhrT?usp=sharing",
        genre: "Standard Text",

    },

    {
        title: 'Compiler Design',
        description: 'Reference series for deeper conceptual understanding.',
        bgImage: '/work-4.png',
        volumeLabel: "Volume I",
        details: [
      "This book approaches Compiler Design as an end-to-end transformation system — not as disconnected phases like lexical analysis, parsing, or code generation.",
    "Each stage of the compiler is explained in terms of why it exists, what constraints it solves, and what trade-offs are involved in its design.",
    "Rather than memorizing grammars or algorithms, readers learn how source code intent is progressively constrained, represented, optimized, and translated.",
    "Special emphasis is placed on how examiners test compiler concepts — including ambiguity traps, grammar reasoning errors, and false intuitions around parsing.",
    "Intermediate representations, optimization logic, and target code generation are explained conceptually, not mechanically.",
    "Examples are used only to reinforce mental models, not as exhaustive derivations or rote exercises.",
    "Designed for GATE, BARC, ISRO, PSU exams, and learners who want to truly understand how programming languages are implemented.",
    ],

    purchaseLink: "https://cohorts.nileshnama.com/books/8-language-systems",
    sampleLink: "https://drive.google.com/drive/folders/1mkiGJj-i12gc4kbL4i3yQLMSQINEeaqv?usp=sharing",
        genre: "Standard Text",

    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Software Engineering', description: 'Building scalable software systems with clarity.', link: 'https://cohorts.nileshnama.com/books/4-nn-proframing-standard-reference-edition-physical-combo' },
    { icon: assets.mobile_icon, title: 'Education Systems', description: 'Thinking-first learning systems for serious aspirants.', link: 'https://cohorts.nileshnama.com' },
    { icon: assets.ui_icon, title: ' Author & Writing', description: ' Reference-level technical writing for long-term clarity.', link: '' },
    { icon: assets.graphics_icon, title: 'Research & Systems Thinking', description: 'Research-driven frameworks for structured reasoning.', link: '' },
    
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Core Stack', description: 'Full stack engineering across React, Next.js, Node.js, and AI-driven systems — focused on building scalable, maintainable, and clarity-first digital products.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Formal Education', description: 'Trained in Computer Science with a strong focus on first-principles thinking, system-level architecture, and durable technical understanding.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work Focus', description: 'Designing scalable, long-term systems across software engineering, education design, and technical writing — beyond short-term execution.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const cohortsData = [
    {
        title: 'GATE–BARC PYQ Core Program',
        description: 'Learn how to decode and approach PYQs systematically.',
        bgImage: '/NileshN.png',
        videoId: "vjUQmoPP8xs",
  longDescription: "GATE–BARC PYQ Core Program trains how competitive exam questions should be approached, decoded, and reasoned about. Instead of topic-wise learning, questions are treated as decision-making instruments.",
  points: [
    "How to identify question intent within the first 5–10 seconds",
    "Elimination-driven reasoning and option analysis",
    "Forward vs backward solving decisions",
    "Concept reconstruction instead of formula recall",
    "Mistake pattern awareness and correction",
  ],
  enrollLink: "https://cohorts.nileshnama.com/new-courses/5-nn-gate-barc-pyq-core-program",
    },
    {
        title: 'Concepts Pro',
        description: 'Build system-level conceptual depth for interviews and difficult questions.',
        bgImage: '/NileshN.png',
        videoId: "X5ePwv6SnbA",
  longDescription: "GATE–BARC Concepts Pro Program is designed for aspirants who already understand fundamental concepts and standard problem-solving approaches but struggle with consistency, depth, and handling examiner-level twists. This program moves beyond surface-level preparation and develops structured, high-reliability conceptual thinking systems required to solve difficult, deceptive, and multi-layered GATE and BARC questions.",
  points: [
    "Advanced conceptual interpretation and structured problem-solving frameworks",
    "Handling deceptive, multi-concept, and examiner-twisted questions",
    "Identifying false assumptions and premature conclusions during solving",
    "Balancing speed, accuracy, and mental clarity under pressure",
    "Second-pass optimization strategies for lengthy and difficult papers",
    "Refining technical judgment and decision-making under uncertainty",
  ],
  enrollLink: "https://cohorts.nileshnama.com/new-courses/11-nn-gate-barc-concepts-pro-program",
    },
    {
        title: '1:1 Mentorship',
        description: 'GATE–BARC Exam execution Rank Accelerator Program guide',
        bgImage: '/NileshN.png',
        videoId: "debmYlOTdpM",
  longDescription: "1:1 Mentorship Cohort is a pressure-oriented mentorship program designed for aspirants who already know the syllabus but struggle to execute effectively under real exam conditions. The focus is not on revision alone, but on transforming existing knowledge into accurate decisions, disciplined thinking, and stable performance during the final phase of GATE, BARC, and technical examinations.",
  points: [
    "Question-first training focused on attempt vs skip decisions",
    "Time-pressure handling and elimination-heavy problem solving",
    "Identification of examiner traps and false confidence patterns",
    "Second-pass optimization and risk control strategies",
    "Daily thinking drills instead of passive revision",
  ],
  enrollLink: "https://cohorts.nileshnama.com/new-courses/4-nn-gate-barc-rank-accelerator-program",
    },
    {
        title: 'Full Stack + AI',
        description: 'Industry-Based Training',
        bgImage: '/NileshN.png',
        videoId: "3ZeZxQCNdns",
  longDescription: "VebSkills Cohort: Full Stack + AI Training + Industry Internship is designed for students and aspiring developers who want to build strong industry-ready skills through practical development, AI integration, and real project execution. The program focuses on structured learning, problem-solving depth, production-level thinking, and hands-on industry experience rather than theory-only training.",
  points: [
    "Building real-world full stack projects with production-oriented workflows",
    "AI-assisted development, automation, and modern engineering practices",
    "Integrating frontend, backend, databases, APIs, and deployment systems",
    "Improving communication, debugging, and technical explanation clarity",
    "Handling industry-style tasks, reviews, collaboration, and internship workflows",
  ],
  enrollLink: "https://cohorts.nileshnama.com/new-courses/19-vebskills-summer-cohort-2026-full-stack-ai-training-industry-internship",
    },
]
export const writingData = [
    {
        title: 'Operating Systems as System Design',
        description: 'Scheduling, memory, and trade-offs',
        bgImage: '',
        details: [
      " **Author:** Nilesh Nama",
      " **Published:** Jan 2026 · 10 min read",

      "---",

      "Most students approach Operating Systems as a checklist: processes, scheduling, memory, file systems. This is the fastest path to shallow understanding.",

      "Operating Systems are not a collection of features — they are design responses to constraints: hardware limits, concurrency, fairness, performance, and failure.",

      "This article reframes OS as a system design problem, where every mechanism exists because a simpler alternative failed under real conditions.",

      "### What This Perspective Changes",
      "- Scheduling is not about algorithms, but about fairness vs throughput",
      "- Memory management is not about paging, but about illusion vs cost",
      "- Concurrency is not about locks, but about safety vs performance",

      "### How Examiners Test OS",
      "Examiners rarely ask *what* something is. They ask *why it was designed that way* and *what breaks if you change it*.",

      "Boundary cases, false intuitions, and trade-off reasoning dominate both written exams and interviews.",

      "### Who This Is For",
      "- GATE, BARC, ISRO, PSU aspirants",
      "- Interview candidates facing follow-up grilling",
      "- Engineers who want durable system intuition",

      "---",
      "This article reflects the philosophy behind the NN Operating Systems reference text.",
    ],

    link: "https://cohorts.nileshnama.com/app-blog/os-system-design",
  },

    
    {
        title: 'DBMS Questions Test Reasoning',
        description: 'Transactions, isolation, and intent',
        bgImage: '',
        details: [
      "**Author:** Nilesh Nama",
      "**Published:** Jan 2026 · 9 min read",

      "---",

      "DBMS is one of the most deceptive subjects in competitive exams. Students expect queries. Examiners expect reasoning.",

      "Most DBMS questions are not testing syntax — they are testing **interpretation of constraints, assumptions, and hidden guarantees**.",

      "This article breaks down why normalization, transactions, and indexing questions fail students who memorize but succeed students who reason.",

      "### Common Reasoning Traps",
      "- Confusing logical schema with physical storage",
      "- Assuming isolation guarantees without reading conditions",
      "- Treating normalization as mechanical instead of contextual",

      "### How Examiners Structure DBMS Questions",
      "Questions are framed to look computational but resolve via logical elimination and constraint analysis.",

      "Understanding *why* a design exists matters more than remembering *how* it is defined.",

      "### Who This Is For",
      "- Exam aspirants stuck despite DBMS revision",
      "- Interview candidates facing scenario-based DB questions",
      "- Learners aiming for conceptual clarity",

      "---",
      "This reasoning-first approach underpins the NN DBMS reference material.",
    ],

    link: "https://cohorts.nileshnama.com/app-blog/dbms-reasoning",
  },

    {
        title: 'Why Network Problems Are Conceptual',
        description: 'Protocols and interpretation',
        bgImage: '',
        details: [
      "**Author:** Nilesh Nama",
      "**Published:** Jan 2026 · 8 min read",

      "---",

      "Computer Networks intimidate students because they appear formula-heavy. In reality, most network problems are **conceptual and eliminative**.",

      "This article explains how layering, abstraction, and failure models drive nearly all exam and interview questions in CN.",

      "Protocols are details. Models are what matter.",

      "### What CN Questions Actually Test",
      "- Layer responsibility and isolation",
      "- Failure propagation and recovery",
      "- Bandwidth-delay-product intuition",
      "- Trade-offs between reliability and performance",

      "Students who memorize protocols struggle when questions shift perspective.",

      "### Exam and Interview Reality",
      "Network questions reward visualization and reasoning — not computation.",

      "Recognizing which layer is responsible often eliminates incorrect options instantly.",

      "### Who This Is For",
      "- CN learners overwhelmed by formulas",
      "- Exam aspirants facing elimination-heavy questions",
      "- Interview candidates tested on system behavior",

      "---",
      "This article aligns with the NN Computer Networks conceptual framework.",
    ],

    link: "https://cohorts.nileshnama.com/app-blog/network-conceptual",
  },

    {
        title: 'Compiler Design Beyond Grammar',
        description: 'Parsing and SDT as decision-making',
        bgImage: '',
        details: [
      "**Author:** Nilesh Nama",
      "**Published:** Jan 2026 · 10 min read",

      "---",

      "Most students reduce compiler design to parsing techniques and grammar rules. This misses the core idea entirely.",

      "Compilers exist to **progressively constrain and transform meaning** — from high-level intent to machine-executable behavior.",

      "This article reframes compiler design as a system of representations, invariants, and trade-offs.",

      "### What This Perspective Unlocks",
      "- Why IRs exist and how they simplify optimization",
      "- Why parsing errors are reasoning errors, not syntax errors",
      "- Why code generation is about constraints, not instructions",

      "### How Examiners Test Compilers",
      "Ambiguity traps, grammar edge cases, and transformation logic dominate questions.",

      "Students fail when they treat phases as independent instead of connected.",

      "### Who This Is For",
      "- GATE and PSU aspirants",
      "- Learners struggling with compiler intuition",
      "- Engineers curious about language implementation",

      "---",
      "This thinking-first approach drives the NN Compiler Design reference text.",
    ],

    link: "https://cohorts.nileshnama.com/app-blog/compiler-design",
  },
]

export const podcastsData = [
    {
        id: "exam-thinking-interviews",
  title: "Exam Thinking for High-Stakes Interviews",
  meta: "Podcast · YouTube",
  type: "Podcast",
  description: "...",
  link: "https://cohorts.nileshnama.com/app-blog/3",
    },
    {
       id: "exam-thinking-interviews",
  title: "Exam Thinking for High-Stakes Interviews",
  meta: "Podcast · YouTube",
  type: "Podcast",
  description: "...",
  link: "https://cohorts.nileshnama.com/app-blog/5",
    },
    {
      id: "exam-thinking-interviews",
  title: "Exam Thinking for High-Stakes Interviews",
  meta: "Podcast · YouTube",
  type: "Podcast",
  description: "...",
  link: "https://cohorts.nileshnama.com/app-blog/4",
    },
    {
        id: "exam-thinking-interviews",
  title: "Exam Thinking for High-Stakes Interviews",
  meta: "Podcast · YouTube",
  type: "Podcast",
  description: "...",
  link: "https://cohorts.nileshnama.com/app-blog/6-why-most-aspirants-misread-questions?page=0",
    },
]
export const researchData = [
  {
      id: "os-page-replacement",
      title: "Rethinking Page Replacement as a Decision System",
      type: "Technical Research",
      status: "Working Note | Ongoing | Published",
      summary: "Short abstract-style explanation",
      details: "Longer explanation or array of paragraphs",
      link: "optional external link",
  },

  {
  id: "os-page-replacement",
  title: "Rethinking Page Replacement as a Decision System",
  type: "Technical Research",
  status: "Working Note | Ongoing | Published",
  summary: "Short abstract-style explanation",
  details: "Longer explanation or array of paragraphs",
  link: "optional external link",
},
{
  id: "os-page-replacement",
  title: "Rethinking Page Replacement as a Decision System",
  type: "Technical Research",
  status: "Working Note | Ongoing | Published",
  summary: "Short abstract-style explanation",
  details: "Longer explanation or array of paragraphs",
  link: "optional external link",
},
{
  id: "os-page-replacement",
  title: "Rethinking Page Replacement as a Decision System",
  type: "Technical Research",
  status: "Working Note | Ongoing | Published",
  summary: "Short abstract-style explanation",
  details: "Longer explanation or array of paragraphs",
  link: "optional external link",
}]