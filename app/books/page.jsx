"use client"

import { useState, useEffect, useMemo } from "react"
import { assets, workData } from "@/assets/assets"
import Image from "next/image"

const GENRES = [
  "All",
  "Standard Text",
  "Practice / Companion",
  "Notes / Short Reads",
]

const BooksPage = () => {
  const [activeBook, setActiveBook] = useState(null)
  const [search, setSearch] = useState("")
  const [activeGenre, setActiveGenre] = useState("All")

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeBook ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [activeBook])

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveBook(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  /* FILTER + SEARCH */
  const filteredBooks = useMemo(() => {
    let data = [...workData]

    // Genre filter
    if (activeGenre !== "All") {
      data = data.filter(book => book.genre === activeGenre)
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase()
      data = data.filter(book =>
        book.title?.toLowerCase().includes(q) ||
        book.description?.toLowerCase().includes(q) ||
        (Array.isArray(book.details)
          ? book.details.join(" ").toLowerCase().includes(q)
          : book.details?.toLowerCase().includes(q))
      )
    }

    return data
  }, [search, activeGenre])

  return (
    <>
      {/* MAIN SECTION */}
      <section className="w-full px-6 sm:px-[12%] py-20">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-lg font-Ovo mb-2">Books</h4>

          <h2 className="text-4xl sm:text-5xl font-Ovo">
            Book Library
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 font-Ovo">
            A curated collection of reference-level and support books
            focused on system thinking, conceptual clarity, and
            long-term understanding.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search books…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkTheme outline-none"
          />
        </div>

        {/* GENRE FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
                ${
                  activeGenre === genre
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300"
                }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* BOOK GRID */}
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => setActiveBook(book)}
              className="aspect-square bg-cover bg-center rounded-lg relative cursor-pointer"
              style={{ backgroundImage: `url(${book.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-700">
                    {book.description}
                  </p>
                </div>

                <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]">
                  <Image
                    src={assets.send_icon}
                    alt="Open"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK MODAL */}
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

              <h3 className="text-2xl font-Ovo mb-2">
                {activeBook.title}
              </h3>

              {/* GENRE LABEL */}
              {activeBook.genre && (
                <p className="text-sm text-gray-500 mb-4 font-Ovo">
                  {activeBook.genre}
                </p>
              )}

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

              {activeBook.purchaseLink && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <a
                    href={activeBook.purchaseLink}
                    target="_blank"
                    className="inline-flex items-center justify-center w-full rounded-lg bg-black text-white py-3 text-sm hover:opacity-90 transition"
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

      {/* FOOTER */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="mb-6">
          <a href="mailto:hello@nileshnama.com" className="underline">
            hello@nileshnama.com
          </a>
        </p>

        <div className="border-t pt-6">
          © {new Date().getFullYear()}{" "}
          <a href="https://nileshnama.com" className="underline">
            nileshnama.com
          </a>
        </div>
      </footer>
    </>
  )
}

export default BooksPage
