import { motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect, type ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { easeOut } from '../../lib/motion'

export function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash, reduce])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <motion.main
        key={location.pathname}
        className="flex-1"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
