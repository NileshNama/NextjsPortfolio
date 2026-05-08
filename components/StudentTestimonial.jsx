import React from 'react'
import { motion } from 'motion/react'

const StudentTestimonial = () => {
  return (
    <motion.section
      id="student-testimonial"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-[12%] py-24 md:py-32 bg-[#0b1120] text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">
            STUDENT VOICE
          </p>

          <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo mb-5">
            How My Thinking Changed After NN
          </h2>

          <p className="max-w-2xl mx-auto text-white/75 font-medium leading-8">
            Real student stories reveal how thinking changes under pressure.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-8 lg:gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5">

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-black
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5A9B92]/10 via-transparent to-transparent pointer-events-none" />

              <div className="aspect-[16/9] w-full bg-black">
                <video
                  className="w-full h-full object-contain bg-black"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/videos/student-testimonial-poster.jpg"
                >
                  <source
                    src="/videos/student-testimonial.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            {/* Student Identity Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                p-6
                hover:border-[#5A9B92]/35
                transition-all duration-300
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* Left */}
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#5A9B92] font-semibold mb-3">
                    Verified Student
                  </p>

                  <h3 className="text-2xl font-semibold font-Ovo text-white mb-2">
                    Rahul Sharma
                  </h3>

                  <p className="text-white/70 leading-7 font-medium max-w-xl">
                    GATE & PSU Aspirant — focused on structured reasoning,
                    interpretation clarity, and high-pressure decision-making.
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-3 sm:items-end">

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-2.5
                      rounded-full
                      border border-white/15
                      bg-white/5
                      hover:bg-white/10
                      text-sm font-medium
                      transition-all duration-300
                    "
                  >
                    LinkedIn Profile →
                  </a>

                  <a
                    href="https://cohorts.nileshnama.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-2.5
                      rounded-full
                      border border-[#5A9B92]/25
                      bg-[#5A9B92]/10
                      hover:bg-[#5A9B92]/20
                      text-sm font-medium
                      transition-all duration-300
                    "
                  >
                    Cohort Journey →
                  </a>

                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              h-full
              rounded-[2rem]
              border border-white/10
              bg-white/5
              backdrop-blur-sm
              p-6 sm:p-7
              shadow-sm
              flex flex-col justify-start
              hover:border-[#5A9B92]/35
              hover:shadow-[0_18px_60px_rgba(90,155,146,0.14)]
              transition-all duration-300
            "
          >
            <p className="text-sm uppercase tracking-[0.22em] text-[#5A9B92] font-semibold mb-4">
              What to look for
            </p>

            <h3 className="text-2xl font-semibold font-Ovo mb-4 text-white">
              Beyond marks. Better thinking.
            </h3>

            <p className="text-white/75 leading-8 font-medium">
              The strongest student transformations are visible in interpretation, decision-making, and clarity under pressure — not just scores.
            </p>

            <div className="grid gap-3 mt-6">

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white font-medium leading-7">
                  “I now identify what the question is truly testing.”
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white font-medium leading-7">
                  “I panic less and make more structured decisions.”
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white font-medium leading-7">
                  “I stopped solving mechanically and started thinking clearly.”
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default StudentTestimonial