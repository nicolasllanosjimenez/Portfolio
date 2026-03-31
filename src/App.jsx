import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Goals from './pages/Goals'
import Projects from './pages/Projects'
import RoboticMusicianship from './pages/projects/RoboticMusicianship'
import MidiController from './pages/projects/MidiController'
import JobDashboard from './pages/projects/JobDashboard'
import EarSketch from './pages/projects/EarSketch'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/robotic-musicianship" element={<RoboticMusicianship />} />
        <Route path="/projects/midi-controller" element={<MidiController />} />
        <Route path="/projects/job-dashboard" element={<JobDashboard />} />
        <Route path="/projects/earsketch" element={<EarSketch />} />
      </Routes>
    </HashRouter>
  )
}