import { motion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const sections = [
  {
    tag: '01 — Origins',
    title: 'From Cali to Atlanta',
    body: [
      `I grew up in Cali, Colombia — a city known for its salsa, its energy, and its people. I lived there my whole life before moving to Atlanta four years ago to pursue engineering at Georgia Tech. The move taught me how to adapt fast, build new roots, and carry your identity with you across borders.`,
      `That ability to adapt, to read a new environment and respond to it, shows up everywhere in my work. It's not a coincidence that my research focuses on systems that do exactly that.`,
    ],
  },
  {
    tag: '02 — The Engineer',
    title: 'Systems that evolve',
    body: [
      `I'm a second-year Computer Engineering student at GT, concentrating in Distributed Systems & Software Design and Signal & Information Processing. I'm drawn to the question of how systems can be built to handle complexity and uncertainty, not by eliminating it, but by learning to work within it.`,
      `Right now that curiosity is playing out in two research projects: Robotic Musicianship, where I work on enabling a robot named Shimon to communicate expressively with human musicians in real time, and EarSketch, a free platform that teaches kids to code through music; reaching over 2,000 users a week.`,
    ],
  },
  {
    tag: '03 — The Artist',
    title: 'Music, art & everything in between',
    body: [
      `I play piano and drums, and I produce music, mostly trap. I think about music the way I think about engineering: systems of patterns, tension, and release.`,
      `I want to live in many parts of the world.`,
    ],
  },
]

export default function About() {
  return (
    <main className="about">

      {/* Hero con foto */}
      <motion.div
        className="about__hero"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="about__hero-text">
          <motion.p className="about__eyebrow" variants={fadeUp}>
            ♛ &nbsp; About me
          </motion.p>
          <motion.h1 className="about__title" variants={fadeUp}>
            More than<br />
            <span className="about__title--yellow">an engineer.</span>
          </motion.h1>
          <motion.div className="about__divider" variants={fadeUp} />
          <motion.p variants={fadeUp}>
            Computer Engineering student at Georgia Tech. Originally from Cali, Colombia.
            I build systems that think, adapt, and sometimes make music.
          </motion.p>
        </div>

        <motion.div
          className="about__hero-photo"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="about__photo-frame">
            <img
              src="assets/nicolas.jpg"
              alt="Nicolas Llanos Jiménez"
              className="about__photo"
            />
            <div className="about__photo-accent" />
          </div>
          <p className="about__photo-caption">Nicolas Llanos Jiménez — Cali, Colombia</p>
        </motion.div>
      </motion.div>

      {/* Secciones */}
      <div className="about__sections">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            className="about__section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="about__section-left">
              <span className="about__tag">{s.tag}</span>
              <h2 className="about__section-title">{s.title}</h2>
            </div>
            <div className="about__section-right">
              {s.body.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}