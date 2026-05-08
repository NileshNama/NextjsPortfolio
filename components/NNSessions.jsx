import React from 'react'
import { motion } from 'motion/react'

const sessionCards = [
  {
    title: 'Thinking Aloud',
    desc: 'Watch how complex questions are interpreted step by step instead of solved mechanically.',
    accent: 'from-[#5A9B92]/15 to-transparent',
  },
  {
    title: 'Real-Time Question Analysis',
    desc: 'Understand how examiner intent, ambiguity, and elimination patterns are identified in real time.',
    accent: 'from-white/10 to-transparent',
  },
  {
    title: 'Mock Interview Clarity',
    desc: 'See how structure, confidence, and explanation quality are built under pressure.',
    accent: 'from-[#5A9B92]/10 to-transparent',
  },
]

const videos = [
  {
    src: '/videos/nn-sessions.mp4',
    poster: '/videos/nn-sessions-poster.jpg',
  },
  {
    src: '/videos/nn-sessions-2.mp4',
    poster: '/videos/nn-sessions-poster-2.jpg',
  },
]

const NNSessions = () => {
  return (
    <motion.section
      id="nn-sessions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-[12%] py-24 md:py-32 scroll-mt-20 bg-[#111827] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">METHOD</p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo mb-5">
          Inside NN Sessions
        </h2>

        <p className="max-w-2xl mx-auto text-white/75 font-medium leading-8">
          See how questions are decoded, reasoning is structured, and clarity is built under pressure.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-10 items-start max-w-7xl mx-auto">

        {/* LEFT SIDE VIDEOS */}
        <div className="flex flex-col gap-8">

          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-black
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                hover:shadow-[0_30px_100px_rgba(90,155,146,0.18)]
                transition-all duration-300
              "
            >
              {/* Glow Accent */}
              <div className="
                absolute inset-0
                bg-gradient-to-tr
                from-[#5A9B92]/10
                via-transparent
                to-transparent
                pointer-events-none
              " />

              <video
                className="w-full aspect-video object-cover"
                controls
                playsInline
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}

        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid gap-4 lg:pt-2">
          {sessionCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                p-6
                shadow-sm
                hover:-translate-y-1
                hover:border-[#5A9B92]/35
                hover:shadow-[0_18px_60px_rgba(90,155,146,0.14)]
                transition-all duration-300
              "
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] font-semibold mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold font-Ovo mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-white/72 leading-8 font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

export default NNSessions