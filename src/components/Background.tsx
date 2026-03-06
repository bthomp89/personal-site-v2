const experience = [
  {
    company: 'Ask-AI',
    role: 'Solutions Engineer',
    type: 'Full-time',
    period: 'Mar 2026 — Present',
    description:
      'Owning the full customer lifecycle at an Enterprise AI platform — running pre-sale POVs, leading technical onboarding, configuring AI workflows and integrations, and driving adoption and expansion outcomes. Working at the intersection of AI and real production deployment for GTM and CX teams in modern B2B SaaS.',
  },
  {
    company: 'Manulife',
    role: 'Full-Stack Software Engineer',
    type: 'Full-time',
    period: 'Jun 2024 — Mar 2026',
    description:
      'Worked across Member Experience (Strategy & Transformation), Partner Integrations (Health Platform), and Group Benefits (Core) — building systems that served millions of plan members.',
  },
  {
    company: 'IBM',
    role: 'Consultant',
    type: 'Internship',
    period: 'Sep 2023 — Dec 2023',
    description:
      'Pro Bono Consulting Initiative — delivered strategic consulting for non-profit organizations alongside cross-functional IBM teams.',
  },
  {
    company: 'Canadian Tire Financial Services',
    role: 'Software Engineer',
    type: 'Internship',
    period: 'May 2023 — Aug 2023',
    description:
      'Payment Processing Delivery — shipped features to production on core payment infrastructure used by millions of cardholders.',
  },
  {
    company: 'Canadian Tire Financial Services',
    role: 'Software Engineer',
    type: 'Internship',
    period: 'May 2022 — Aug 2022',
    description:
      'Payment Processing Delivery — first industry exposure to large-scale financial systems, contributing to backend payment processing pipelines.',
  },
]

const education = {
  school: 'Western University',
  degree: 'Bachelor of Engineering — Software Engineering',
  period: '2020 — 2024',
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
  tag,
  highlight,
}: {
  period: string
  title: string
  subtitle?: string
  description: string
  tag?: string
  highlight?: boolean
}) {
  return (
    <div
      className="flex flex-col gap-1 md:flex-row md:gap-10 pb-8 border-b last:border-b-0"
      style={{ borderColor: 'var(--color-border-faint)' }}
    >
      <div className="md:w-40 shrink-0">
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {period}
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </p>
          {subtitle && (
            <span className="text-sm" style={{ color: highlight ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>
              · {subtitle}
            </span>
          )}
          {highlight && (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
              style={{ backgroundColor: '#FF5A0020', color: '#FF5A00' }}
            >
              New
            </span>
          )}
          {tag && !highlight && (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium"
              style={{
                backgroundColor: 'var(--color-border-faint)',
                color: 'var(--color-text-secondary)',
              }}
            >
              {tag}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export function Background() {
  return (
    <section id="background" className="mx-auto max-w-content px-5 py-16">
      {/* Experience */}
      <h2
        className="text-xs font-semibold uppercase tracking-widest mb-8"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        Experience
      </h2>
      <div className="flex flex-col mb-16">
        {experience.map((role, i) => (
          <Row
            key={i}
            period={role.period}
            title={role.role}
            subtitle={role.company}
            description={role.description}
            tag={role.type === 'Internship' ? 'Internship' : undefined}
            highlight={i === 0}
          />
        ))}
      </div>

      {/* Education */}
      <h2
        className="text-xs font-semibold uppercase tracking-widest mb-8"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        Education
      </h2>
      <div className="flex flex-col mb-16">
        <div className="flex flex-col gap-1 md:flex-row md:gap-10 pb-8">
          <div className="md:w-40 shrink-0">
            <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              {education.period}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {education.degree}
              </p>
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                · {education.school}
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                style={{ backgroundColor: 'var(--color-border-faint)', color: 'var(--color-text-secondary)' }}
              >
                GPA {education.gpa}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {education.activities}
            </p>
            <div className="flex flex-col gap-0.5 mt-1">
              {education.awards.map((award) => (
                <p key={award} className="text-xs" style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}>
                  · {award}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Volunteering */}
      <h2
        className="text-xs font-semibold uppercase tracking-widest mb-8"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        Volunteering
      </h2>
      <div className="flex flex-col">
        {volunteering.map((v, i) => (
          <Row
            key={i}
            period={v.period}
            title={v.role}
            subtitle={v.org}
            description={v.description}
          />
        ))}
      </div>
    </section>
  )
}
