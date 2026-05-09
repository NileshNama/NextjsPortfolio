import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'

const reelTestimonials = [
  {
    name: "Rahul Sharma",
    role: "GATE Aspirant",
    video: "/videos/reel-1.mp4",
    linkedin: "https://linkedin.com/nileshnama",
  },
  {
    name: "Ankit Verma",
    role: "BARC Aspirant",
    video: "/videos/reel-2.mp4",
    linkedin: "https://linkedin.com/nileshnama",
  },
  {
    name: "Priya Nair",
    role: "PSU Candidate",
    video: "/videos/reel-3.mp4",
    linkedin: "https://linkedin.com/nileshnama",
  },
  {
    name: "Aditya Rao",
    role: "ISRO Aspirant",
    video: "/videos/reel-4.mp4",
    linkedin: "https://linkedin.com/nileshnama",
  },
]

const StudentTestimonial = () => {
  const mainVideoRef = useRef(null)
  const reelVideoRefs = useRef({})
  const [activeMain, setActiveMain] = useState(false)
  const [activeReelId, setActiveReelId] = useState(null)
  const [isReelStripPaused, setIsReelStripPaused] = useState(false)

  const loopedReels = useMemo(() => {
    return [...reelTestimonials, ...reelTestimonials].map((item, index) => ({
      ...item,
      uid: `${item.name}-${item.video}-${index}`,
    }))
  }, [])

  const pauseAllReels = (exceptUid = null) => {
    Object.entries(reelVideoRefs.current).forEach(([uid, video]) => {
      if (video && uid !== exceptUid) {
        video.pause()
      }
    })
  }

  const toggleMainVideo = () => {
    const video = mainVideoRef.current
    if (!video) return

    pauseAllReels()
    setActiveReelId(null)

    if (video.paused) {
      video.play()
      setActiveMain(true)
    } else {
      video.pause()
      setActiveMain(false)
    }
  }

  const toggleReelVideo = (uid) => {
    const video = reelVideoRefs.current[uid]
    if (!video) return

    if (mainVideoRef.current) {
      mainVideoRef.current.pause()
      setActiveMain(false)
    }

    const isSameVideoPlaying = activeReelId === uid && !video.paused

    if (isSameVideoPlaying) {
      video.pause()
      setActiveReelId(null)
      return
    }

    pauseAllReels(uid)
    video.play()
    setActiveReelId(uid)
    setIsReelStripPaused(true)
  }

  return (
    <motion.section
      id="student-testimonial"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-[12%] py-24 md:py-32 bg-[#0b1120] text-white scroll-mt-20"
    >
      <style>{`
        @keyframes reel-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">STUDENT VOICE</p>

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
                cursor-pointer
              "
              onClick={toggleMainVideo}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5A9B92]/10 via-transparent to-transparent pointer-events-none" />

              <div className="aspect-[16/9] w-full bg-black">
                <video
                  ref={mainVideoRef}
                  className="w-full h-full object-contain bg-black"
                  playsInline
                  preload="metadata"
                  poster="/videos/student-testimonial-poster.jpg"
                  onEnded={() => setActiveMain(false)}
                  onPause={() => setActiveMain(false)}
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

        {/* Sliding Reel Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="section-label mb-3">REAL TRANSFORMATIONS</p>

            <h3 className="text-3xl sm:text-4xl font-semibold font-Ovo mb-4">
              Student Thinking Shifts
            </h3>

            <p className="max-w-2xl mx-auto text-white/70 font-medium leading-8">
              Short, raw student reflections from real NN cohort learners.
            </p>
          </div>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsReelStripPaused(true)}
            onMouseLeave={() => setIsReelStripPaused(false)}
          >
            <motion.div
              className="flex gap-6 w-max"
              style={{
                animation: 'reel-marquee 28s linear infinite',
                animationPlayState: isReelStripPaused ? 'paused' : 'running',
              }}
            >
              {loopedReels.map((item) => (
                <div
                  key={item.uid}
                  className="w-[240px] sm:w-[260px] md:w-[280px] flex-shrink-0"
                >
                  <div
                    className="
                      group
                      overflow-hidden
                      rounded-[2rem]
                      border border-white/10
                      bg-white/5
                      backdrop-blur-sm
                      hover:border-[#5A9B92]/35
                      hover:-translate-y-2
                      hover:shadow-[0_20px_70px_rgba(90,155,146,0.18)]
                      transition-all duration-500
                    "
                  >
                    <div
                      className="relative aspect-[9/16] overflow-hidden bg-black cursor-pointer"
                      onClick={() => toggleReelVideo(item.uid)}
                    >
                      <video
                        ref={(el) => {
                          if (el) reelVideoRefs.current[item.uid] = el
                        }}
                        className="
                          w-full h-full
                          object-cover
                          transition-transform duration-700
                          group-hover:scale-105
                        "
                        playsInline
                        preload="metadata"
                        onEnded={() => setActiveReelId(null)}
                        onPause={() => {
                          if (activeReelId === item.uid) {
                            setActiveReelId(null)
                          }
                        }}
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>

                      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {item.name}
                        </h4>

                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            text-[#5A9B92]
                            font-medium
                            hover:text-white
                            transition-colors duration-300
                          "
                          onClick={(e) => e.stopPropagation()}
                        >
                          LinkedIn Profile →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default StudentTestimonial