import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-24 py-20 bg-white dark:bg-darkTheme">
      
      {/* Identity */}
      <div className="text-center mb-16">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Nilesh Nama"
          className="w-36 mx-auto mb-4"
        />

        <div className="w-max flex items-center gap-2 mx-auto text-sm text-gray-600 dark:text-gray-400">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email"
            className="w-5"
          />
          <a
            href="mailto:hello@nileshnama.com"
            className="hover:underline"
          >
            hello@nileshnama.com
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          Systems, learning, and clarity — built over time.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-300/60 dark:border-white/10 mx-[10%] pt-8">
        <p className="text-sm text-gray-500">
          © 2025–2026 Nilesh Nama. All rights reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 text-sm">
          <li>
            <a
              href="https://cv.nileshnama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition"
            >
              Resume
            </a>
          </li>

          <li>
            <a
              href="https://cohorts.nileshnama.com/app-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition"
            >
              Writing
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/nileshnama/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
