import StudiesCard from '../../components/StudiesCard'

const Studies = () => {
  const expereinceData = [
    {
      date: '08/2017 — 08/2024',
      institution: 'Universidade Federal Fluminense',
      course: 'Bacharelado em Ciência da Computação',
    },
    {
      date: '02/2024 — 06/2024',
      institution: 'Coursera & Google',
      course: 'Certificado Profissional em Analise de Dados da Google',
    },
  ]

  return (
    <section id="studies" className="mb-20">
      <h1 className="mb-5 text-xl font-medium">Formação</h1>
      <div className="space-y-8">
        {expereinceData.map((experience, index) => (
          <StudiesCard
            key={index}
            date={experience.date}
            institution={experience.institution}
            course={experience.course}
          />
        ))}
      </div>
    </section>
  )
}

export default Studies
