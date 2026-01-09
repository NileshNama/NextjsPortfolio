import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)

    formData.append("access_key", "33b90cef-ca93-4461-a6ef-5050e561e1e3")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Message sent successfully.")
      event.target.reset()
    } else {
      setResult(data.message)
    }
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 sm:px-[12%] py-24 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.h4
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-Ovo mb-3"
        >
          Collaborate with me
        </motion.h4>

        <motion.h2
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-4xl sm:text-5xl font-Ovo mb-4"
        >
          Start a conversation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 dark:text-gray-400 font-Ovo"
        >
          I value thoughtful discussions around systems, learning, and decision-making.
        </motion.p>
      </div>

      {/* Intent Block — MOBILE FIXED */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="max-w-xl mx-auto mt-12 mb-14 px-2"
      >
        <p className="text-sm text-gray-500 mb-6 text-center font-Ovo">
          This is a good fit if you want to discuss:
        </p>

        <ul className="space-y-5 font-Ovo">
          {[
            "Collaboration on systems-oriented or learning projects",
            "Speaking, mentoring, or serious academic conversations",
            "Thoughtful questions related to NN Cohorts or Interviewers",
          ].map((text, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-[7px] w-2 h-2 shrink-0 rounded-full bg-[#509187]" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-3 border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-3 border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 outline-none"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Briefly describe what you're thinking about, building, or struggling with."
          required
          className="w-full p-4 border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 outline-none mb-6"
        />

        <button
          type="submit"
          className="mx-auto flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white hover:bg-black/90 transition shadow-sm"
        >
          Send message
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400 font-Ovo">
          I read every message personally. Replies may take time, but they will be thoughtful.
        </p>

        {result && (
          <p className="mt-4 text-center text-sm text-gray-500">
            {result}
          </p>
        )}
      </motion.form>
    </motion.section>
  )
}

export default Contact
