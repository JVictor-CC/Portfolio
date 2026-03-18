import { motion } from 'framer-motion'
import { animation } from '../../lib/framerAnimations'
import Documents from '../../components/Documents'

const About = () => {
  return (
    <section id="about" className="mb-20">
      <h1 className="mb-5 text-xl font-medium">Sobre Mim</h1>
      <div className="dark:text-zinc-300 text-zinc-500">
        <motion.p variants={animation(0.2)} initial="hidden" animate="visible" className="mb-4">
          Olá, me chamo João Victor, sou{' '}
          <span className="text-highlight">
            Bacharel em Ciência da Computação pela Universidade Federal Fluminense
          </span>{' '}
          e desenvolvo sites e aplicações responsivas, sempre com foco na qualidade.
        </motion.p>

        <motion.p variants={animation(0.4)} initial="hidden" animate="visible" className="mb-4">
          Durante minha jornada acadêmica, explorei diversas áreas da computação, com ênfase em{' '}
          <span className="text-highlight">
            Desenvolvimento Web, Inteligência Artificial e Ciência de Dados
          </span>{' '}
          . Sempre busquei me manter atualizado por meio de cursos e projetos pessoais e reais.
        </motion.p>

        <motion.p variants={animation(0.6)} initial="hidden" animate="visible" className="mb-4">
          Tenho experiência na área de pesquisa, adquirida durante meu trabalho de{' '}
          <span className="text-highlight">Iniciação Científica</span> na área de{' '}
          <span className="text-highlight">Engenharia de Software</span>, especificamente em
          Arquitetura Dirigida a Modelos (MDA). Esse trabalho{' '}
          <span className="text-highlight">
            resultou em uma solução completa para transformações entre modelos
          </span>{' '}
          utilizando a Ontologia Kuaba, culminando na{' '}
          <span className="text-highlight">
            publicação de um artigo na 14ª edição da Revista de Sistemas e Computação (RSC)
          </span>
          .
        </motion.p>

        <motion.p variants={animation(0.6)} initial="hidden" animate="visible" className="mb-4">
          No meu <span className="text-highlight">Trabalho de Conclusão de Curso</span>, desenvolvi
          um projeto que abordou o{' '}
          <span className="text-highlight">
            treinamento de uma inteligência artificial generativa
          </span>{' '}
          (como o ChatGPT) e o desenvolvimento de uma
          <span className="text-highlight">aplicação com API</span> para utilizar o modelo de IA,
          além de uma <span className="text-highlight">interface gráfica</span> para interação com o
          usuário.
        </motion.p>

        <motion.p variants={animation(0.8)} initial="hidden" animate="visible" className="mb-4">
          Atualmente, <span className="text-highlight">trabalho como freelancer</span> desenvolvendo{' '}
          <span className="text-highlight">sites e aplicações</span> (frontend e backend) e{' '}
          <span className="text-highlight">automações</span>.
        </motion.p>
      </div>
      <Documents />
    </section>
  )
}

export default About
