import Image from "next/image"
import { motion } from "motion/react"

const communityImages = [
  {
    src: "/community/meetup-1.jpg",
    caption: "Live High-Pressure Problem Solving",
  },
  {
    src: "/community/meetup-2.jpg",
    caption: "Onboard reasoning discussions",
  },
  {
    src: "/community/meetup-3.jpg",
    caption: "Deep-dive interview Discussions",
  },
  {
    src: "/community/meetup-4.jpg",
    caption: "Hackathons Reveal Real Thinking",
  },
]

const Community = () => {
  return (
    <motion.section
      id="community"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-[12%] py-24 md:py-32 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">
          FIELD NOTES
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo mb-5">
          Conversations & Community
        </h2>

        <p className="max-w-2xl mx-auto text-white/75 font-medium leading-8">
          Small-group discussions, mentorship sessions, and learning-focused meetups —
          where thinking happens together, not just online.
        </p>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

        {communityImages.map((item, index) => {

          const spans = [
            "lg:col-span-7",
            "lg:col-span-5",
            "lg:col-span-5",
            "lg:col-span-7",
          ]

          const heights = [
            "lg:h-[420px]",
            "lg:h-[320px]",
            "lg:h-[320px]",
            "lg:h-[420px]",
          ]

          return (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`
                ${spans[index]}
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                transition-all duration-300
                hover:border-[#5A9B92]/40
                hover:shadow-[0_20px_70px_rgba(90,155,146,0.18)]
              `}
            >

              {/* Glow Accent */}
              <div className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-[#5A9B92]/10
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
                z-10
              " />

              {/* Image */}
              <div className="relative overflow-hidden">

                <Image
                  src={item.src}
                  alt={item.caption}
                  width={1200}
                  height={800}
                  className={`
                    w-full
                    h-[340px]
                    ${heights[index]}
                    object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-105
                  `}
                />

                {/* Gradient Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                " />

                {/* Caption */}
                <div className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6 sm:p-7
                  z-20
                ">
                  <p className="
                    text-lg
                    sm:text-xl
                    font-semibold
                    leading-snug
                    text-white
                    max-w-xs
                  ">
                    {item.caption}
                  </p>
                </div>

              </div>

            </motion.div>
          )
        })}

      </div>
    </motion.section>
  )
}

export default Community