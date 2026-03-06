const races = [
  {
    name: 'HYROX Toronto',
    category: 'Doubles Men',
    distance: 'HYROX',
    date: 'Oct 2025',
    location: 'Toronto, ON',
    time: '1:13:48',
    overall: '#258 / 1,042',
    ageGroup: '#19 AG (16–24)',
    href: 'https://www.hyresult.com/result/LR3MS4JI3DB2BC?tab=totals',
    accent: '#FF0035',
    bg: '#0a0a0a',
    textColor: '#fff',
  },
  {
    name: 'IRONMAN 70.3 Muskoka',
    category: 'Triathlon',
    distance: '70.3 mi · 113 km',
    date: 'Jul 6, 2025',
    location: 'Huntsville, ON',
    time: null,
    overall: null,
    ageGroup: null,
    href: 'https://sportstats.one/event/763/leaderboard/144092?focus=972&type=pid',
    accent: '#CC0000',
    bg: '#1a0000',
    textColor: '#fff',
  },
  {
    name: 'Niagara Falls Half Marathon',
    category: 'Running',
    distance: '21.1 km',
    date: 'Oct 26, 2025',
    location: 'Niagara Falls, ON',
    time: null,
    overall: null,
    ageGroup: null,
    href: 'https://sportstats.one/event/1066/leaderboard/144823?focus=3086&type=pid',
    accent: '#2563eb',
    bg: '#0a0f2e',
    textColor: '#fff',
  },
  {
    name: 'Rose City Sprint Triathlon',
    category: 'Triathlon',
    distance: 'Sprint',
    date: 'Jun 21, 2025',
    location: 'Welland, ON',
    time: null,
    overall: null,
    ageGroup: null,
    href: 'https://sportstats.one/event/1038/leaderboard/143566?focus=993&type=pid',
    accent: '#0891b2',
    bg: '#001a20',
    textColor: '#fff',
  },
]

export function Races() {
  return (
    <section style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="mx-auto max-w-content px-5 py-16">
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-10"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Races
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {races.map((race) => (
            <a
              key={race.name}
              href={race.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: race.bg,
                minHeight: 220,
                textDecoration: 'none',
              }}
            >
              {/* Accent glow in corner */}
              <div
                className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-50"
                style={{ backgroundColor: race.accent }}
              />

              {/* Top: category badge + arrow */}
              <div className="flex items-start justify-between">
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: race.accent + '30', color: race.accent }}
                >
                  {race.category}
                </span>
                <svg
                  className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100"
                  style={{ color: race.textColor }}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Middle: race name */}
              <div className="my-4">
                <p
                  className="text-lg font-bold leading-tight"
                  style={{ color: race.textColor }}
                >
                  {race.name}
                </p>
                <p className="mt-1 text-xs" style={{ color: race.textColor, opacity: 0.5 }}>
                  {race.distance} · {race.location}
                </p>
              </div>

              {/* Bottom: stats or date */}
              <div className="flex flex-col gap-1">
                {race.time ? (
                  <>
                    <p className="text-2xl font-bold tabular-nums" style={{ color: race.accent }}>
                      {race.time}
                    </p>
                    <p className="text-[11px]" style={{ color: race.textColor, opacity: 0.5 }}>
                      {race.overall} · {race.ageGroup}
                    </p>
                  </>
                ) : (
                  <p className="text-sm font-medium" style={{ color: race.textColor, opacity: 0.6 }}>
                    {race.date}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
