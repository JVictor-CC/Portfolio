import { motion } from 'framer-motion'
import { animation } from '../lib/framerAnimations'

const ProjectCard = ({ imageSrc, projectName, description, tools, url }) => {
  return (
    <div className="flex flex-row justify-center items-center hover:bg-white hover:dark:bg-zinc-800 hover:shadow-lg rounded-lg px-2 py-4 space-x-6 transition-all duration-500">
      <motion.div
        variants={animation(0.1)}
        whileInView="visible"
        initial={{ x: -100, opacity: 0 }}
        viewport={{ once: true }}
        className="w-3/5 md:w-1/3 lg:w-2/5 flex justify-center"
      >
        <img
          src={imageSrc}
          alt={projectName}
          className="w-full max-w-48 h-auto min-h-[150px] rounded-lg border"
        />
      </motion.div>
      <div className="w-full md:w-2/3 flex flex-col space-y-2">
        <motion.a
          variants={animation(0.1)}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          href={url}
          target="_blank"
          className="text-base lg:text-lg font-bold text-zinc-800 dark:text-zinc-100 hover:underline"
        >
          {projectName}
        </motion.a>
        <motion.p
          variants={animation(0.15)}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-sm text-zinc-600 dark:text-zinc-400"
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap space-x-2 mt-2">
          {tools.map((tool, index) => (
            <motion.span
              variants={animation(0.1 + index * 0.2)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              key={index}
              className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-full px-3 py-1 my-1"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
