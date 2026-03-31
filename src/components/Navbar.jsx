import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume'   },
  { to: '/goals',    label: 'Goals'    },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">NLJ</Link>
      <ul className="navbar__links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`navbar__link ${pathname === to ? 'navbar__link--active' : ''}`}
            >
              {label}
              {pathname === to && (
                <motion.span
                  className="navbar__indicator"
                  layoutId="nav-indicator"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}