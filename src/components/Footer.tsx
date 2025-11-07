import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { href: 'https://www.linkedin.com/in/brayden-thompson', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/bthomp89', label: 'GitHub', icon: Github },
  { href: 'mailto:brdthompson02@gmail.com', label: 'Email', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-dusk/10 bg-canvas/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-dusk/70 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-dusk">Let’s build what’s next.</p>
          <p className="mt-1 text-sm text-dusk/60">Always up for a strategy jam, product walkthrough, or long ride.</p>
        </div>
        <nav className="flex items-center gap-3">
          {socials.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-dusk/15 px-4 py-2 font-medium text-dusk/70 transition hover:border-dusk/40 hover:text-dusk"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
      <div className="border-t border-dusk/10 bg-canvas/70 py-4 text-center text-xs uppercase tracking-[0.18em] text-dusk/50">
        © {new Date().getFullYear()} Brayden Thompson · Crafted with care
      </div>
    </footer>
  )
}

