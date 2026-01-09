"use client"

import { useState, useEffect } from "react"
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  const [activeBook, setActiveBook] = useState(null)

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeBook ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeBook])

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveBook(null)
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
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Books
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          Standard Reference Texts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          A curated set of reference-level books focused on system thinking,
          clarity, <br /> and long-term understanding across core computer science
          subjects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveBook(project)}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="pointer-events-none bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">
                    {project.description}
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
          href="https://books.nileshnama.com"
          target="_blank"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          View all books
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4"
          />
        </motion.a>
      </motion.div>

      {/* MODAL */}
      {activeBook && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-6"
          onClick={() => setActiveBook(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-darkTheme rounded-xl max-w-2xl w-full shadow-xl overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto p-8 relative">
              <button
                onClick={() => setActiveBook(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h3 className="text-2xl font-Ovo mb-4">
                {activeBook.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed mb-6">
                {activeBook.description}
              </p>

              {activeBook.details && (
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-Ovo">
                  {Array.isArray(activeBook.details)
                    ? activeBook.details.map((item, i) => (
                        <p key={i}>{item}</p>
                      ))
                    : <p>{activeBook.details}</p>
                  }
                </div>
              )}

              {/* CTA AREA (UPDATED ONLY HERE) */}
              {activeBook.purchaseLink && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <a
                    href={activeBook.purchaseLink}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-black text-white py-3 text-sm hover:opacity-90 transition"
                  >
                    Get the full reference →
                  </a>

                  {activeBook.sampleLink && (
                    <a
                      href={activeBook.sampleLink}
                      target="_blank"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      Read a sample chapter
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Work
