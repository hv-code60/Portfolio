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
                src="/h.jpg"
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
            I am an Operations Associate passionate about optimizing business processes and ensuring smooth operational workflows. With a solid foundation in AI and data analytics, I use advanced tools like GPT, Perplexity, Gemini, and Blackkbox to analyze data, identify inefficiencies, and deliver actionable insights. My goal is to seamlessly integrate AI-driven approaches to enhance decision-making and operational performance.
            </p>
            <p className="text-muted-foreground mb-6">
           I have practical experience managing and supporting large-scale event operations and IT systems Management, including the International Award Function IBIEA 2025 in Muscat, Oman. This opportunity honed my problem-solving and teamwork skills.
            </p>
            <p className="text-muted-foreground mb-6">
            Dedicated to data-centric and problem-solving strategies, I drive continuous improvement and empower teams through real-time analytics, automation, and efficient workflow management.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  BCA in AI & ML (Computer Science)
                  <br />
                  SGT University
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">New Delhi, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
