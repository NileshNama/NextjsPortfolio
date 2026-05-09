import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="w-full px-6 md:px-[12%] py-24 md:py-32 scroll-mt-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          Who I AM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold font-Ovo"
        >
          About Me
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[0.92fr_1.08fr] gap-12 xl:gap-20 items-start max-w-7xl mx-auto">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative xl:-mt-8 xl:ml-3"
        >
          <div className="absolute -inset-8 bg-[#5A9B92]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Achievement Tags Block */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="
    mt-6
    rounded-[2rem]
    border border-black/10 dark:border-white/10
    bg-white dark:bg-[#111827]
    p-6
    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
    hover:shadow-[0_20px_60px_rgba(90,155,146,0.12)]
    transition-all duration-300
  "
>

  {/* Label */}
  <p className="text-xs uppercase tracking-[0.22em] text-[#5A9B92] font-semibold mb-5">
    NILESH NAMA
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-3">


    <div className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-[#5A9B92]/8 text-sm font-medium">
      <span className="font-bold text-red-500">AIR 12</span> in BARC OCES 2022
    </div>

    <div className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-[#5A9B92]/8 text-sm font-medium">
      <span className="font-bold text-red-500">AIR 202</span> in GATE CS 2022
    </div>

    <div className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-[#5A9B92]/8 text-sm font-medium">
      <span className="font-bold text-red-500">AIR 1932</span> in GATE CS 2020
    </div>

    <div className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-[#5A9B92]/8 text-sm font-medium">
      <span className="font-bold text-black-500">📩 hello</span>@nileshnama.com
    </div>
    

    

    <a
      href="https://www.linkedin.com/in/nileshnama/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-4 py-2
        rounded-full
        bg-[#5A9B92]
        text-white
        text-sm
        font-medium
        hover:scale-105
        transition-all duration-300
      "
    >
      LinkedIn Profile →
    </a>

  </div>
</motion.div>
          </div>
        </motion.div>

        

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="xl:pt-8"
        >
          <p className="max-w-2xl text-gray-600 dark:text-gray-300 leading-8 font-medium text-base sm:text-lg mb-12">
            Engineer building systems for structured learning, reasoning clarity,
            and high-pressure decision-making. My work sits at the intersection
            of software engineering, systems thinking, and deep learning
            infrastructure.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border border-black/10 dark:border-white/10
                  bg-white dark:bg-[#111827]
                  p-6 min-h-[260px]
                  cursor-pointer
                  transition-all duration-300 ease-out
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_25px_80px_rgba(90,155,146,0.14)]
                  hover:border-[#5A9B92]/35
                  transform-gpu
                  will-change-transform
                "
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#5A9B92]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-8 mb-5 relative z-10"
                />

                <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white relative z-10">
                  {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 font-medium relative z-10">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Tools full width */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 xl:mt-20"
      >
        <p className="section-label mb-5">SYSTEMS</p>

        <h4 className="text-2xl font-semibold font-Ovo mb-8">
          Tools & Workflow
        </h4>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4 sm:gap-5"
        >
          {toolsData.map((tool, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="
                group
                flex items-center justify-center
                w-14 sm:w-16
                aspect-square
                rounded-2xl
                border border-black/10 dark:border-white/10
                bg-white dark:bg-[#111827]
                shadow-sm
                hover:border-[#5A9B92]/35
                hover:shadow-[0_15px_40px_rgba(90,155,146,0.14)]
                transition-all duration-300
              "
            >
              <Image
                src={tool}
                alt="Tool"
                className="w-7 sm:w-8 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  )
}

export default About