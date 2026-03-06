export function About() {
  return (
    <section style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="mx-auto max-w-content px-5 py-16">
        {/* Top: heading + bio */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start mb-12">
          <div className="flex flex-col gap-6">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              About
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I'm a software engineer turned solutions engineer, most at home when technical depth
              meets a real customer problem. I've built production systems at Manulife serving millions
              of plan members, consulted at IBM, and shipped payment infrastructure at Canadian Tire.
              Now at Ask-AI, I work with enterprise teams to make AI go from demo to live deployment,
              configuring integrations, tuning AI workflows, and proving value in production.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Outside of work, I'm usually training — whether that's grinding towards a HYROX,
              crossing a triathlon finish line, or logging miles for the next half marathon. I play
              squash, travel as much as I can, and have a soft spot for good espresso, new restaurants,
              and a solid book.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {/* Tall left image */}
          <div
            className="col-span-1 row-span-2 overflow-hidden rounded-2xl md:col-span-1"
            style={{ backgroundColor: '#b8cce4', aspectRatio: '3/4' }}
          />
          {/* Top middle-left */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: '#c5d5a8', aspectRatio: '4/3' }}
          />
          {/* Top middle-right */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: '#d4c9b8', aspectRatio: '4/3' }}
          />
          {/* Tall right image */}
          <div
            className="col-span-1 row-span-2 overflow-hidden rounded-2xl"
            style={{ backgroundColor: '#c9b8d4', aspectRatio: '3/4' }}
          />
          {/* Bottom middle-left */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: '#b8d4cc', aspectRatio: '4/3' }}
          />
          {/* Bottom middle-right */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: '#d4b8b8', aspectRatio: '4/3' }}
          />
        </div>
      </div>
    </section>
  )
}
