import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Toast from './components/Toast'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: 'easeIn' } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)
  const location = useLocation()

  const pushToast = (t) => {
    const id = Date.now()
    setToast({ ...t, id })
    setTimeout(() => setToast((cur) => (cur?.id === id ? null : cur)), 4000)
  }

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen bg-void font-body text-ink">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageWrapper>
                    <Projects onToast={pushToast} />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
          <Toast toast={toast} />
        </div>
      )}
    </>
  )
}
