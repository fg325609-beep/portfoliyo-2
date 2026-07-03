import { motion } from 'framer-motion'

export default function SkillBar({ name, level, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
        <span className="text-ink">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.15, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-teal-glow to-sky-glow"
        />
      </div>
    </motion.div>
  )
}
