'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

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

const Organizations = ({ isDarkMode }) => {
  return (
    <section
      aria-label="Organizations"
      className="w-full bg-[#509187] dark:bg-[#153430] border-y border-[#437d74] dark:border-[#509187]/30 py-3.5 sm:py-4.5 px-4 sm:px-6 lg:px-8 relative z-20 shadow-sm transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8">
        {/* Uniform Heading Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-sm sm:text-base font-semibold text-white/95 tracking-tight font-sans drop-shadow-sm">
            Organizations
          </span>
          <div className="hidden sm:block w-px h-5 bg-white/25" />
        </motion.div>

        {/* Square Boxes with Edge-to-Edge Logos & Hyperlinks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap justify-center"
        >
          {organizations.map((org, index) => (
            <a
              key={index}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              title={org.tooltip}
              aria-label={org.name}
              className={`group relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 aspect-square rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/20 ${org.bg} shadow-md shadow-black/15 flex items-center justify-center p-0 hover:shadow-xl hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden block`}
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
        </motion.div>
      </div>
    </section>
  )
}

export default Organizations
