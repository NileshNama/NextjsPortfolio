import Image from "next/image"
import { motion } from "motion/react"

const communityImages = [
  "/community/meetup-1.jpg",
  "/community/meetup-2.jpg",
  "/community/meetup-3.jpg",
  "/community/meetup-4.jpg",
]

const Community = () => {
  return (
    <motion.section
      id="community"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-[12%] py-20"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        {/* Eyebrow label — matches Talks / Writing style */}
        <p className="text-sm text-gray-500 mb-2 font-Ovo">
          Community
        </p>

        <h2 className="text-4xl font-Ovo mb-4">
          Conversations & Community
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-Ovo">
          Small-group discussions, mentorship sessions, and learning-focused meetups —
          where thinking happens together, not just online.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {communityImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt="Community discussion"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Community
