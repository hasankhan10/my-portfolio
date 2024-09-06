import { motion } from "framer-motion"
function Projects() {
    const projects = [
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
        image: '/placeholder.svg?height=300&width=400&text=E-commerce+Platform',
      },
      {
        title: 'Task Management App',
        description: 'A React-based task management application with Redux for state management.',
        image: '/placeholder.svg?height=300&width=400&text=Task+Management+App',
      },
      {
        title: 'Blog CMS',
        description: 'A content management system built with Next.js and a headless CMS.',
        image: '/placeholder.svg?height=300&width=400&text=Blog+CMS',
      },
    ]
  
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
export default Projects