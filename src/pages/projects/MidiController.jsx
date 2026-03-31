import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GithubLink from '../../components/GithubLink'
import '../ProjectDetail.css'
import './MidiController.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const skills = [
  { code: 'ECE 2035',  desc: 'Programming hardware at the register level — understanding how code becomes physical action' },
  { code: 'ECE 2026',  desc: 'Signal processing fundamentals — analog voltage as information, sampled and interpreted' },
  { code: 'ECE 3400',  desc: 'Embedded systems — microcontrollers, real-time loops, peripheral interfacing' },
  { code: 'MIDI Protocol', desc: 'Serial communication standard — 7-bit values, channel messages, continuous controllers' },
  { code: 'Circuit Design', desc: 'Breadboard prototyping — pull-down resistors, analog/digital pin behavior' },
  { code: 'DAW Integration', desc: 'How software reads hardware input — FL Studio MIDI mapping and parameter binding' },
]

export default function MidiController() {
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
          02 — Discovery Project · Completed
        </motion.p>
        <motion.h1 className="detail__title" variants={fadeUp}>
          USB-MIDI<br />
          <span className="detail__title--accent">Expression Controller</span>
        </motion.h1>
        <motion.div className="detail__divider" variants={fadeUp} />
        <motion.div className="detail__tags" variants={fadeUp}>
          {['Hardware', 'Embedded Systems', 'Music Tech', 'MIDI Protocol', 'Arduino'].map(t => (
            <span key={t} className="detail__tag">{t}</span>
          ))}
        </motion.div>
      </motion.div>

      <div className="detail__body">

        {/* Overview */}
        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Overview</h2>
          <p>
            This was my Discovery Project at Georgia Tech for the ECE1100 class. The goal: design and build
            a custom USB-MIDI controller that interfaces with DAWs like FL Studio,
            giving a music producer hands-on, physical control over digital audio
            effects and virtual instruments in real time.
          </p>
          <p>
            The device uses a microcontroller to read analog signals from
            potentiometers, physical knobs, and converts them into MIDI data
            that any DAW can interpret. Turn a knob, change a filter. It's a
            direct physical connection between the body and the sound.
          </p>

          <div className="detail__media detail__media--video">
            <iframe
              src="https://www.youtube.com/embed/MMXyTBbSJS0"
              title="MIDI Controller Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '315px', border: 'none' }}
            />
            <p className="detail__media-caption">Demo — controller interfacing with FL Studio</p>
          </div>
        </motion.section>

        {/* Materials */}
        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Materials & hardware</h2>
          <p>
            The build is intentionally minimal: an Arduino Leonardo, a breadboard,
            two push buttons, and a potentiometer knob. The Leonardo is the right
            choice here because unlike most Arduinos, it has native USB HID support,
            meaning it can identify itself to a computer as a MIDI device without
            any additional drivers or adapters.
          </p>
          <p>
            The breadboard allows rapid prototyping, components connect without
            soldering, making iteration fast. The two buttons trigger discrete MIDI
            note events. The potentiometer outputs a continuous analog voltage that
            maps to a MIDI CC value, giving smooth, real-time control over any
            parameter in the DAW.
          </p>

          {/* Galería de materiales — agrega tus fotos aquí */}
          <div className="midi__gallery">
            <div className="detail__media midi__gallery-item">
              <img src="/assets/midi-01.jpg" alt="Arduino Leonardo" />
              <p className="detail__media-caption">Arduino Leonardo — native USB MIDI support</p>
            </div>
            <div className="detail__media midi__gallery-item">
              <img src="/assets/midi-02.jpg" alt="Breadboard setup" />
              <p className="detail__media-caption">Component detail — buttons</p>
            </div>
            <div className="detail__media midi__gallery-item">
              <img src="/assets/midi-03.jpg" alt="Detail of components" />
              <p className="detail__media-caption">Component detail — potentiometer</p>
            </div>
            <div className="detail__media midi__gallery-item">
              <img src="/assets/midi-04.jpg" alt="Full circuit assembled" />
              <p className="detail__media-caption">Full circuit — assembled and connected</p>
            </div>
          </div>
        </motion.section>

        {/* How it works — software */}
        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">How it works — the software</h2>
          <p>
            The firmware runs on the Arduino IDE using two libraries: <strong>MIDIUSB</strong> and
            <strong> Control Surface</strong>. Together they handle the entire translation layer
            between physical hardware and digital audio software.
          </p>
          <p>
            <strong>MIDIUSB</strong> handles the low-level USB communication — it tells the operating
            system that the Arduino is a MIDI device, and manages the serialization of MIDI messages
            into the correct byte format (status byte + data bytes) for transmission over USB.
            Without this, the computer has no way to interpret the signals coming from the board.
          </p>
          <p>
            <strong>Control Surface</strong> sits on top of MIDIUSB and provides a high-level
            abstraction for defining MIDI controllers. Instead of manually writing the logic
            to read a pin, debounce a button, scale an analog value, and construct a MIDI message,
            Control Surface lets you declare what each component does in a few lines. It handles
            the real-time polling loop, debouncing, value smoothing for the potentiometer, and
            correct MIDI message formatting automatically.
          </p>
          <p>
            The result: the Arduino reads the potentiometer's analog voltage (0–1023),
            maps it to a 7-bit MIDI CC value (0–127), and sends it continuously as a
            Modulation Wheel message. The two buttons send Note On / Note Off messages
            for C4 and D4 respectively. FL Studio receives all of this as standard MIDI
            input, identical to any commercial controller, and lets you bind any
            parameter to any incoming CC or note signal.
          </p>

          {/* Code block */}
          <div className="midi__code">
            <div className="midi__code-header">
              <span>firmware.ino</span>
              <span>Arduino / C++</span>
            </div>
            <pre className="midi__code-body">{`#include <Control_Surface.h>

using namespace MIDI_Notes;

// USB MIDI interface
USBMIDI_Interface midi;

// Button → Note C4
NoteButton button1 {12, {note(C, 4)}};

// Button → Note D4
NoteButton button2 {13, {note(D, 4)}};

// Potentiometer → CC #1 (Modulation Wheel)
CCPotentiometer potentiometer {A0, {MIDI_CC::Modulation_Wheel}};

void setup() {
  Control_Surface.begin();
}

void loop() {
  Control_Surface.loop();
}`}</pre>
          </div>
        </motion.section>

        {/* ECE Skills */}
        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">ECE skills reflected</h2>
          <p>
            This project didn't live in one discipline — it pulled from circuits,
            signals, software, and systems simultaneously. These are the threads
            that came together to make it work.
          </p>
          <div className="midi__skills">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className="midi__skill"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="midi__skill-code">{s.code}</span>
                <span className="midi__skill-desc">{s.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Reflection */}
        <motion.section
          className="detail__section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail__section-title">Reflection</h2>
          <p>
            What fascinated me most about this project wasn't the hardware —
            it was the transmission. A hand moves a knob. A voltage changes.
            A number gets scaled. A byte gets sent. A parameter shifts in a DAW.
            Sound changes. At every step, information is being transformed —
            encoded into a different format so it can survive the journey between
            two systems that speak completely different languages.
          </p>
          <p>
            That's exactly what my two threads are about. <strong>Signal & Information
            Processing</strong> is fundamentally concerned with how information moves
            through systems, how it gets encoded, transmitted, degraded, and
            recovered. This project made that abstract idea physical: the analog
            voltage from the potentiometer is a signal, and everything that follows
            is a chain of transformations designed to preserve its meaning across
            system boundaries.
          </p>
          <p>
            <strong>Distributed Systems & Software Design</strong> asks a related
            question at a higher level of abstraction, how do independent systems
            coordinate and communicate reliably? The Arduino and FL Studio are
            two separate computational environments with no shared memory, no
            common runtime. The MIDI protocol is what makes them interoperable:
            a agreed-upon contract for what a message means, regardless of who
            sent it or who receives it. That's a distributed systems problem.
            It just happens to make music.
          </p>
          <p>
            Building this made me realize that the problems I find most interesting
            are always at the boundary, the place where two systems have to figure
            out how to understand each other.
          </p>
        </motion.section>

      </div>

      <motion.div
        className="detail__nav"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/projects/robotic-musicianship" className="detail__back">
          ← Robotic Musicianship
        </Link>
        <Link to="/projects/job-dashboard" className="detail__next">
          Next: Job Dashboard →
        </Link>
      </motion.div>
    </main>
  )
}