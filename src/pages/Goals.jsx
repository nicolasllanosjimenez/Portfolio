import { motion } from 'framer-motion'
import './Goals.css'

const goals = [
  {
    num: '01',
    title: 'Intelligent systems',
    body: `I'm drawn to software, specifically to building systems that can perceive, respond, and evolve within complex environments. Systems that don't just execute instructions, but adapt to the unexpected.`,
  },
  {
    num: '02',
    title: 'Music × Technology',
    body: `The intersection of music and tech is where that interest gets most alive. Music is real-time, relational, and deeply contextual. Building systems that can engage with it meaningfully requires solving some of the hardest problems in AI and HCI.`,
  },
  {
    num: '03',
    title: 'Getting there',
    body: `Right now I'm building the foundation, distributed systems, signal processing, and ML through coursework and research. My work with the Robotic Musicianship group at GT is my most direct bridge between theory and practice. Next: stronger software engineering skills through internships, research with publication potential, and projects that sit at the edge of what's technically interesting and creatively meaningful.`,
  },
  {
    num: '04',
    title: 'The bigger picture',
    body: `Professionally the exact shape is still forming. But personally the vision is clear: I want to work on things that matter from different parts of the world; absorb different cultures, different musics, different ways of seeing. The goal isn't a job title. It's a life built around curiosity and craft.`,
  },
]

export default function Goals() {
  return (
    <main className="goals">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p
          className="goals__eyebrow"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          ♛ &nbsp; Where I'm going
        </motion.p>
        <motion.h1
          className="goals__title"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          The<br />
          <span className="goals__title--red">direction.</span>
        </motion.h1>
        <motion.div
          className="goals__divider"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        />
      </motion.div>

      <div className="goals__grid">
        {goals.map((g, i) => (
          <motion.div
            key={g.num}
            className="goals__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="goals__num">{g.num}</span>
            <h2 className="goals__card-title">{g.title}</h2>
            <p>{g.body}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}