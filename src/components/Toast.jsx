import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function Toast({ toast }) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[200] flex flex-col gap-3">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={`glass pointer-events-auto flex items-center gap-3 rounded-xl px-4 py-3 shadow-glow ${
              toast.type === 'error' ? 'border-red-400/30' : 'border-teal-glow/30'
            }`}
          >
            {toast.type === 'error' ? (
              <XCircle size={20} className="shrink-0 text-red-400" />
            ) : (
              <CheckCircle2 size={20} className="shrink-0 text-teal-glow" />
            )}
            <div>
              <p className="font-display text-sm font-medium text-ink">{toast.title}</p>
              <p className="font-mono text-xs text-ink-muted">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
