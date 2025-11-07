import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/profile'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk/60">Projects</p>
        <h2 className="mt-4 font-display text-3xl text-dusk sm:text-4xl">
          Selected explorations blending product craft, storytelling, and performance.
        </h2>
        <p className="mt-4 text-base text-dusk/70">
          A mix of professional bets and personal experiments. Each tile expands with context — the why, the outcome, and the tools.
        </p>
      </div>

      <motion.div
        className="mt-16 grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-3xl border border-dusk/10 bg-canvas p-6 shadow-subtle"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ember/0 via-ember/0 to-ember/10 opacity-0 transition group-hover:opacity-100" aria-hidden />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <header className="space-y-2">
                <p className="text-xs uppercase tracking-[0.16em] text-dusk/50">{project.tech.join(' • ')}</p>
                <h3 className="font-display text-2xl text-dusk">{project.title}</h3>
              </header>
              <p className="text-sm leading-relaxed text-dusk/70">{project.blurb}</p>
              <div className="flex items-center justify-between text-sm text-dusk/80">
                <span className="font-medium">{project.outcome}</span>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 rounded-full border border-dusk/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-dusk/80 transition group-hover:border-dusk/30 group-hover:text-dusk"
                  >
                    View
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

