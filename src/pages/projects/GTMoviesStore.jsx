import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GithubLink from '../../components/GithubLink'
import '../ProjectDetail.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function GTMoviesStore() {
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
          05 — Full-Stack Web App · Completed
        </motion.p>
        <motion.h1 className="detail__title" variants={fadeUp}>
          GT Movies<br />
          <span className="detail__title--accent">Store</span>
        </motion.h1>
        <motion.div className="detail__divider" variants={fadeUp} />
        <motion.div className="detail__tags" variants={fadeUp}>
          {['Python', 'Django', 'SQL', 'Full-Stack'].map(t => (
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
            GT Movies Store is a full-stack e-commerce web app built with Django,
            backed by a small, manually curated catalog of four movies. It's a
            complete storefront: users can create an account, browse the catalog,
            add movies to a cart, place and cancel orders, and leave reviews on
            the movies.
          </p>
          <p>
            Each screen maps directly to a required user story. The catalog and
            movie detail pages satisfy the story of browsing and inspecting a
            product before buying it. Account creation and login satisfy the
            need for persistent, personalized state, a cart and order history
            tied to a specific user rather than a session. The cart and order
            flow (add to cart, place order, cancel order) covers the purchasing
            story end to end, including the ability to back out of a decision.
            And the review system, create, edit, and report a review, covers the
            community-feedback story: users can share their opinion on a movie,
            correct it later, and flag reviews that violate guidelines.
          </p>
        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Process description</h2>
          <p>
            I worked on this project individually, following an iterative
            approach: I built it chapter by chapter alongside{' '}
            <em>Django 5 for the Impatient: Learn the Core Concepts of Django to
            Develop Python Web Applications</em>, implementing one feature at a
            time (models and the catalog first, then authentication, then the
            cart and order flow, then reviews) and manually testing each one
            before moving to the next rather than writing the whole app upfront.
          </p>
        </motion.section>

        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Video demonstration</h2>
          <p>
            A short walkthrough of the catalog, cart, order, and review flows
            in action.
          </p>

          <div className="detail__media detail__media--video">
            <iframe
              src="https://www.youtube.com/embed/5Bu0Dv3U3FI"
              title="GT Movies Store Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '315px', border: 'none' }}
            />
            <p className="detail__media-caption">GT Movies Store — walkthrough demo</p>
          </div>
        </motion.section>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <GithubLink url="https://github.com/nicolasllanosjimenez/moviesstore" />
          <a
            href="https://nicolasllanos.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <span>View live demo</span>
          </a>
        </div>
      </div>

      <motion.div
        className="detail__nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/projects/earsketch" className="detail__back">
          ← EarSketch
        </Link>
        <Link to="/projects" className="detail__next">
          All projects →
        </Link>
      </motion.div>
    </main>
  )
}
