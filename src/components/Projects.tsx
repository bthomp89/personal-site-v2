const projects = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['React', 'TypeScript', 'Node.js'],
    href: null,
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['Python', 'PostgreSQL', 'AWS'],
    href: null,
  },
  {
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['Go', 'Kubernetes', 'GCP'],
    href: null,
  },
  {
    title: 'Project Four',
    description: 'A short description of what this project does and the problem it solves.',
    tags: ['Swift', 'iOS', 'Firebase'],
    href: null,
  },
]

export function Projects() {
  return (
    <section className="mx-auto max-w-content px-5 py-16">
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tight mb-10"
        style={{ color: 'var(--color-text-primary)' }}
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => {
          const Wrapper = project.href ? 'a' : 'div'
          const wrapperProps = project.href
            ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Wrapper
              key={project.title}
              {...wrapperProps}
              className="group flex flex-col justify-between gap-6 rounded-2xl border p-6 transition-colors"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                textDecoration: 'none',
              }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <p
                    className="text-base font-semibold"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {project.title}
                  </p>
                  {project.href && (
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 opacity-30 transition-opacity group-hover:opacity-100"
                      style={{ color: 'var(--color-text-primary)' }}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      backgroundColor: 'var(--color-border-faint)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}
