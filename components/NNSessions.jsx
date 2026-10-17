import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { typographyReveal, cardMotion, safeMotion, EASINGS } from '@/lib/animations'

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
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="inside-nn-sessions"
      className="w-full px-6 md:px-[12%] py-10 sm:py-12 md:py-14 scroll-mt-20 bg-[#111827] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <motion.p
          {...safeMotion(typographyReveal.tag, shouldReduceMotion)}
          className="section-label mb-2"
        >
          METHOD
        </motion.p>

        <motion.h2
          {...safeMotion(typographyReveal.heading, shouldReduceMotion)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo mb-3"
        >
          Inside NN Sessions
        </motion.h2>

        <motion.p
          {...safeMotion(typographyReveal.subtext, shouldReduceMotion)}
          className="max-w-2xl mx-auto text-white/75 font-medium leading-relaxed text-sm sm:text-base"
        >
          See how questions are decoded, reasoning is structured, and clarity is built under pressure.
        </motion.p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-10 items-start max-w-7xl mx-auto">

        {/* LEFT SIDE VIDEOS */}
        <div className="flex flex-col gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              {...safeMotion(cardMotion.reveal(index), shouldReduceMotion)}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-black
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                hover:shadow-[0_30px_100px_rgba(90,155,146,0.18)]
                hover:border-[#5A9B92]/40
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
              {...safeMotion(cardMotion.reveal(index, 0.1), shouldReduceMotion)}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
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
                hover:border-[#5A9B92]/40
                hover:shadow-[0_18px_60px_rgba(90,155,146,0.14)]
                focus-within:ring-2 focus-within:ring-[#509187]
                transition-all duration-300
              "
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-[#5A9B92]/10 flex items-center justify-center text-[#5A9B92] font-semibold mb-4 transition-transform duration-300 group-hover:scale-105">
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


      {/* YouTube Channels CTA */}
<div className="flex flex-wrap items-center justify-center gap-4 mt-14">

  <a
    href="https://www.youtube.com/@nileshnama"
    target="_blank"
    rel="noopener noreferrer"
    className="group cta-secondary px-6 py-3 text-sm border-white/20 bg-white/5 text-white hover:border-[#509187] hover:bg-[#509187]/20 hover:text-[#67b0a5]"
  >
    <span>Written Mastery</span>
    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
      →
    </span>
  </a>

  <a
    href="https://www.youtube.com/@about_interviewers"
    target="_blank"
    rel="noopener noreferrer"
    className="group cta-secondary px-6 py-3 text-sm border-white/20 bg-white/5 text-white hover:border-[#509187] hover:bg-[#509187]/20 hover:text-[#67b0a5]"
  >
    <span>Interview</span>
    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
      →
    </span>
  </a>

  <a
    href="https://www.youtube.com/@numericcore"
    target="_blank"
    rel="noopener noreferrer"
    className="group cta-secondary px-6 py-3 text-sm border-white/20 bg-white/5 text-white hover:border-[#509187] hover:bg-[#509187]/20 hover:text-[#67b0a5]"
  >
    <span>Numeric Core</span>
    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
      →
    </span>
  </a>

  <a
    href="https://www.youtube.com/@gateailab"
    target="_blank"
    rel="noopener noreferrer"
    className="group cta-secondary px-6 py-3 text-sm border-white/20 bg-white/5 text-white hover:border-[#509187] hover:bg-[#509187]/20 hover:text-[#67b0a5]"
  >
    <span>GATE AI Data Lab</span>
    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
      →
    </span>
  </a>

  <a
    href="https://cohorts.nileshnama.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group cta-primary px-6 py-3 text-sm"
  >
    <span>Explore NN Cohorts</span>
    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
      →
    </span>
  </a>

</div>
    </section>
    
  )
}

export default NNSessions