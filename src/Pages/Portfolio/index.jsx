import { useState, useEffect } from 'react'
import ThemeToggler from '../../components/ThemeToggler'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Studies from './Studies'
import Contact from './Contact'
import SocialSidebar from '../../components/SocialSidebar'
import { motion } from 'framer-motion'
import Profile from '../../assets/perfil_720p.jpg'
import Navbar from '../../components/Navbar'
import { animation } from '../../lib/framerAnimations'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <>
      <ThemeToggler />
      <span className="hidden xl:block">
        <SocialSidebar />
      </span>
      <div className="max-w-screen-xl min-h-screen mx-auto dark:bg-zinc-700 bg-zinc-100 dark:text-zinc-100 text-zinc-700 flex justify-center font-inter">
        <div className=" mx-6 flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-10">
          <header className="lg:sticky lg:top-0 lg:max-h-screen w-full flex flex-col justify-between sm:px-10 pt-20">
            <div>
              <div className="mb-10 flex flex-col">
                <motion.h1
                  variants={animation(0.2)}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-5xl mb-3"
                >
                  João Victor de Souza
                </motion.h1>
                <motion.h2
                  variants={animation(0.4)}
                  initial="hidden"
                  animate="visible"
                  className="text-lg md:text-xl font-medium mb-2"
                >
                  Desenvolvedor Fullstack
                </motion.h2>
                <motion.img
                  src={Profile}
                  variants={animation(0.6)}
                  initial="hidden"
                  animate="visible"
                  className="w-80 mt-10 self-center rounded-md shadow-md"
                />
              </div>
              <Navbar activeSection={activeSection} />
            </div>
            {/*<div className="flex justify-center mt-20 xl:hidden">
              <SocialTab />
            </div>*/}
          </header>
          <main className="w-full sm:px-10 pt-12 lg:pt-20">
            <About />
            <Experience />
            <Studies />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}

export default Portfolio
