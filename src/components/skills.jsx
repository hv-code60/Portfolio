"use client"

import { motion } from "framer-motion"
import { FaNetworkWired, FaServer, FaTools, FaUserFriends } from "react-icons/fa"

const skills = [
{
"skill": "Operations Management",
"description": "Overseeing and optimizing day-to-day business processes to ensure efficiency."
},
{
"skill": "Process Optimization",
"description": "Identifying and improving workflows for better productivity."
},
{
"skill": "Event Operations",
"description": "Coordinating logistics and technology for smooth event execution."
},
{
"skill": "IT Systems Support",
"description": "Managing and maintaining operational IT infrastructure."
},
{
"skill": "Data-Driven Decision",
"description": "Leveraging data insights to guide operational choices."
},
{
"skill": "Team Collaboration",
"description": "Working effectively across departments to meet business goals."
},
{
"skill": "Project Management",
"description": "Planning and executing operational projects efficiently."
},
{
"skill": "Problem Solving",
"description": "Quickly identifying and resolving operational issues."
},
{
"skill": "AI-Driven Analysis",
"description": "Using AI tools to analyze data and solve operational problems."
},
{
"skill": "Adaptability",
"description": "Adjusting to changing business needs and environments swiftly."
}
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
                {/* <div className="text-primary">{skill.icon}</div> */}
                <h3 className="font-semibold">{skill.skill}</h3>
              </div>
              <ul className="space-y-2">
                  <li className="text-muted-foreground">
                    {skill.description}
                  </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
