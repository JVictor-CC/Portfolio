import { motion } from 'framer-motion'
import { animation } from '../lib/framerAnimations'
import CertificateUff from '../assets/diploma_uff.pdf'
import CertificateUffPreview from '../assets/diploma_uff_preview.png'
import authorshipDeclaration from '../assets/autoria_artigo.pdf'
import authorshipDeclarationPreview from '../assets/autoria_artigo_preview.png'
import articlePreview from '../assets/artigo_publicado_preview.png'
import technicalReport from '../assets/relatorio_tecnico.pdf'
import technicalReportPreview from '../assets/relatorio_tecnico_preview.jpg'
import tccUFFPreview from '../assets/preview_tcc.jpg'
import tccUFF from '../assets/document_tcc.pdf'

const Documents = () => {
  const docs = [
    {
      downloadUrl: CertificateUff,
      imageUrl: CertificateUffPreview,
      text: 'Diploma Ciência da Computação UFF',
    },
    {
      downloadUrl: authorshipDeclaration,
      imageUrl: authorshipDeclarationPreview,
      text: 'Declaração de Autoria de Artigo',
    },
    {
      downloadUrl: 'https://revistarsc.com.br/ojs/index.php/rsc/article/view/107/80',
      imageUrl: articlePreview,
      text: 'Artigo publicado na Revista de Sistemas e Computação',
    },
    {
      downloadUrl: technicalReport,
      imageUrl: technicalReportPreview,
      text: 'Relatório Técnico - IC',
    },
    {
      downloadUrl: tccUFF,
      imageUrl: tccUFFPreview,
      text: 'TCC - Ciência da Computação UFF',
    },
  ]
  return (
    <motion.div
      variants={animation(1)}
      initial="hidden"
      animate="visible"
      className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {docs.map((doc, index) => {
        return (
          <motion.div whileHover={{ scale: 1.1 }} key={index} className="min-w-28 max-w-52">
            <a
              href={doc.downloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img src={doc.imageUrl} alt={doc.text} />
            </a>
            <p className="text-center text-xs mt-2">{doc.text}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Documents
