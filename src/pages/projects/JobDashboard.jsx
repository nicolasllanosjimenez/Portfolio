import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GithubLink from '../../components/GithubLink'
import '../ProjectDetail.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function JobDashboard() {
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
          03 — Data Pipeline & Visualization · Completed
        </motion.p>
        <motion.h1 className="detail__title" variants={fadeUp}>
          Job Market<br />
          <span className="detail__title--accent">Analytics Dashboard</span>
        </motion.h1>
        <motion.div className="detail__divider" variants={fadeUp} />
        <motion.div className="detail__tags" variants={fadeUp}>
          {['Python', 'REST API', 'Data Pipeline', 'Matplotlib'].map(t => (
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
            A full data pipeline that extracts job listings from a REST API,
            cleans and processes the raw data, and presents insights through
            an interactive Matplotlib dashboard that responds to user input.
            The goal: make the job market legible: what skills are in demand,
            where, and at what level.
          </p>

        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Architecture</h2>
          <p>
            The pipeline has three layers. The extraction layer hits the REST API,
            handles pagination, and stores raw responses. The transformation layer
            cleans messy real-world data, inconsistent formatting, missing fields,
            duplicate entries, and structures it into a usable schema. The
            visualization layer takes user input (role, location, experience level)
            and renders filtered charts on demand.
          </p>
          <p>
            Working with real API data meant dealing with problems that don't exist
            in textbook exercises, rate limits, malformed responses, fields that
            sometimes exist and sometimes don't. That gap between clean data and
            real data is where most of the engineering work actually lives.
          </p>

        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Results</h2>
          <p>
            The dashboard surfaces patterns that are hard to see when browsing
            job listings manually, skill clustering by role, geographic
            concentration of certain tech stacks, and the delta between
            entry-level and mid-level requirements. It turns a noisy dataset
            into something you can actually reason about.
          </p>

        </motion.section>

        <GithubLink url="https://github.com/nicolasllanosjimenez/job-market-dashboard.git" />
      </div>

      <motion.div
        className="detail__nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/projects/midi-controller" className="detail__back">
          ← MIDI Controller
        </Link>
        <Link to="/projects/earsketch" className="detail__next">
          Next: EarSketch →
        </Link>
      </motion.div>
    </main>
  )
}