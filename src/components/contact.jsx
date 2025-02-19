"use client"

import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FaPhone className="text-primary text-xl" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground"><a href="tel:+91 8373931024">+91 8373931024</a></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FaEnvelope className="text-primary text-xl" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground"><a href="mailto:vashisthimanshu60@gmail.com">vashisthimanshu60@gmail.com</a></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FaMapMarkerAlt className="text-primary text-xl" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">New Delhi, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
