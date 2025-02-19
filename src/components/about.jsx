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
                src="/himanshu.jpg"
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
            I’m Himanshu Vashist, a data enthusiast with a passion for turning complex data into clear, actionable insights. With a background in Computer Science and expertise in tools like excel tableau , I specialize in Data Analyst and Data Visualization .
            </p>
            <p className="text-muted-foreground mb-6">
            I thrive on solving real-world problems by analyzing trends, identifying patterns, and presenting findings in a way that drives decision-making. I’m always eager to dive into the data and uncover meaningful stories.
            </p>
            <p className="text-muted-foreground mb-6">
            Outside of work, I enjoy Exploring new datasets, learning about AI, or staying active in the data science community.
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
