import { Link } from 'react-router-dom'
import SocialSidebar from '../../components/SocialSidebar'
import { motion } from 'framer-motion'
import { AuroraBackground } from '../../components/ui/AuroraBackground'
import ThemeToggler from '../../components/ThemeToggler'

const Home = () => {
  return (
    <>
      <ThemeToggler />
      <SocialSidebar />
      <AuroraBackground>
        <motion.main
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="flex flex-col justify-center items-center dark:text-zinc-100 text-zinc-700">
            <h1 className="font-afacadflux text-4xl md:text-5xl italic">João Victor de Souza</h1>
            <h2 className="text-sm md:text-base">Desenvolvedor FullStack</h2>
            <Link
              to={'/Portfolio/cv'}
              className="glow min-w-40 mt-8 px-3 py-1 text-center border border-blue-500 rounded-md"
            >
              Portfólio
            </Link>
          </div>
        </motion.main>
      </AuroraBackground>
    </>
  )
}

export default Home
