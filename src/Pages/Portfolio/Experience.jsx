import ExperienceCard from '../../components/ExperienceCard'
import Habilities from '../../components/Habilities'

const Experience = () => {
  const expereinceData = [
    {
      date: '09/2024 — Atualmente',
      enterprise: 'Freelancer',
      position: 'Desenvolvedor Web Freelancer',
      description:
        'Desenvolvi projetos Fullstack como e-commerce, site-cardapio para restaurante e Paginas de Produto.',
    },
    {
      date: '03/2023 — 05/2024',
      enterprise: 'UFF',
      position: 'Iniciaçao Científica',
      description:
        'Projeto de pesquisa desenvolvido em uma equipe composta por 3 alunos em conunto com a orientadora. Projeto na área de engenharia dirigida a modelos (MDE), com artigo aceito para publicação na revista RSC.',
    },
  ]

  return (
    <section id="experience" className="mb-20">
      <h1 className="mb-5 text-xl font-medium">Experiência</h1>
      <div className="space-y-8">
        {expereinceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            date={experience.date}
            enterprise={experience.enterprise}
            position={experience.position}
            description={experience.description}
          />
        ))}
      </div>
      <h1 className="my-5 text-xl font-medium">Habilidades</h1>
      <Habilities />
    </section>
  )
}

export default Experience
