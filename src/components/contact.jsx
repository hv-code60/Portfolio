"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ message: "", type: "" }) // type: 'success' or 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast({ message: "", type: "" }), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://portfolio-beckend-df5x.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      setLoading(false)
      if (res.ok) {
        showToast('Message sent successfully!', 'success')
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        showToast(data.error || 'Failed to send message.', 'error')
      }
    } catch (err) {
      setLoading(false)
      showToast('Error sending message.', 'error')
    }
  }

  return (
    <section className="py-20" id="contact">
      <div className="container px-4 mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="p-3 border border-gray-300 rounded"
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded"
            disabled={loading}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="p-3 border border-gray-300 rounded"
            disabled={loading}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className="p-3 border border-gray-300 rounded"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-primary text-white py-3 rounded hover:bg-primary-dark transition flex justify-center items-center"
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-8">
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
            <p className="text-muted-foreground">
              <a href="tel:+91 8373931024">+91 9319303073</a>
            </p>
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
            <p className="text-muted-foreground">
              <a href="mailto:vashisthimanshu60@gmail.com">
                vashisthimanshu60@gmail.com
              </a>
            </p>
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

        {/* Toast Message */}
        {toast.message && (
          <div
            className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white z-50 transition-opacity duration-500 ${
              toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {toast.message}
          </div>
        )}
      </div>
    </section>
  )
}
