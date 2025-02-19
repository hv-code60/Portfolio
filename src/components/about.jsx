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
                src="/placeholder.svg"
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
              I am a dedicated Network Engineer with a strong foundation in computer
              networking and system administration. Currently pursuing my education
              at SGT University, I have developed expertise in network device
              management, infrastructure setup, and team collaboration.
            </p>
            <p className="text-muted-foreground mb-6">
              My experience includes working with various networking tools and
              technologies, and I pride myself on being a quick learner who can
              effectively communicate technical concepts to diverse audiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science
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
