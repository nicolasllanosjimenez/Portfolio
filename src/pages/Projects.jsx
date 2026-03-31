import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: '01',
    slug: 'robotic-musicianship',
    title: 'Robotic Musicianship',
    subtitle: 'VIP Research — Georgia Tech',
    tags: ['Machine Learning', 'HCI', 'Real-Time Systems'],
    status: 'Ongoing',
  },
  {
    id: '02',
    slug: 'midi-controller',
    title: 'USB-MIDI Expression Controller',
    subtitle: 'Discovery Project',
    tags: ['Hardware', 'Embedded Systems', 'Music Tech'],
    status: 'Completed',
  },
  {
    id: '03',
    slug: 'job-dashboard',
    title: 'Job Market Analytics Dashboard',
    subtitle: 'Data Pipeline & Visualization',
    tags: ['Python', 'REST API', 'Matplotlib'],
    status: 'Completed',
  },
  {
    id: '04',
    slug: 'earsketch',
    title: 'EarSketch',
    subtitle: 'Platform Contributor',
    tags: ['Web', 'Education', 'Open Source'],
    status: 'Ongoing',
  },
]

export default function Projects() {
  return (
    <main className="projects">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p
          className="projects__eyebrow"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          ♛ &nbsp; My work
        </motion.p>
        <motion.h1
          className="projects__title"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          Things<br />
          <span className="projects__title--yellow">I've built.</span>
        </motion.h1>
        <motion.div
          className="projects__divider"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        />
      </motion.div>

      <div className="projects__list">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <Link to={`/projects/${p.slug}`} className="project-card project-card--index">
              <div className="project-card__header">
                <span className="project-card__num">{p.id}</span>
                <span className={`project-card__status project-card__status--${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              </div>
              <h2 className="project-card__title">{p.title}</h2>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <div className="project-card__tags">
                {p.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
              <span className="project-card__cta">View project →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}