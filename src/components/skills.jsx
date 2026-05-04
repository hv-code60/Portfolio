"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Project Management Tools",
    skills: ["Trello", "Asana", "Notion", "Google Workspace", "MS Excel", "Google Sheets"],
  },
  {
    category: "Reporting & Presentation",
    skills: ["Microsoft PowerPoint", "Google Slides", "Dashboard Reporting"],
  },
  {
    category: "Project Management",
    skills: ["Planning & Scheduling", "Milestone Tracking", "Risk Identification", "Status Reporting"],
  },
  {
    category: "Operations",
    skills: ["Workflow Optimization", "Vendor Coordination", "MICE Operations", "Event Management"],
  },
  {
    category: "Data & Analytics",
    skills: ["Data Collection", "Data Visualization", "AI-Driven Analysis", "Data-Driven Decision Making"],
  },
  {
    category: "Soft Skills",
    skills: ["Team Collaboration", "Problem Solving", "Adaptability", "Communication", "Attention to Detail"],
  },
]

const coreCompetencies = [
  "Project Coordination & Planning",
  "Operations Management",
  "Cross-functional Team Collaboration",
  "Vendor & Stakeholder Coordination",
  "Workflow Monitoring & Process Optimization",
  "Data Analysis & Reporting",
  "Event & MICE Operations",
  "Problem Solving & Adaptability",
]

export default function Skills() {
  return (
    <section className="py-20 bg-secondary/30" id="skills">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-center mb-10 max-w-xl mx-auto"
        >
          A blend of operational know-how, project leadership, and data-driven thinking.
        </motion.p>

        {/* Core Competencies */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 max-w-4xl mx-auto">
          {coreCompetencies.map((comp, index) => (
            <motion.span
              key={comp}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {comp}
            </motion.span>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <h3 className="font-semibold mb-3 text-base">{cat.category}</h3>
              <ul className="space-y-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
