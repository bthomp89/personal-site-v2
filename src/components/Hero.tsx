import headshot from '../assets/headshot.jpg'

export function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 md:py-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        {/* Text block */}
        <div className="flex flex-col gap-5">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Brayden Thompson
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
              Solutions Engineer bridging technical depth and customer outcomes in enterprise AI
            </p>
            <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
              Building at Ask-AI, Toronto
            </p>
          </div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}>
            Based in Toronto, Ontario
          </p>
        </div>

        {/* Profile card */}
        <div className="relative shrink-0 self-start md:self-center">
          <div
            className="animate-hero-card-swivel relative h-64 w-52 overflow-hidden rounded-3xl shadow-xl md:h-72 md:w-56"
            style={{ border: '1px solid var(--color-border)' }}
          >
            <img
              src={headshot}
              alt="Brayden Thompson"
              className="h-full w-full object-cover"
            />
          </div>

          {/* welcome badge */}
          <div
            className="absolute bottom-4 right-0 translate-x-4 rounded-full px-3 py-1.5 text-sm font-semibold shadow-md"
            style={{ backgroundColor: '#FF5A00', color: '#fff' }}
          >
            hey, welcome to my website
          </div>
        </div>
      </div>
    </section>
  )
}
