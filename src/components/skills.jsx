"use client"

import { motion } from "framer-motion"
import { FaNetworkWired, FaServer, FaTools, FaUserFriends } from "react-icons/fa"

const skills = [
{
"skill": "Data Visualization",
"description": "Ability to create interactive and dynamic dashboards"
},
{
"skill": "SQL",
"description": "Proficiency in writing complex queries and managing databases"
},
{
"skill": "Statistics",
"description": "Understanding of statistical concepts and modeling techniques"
},
{
"skill": "Data Mining",
"description": "Ability to extract insights from large datasets"
},
{
"skill": "Machine Learning",
"description": "Basic understanding of machine learning algorithms and modeling"
},
{
"skill": "Communication",
"description": "Ability to effectively communicate insights to stakeholders"
},
{
"skill": "Data Wrangling",
"description": "Ability to clean, transform, and preprocess data"
},
{
"skill": "Tableau/Power BI",
"description": "Experience with data visualization tools"
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
