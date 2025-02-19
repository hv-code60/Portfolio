"use client"

import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const experiences = [
  {
    title: "UNO MINDA LIMITED PINDER DIVISION",
    role: "HARDWARE AND I/O OPERATOR",
    duration: "09/07/2023 TO 15/08/2023",
    description:
      "Coordinate with the IT department to resolve appropriate changes to development and maintenance.",
  },
]

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 mb-8 p-5 rounded shadow-lg dark:shadow-[0_35px_35px_rgba(62,62,62,0.5)]"
            >
              <div className="mt-1">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <FaBriefcase />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.role}</p>
                <p className="text-muted-foreground text-sm mb-2">
                  {exp.duration}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
