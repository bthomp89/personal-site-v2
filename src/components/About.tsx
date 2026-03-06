export function About() {
  const photos = [
    { bg: '#b8cce4' },
    { bg: '#c5d5a8' },
    { bg: '#d4c9b8' },
    { bg: '#b8d4cc' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="mx-auto max-w-content px-5 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          {/* Left: heading + text */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              About
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I'm a software engineer turned solutions engineer — most at home when technical depth
              meets a real customer problem. I've built production systems at Manulife serving millions
              of plan members, consulted at IBM, and shipped payment infrastructure at Canadian Tire.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Now at Ask-AI, I work with enterprise teams to make AI go from demo to live deployment —
              configuring integrations, tuning AI workflows, and proving value in production. Outside
              of work you'll find me training for triathlons and HYROX, or finding the best new
              restaurant in the city.
            </p>
          </div>

          {/* Right: 2×2 photo grid (replace with real photos) */}
          <div className="grid grid-cols-2 gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl"
                style={{ backgroundColor: photo.bg, aspectRatio: '4/3' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
