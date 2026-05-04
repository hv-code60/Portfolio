"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-20" id="about">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/hv.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              Results-oriented Project Coordinator and Operations Associate with 1+ year of progressive experience coordinating 3–5 concurrent projects and events. I have a proven track record in cross-functional team collaboration, vendor management, and end-to-end operational workflow optimization.
            </p>
            <p className="text-muted-foreground mb-4">
              Skilled in leveraging tools such as MS Excel, Google Workspace, Trello, and PowerPoint to track milestones, generate reports, and drive on-time project delivery. Adept at stakeholder coordination, process improvement, and data-driven decision-making.
            </p>
            <p className="text-muted-foreground mb-6">
              My international exposure includes managing operations for IBIEA 2025 in Muscat, Oman, coordinating ICCICT — a hybrid international research conference — and handling MICE events for leading corporates. I thrive at the intersection of technology, people, and process.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  BCA (Computer Applications)
                  <br />
                  SGT University | CGPA: 7.59
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">New Delhi – 110043, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
