import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Send } from 'lucide-react'

// Telegram Bot API config.
// NOTE: calling the Bot API directly from the browser exposes this token to
// anyone who opens devtools. For a production deployment, proxy this request
// through a small serverless function (e.g. a Vercel API route) that holds
// the token as a server-side environment variable instead.
const TELEGRAM_BOT_TOKEN = '8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0'
const TELEGRAM_CHAT_ID = '6660879147'
const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

const initialForm = { name: '', email: '', message: '' }

export default function ContactForm({ onToast }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      onToast({ type: 'error', title: 'Missing fields', message: 'Please fill in every field.' })
      return
    }

    setStatus('loading')

    const text = `New Portfolio Message! \nName: ${form.name} \nEmail: ${form.email} \nMessage: ${form.message}`

    try {
      const res = await fetch(TELEGRAM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
      })

      if (!res.ok) throw new Error('Telegram request failed')

      setStatus('sent')
      onToast({ type: 'success', title: 'Message sent', message: "I'll get back to you soon." })
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 2000)
    } catch (err) {
      setStatus('idle')
      onToast({ type: 'error', title: 'Send failed', message: 'Something went wrong, try again.' })
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      onSubmit={handleSubmit}
      className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8"
    >
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sky-glow/10 blur-[90px]" />

      <div className="relative z-10 space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink-muted">
            name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-teal-glow/50 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink-muted">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-teal-glow/50 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-muted">
            message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about the role or project..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-teal-glow/50 focus:outline-none"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-glow to-sky-glow px-5 py-3 font-display text-sm font-semibold text-void shadow-glow disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send message
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  )
}
