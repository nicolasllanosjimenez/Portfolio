import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../ProjectDetail.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function RoboticMusicianship() {
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
          01 — VIP Research · Georgia Tech · Ongoing
        </motion.p>
        <motion.h1 className="detail__title" variants={fadeUp}>
          Robotic<br />
          <span className="detail__title--accent">Musicianship</span>
        </motion.h1>
        <motion.div className="detail__divider" variants={fadeUp} />
        <motion.div className="detail__tags" variants={fadeUp}>
          {['Machine Learning', 'HCI', 'Real-Time Systems', 'Gesture Design'].map(t => (
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
            The Robotic Musicianship Group at Georgia Tech builds machines that don't
            just play music: they listen, respond, and collaborate. I work within this
            group on Shimon, a robotic marimba player capable of real-time musical
            interaction with human performers. The goal isn't automation. It's
            conversation, the kind that happens between two musicians sharing a stage.
          </p>
          <p>
            My specific focus is on social and expressive gestures: how Shimon
            communicates harmonic changes, shifts in musical temperature, and changes
            in role to its human collaborator. In any real jam session, non-verbal
            communication is essential — a nod, a lean, a shift in posture. We're
            engineering that layer into a robot.
          </p>

          {/* Imagen 1 — reemplaza src con tu foto/imagen del lab o de Shimon */}
          <div className="detail__media detail__media--video">
            <video controls preload="metadata">
              <source src="/assets/shimon.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="detail__media-caption">Shimon — robotic marimba player, Georgia Tech</p>
          </div>
        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">The problem</h2>
          <p>
            Most robotic musicians operate in a predictive mode, they anticipate
            what comes next based on patterns, and respond accordingly. This works
            for structured music but breaks down in free improvisation, where the
            human performer is constantly making unexpected decisions.
          </p>
          <p>
            The deeper challenge is not just musical timing or note selection,
            it's the communication of intent. How does a robot signal that it's
            about to shift the harmonic center? How does it indicate that it's
            listening, deferring, or taking the lead? These are questions that
            live at the intersection of machine learning, human-computer interaction,
            and the sociology of musical performance.
          </p>

          {/* Imagen 2 — diagrama, sketch, o foto del proceso */}
          <div className="detail__media">
            <img src="/assets/gesture.jpg" alt="Gesture system diagram" />
            <p className="detail__media-caption">Gesture system — mapping musical states to motor behavior</p>
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
            I'm responsible for designing and implementing the gesture system,
            the physical movements Shimon uses to communicate with its human
            partner. This involves mapping musical states (harmonic tension,
            rhythmic role, dynamic level) to specific motor behaviors, and
            evaluating how well human musicians can read and respond to those signals.
          </p>
          <p>
            In parallel, I contribute to the research and evaluation of machine
            learning models and datasets used to train the system's musical responses.
            Working alongside PhD students and faculty researchers has shown me what
            it looks like to operate at the frontier, where the theory from class
            meets problems nobody has solved yet.
          </p>
        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">What I've learned</h2>
          <p>
            This project has fundamentally changed how I think about intelligence.
            A system that can perceive, interpret, and act in real time within a
            dynamic environment, adapting to a human partner who is constantly
            making new choices, is a microcosm of what I want to spend my career
            building. Music just happens to be the most honest test environment
            for that kind of system.
          </p>
          <p>
            Beyond the technical, it's taught me how research teams operate, 
            the rhythm of weekly meetings, the discipline of reading papers,
            the way a good question asked in a lab can turn into a year of work.
          </p>
        </motion.section>

      </div>

      <motion.div
        className="detail__nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/projects" className="detail__back">← All projects</Link>
        <Link to="/projects/midi-controller" className="detail__next">
          Next: USB-MIDI Controller →
        </Link>
      </motion.div>
    </main>
  )
}