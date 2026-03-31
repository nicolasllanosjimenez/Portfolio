import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../ProjectDetail.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function EarSketch() {
  return (
    <main className="detail">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeUp}>
          <Link to="/projects" className="detail__back">← All projects</Link>
        </motion.div>
        <motion.p className="detail__eyebrow" variants={fadeUp}>
          04 — Platform Contributor · Ongoing
        </motion.p>
        <motion.h1 className="detail__title" variants={fadeUp}>
          Ear<span className="detail__title--accent">Sketch</span>
        </motion.h1>
        <motion.div className="detail__divider" variants={fadeUp} />
        <motion.div className="detail__tags" variants={fadeUp}>
          {['Web', 'Education', 'Open Source', 'Testing'].map(t => (
            <span key={t} className="detail__tag">{t}</span>
          ))}
        </motion.div>
      </motion.div>

      <div className="detail__body">

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Overview</h2>
          <p>
            EarSketch is a free online platform that teaches coding through music
            creation, used by over 2,000 students per week. Its mission is to
            bring computer science education to underrepresented communities,
            using music as the entry point because music is a universal language
            that doesn't require a technical background to engage with.
          </p>
          <p>
            I contribute to the platform as part of a team that includes two
            professors and three PhD students. The work is unglamorous in the
            best way, testing, debugging, maintaining a live system that real
            students depend on every day.
          </p>

          {/* Imagen 1 — screenshot de la plataforma EarSketch */}
          <div className="detail__media">
            <img src="/assets/earsketch.jpg" alt="EarSketch platform interface" />
            <p className="detail__media-caption">EarSketch — coding through music in the browser</p>
          </div>
        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">My role</h2>
          <p>
            My responsibilities cover testing new features and updates before
            they reach users, maintaining the platform's stability, and resolving
            bugs that surface in production. It's the kind of work that teaches
            you what software engineering actually looks like at scale, not
            building features from scratch, but keeping a real system healthy
            under real load.
          </p>

        </motion.section>
        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">What it's taught me</h2>
          <p>
            Working on EarSketch has shown me the difference between code that
            works and code that works for 2,000 people simultaneously. It's also
            reinforced why the mission matters, every bug I fix is a student
            somewhere who gets to keep learning without hitting a wall.
          </p>
          <p>
            The collaboration with PhD students and faculty has been as valuable
            as the technical work. Watching how researchers approach problems, 
            the patience, the rigor, the willingness to sit with uncertainty,
            is something no classroom teaches directly.
          </p>
        </motion.section>

      </div>

      <motion.div
        className="detail__nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/projects/job-dashboard" className="detail__back">
          ← Job Dashboard
        </Link>
        <Link to="/projects" className="detail__next">
          All projects →
        </Link>
      </motion.div>
    </main>
  )
}