import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import BlobBackground from '../components/BlobBackground'
import TypingText from '../components/TypingText'
import MagneticButton from '../components/MagneticButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <BlobBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-teal-glow"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-glow" />
          available for work · uzbekistan
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl"
        >
          Hi, I'm Farhod —
          <br />
          <span className="text-gradient">
            <TypingText words={['Frontend Developer', 'React Engineer', 'UI Craftsman']} />
          </span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
          I build fast, accessible interfaces with React and Tailwind — sharpened over 7 months
          working inside a live IT team, shipping real products under real deadlines.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as={Link}
            to="/projects"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-glow to-sky-glow px-6 py-3 font-display text-sm font-semibold text-void shadow-glow"
          >
            View my work
            <ArrowRight size={16} />
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#"
            className="glass flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold text-ink"
          >
            <Download size={16} />
            Download CV
          </MagneticButton>
        </motion.div>

        <motion.div variants={item} className="mt-16 font-mono text-xs text-ink-faint">
          scroll · explore · connect
        </motion.div>
      </motion.div>
    </section>
  )
}
