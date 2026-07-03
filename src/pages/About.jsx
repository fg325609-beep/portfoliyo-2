import { motion } from 'framer-motion'
import { MapPin, Users, Code2, Sparkles } from 'lucide-react'
import SkillBar from '../components/SkillBar'

const skills = [
  { name: 'React', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'SCSS', level: 78 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="font-mono text-xs text-teal-glow">about</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Built inside a real IT team,
            <br /> not just a classroom.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:grid-rows-2">
          {/* Location */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="glass col-span-1 flex flex-col justify-between rounded-2xl p-6 sm:col-span-2"
          >
            <MapPin className="text-teal-glow" size={22} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Uzbekistan</p>
              <p className="font-mono text-xs text-ink-muted">based &amp; open to remote roles</p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="glass col-span-1 flex flex-col justify-between rounded-2xl p-6 sm:col-span-2"
          >
            <Users className="text-sky-glow" size={22} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">7 months</p>
              <p className="font-mono text-xs text-ink-muted">embedded in an IT team, shipping features</p>
            </div>
          </motion.div>

          {/* Skills bento — big cell */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.12 }}
            className="glass col-span-1 row-span-2 rounded-2xl p-6 sm:col-span-2"
          >
            <div className="mb-5 flex items-center gap-2">
              <Code2 size={18} className="text-teal-glow" />
              <p className="font-display text-sm font-semibold text-ink">Core stack</p>
            </div>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Highlight quote */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ delay: 0.16 }}
            className="glass col-span-1 rounded-2xl p-6 sm:col-span-2"
          >
            <Sparkles className="mb-3 text-sky-glow" size={20} />
            <p className="text-sm leading-relaxed text-ink-muted">
              I care about the details most users never notice — the 200ms transition, the
              focus ring, the empty state that actually helps.
            </p>
          </motion.div>

          {/* Working style */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="glass col-span-1 rounded-2xl p-6 sm:col-span-2"
          >
            <p className="font-display text-lg font-semibold text-ink">Ship, review, iterate</p>
            <p className="mt-2 font-mono text-xs text-ink-muted">
              comfortable in fast-moving, code-review-driven workflows
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
