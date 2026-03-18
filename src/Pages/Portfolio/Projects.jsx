import ProjectCard from '../../components/ProjectCard'
import studyCase from '../../assets/google-study-case.png'

const Projects = () => {
  const projectData = [
    {
      imageSrc: 'https://via.placeholder.com/150',
      projectName: 'ChatGPT clone',
      description: 'Uma aplicação fullstack de chat com inteligencia artificial',
      tools: ['React', 'Node', 'MongoDB', 'openai API'],
      url: 'https://github.com/JVictor-CC/My-Chat-GPT',
    },
    {
      imageSrc: 'https://via.placeholder.com/150',
      projectName: 'Gerenciador de Tarefas',
      description: 'Uma aplicação web para gerenciar tarefas diárias e colaborar em equipes.',
      tools: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
      url: '',
    },
    {
      imageSrc: 'https://via.placeholder.com/150',
      projectName: 'Análise de Sentimentos',
      description: 'Projeto de análise de sentimentos utilizando técnicas de machine learning.',
      tools: ['Python', 'Scikit-learn', 'Pandas'],
      url: '',
    },
    {
      imageSrc: studyCase,
      projectName: 'Estudo de Caso - Análise de dados',
      description: 'Projeto de conclusão do curso de análise de dados da Google',
      tools: ['R', 'Tidyverse', 'Kaggle Notebooks'],
      url: 'https://www.kaggle.com/code/joovictordesouza/google-analytics-case-of-study',
    },
  ]

  return (
    <section id="projects" className="mb-20">
      <h1 className="mb-5 text-xl font-medium">Projetos</h1>
      <div className="space-y-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            projectName={project.projectName}
            description={project.description}
            tools={project.tools}
            url={project.url}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
