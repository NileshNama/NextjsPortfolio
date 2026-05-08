import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative overflow-hidden mt-24 bg-[#0b1120] text-white">

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

      <div className="relative px-6 md:px-[10%] py-24 md:py-32">

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
            font-semibold
            font-Ovo
            leading-[1.08]
            tracking-tight
          ">
            Deep thinking wins
            <br className="hidden sm:block" />
            under pressure.
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
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            href="https://cohorts.nileshnama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              mt-12
              px-8
              py-4
              rounded-full
              bg-[#5A9B92]
              text-white
              text-sm
              sm:text-base
              font-medium
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_18px_50px_rgba(90,155,146,0.25)]
            "
          >
            Explore NN Cohorts

            <span className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            ">
              →
            </span>
          </motion.a>

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
                href="https://cohorts.nileshnama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Cohorts
              </a>
            </li>

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
          </ul>

        </div>

        {/* Copyright */}
        <div className="text-center mt-16 text-xs text-white/30">
          © Nilesh Nama. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer