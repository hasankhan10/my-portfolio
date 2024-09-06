import { motion } from "framer-motion"
function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-8 md:mb-0 flex flex-col"
            >
              <img
                src="./mehedi-removebg.png"
                alt="Mehedi Hasan"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg"
              />
            </motion.div>
            <a href="./mehediresume.pdf" download={"mehediresume.pdf"}>
              <button className=" bg-blue-900 text-white font-semibold rounded-md px-3 py-1 shadow-2xl hover:scale-105 transition-all duration-150 mb-3 sm:mb-0">Download Resume</button>
            </a>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-12"
            >
              <p className="text-lg md:text-xl mb-4 leading-relaxed text-gray-700">
                Hello! I am Mehedi Hasan, a passionate Full Stack Developer with a keen eye for creating
                beautiful, functional, and user-centered digital experiences. With a strong foundation
                in both front-end and back-end technologies, I bridge the gap between design and
                functionality.
              </p>
              <p className="text-lg md:text-xl mb-4 leading-relaxed text-gray-700">
                My expertise spans across HTML, CSS, JavaScript, React.js, Next.js, Node.js, and more.
                I am constantly learning and adapting to new technologies to stay at the forefront of
                web development.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                When I am not coding, you can find me exploring new tech trends, contributing to
                open-source projects, or brainstorming ideas for innovative web applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
export default About