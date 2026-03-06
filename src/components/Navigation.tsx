import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import headshot from '../assets/headshot.jpg'

interface Props {
  dark: boolean
  onToggle: () => void
}

export function Navigation({ dark, onToggle }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 220)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md transition-all"
      style={{
        borderColor: scrolled ? 'var(--color-border)' : 'transparent',
        backgroundColor: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
      }}
    >
      <nav className="relative mx-auto flex max-w-content items-center px-5 py-4">
        {/* Left */}
        <div className="flex items-center gap-6">
          <a
            href="#background"
            className="text-sm transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Background
          </a>
          <a
            href="https://www.linkedin.com/in/brayden-thompson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Linkedin
          </a>
        </div>

        {/* Center — avatar + name, fades in on scroll */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 transition-all duration-300"
          style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'auto' : 'none' }}
        >
          <img
            src={headshot}
            alt="Profile"
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Brayden Thompson
          </span>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-6">
          <a
            href="https://github.com/bthomp89"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Resume
          </a>
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {dark ? <Sun size={15} strokeWidth={1.8} /> : <Moon size={15} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
