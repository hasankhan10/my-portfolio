import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Skills from './Skills'
import Header from './Header'
import Hero from './Hero'
import About from "./About"
import Projects from './Projects'
import Contact from "./Contact"
import Footer from "./Footer"
export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentPosition = window.scrollY + window.innerHeight / 2

      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 text-gray-900">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Abstract+Background')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      />
      <div className="relative z-10">
        <Header currentSection={currentSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}