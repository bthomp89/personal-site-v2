import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

type NavItem = {
  label: string
  target: string
}

const navItems: NavItem[] = [
  { label: 'About', target: '#about' },
  { label: 'Career', target: '#career' },
  { label: 'Projects', target: '#projects' },
  { label: 'Passions', target: '#passions' },
]

export function Navigation() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 3
      const sections = navItems
        .map(({ target }) => document.querySelector<HTMLElement>(target))
        .filter(Boolean) as HTMLElement[]

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(`#${section.id}`)
          return
        }
      }

      if (window.scrollY < 120) {
        setActive('')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-dusk/10 bg-canvas/90 px-6 py-3 shadow-subtle backdrop-blur">
        <nav className="hidden gap-2 text-sm sm:flex">
          {navItems.map((item) => {
            const isActive = active === item.target
            return (
              <a
                key={item.target}
                href={item.target}
                className="group relative rounded-full px-4 py-2 font-medium text-dusk/70 transition hover:text-dusk"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-mist/60"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/brayden-thompson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-dusk/15 p-2 text-dusk/70 transition hover:border-dusk/40 hover:text-dusk"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/bthomp89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-dusk/15 p-2 text-dusk/70 transition hover:border-dusk/40 hover:text-dusk"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:brdthompson02@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-dusk/15 p-2 text-dusk/70 transition hover:border-dusk/40 hover:text-dusk"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  )
}

