"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGlobe, FaCalendarAlt, FaCode } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"

const techProjects = [
  {
    title: "Traveon – Travel Website",
    description:
      "Full-stack travel booking platform for Traveon Ventures. Managed project timelines, coordinated with the development team, handled API integrations, and oversaw time-to-time maintenance to ensure a seamless user experience.",
    tags: ["Project Coordination", "Frontend", "Backend", "API Integration", "Maintenance"],
    icon: <FaGlobe />,
  },
  {
    title: "Retreats by Traveon",
    description:
      "A luxury retreats sub-brand website under Traveon. Led end-to-end project delivery including requirement gathering, timeline management, and overseeing UI/UX and backend implementation by the tech team.",
    tags: ["Project Management", "Full Stack", "Maintenance"],
    icon: <FaGlobe />,
  },
  {
    title: "Abhyasshala – Mock Test Platform",
    description:
      "A high-traffic online mock test platform built on the lines of leading edtech platforms. Coordinated the full product lifecycle — from architecture planning and feature scoping to backend development, test engine integration, and ongoing platform maintenance.",
    tags: ["Project Coordination", "EdTech", "Backend", "API Integration"],
    icon: <FaCode />,
  },
  {
    title: "IBIEA 2025 & 2026 – Award Function Websites",
    description:
      "Official websites for the International Business and Innovation Excellence Awards. Managed development timelines, content updates, registration system integrations, and post-launch maintenance across both editions.",
    tags: ["Project Management", "Web Development", "CMS", "Maintenance"],
    icon: <FaGlobe />,
  },
  {
    title: "QuoteGen – Quotation Maker (Traveon & Holiday Seychelles)",
    description:
      "An internal travel quotation generation tool for the Traveon ecosystem. Coordinated development of the quotation engine, pricing logic integration, and PDF generation workflows for both Traveon and Holiday Seychelles brands.",
    tags: ["Project Coordination", "Internal Tool", "Automation", "PDF Generation"],
    icon: <FaCode />,
  },
  {
    title: "Conference Websites (2–3 Projects)",
    description:
      "Managed development and deployment of multiple international conference websites featuring speaker listings, registration systems, agenda modules, and hybrid event integrations. Ensured on-time delivery and coordinated with the tech team for post-event updates.",
    tags: ["Project Management", "Web Development", "Event Tech", "Hybrid Events"],
    icon: <FaGlobe />,
  },
  // {
  //   title: "Air Quality Index (AQI) Prediction Model",
  //   description:
  //     "Led a 4-member team at Code Sangam '24 (SGT University) in designing and developing an ML model to predict air quality for specific geographic locations. Integrated multi-variable inputs (wind speed, temperature, smog, pollution indices) and coordinated task allocation using Agile principles.",
  //   tags: ["Python", "Machine Learning", "Data Analysis", "Agile"],
  //   icon: <FaCode />,
  // },
]

const eventProjects = [
  {
    title: "IBIEA 2025 – International Award Function, Muscat, Oman",
    description:
      "Served as a key on-ground operations member for the IBIEA 2025 International Award Function in Muscat, Oman — a 100+ attendee international event. Managed all vendor relationships, logistics coordination, tech setup, and real-time issue resolution throughout the event to ensure flawless execution.",
    tags: ["International Event", "Vendor Management", "Logistics", "Tech Operations", "100+ Attendees"],
    icon: <FaCalendarAlt />,
  },
  {
    title: "ICCICT – International Research Conference, India International Centre",
    description:
      "Handled end-to-end operations for ICCICT, a hybrid (online + offline) international conference for research paper presentations held at India International Centre, New Delhi. Managed all vendor coordination, logistics, AV/tech setup, and ensured smooth hybrid execution across both physical and virtual attendees.",
    tags: ["Hybrid Conference", "Vendor Coordination", "Logistics", "AV & Tech", "International"],
    icon: <FaCalendarAlt />,
  },
  {
    title: "Coursera Offsite MICE Event – Lemontree, Gurugram",
    description:
      "Managed all operations for a corporate offsite MICE event organised by Traveon for Coursera at Lemontree Hotel, Gurugram. Responsibilities included end-to-end event execution, all vendor arrangements, attendee transfers, accommodation coordination, and ensuring a smooth overall experience for all participants throughout the offsite.",
    tags: ["MICE Operations", "Corporate Offsite", "Vendor Management", "Transfers & Logistics"],
    icon: <FaCalendarAlt />,
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("tech")

  return (
    <section className="py-20" id="projects">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-center mb-8 max-w-xl mx-auto"
        >
          A mix of technology projects I've coordinated and large-scale events I've managed end-to-end.
        </motion.p>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-6 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "tech"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              Tech Projects
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "events"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              Event Projects
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {techProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary text-sm">
                          {project.icon}
                        </div>
                        <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "events" && (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {eventProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary text-sm">
                          {project.icon}
                        </div>
                        <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
