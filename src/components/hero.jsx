"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Himanshu Vashist
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Operations Associate & Data Analyst
          </h2>
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/hv-code60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/himanshu-vashist-047219352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://drive.google.com/file/d/1F3DV2OhmGckZyNSExkRBOekPUqShZvRS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary"
            >
              <IoDocumentTextOutline />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:vashisthimanshu60@gmail.com"
              className="text-2xl hover:text-primary"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
