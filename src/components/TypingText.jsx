import { useEffect, useRef, useState } from 'react'

export default function TypingText({
  words = ['Frontend Developer'],
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1600,
  className = '',
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const mountedRef = useRef(true)

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        if (mountedRef.current) setText(current.slice(0, text.length + 1))
      }, typingSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => {
        if (mountedRef.current) setDeleting(true)
      }, pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        if (mountedRef.current) setText(current.slice(0, text.length - 1))
      }, deletingSpeed)
    } else if (deleting && text.length === 0) {
      if (mountedRef.current) {
        setDeleting(false)
        setWordIndex((i) => i + 1)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-teal-glow" style={{ height: '0.9em' }} />
    </span>
  )
}