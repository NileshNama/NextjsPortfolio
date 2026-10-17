'use client'
import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { cardMotion, safeMotion } from '@/lib/animations'

const organizations = [
  {
    name: "VebGlitch",
    tooltip: "VebGlitch",
    url: "https://vebglitch.com",
    image: "/vebglitch.png",
    type: "image",
    bg: "bg-white",
  },
  {
    name: "Interviewers",
    tooltip: "Interviewers",
    url: "https://www.interviewers.in/",
    image: "/interviewers.png",
    type: "image",
    bg: "bg-[#0077b5]",
  },
  {
    name: "VebSkills",
    tooltip: "VebSkills",
    url: "https://www.vebskills.com/",
    image: "/vebskills.png",
    type: "image",
    bg: "bg-white",
  },
  {
    name: "NQuestions",
    tooltip: "NQuestions",
    url: "https://www.nquestions.in/",
    image: "/nquestions.jpg",
    type: "image",
    bg: "bg-white",
  },
  {
    name: "NN Cohorts",
    tooltip: "NN Cohorts",
    url: "https://cohorts.nileshnama.com/",
    image: "/nncohorts.png",
    type: "image",
    bg: "bg-[#3a3a39]",
  },
]

const skills = [
  "Full Stack Development",
  "Real-World Projects",
  "Open Source Contributions",
  "Production Ready",
  "DevOps & Deployment",
  "Job Ready Portfolio",
]

const Organizations = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Organizations & Skills"
      className="w-full py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12">
        
        {/* Top Strap: Curved Top-Right Asymmetrical Shape like Reference */}
        <motion.div
          {...safeMotion(cardMotion.reveal(0), shouldReduceMotion)}
          className="
            relative overflow-hidden
            rounded-2xl sm:rounded-3xl
            rounded-tr-[70px] sm:rounded-tr-[110px] md:rounded-tr-[140px]
            bg-[#0a2e29] dark:bg-[#07221e]
            border border-[#509187]/20 dark:border-[#509187]/15
            py-4 sm:py-5 px-6 sm:px-8 md:px-12
            shadow-xl shadow-black/15
          "
        >
          {/* Subtle grid pattern texture */}
          <div
            className="
              absolute inset-0 opacity-[0.04] pointer-events-none
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:40px_20px]
            "
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8">
            {/* Heading Label */}
            <div className="flex items-center gap-3">
              <span className="text-sm sm:text-base font-semibold text-white/95 tracking-tight font-sans drop-shadow-sm">
                Organizations
              </span>
              <div className="hidden sm:block w-px h-5 bg-white/25" />
            </div>

            {/* Square Boxes with Edge-to-Edge Logos & Hyperlinks */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap justify-center">
              {organizations.map((org, index) => (
                <a
                  key={index}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={org.tooltip}
                  aria-label={org.name}
                  className={`group relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 aspect-square rounded-xl sm:rounded-2xl border border-white/20 ${org.bg} shadow-md shadow-black/25 flex items-center justify-center p-0 hover:shadow-xl hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden block`}
                >
                  <Image
                    src={org.image}
                    alt={org.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Two Grids: Matches Reference Image Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_0.86fr] gap-5 sm:gap-6 items-stretch">
          
          {/* Left Grid: Job ready skills that matter (Teal Card with Curved Top-Right) */}
          <motion.div
            {...safeMotion(cardMotion.reveal(1), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.3 }}
            className="
              relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              rounded-tr-[55px] sm:rounded-tr-[75px] md:rounded-tr-[85px]
              bg-[#509187] dark:bg-[#437d74]
              p-6 sm:p-8 md:p-10
              shadow-xl shadow-[#509187]/20
              text-white flex flex-col justify-between
            "
          >
            {/* Subtle brick-like grid pattern overlay */}
            <div
              className="
                absolute inset-0 opacity-[0.08] pointer-events-none
                [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                [background-size:48px_24px]
              "
            />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-white tracking-tight leading-snug">
                Job ready skills that matter
              </h3>

              <p className="text-white/90 text-sm sm:text-base mt-2 mb-6 sm:mb-8 font-normal leading-relaxed">
                Master development through real-world applications, not tutorials
              </p>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      inline-flex items-center
                      px-4 py-2 sm:px-5 sm:py-2.5
                      rounded-full bg-white
                      text-[#3b756b] dark:text-[#366c63]
                      text-xs sm:text-sm font-semibold
                      shadow-sm hover:scale-105 hover:shadow-md
                      transition-all duration-200 cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Grid: Personally mentoring India's next 100x engineers (Deep Navy Card) */}
          <motion.div
            {...safeMotion(cardMotion.reveal(2), shouldReduceMotion)}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.3 }}
            className="
              relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              bg-[#0a2e29] dark:bg-[#07221e]
              border border-[#509187]/20 dark:border-[#509187]/15
              p-6 sm:p-8 md:p-10
              shadow-xl shadow-black/15
              text-white flex flex-col justify-center
            "
          >
            {/* Subtle brick-like grid pattern overlay */}
            <div
              className="
                absolute inset-0 opacity-[0.05] pointer-events-none
                [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                [background-size:48px_24px]
              "
            />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-white tracking-tight leading-tight mb-4">
                Mentoring the next generation of exceptional engineers.
              </h3>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Building real-world skills through hands-on projects, open source, and engineering practice.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Organizations
