'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

/**
 * Authentic Ancient Reed Pen (Kalam) Red Calligraphic Underline
 * Recreates the chisel entry, swelling pressure body, and sharp tapered exit
 * of traditional red ink written with a wooden/reed pen (Kalam).
 */
export const KalamRedUnderline = ({ className = "" }) => (
  <svg
    className={`absolute -bottom-2 sm:-bottom-3 left-0 w-full h-[9px] sm:h-[13px] pointer-events-none overflow-visible z-20 ${className}`}
    viewBox="0 0 240 14"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Soft red ink wash / bleed from reed pen absorption */}
    <path
      d="M 2 9.5 C 45 6.5, 115 11, 185 7.5 C 210 6, 230 4.5, 238 3.5"
      stroke="#EF4444"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.35"
      className="dark:stroke-red-500"
    />
    {/* Ancient reed pen (Kalam) chiseled body with varying calligraphic pressure */}
    <path
      d="M 1 10.5 C 32 7.5, 80 12, 135 9 C 180 6.5, 215 5, 239 3 C 218 6.5, 155 10.5, 110 10 C 65 9.5, 25 12, 1 10.5 Z"
      fill="#DC2626"
      className="dark:fill-red-500"
    />
    {/* Deep concentrated red pigment core line */}
    <path
      d="M 3 9 C 50 6.5, 120 10.5, 175 7.5 C 205 5.8, 228 4.2, 238 3.2"
      stroke="#B91C1C"
      strokeWidth="2.2"
      strokeLinecap="round"
      className="dark:stroke-red-400"
    />
  </svg>
)

/**
 * HandnoteHighlight Component
 * On the main page, displays clean typography with the ancient reed pen (Kalam) red underline
 * without the yellow highlighter box. On other pages (/cohorts, etc.), displays the full
 * handwritten notes yellow highlighter background + red underline.
 */
export const HandnoteHighlight = ({ children, className = "", showYellow }) => {
  const pathname = usePathname()
  const isMainPage = !pathname || pathname === "/"
  const shouldShowYellow = showYellow !== undefined ? showYellow : !isMainPage

  if (!shouldShowYellow) {
    return (
      <span className={`relative inline-block isolate px-0.5 my-1 leading-normal ${className}`}>
        <span className="relative z-10 text-inherit font-bold tracking-tight">
          {children}
        </span>
        <KalamRedUnderline />
      </span>
    )
  }

  return (
    <span className={`relative inline-block isolate px-2.5 sm:px-4 py-0.5 sm:py-1 my-1 leading-normal ${className}`}>
      {/* Authentic Handwritten Notes Yellow Highlighter Background with natural hand marker rotation */}
      <span
        className="absolute inset-0 -rotate-[0.6deg] rounded-md sm:rounded-lg bg-[#FEF08A] dark:bg-[#FACC15] shadow-[0_2px_14px_rgba(250,204,21,0.32)] z-0 pointer-events-none"
        aria-hidden="true"
      />
      {/* Text: crisp, high-contrast dark ink on yellow highlighter */}
      <span className="relative z-10 text-slate-950 font-extrabold tracking-tight">
        {children}
      </span>
      {/* Ancient Reed Pen (Kalam) Red Underline */}
      <KalamRedUnderline />
    </span>
  )
}

export default HandnoteHighlight
