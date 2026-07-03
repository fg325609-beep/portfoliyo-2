import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`glass group relative overflow-hidden rounded-2xl p-6 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(45,212,191,0.15), transparent 60%)`,
        }}
      />
      <div style={{ transform: 'translateZ(30px)' }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
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
          <TiltCard className="col-span-1 flex flex-col justify-between sm:col-span-2">
            <MapPin className="text-teal-glow" size={22} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">Uzbekistan</p>
              <p className="font-mono text-xs text-ink-muted">based & open to remote roles</p>
            </div>
          </TiltCard>

          {/* Experience */}
          <TiltCard className="col-span-1 flex flex-col justify-between sm:col-span-2">
            <Users className="text-sky-glow" size={22} />
            <div>
              <p className="font-display text-lg font-semibold text-ink">7 months</p>
              <p className="font-mono text-xs text-ink-muted">embedded in an IT team, shipping features</p>
            </div>
          </TiltCard>

          {/* Skills bento — big cell */}
          <TiltCard className="col-span-1 row-span-2 sm:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <Code2 size={18} className="text-teal-glow" />
              <p className="font-display text-sm font-semibold text-ink">Core stack</p>
            </div>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
          </TiltCard>

          {/* Highlight quote */}
          <TiltCard className="col-span-1 sm:col-span-2">
            <Sparkles className="mb-3 text-sky-glow" size={20} />
            <p className="text-sm leading-relaxed text-ink-muted">
              I care about the details most users never notice — the 200ms transition, the
              focus ring, the empty state that actually helps.
            </p>
          </TiltCard>

          {/* Working style */}
          <TiltCard className="col-span-1 sm:col-span-2">
            <p className="font-display text-lg font-semibold text-ink">Ship, review, iterate</p>
            <p className="mt-2 font-mono text-xs text-ink-muted">
              comfortable in fast-moving, code-review-driven workflows
            </p>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}