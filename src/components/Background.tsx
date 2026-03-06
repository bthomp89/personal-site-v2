const experience = [
  {
    company: 'Ask-AI',
    role: 'Solutions Engineer',
    period: 'Mar 2026 — Present',
    description:
      'Owning the full customer lifecycle at an Enterprise AI platform — running pre-sale POVs, leading technical onboarding, configuring AI workflows and integrations, and driving adoption and expansion outcomes. Working at the intersection of AI and real production deployment for GTM and CX teams in modern B2B SaaS.',
  },
  {
    company: 'Manulife',
    role: 'Full-Stack Software Engineer',
    period: 'Jun 2024 — Mar 2026',
    description:
      'Worked across Member Experience (Strategy & Transformation), Partner Integrations (Health Platform), and Group Benefits (Core) — building systems that served millions of plan members.',
  },
  {
    company: 'PGCWI',
    role: 'Software Engineer',
    period: 'Jun 2025 — Mar 2026',
    description:
      'Built full-stack tooling for a sports tech platform — shipping features across database visualization, SVG kerning automation for jersey production, operational dashboards, and performance optimization.',
  },
  {
    company: 'IBM',
    role: 'Consultant',
    period: 'Sep 2023 — Dec 2023',
    description:
      'Pro Bono Consulting Initiative — delivered strategic consulting for non-profit organizations alongside cross-functional IBM teams.',
  },
  {
    company: 'Canadian Tire Financial Services',
    role: 'Software Engineer',
    period: 'May 2023 — Aug 2023',
    description:
      'Payment Processing Delivery — shipped features to production on core payment infrastructure used by millions of cardholders.',
  },
  {
    company: 'Canadian Tire Financial Services',
    role: 'Software Engineer',
    period: 'May 2022 — Aug 2022',
    description:
      'Payment Processing Delivery — first industry exposure to large-scale financial systems, contributing to backend payment processing pipelines.',
  },
]

const education = {
  school: 'Western University',
  degree: 'Bachelor of Engineering — Software Engineering',
  gpa: '3.9',
  awards: [
    'Nortel Networks Scholarship of Distinction in Engineering Science',
    'Western Scholarship of Distinction',
    "Dean's Honor List",
  ],
  activities: 'Western Developers Society · Engineers Without Borders · Western Engineering Hockey Team',
}

const volunteering = [
  {
    org: 'Western Developers Society',
    role: 'Head of Product Management',
    period: 'Feb 2023 — Apr 2024',
    description: 'Led product strategy and roadmap for student-built software projects across the organization.',
  },
  {
    org: 'Western Developers Society',
    role: 'Development Team Lead',
    period: 'Oct 2022 — Feb 2023',
    description: 'Led a team of student developers building internal tooling and external-facing products.',
  },
  {
    org: 'Kids Being Kids',
    role: 'Vice President of Partnerships',
    period: 'Sep 2022 — Present',
    description: 'Securing partnerships and sponsorships to fund programs that support children in need.',
  },
  {
    org: 'Engineers Without Borders — Western University',
    role: 'Frontend Developer',
    period: 'Sep 2021 — Apr 2022',
    description: 'Built and maintained frontend features for EWB chapter initiatives.',
  },
]

function Row({
  period,
  title,
  subtitle,
  description,
}: {
  period: string
  title: string
  subtitle?: string
  description: string
}) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[160px_200px_1fr] gap-y-1 md:gap-x-8 py-7 border-b last:border-b-0"
      style={{ borderColor: 'var(--color-border-faint)' }}
    >
      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        {period}
      </p>
      <div>
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </p>
        {subtitle && (
          <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
            {subtitle}
          </p>
        )}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {description}
      </p>
    </div>
  )
}

export function Background() {
  return (
    <section id="background" className="mx-auto max-w-content px-5 py-16">
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
        style={{ color: 'var(--color-text-primary)' }}
      >
        Background
      </h2>

      {/* Experience */}
      <div className="flex flex-col">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Work Experience
        </p>
        {experience.map((role, i) => (
          <Row
            key={i}
            period={role.period}
            title={role.company}
            subtitle={role.role}
            description={role.description}
          />
        ))}
      </div>

      {/* Education */}
      <div className="flex flex-col mt-16">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Education
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-[160px_200px_1fr] gap-y-1 md:gap-x-8 py-7 border-b"
          style={{ borderColor: 'var(--color-border-faint)' }}
        >
          <div />
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              {education.school}
            </p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
              {education.degree}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {education.activities}
            </p>
            <div className="flex flex-col gap-0.5">
              {education.awards.map((award) => (
                <p key={award} className="text-sm" style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}>
                  · {award}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
