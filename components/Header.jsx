import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <section
      id="top"
      className="w-full min-h-screen flex items-center justify-center pt-28"
    >
      <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center gap-4">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <Image
            src={assets.profile_img}
            alt="Nilesh Nama"
            className="rounded-full w-28 md:w-32"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold font-Ovo"
        >
          NILESH NAMA
        </motion.h1>

        {/* Primary Identity */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-400 font-Ovo"
        >
          Software Engineer · Systems Thinker
        </motion.h2>

        {/* Value Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-5 text-gray-600 dark:text-gray-400 leading-relaxed font-Ovo"
        >
        I design thinking-first systems that help engineers and serious learners reason clearly, make better decisions, and build durable understanding. <br /> Work spans competitive exam systems (GATE, BARC, ISRO), interview reasoning frameworks, and long-form technical reference writing.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

          {/* PRIMARY CTA */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            href="https://cohorts.nileshnama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 rounded-full bg-[#509187] text-white font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            Explore NN Cohorts
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>

          {/* SECONDARY CTA */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            viewport={{ once: true }}
            href="#contact"
            className="px-7 py-2.5 rounded-full border border-gray-500 text-gray-700 dark:text-gray-300 dark:border-gray-500 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-darkHover transition"
          >
            Collaborate with me
            <Image src={assets.right_arrow_bold} alt="" className="w-4" />
          </motion.a>

        </div>
      </div>
    </section>
  )
}

export default Header
