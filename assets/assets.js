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
import profile_img_2 from './profile-img-2.png';
import profile_img_3 from './profile-img-3.png';
import profile_img_4 from './profile-img-4.png';
import profile_img_5 from './profile-img-5.png';
import profile_img_6 from './profile-img-6.png';
import profile_img_7 from './profile-img-7.png';
import profile_img_8 from './profile-img-8.png';
import profile_img_9 from './profile-img-9.png';
import profile_img_10 from './profile-img-10.png';
import profile_img_11 from './profile-img-11.png';
import profile_img_12 from './profile-img-12.jpg';
import profile_img_13 from './profile-img-13.jpg';
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
import vebskills from './vebskills.png';
import work_1 from './work-1.png';
import work_2 from './work-2.png';
import work_3 from './work-3.png';
import work_4 from './work-4.png';
import cohort_nn_bg from './cohort-nn-bg.png';
import cohort_vebskills_bg from './cohort-vebskills-bg.png';

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
    profile_img_2,
    profile_img_3,
    profile_img_4,
    profile_img_5,
    profile_img_6,
    profile_img_7,
    profile_img_8,
    profile_img_9,
    profile_img_10,
    profile_img_11,
    profile_img_12,
    profile_img_13,
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
    right_arrow_bold_dark,
    vebskills,
    work_1,
    work_2,
    work_3,
    work_4,
    cohort_nn_bg,
    cohort_vebskills_bg
};

export const workData = [
    {
        title: 'Operating Systems',
        description: 'Concept-driven reference text for OS fundamentals.',
        bgImage: work_1,
        volumeLabel: "Volume I",
        details: [
      "This book approaches Operating Systems as a collection of trade-offs, constraints, and architectural decisions — not a checklist of algorithms or definitions.",
      "Every major concept (processes, memory, scheduling, concurrency, file systems) is explained through the lens of why it was designed that way and what problems it solves.",
      "Special emphasis is placed on how examiners and interviewers evaluate OS understanding — focusing on reasoning, explanation clarity, and boundary cases.",
      "Common student misconceptions and shallow intuitions are explicitly surfaced and corrected to prevent false confidence.",
      "Examples are used selectively to strengthen mental models, not to function as a question bank.",
      "Designed for GATE, BARC, ISRO, PSU-level interviews, and serious computer science learners seeking durable conceptual clarity.",
    ],
    purchaseLink: "https://cohorts.nileshnama.com/books/3-operating-systems",
    sampleLink: "https://drive.google.com/drive/folders/1BjsfOorCIvMoX1TNoZRCqL8iJRBWXqmc?usp=sharing",
    genre: "Standard Text",
    },
    {
        title: 'DBMS',
        description: 'Structured reference text for database systems.',
        bgImage: work_2,
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
        bgImage: work_4,
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
    { icon: assets.vebskills, title: 'VebSkills', description: 'Applied engineering ecosystem and production simulation lab.', link: 'https://www.vebskills.com/' },
    { icon: assets.ui_icon, title: 'Author & Writing', description: 'Reference-level technical writing for long-term clarity.', link: 'https://cohorts.nileshnama.com/books' },
    { icon: assets.graphics_icon, title: 'Research & Systems Thinking', description: 'Research-driven frameworks for structured reasoning.', link: 'https://cohorts.nileshnama.com/app-blog' },
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
        id: 'gate-pyq',
        badge: 'COHORT',
        category: 'nn',
        title: 'GATE–BARC PYQ Core Program',
        description: 'Learn how to decode and approach PYQs systematically.',
        bgImage: cohort_nn_bg,
        videoId: "AzlVYtVfO00",
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
        id: 'gate-concepts',
        badge: 'COHORT',
        category: 'nn',
        title: 'GATE–BARC Concepts',
        description: 'System-level conceptual depth for high-pressure exams.',
        bgImage: cohort_nn_bg,
        videoId: "sd2SX1wS5iM",
        longDescription: "GATE–BARC Concepts Program is designed for aspirants who already understand fundamental concepts and standard problem-solving approaches but struggle with consistency, depth, and handling examiner-level twists. This program moves beyond surface-level preparation and develops structured, high-reliability conceptual thinking systems required to solve difficult, deceptive, and multi-layered GATE and BARC questions.",
        points: [
            "Advanced conceptual interpretation and structured problem-solving frameworks",
            "Handling deceptive, multi-concept, and examiner-twisted questions",
            "Identifying false assumptions and premature conclusions during solving",
            "Balancing speed, accuracy, and mental clarity under pressure",
            "Second-pass optimization strategies for lengthy and difficult papers",
            "Refining technical judgment and decision-making under uncertainty",
        ],
        enrollLink: "https://cohorts.nileshnama.com/new-courses/11-gate-barc-concepts-program",
    },
    {
        id: 'mentorship',
        badge: 'COHORT',
        category: 'nn',
        title: '1:1 Mentorship',
        description: 'GATE–BARC exam execution & rank acceleration guide.',
        bgImage: cohort_nn_bg,
        videoId: "AR3dbS4iPeM",
        longDescription: "1:1 Mentorship Cohort is a pressure-oriented mentorship program designed for aspirants who already know the syllabus but struggle to execute effectively under real exam conditions. The focus is not on revision alone, but on transforming existing knowledge into accurate decisions, disciplined thinking, and stable performance during the final phase of GATE, BARC, and technical examinations.",
        points: [
            "Question-first training focused on attempt vs skip decisions",
            "Time-pressure handling and elimination-heavy problem solving",
            "Identification of examiner traps and false confidence patterns",
            "Second-pass optimization and risk control strategies",
            "Daily thinking drills instead of passive revision",
        ],
        enrollLink: "https://cohorts.nileshnama.com/new-courses/8-gate-barc-mentorship-program",
    },
    {
        id: 'youtube-sessions',
        badge: 'COHORT',
        category: 'nn',
        title: 'All Youtube Sessions (Open Access)',
        description: 'Deep thinking systems library for GATE & BARC prep.',
        bgImage: cohort_nn_bg,
        videoId: "bmBnSE-v0wQ",
        longDescription: "**All YouTube Sessions (Open Access)** brings together all NN Cohorts YouTube sessions in one structured, distraction-free learning space. Instead of searching through playlists, recommendations, and unrelated content, access the complete collection of sessions in one place—organized for focused and consistent preparation. Designed for aspirants who want to learn at their own pace, revisit important concepts, solve questions, and build stronger exam-oriented thinking without the distractions of the YouTube feed.",
        points: [
            "All Sessions in One Place — Access the complete NN Cohorts YouTube learning library from a single structured space.",
            "Distraction-Free Learning — Learn without recommendations, Shorts, ads, or endless scrolling pulling you away from your preparation.",
            "Structured & Organized — Find sessions systematically instead of searching through multiple playlists and videos.",
            "Learn at Your Own Pace — Pause, revisit, revise, and continue sessions whenever it fits your preparation.",
            "Exam-Focused Learning — Build concepts, solve questions, and develop the thinking approach needed for GATE, BARC, and other technical exams.",
        ],
        enrollLink: "https://cohorts.nileshnama.com/new-courses/15-all-youtube-sessions-open-access",
    },
    {
        id: 'vebskills-architecture',
        badge: 'VEBSKILLS',
        category: 'vebskills',
        title: 'Production Software Architecture',
        description: 'Distributed systems, Redis caching, microservices & Docker.',
        bgImage: cohort_vebskills_bg,
        videoId: null,
        longDescription: "Production Software Architecture is VebSkills' flagship applied engineering track designed to bridge the gap between tutorial coding and enterprise systems. Master distributed caching strategies, message queues, containerization, and backend scalability for senior technical interviews.",
        points: [
            "Distributed caching with Redis & intelligent invalidation strategies",
            "Microservices communication: REST vs gRPC vs message brokers",
            "Database indexing, query planning, and connection pooling at scale",
            "Docker multi-stage containerization & production deployment",
            "System design defense rounds for Senior SDE evaluations",
        ],
        enrollLink: "https://www.vebskills.com/",
    },
    {
        id: 'vebskills-fullstack',
        badge: 'VEBSKILLS',
        category: 'vebskills',
        title: 'Full-Stack Systems Engineering',
        description: 'Type-safe architectures, robust state & CI/CD pipelines.',
        bgImage: cohort_vebskills_bg,
        videoId: null,
        longDescription: "Full-Stack Systems Engineering trains engineers to architect end-to-end applications to enterprise standards. Build production Next.js & React architectures with strict type safety, zero-waterfall data fetching, and automated GitHub Actions pipelines.",
        points: [
            "Enterprise Next.js full-stack system architecture",
            "Strict type-safe contracts with schema validation",
            "Continuous integration & deployment with GitHub Actions",
            "Security fundamentals: OAuth2, rate limiting, and CORS",
            "Rigorous code reviews & software design patterns",
        ],
        enrollLink: "https://www.vebskills.com/",
    },
    {
        id: 'vebskills-opensource',
        badge: 'VEBSKILLS',
        category: 'vebskills',
        title: 'Open Source & System Defense',
        description: 'Real open-source PRs, code reviews & proof-of-work.',
        bgImage: cohort_vebskills_bg,
        videoId: null,
        longDescription: "Open Source & System Defense develops the habits, technical judgment, and verifiable proof-of-work required to pass senior engineering evaluations. Contribute to real open-source repositories, submit production-ready pull requests, and defend architectural trade-offs.",
        points: [
            "Navigating large-scale open-source codebases and tracing dependencies",
            "Submitting high-quality PRs with comprehensive test suites",
            "Line-by-line code reviews focused on clean code & maintainability",
            "Building a publicly verifiable engineering portfolio on GitHub",
            "Architectural defense rounds for product engineering companies",
        ],
        enrollLink: "https://www.vebskills.com/",
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
