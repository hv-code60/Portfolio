"use client"

import { motion } from "framer-motion"
import { FaMedal } from "react-icons/fa"

const certifications = [
   {
    title: "Organizer – ICCICT 2026 (International Conference on Computational Intelligence and Computing Technologies & AI)",
    subtitle: "New Delhi | International Research Conference",
    date: "2026",
    highlight: true,
  },
  
  {
    title: "Key Member – IBIEA 2025 International Award Function",
    subtitle: "Muscat, Oman | 100+ attendees",
    date: "2025",
    highlight: true,
  },
  {
    title: "Code Sangam '24 – Project Showcase",
    subtitle: "SGT University",
    date: "2024",
  },
  {
    title: "Pradarshan 2.0",
    subtitle: "SGT University",
    date: "2024",
  },
  {
    title: "Synergy 2023 – Participation & Contribution",
    subtitle: "SGT University",
    date: "2023",
  },
  {
    title: "Synergy 2022 – Participation & Contribution",
    subtitle: "SGT University",
    date: "2022",
  },
]

export default function Certifications() {
  return (
    <section className="py-20 bg-secondary/30" id="certifications">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Certifications & Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-card rounded-lg shadow-lg ${
                cert.highlight ? "border border-primary/30 ring-1 ring-primary/10" : ""
              }`}
            >
              <div className="flex items-start gap-3 mb-2">
                <FaMedal
                  className={`mt-0.5 flex-shrink-0 text-lg ${
                    cert.highlight ? "text-yellow-500" : "text-primary"
                  }`}
                />
                <div>
                  <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                  {cert.subtitle && (
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.subtitle}</p>
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 ml-7">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
