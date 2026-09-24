import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../lib/content/site'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { easeOut } from '../../lib/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-[1200px] items-center justify-between rounded-full border px-4 transition-all duration-300 sm:h-16 sm:px-5 ${
          scrolled || open
            ? 'border-border bg-surface-deep/85 shadow-card backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link to="/" aria-label="Lirex home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-foreground-dim hover:text-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden sm:inline-flex">
            Work with Us
          </Button>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-3xl border border-border bg-surface-deep/95 p-4 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base transition-colors ${
                      isActive ? 'bg-accent-soft text-accent' : 'text-foreground-dim hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-2 w-full">
                Work with Us
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
