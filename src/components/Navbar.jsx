import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Navbar = ({ activeSection }) => {
  const links = [
    { href: 'about', label: 'Sobre Mim' },
    { href: 'experience', label: 'Experiência' },
    { href: 'studies', label: 'Formação' },
    { href: 'projects', label: 'Projetos' }
  ]

  return (
    <nav>
      <ul className="dark:text-zinc-300 text-zinc-500 flex flex-row justify-center items-center space-x-5">
        {links.map((link, index) => {
          return (
            <motion.li
              whileHover={{ x: 3, y: -3 }}
              key={index}
              className={`dark:hover:text-zinc-100 hover:text-zinc-700 ${activeSection === link.href ? 'text-zinc-700 dark:text-zinc-100 font-bold' : ''
                }`}
            >
              <a href={`#${link.href}`}>{link.label}</a>
            </motion.li>
          )
        })}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
}

export default Navbar
