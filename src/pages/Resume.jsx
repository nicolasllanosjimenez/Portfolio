import { motion } from 'framer-motion'
import './Resume.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0  },
}

export default function Resume() {
  return (
    <main className="resume">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p className="resume__eyebrow" variants={fadeUp}>
          ♛ &nbsp; Resume
        </motion.p>
        <motion.h1 className="resume__title" variants={fadeUp}>
          The full<br />
          <span className="resume__title--yellow">picture.</span>
        </motion.h1>
        <motion.div className="resume__divider" variants={fadeUp} />
        <motion.p className="resume__note" variants={fadeUp}>
          Download or open the PDF directly.
        </motion.p>
        <motion.div className="resume__actions" variants={fadeUp}>
          <a href="/assets/resume.pdf" download="Nicolas_Llanos_Resume.pdf" className="resume__btn resume__btn--primary">
            Download PDF
          </a>
          <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="resume__btn resume__btn--ghost">
            Open in new tab
          </a>
        </motion.div>
      </motion.div>
    </main>
  )
}