import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiRedux, SiMongodb } from 'react-icons/si' 
function Skills() {
    const skills = [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl md:text-6xl mb-4 text-blue-600">{skill.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
export default Skills