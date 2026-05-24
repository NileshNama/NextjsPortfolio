import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <section
      id="home"
      className="w-full sm:min-h-[100svh] flex items-start sm:items-center justify-center pt-8 sm:pt-12 pb-6 sm:pb-4 overflow-hidden"
    >
      <div className="w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center gap-2 sm:gap-3 relative">
        {/* Soft background glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[#5A9B92]/10 blur-3xl -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] rounded-full bg-[#5A9B92]/5 blur-3xl -z-10" />

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mb-1 sm:mb-0"
        >
          <div className="absolute w-28 h-28 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-[#5A9B92]/20 blur-3xl -z-10" />
          <Image
            src={assets.profile_img}
            alt="Nilesh Nama"
            className="rounded-full w-28 sm:w-44 md:w-52 aspect-square object-cover relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: -18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="text-[2.15rem] leading-none sm:text-5xl md:text-6xl font-semibold font-Ovo tracking-tight"
        >
          NILESH NAMA
        </motion.h1>

        {/* Primary Identity */}
        <motion.h2
          initial={{ y: -14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[14px] sm:text-lg text-gray-600 dark:text-gray-400 font-Ovo mt-1"
        >
          Software Engineer • Systems Educator
        </motion.h2>

        {/* Proof Badges */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-3"
        >
          <div className="w-full max-w-[300px] sm:w-auto sm:min-w-[220px] px-4 py-2 rounded-2xl border border-gray-300/80 bg-white/80 backdrop-blur-sm text-[12px] sm:text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 text-center">
            GATE • BARC • PSU Focused
          </div>

          <div className="w-full max-w-[300px] sm:w-auto sm:min-w-[240px] px-4 py-2 rounded-2xl border border-gray-300/80 bg-white/80 backdrop-blur-sm text-[12px] sm:text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 text-center">
            5+ Years Exam Reasoning Research
          </div>

          <div className="w-full max-w-[300px] sm:w-auto sm:min-w-[240px] px-4 py-2 rounded-2xl border border-gray-300/80 bg-white/80 backdrop-blur-sm text-[12px] sm:text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 text-center">
            Systems-Based Learning Frameworks
          </div>
        </motion.div>

        {/* Main line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-3 text-gray-600 dark:text-gray-300 leading-[1.65] font-medium text-[13px] sm:text-base"
        >
          <p>
            Structured reasoning for high-pressure exams and interviews. <br />
            Train your mind to think clearly under pressure.
          </p>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs sm:text-sm font-medium shadow-[0_12px_30px_rgba(0,0,0,0.18)] border border-white/10"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#5A9B92] animate-pulse" />
            Trusted by 5K Aspirants
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center mt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            {/* PRIMARY CTA */}
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.45, delay: 0.6 }}
              viewport={{ once: true }}
              href="https://cohorts.nileshnama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 sm:px-9 py-[14px] rounded-full bg-[#509187] text-white font-medium flex items-center gap-2 shadow-[0_18px_40px_rgba(80,145,135,0.22)] hover:shadow-[0_24px_60px_rgba(80,145,135,0.28)] transition-all duration-300"
            >
              Explore The System
              <Image
                src={assets.right_arrow_white}
                alt=""
                className="w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.45, delay: 0.75 }}
              viewport={{ once: true }}
              href="#nn-sessions"
              className="group px-7 sm:px-7 py-[14px] rounded-full border border-gray-400/80 text-gray-700 dark:text-gray-300 dark:border-gray-500 flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:bg-gray-100 dark:hover:bg-darkHover transition-all duration-300"
            >
              See NN Sessions
              <Image
                src={assets.right_arrow_bold}
                alt=""
                className="w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>

          {/* NQuestions Link */}
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            href="https://nquestions.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-1.5 text-[12px] sm:text-sm font-semibold tracking-tight text-[#64748B] transition-all duration-300"
          >
            <span className="text-[#FF6B5E]">↗</span>
            <span className="opacity-70">Built on</span>
            <span className="text-[#1E293B]">NQuestions.XYZ</span>
            <span className="text-[#FF6B5E] text-[11px] font-bold border border-[#FFB4AD] px-1.5 py-[1px] rounded-full leading-none">
              PRO
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Header
