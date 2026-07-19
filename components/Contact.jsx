"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useState } from "react"
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)

    formData.append(
      "access_key",
      "33b90cef-ca93-4461-a6ef-5050e561e1e3"
    )

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    )

    const data = await response.json()

    if (data.success) {
      setResult("Message sent successfully.")
      event.target.reset()
    } else {
      setResult(data.message)
    }
  }

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        w-full
        px-[7%] sm:px-[10%] lg:px-[12%]
        py-24 md:py-32
        scroll-mt-24
      "
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#5A9B92]/10 blur-3xl rounded-full"></div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >

        <p className="text-sm tracking-[4px] uppercase text-[#5A9B92] font-semibold mb-4">
          Contact
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
          Start a Conversation
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg">
          Thoughtful discussions around systems, learning,
          interview reasoning, structured thinking, and long-term execution.
        </p>
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mt-16 relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="
            rounded-[32px]
            border border-gray-200/70 dark:border-white/10
            bg-white/70 dark:bg-white/5
            backdrop-blur-xl
            p-8 sm:p-10
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >

          {/* Mini Badge */}
          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-[#5A9B92]/10
            border border-[#5A9B92]/20
            mb-8
          ">
            <div className="w-2 h-2 rounded-full bg-[#5A9B92]"></div>

            <span className="text-sm font-medium text-[#3E7E76]">
              Open for thoughtful collaborations
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-semibold leading-tight mb-6">
            Best suited for people building seriously.
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-8 mb-10">
            If you're working on systems, deep learning products,
            education infrastructure, interview preparation,
            or reasoning-focused initiatives — this is probably a good fit.
          </p>

          {/* Intent Cards */}
          <div className="space-y-5">

            {[
              "Collaboration on systems-oriented products or learning platforms",
              "Speaking sessions, mentorship, or serious academic conversations",
              "Deep questions around NN Cohorts, interviews, or reasoning systems",
              "Research, content, or long-term educational infrastructure discussions",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="
                  flex items-start gap-4
                  rounded-2xl
                  border border-gray-200 dark:border-white/10
                  bg-white/70 dark:bg-white/5
                  px-5 py-5
                  transition-all duration-300
                  hover:border-[#5A9B92]/30
                  hover:bg-white dark:hover:bg-white/10
                "
              >

                <div className="
                  w-10 h-10 shrink-0
                  rounded-xl
                  bg-[#5A9B92]/10
                  flex items-center justify-center
                ">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#509187]"></div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="
            mt-10 pt-8
            border-t border-gray-100 dark:border-white/10
          ">
            <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
              “I value thoughtful conversations over volume.
              Depth matters more than speed.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="
            rounded-[32px]
            border border-gray-200/70 dark:border-white/10
            bg-white/75 dark:bg-white/5
            backdrop-blur-xl
            p-8 sm:p-10
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >

          {/* Form Badge */}
          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-black text-white
            text-sm font-medium
            mb-8
          ">
            <div className="w-2 h-2 rounded-full bg-[#5A9B92]"></div>
            Direct Contact
          </div>

          <form onSubmit={onSubmit}>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="
                  w-full
                  rounded-2xl
                  border border-gray-200 dark:border-white/10
                  bg-white/80 dark:bg-white/5 dark:text-white
                  px-5 py-4
                  outline-none
                  transition
                  focus:border-[#509187]
                  focus:ring-4 focus:ring-[#509187]/10
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="
                  w-full
                  rounded-2xl
                  border border-gray-200 dark:border-white/10
                  bg-white/80 dark:bg-white/5 dark:text-white
                  px-5 py-4
                  outline-none
                  transition
                  focus:border-[#509187]
                  focus:ring-4 focus:ring-[#509187]/10
                "
              />
            </div>

            {/* Textarea */}
            <textarea
              rows="8"
              name="message"
              placeholder="Describe what you're building, thinking about, or struggling with..."
              required
              className="
                w-full
                rounded-3xl
                border border-gray-200 dark:border-white/10
                bg-white/80 dark:bg-white/5 dark:text-white
                px-5 py-5
                outline-none
                resize-none
                transition
                focus:border-[#509187]
                focus:ring-4 focus:ring-[#509187]/10
              "
            />

            {/* CTA */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="
                mt-8
                group
                w-full
                rounded-2xl
                bg-[#509187]
                text-white
                py-4
                font-medium
                flex items-center justify-center gap-3
                hover:shadow-[0_10px_30px_rgba(80,145,135,0.35)]
                transition-all duration-300
              "
            >
              Send Message

              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </motion.button>

            {/* Result */}
            {result && (
              <p className="mt-5 text-center text-sm text-gray-500">
                {result}
              </p>
            )}

            {/* Footer */}
            <p className="
              mt-8
              text-center
              text-sm
              leading-7
              text-gray-500 dark:text-gray-400
            ">
              I read every message personally.
              Replies may take time, but they will be thoughtful.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact