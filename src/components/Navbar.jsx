import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TerminalSquare } from 'lucide-react'

const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex w-full max-w-xl items-center justify-between rounded-2xl px-5 py-3 shadow-glow">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-ink">
          <TerminalSquare size={18} className="text-teal-glow" />
          farhod<span className="text-teal-glow">.dev</span>
        </div>
        <ul className="flex items-center gap-1 font-mono text-xs">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-1.5 transition-colors ${
                    isActive ? 'text-void' : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-glow to-sky-glow"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
