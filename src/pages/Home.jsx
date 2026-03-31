import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
}

export default function Home() {
  return (
    <main className="home">

      {/* scratch marks decorativos */}
      <div className="home__scratch home__scratch--v" />
      <div className="home__scratch home__scratch--h" />

      {/* badge esquina */}
      <motion.div
        className="home__badge"
        initial={{ opacity: 0, rotate: 4 }}
        animate={{ opacity: 1, rotate: 2 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        CALI × ATL
      </motion.div>

      <motion.div
        className="home__content"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.p className="home__eyebrow" variants={fadeUp}>
          ♛ &nbsp; Nicolas Llanos Jiménez
        </motion.p>

        <motion.h1 className="home__title" variants={fadeUp}>
          Engineer.<br />
          <span className="home__title--red">Artist.</span><br />
          Builder.
        </motion.h1>

        <motion.div className="home__line" variants={fadeUp} />

        <motion.p className="home__sub" variants={fadeUp}>
          Computer Engineering @ Georgia Tech — threading in Distributed Systems
          and Signal Processing. I build things that think, adapt, and sometimes make music.
        </motion.p>

        <motion.p className="home__sub" variants={fadeUp}>
          Originally from Cali, Colombia. My work lives at the intersection of
          intelligent systems and creative technology.
        </motion.p>

        <motion.div className="home__cta" variants={fadeUp}>
          <Link to="/projects" className="home__btn home__btn--primary">
            See Projects
          </Link>
          <Link to="/about" className="home__btn home__btn--ghost">
            About me
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}