import { motion } from 'framer-motion'
import { animation } from '../lib/framerAnimations'
import CertificateUff from '../assets/document_diploma_uff.pdf'
import CertificateUffPreview from '../assets/preview_diploma_uff.png'
import authorshipDeclaration from '../assets/document_article_authorship.pdf'
import authorshipDeclarationPreview from '../assets/preview_article_authorship.png'
import articlePreview from '../assets/preview_article_published.png'
import technicalReport from '../assets/document_technical_report.pdf'
import technicalReportPreview from '../assets/preview_technical_report.jpg'
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
