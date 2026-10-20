import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { HandnoteHighlight } from '@/components/HandnoteHeading'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative overflow-hidden bg-[#0b1120] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[42rem]
          h-[42rem]
          rounded-full
          bg-[#5A9B92]/10
          blur-3xl
        " />

        <div className="
          absolute
          bottom-[-220px]
          right-[-100px]
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-[#5A9B92]/5
          blur-3xl
        " />

      </div>

      {/* subtle grid texture */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div className="relative px-6 md:px-[10%] pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12">

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >

          <p className="
            text-xs sm:text-sm
            uppercase
            tracking-[0.28em]
            text-[#5A9B92]
            font-semibold
            mb-6
          ">
            Final Thought
          </p>

          <h2 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-[1.08]
            tracking-tight
            text-white
          ">
            <HandnoteHighlight>
              Deep thinking wins{" "} 
              <br className="hidden sm:block" />
              under pressure.
            </HandnoteHighlight>
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            mt-8
            text-base
            sm:text-lg
            body-text soft-text
            leading-relaxed
          ">
            Systems, reasoning, and clarity scale further than shortcuts ever will.
          </p>

          {/* CTA */}
          <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-12">
            <motion.a
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://cohorts.nileshnama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group cta-primary px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
            >
              <span>Explore NN Cohorts</span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.vebskills.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group cta-primary px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#509187] focus-visible:ring-offset-2"
            >
              <span>Explore VebSkills</span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 my-20" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="text-center lg:text-left">

            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo_dark}
              alt="Nilesh Nama"
              className="w-36 mx-auto lg:mx-0 mb-5"
            />

            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/60">
              <Image
                src={assets.mail_icon_dark}
                alt="Email"
                className="w-5"
              />

              <a
                href="mailto:hello@nileshnama.com"
                className="hover:text-white transition"
              >
                hello@nileshnama.com
              </a>
            </div>

            <p className="text-sm text-white/40 mt-4">
              Systems, learning, and clarity — built over time.
            </p>

          </div>

          {/* Right Links */}
          <ul className="
            flex flex-wrap
            items-center
            justify-center
            gap-8
            text-sm
            text-white/60
          ">


            <li>
              <a
                href="https://www.youtube.com/@nileshnama"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                YouTube
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/nileshnama/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://cohorts.nileshnama.com/app-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Writing
              </a>
            </li>

            <li>
              <Link
                href="/linktree"
                className="hover:text-white transition"
              >
                Linktree
              </Link>
            </li>

            <li>
              <a
                href="https://dev.nileshnama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Engineering Portfolio ↗
              </a>
            </li>
          </ul>

        </div>

        {/* Copyright */}
        <div className="text-center mt-12 sm:mt-16 text-xs text-white/40 tracking-wider">
          © {new Date().getFullYear()} Nilesh Nama. All rights reserved.
        </div>

        {/* Giant Nilesh Brand Watermark (Aligned in-line with above content width, no clipping) */}
        <div className="w-full mt-10 sm:mt-14 select-none pointer-events-none flex justify-center items-center">
          <svg
            viewBox="0 0 1000 185"
            className="w-full h-auto overflow-visible block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="nileshWatermarkGrad" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
                <stop offset="48%" stopColor="#ffffff" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="152"
              textAnchor="middle"
              textLength="1000"
              lengthAdjust="spacing"
              fill="url(#nileshWatermarkGrad)"
              style={{
                fontFamily: 'var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 900,
              }}
              fontSize="195"
            >
              NILESH
            </text>
          </svg>
        </div>

      </div>
    </footer>

  )
}

export default Footer
