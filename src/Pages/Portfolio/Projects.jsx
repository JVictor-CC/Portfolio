import ProjectCard from '../../components/ProjectCard'
import studyCase from '../../assets/google-study-case.png'
import icProject from '../../assets/projeto_ic.png'
import myChat from '../../assets/my_chat.png'
import myTCC from '../../assets/tcc.png'

const Projects = () => {
  const projectData = [
    {
      imageSrc: myChat,
      projectName: 'ChatGPT clone',
      description: 'Uma aplicação fullstack de chat com inteligencia artificial.',
      tools: ['React', 'Node', 'MongoDB', 'OpenAI API', 'Fullstack'],
      url: 'https://github.com/JVictor-CC/My-Chat-GPT',
    },
    {
      imageSrc: icProject,
      projectName: 'Projeto de Pesquisa IC',
      description: 'Projeto de pesquisa em ES com foco na adaptação de uma ferramenta de modelagem UML para atender as especificações da ontologia Kuaba e geração automática de código, a partir da transformação entre modelos.',
      tools: ['Engenharia de Software', 'Java', 'Modelio', 'UML'],
      url: 'https://github.com/adrianamedeiros-uff/Kuaba-Software-Engineering-tool',
    },
    {
      imageSrc: myTCC,
      projectName: 'Projeto TCC',
      description:
        'Finetune de Modelo LLM utilizando o framework Ludwig e o desenvolvimento de uma interface de usuário para inferências com o modelo.',
      tools: ['Python', 'Ludwig', 'Docker', 'FastAPI', 'Streamlit'],
      url: 'https://github.com/JVictor-CC/LLM-Chat-APP',
    },
    {
      imageSrc: studyCase,
      projectName: 'Estudo de Caso - Análise de dados',
      description: 'Projeto de conclusão do curso de análise de dados da Google.',
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