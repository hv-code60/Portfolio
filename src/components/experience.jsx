"use client"

import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const experiences = [
  {
    title: "Traveon Ventures",
    location: "NSP, New Delhi",
    role: "Operations Associate & Project Coordinator",
    duration: "Sep 2025 – Present",
    bullets: [
      "Coordinated 3–5 concurrent projects and events end-to-end, consistently meeting project milestones and delivery deadlines.",
      "Managed relationships with 3–5 external vendors and partners, aligning deliverables, timelines, and service expectations.",
      "Monitored and optimized operational workflows using Trello and Google Workspace, reducing task delays and improving team efficiency.",
      "Maintained project documentation, status trackers, and progress reports in MS Excel and Google Sheets for full stakeholder visibility.",
      "Collaborated with internal cross-functional teams to coordinate daily operational activities, resource allocation, and scheduling.",
      "Prepared PowerPoint presentations for project reviews, summarizing progress, risks, and next steps for management.",
    ],
  },
  {
    title: "Evren Global Solutions Pvt. Ltd.",
    location: "NSP, New Delhi",
    role: "Data Analyst (Intern)",
    duration: "Feb 2025 – Jul 2025",
    bullets: [
      "Collected, cleaned, and organized large datasets using MS Excel and Google Sheets, improving data accuracy and reporting efficiency.",
      "Built visual dashboards and reports in PowerPoint and Google Sheets to communicate key performance metrics to sales and operations teams.",
      "Managed operational data for MICE projects, maintaining data integrity across multiple concurrent event workflows.",
      "Collaborated with cross-functional teams to define data requirements and translated analytical findings into actionable operational improvements.",
      "Selected as a key on-ground operations member for the IBIEA 2025 International Award Function in Muscat, Oman — a 100+ attendee international event — handling logistics, coordination, and real-time issue resolution.",
    ],
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
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-lg shadow-lg dark:shadow-[0_35px_35px_rgba(62,62,62,0.5)]"
            >
              <div className="mt-1 flex-shrink-0">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <FaBriefcase />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-xs text-muted-foreground mb-0.5">{exp.location}</p>
                <p className="text-primary font-medium">{exp.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((point, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
