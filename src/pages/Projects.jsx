import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'

const projects = [
  {
    tag: '01 · AI TOOL',
    title: 'Instagram AI Analyzer',
    description:
      'Generates captions and hashtags tailored for an Uzbek audience to boost account engagement.',
    stack: ['React', 'Tailwind', 'API'],
  },
  {
    tag: '02 · TELEGRAM BOT',
    title: 'OrderBot Banner',
    description: 'Animated HTML banner built for a Telegram ordering bot, exported as shareable video.',
    stack: ['HTML5', 'CSS', 'JS'],
  },
  {
    tag: '03 · INTERNAL TOOL',
    title: 'Attendance Tracker',
    description:
      'React app simulating camera-based check-in with Telegram notifications and an admin panel.',
    stack: ['React', 'SCSS', 'Telegram API'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects({ onToast }) {
  return (
    <section className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-10"
        >
          <span className="font-mono text-xs text-teal-glow">projects</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            A few things I've shipped.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-24"
        >
          <span className="font-mono text-xs text-sky-glow">contact</span>
          <h2 className="mt-2 mb-8 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let's build something.
          </h2>
          <ContactForm onToast={onToast} />
        </motion.div>
      </div>
    </section>
  )
}
