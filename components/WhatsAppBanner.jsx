"use client"

import React from "react"
import { motion, useReducedMotion } from "motion/react"

const WhatsAppBanner = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full px-6 md:px-[12%] py-12 sm:py-16 md:py-20 scroll-mt-20">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          relative
          w-full
          rounded-[1.75rem] sm:rounded-[2rem]
          bg-[#111317]
          border-2 border-black
          shadow-[8px_8px_0px_0px_#facc15] sm:shadow-[10px_10px_0px_0px_#facc15]
          p-6 sm:p-8 md:p-10 lg:p-12
          flex flex-col lg:flex-row lg:items-center justify-between
          gap-6 sm:gap-8 lg:gap-10
        "
      >
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Badge Label */}
          <div className="flex items-center gap-2 text-[#facc15] font-bold text-xs sm:text-[13px] tracking-wider uppercase">
            <svg
              className="w-4 h-4 stroke-[2.5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>OFFICIAL COMMUNITY &amp; UPDATES</span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] font-black text-white uppercase tracking-tight leading-tight mt-3">
            STAY CONNECTED. KEEP BUILDING.
          </h3>

          {/* Subtext */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed mt-3 font-normal">
            Join my official WhatsApp Channel for the latest insights on software engineering, AI, product building, learning resources, and new projects.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="shrink-0 self-start lg:self-center">
          <a
            href="https://whatsapp.com/channel/0029VbE5LFeDZ4LUYUUFrJ29"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2.5
              px-6 sm:px-8 py-3.5 sm:py-4
              rounded-2xl
              bg-[#00c06d] hover:bg-[#00d67a]
              text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase
              border-2 border-white
              shadow-[4px_4px_0px_0px_#ffffff]
              hover:shadow-[2px_2px_0px_0px_#ffffff] hover:translate-x-0.5 hover:translate-y-0.5
              transition-all duration-200
            "
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>JOIN WHATSAPP CHANNEL</span>
            {/* External Link Icon */}
            <svg
              className="w-4 h-4 stroke-[2.5] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 3h6v6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14L21 3"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default WhatsAppBanner
