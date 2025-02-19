"use client"

import { motion } from "framer-motion"
import { FaCertificate } from "react-icons/fa"

const certifications = [
  {
    title: "CODE SANGAM 24, SGT",
    date: "2024",
  },
  {
    title: "SYNERGY 2022, SGT UNIVERSITY",
    date: "2022",
  },
  {
    title: "SYNERGY 2023, SGT UNIVERSITY",
    date: "2023",
  },
  {
    title: "HTML and CSS Building a Single-Page Website/COURSERA",
    date: "2023",
  },
  {
    title: "Pradarshan 2.0, SGT UNIVERSITY",
    date: "2024"
  },
]

export default function Certifications() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="text-primary text-xl" />
                <h3 className="font-semibold">{cert.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
