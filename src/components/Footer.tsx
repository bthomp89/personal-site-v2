const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brayden-thompson/' },
  { label: 'GitHub', href: 'https://github.com/bthomp89' },
  { label: 'Email', href: 'mailto:brdthompson02@gmail.com' },
  { label: 'Resume', href: '/resume.pdf' },
]

export function Footer() {
  return (
    <footer
      className="mx-auto max-w-content px-5 py-16 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="flex flex-col gap-8">
        <p className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Thank you for visiting.
        </p>

        <div className="flex gap-5 flex-wrap">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}>
          Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </footer>
  )
}
