"use client"

import { useState, useEffect } from "react"
import { assets, cohortsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Cohorts = ({ isDarkMode }) => {
  const [activeCohort, setActiveCohort] = useState(null)

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeCohort ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeCohort])

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveCohort(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      {/* MAIN SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="cohorts"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Cohorts
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          Curated Learning Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          A focused set of thinking-first cohorts designed for serious computer
          science aspirants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        >
          {cohortsData.map((cohort, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCohort(cohort)}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${cohort.bgImage})` }}
            >
              <div className="pointer-events-none bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{cohort.title}</h2>
                  <p className="text-sm text-gray-700">
                    {cohort.description}
                  </p>
                </div>
                <div className="pointer-events-auto border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#509187] transition">
                  <Image src={assets.send_icon} alt="open" className="w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          href="https://cohorts.nileshnama.com"
          target="_blank"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Explore cohorts
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4"
          />
        </motion.a>
      </motion.div>

      {/* MODAL */}
      {activeCohort && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveCohort(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-xl max-w-3xl w-full shadow-xl overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative">
              <button
                onClick={() => setActiveCohort(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h3 className="text-2xl font-Ovo mb-4">
                {activeCohort.title}
              </h3>

              {/* FIXED YOUTUBE EMBED */}
              {activeCohort.videoId && (
                <div className="w-full aspect-video mb-6 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${activeCohort.videoId}`}
                    title={activeCohort.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <p className="text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed mb-6">
                {activeCohort.longDescription}
              </p>

              {activeCohort.points && (
                <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 font-Ovo">
                  {activeCohort.points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col items-center gap-3">
                {activeCohort.enrollLink && (
                  <a
                    href={activeCohort.enrollLink}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-black text-white py-3 text-sm hover:opacity-90 transition"
                  >
                    Enroll in this cohort →
                  </a>
                )}

                <a
                  href="https://cohorts.nileshnama.com"
                  target="_blank"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Visit cohorts portal
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cohorts
