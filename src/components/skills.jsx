"use client"

import { motion } from "framer-motion"
import { FaNetworkWired, FaServer, FaTools, FaUserFriends } from "react-icons/fa"

const skills = [
  {
    category: "Network Engineering",
    items: ["Network device and tools", "Basic knowledge of computer networking"],
    icon: <FaNetworkWired className="w-6 h-6" />,
  },
  {
    category: "Technical Skills",
    items: ["Quick Learner", "Communication skills"],
    icon: <FaTools className="w-6 h-6" />,
  },
  {
    category: "Team Collaboration",
    items: ["Team player", "Project coordination"],
    icon: <FaUserFriends className="w-6 h-6" />,
  },
  {
    category: "System Administration",
    items: ["Server management", "Infrastructure setup"],
    icon: <FaServer className="w-6 h-6" />,
  },
]

export default function Skills() {
  return (
    <section className="py-20 bg-secondary/30" id="skills">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">{skill.icon}</div>
                <h3 className="font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
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
