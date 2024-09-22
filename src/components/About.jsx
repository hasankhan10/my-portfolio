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
              I am Mehedi Hasan, a Full Stack Developer passionate about crafting user-centered digital experiences. Skilled in front-end and back-end technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express, and MongoDB, I bridge the gap between design and functionality. Always eager to learn and contribute, I stay at the forefront of web development by exploring new trends and working on open-source projects.
              </p>

            </motion.div>
          </div>
        </div>
      </section>
    )
  }
export default About