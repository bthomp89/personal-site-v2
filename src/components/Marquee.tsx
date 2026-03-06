const ORGS = [
  'Ask-AI',
  'Manulife',
  'IBM',
  'Canadian Tire',
  'Western University',
  'Kids Being Kids',
  'Engineers Without Borders',
  'Western Developers Society',
]

export function Marquee() {
  const items = [...ORGS, ...ORGS]

  return (
    <section
      className="overflow-hidden py-8 marquee-container border-y"
      style={{ borderColor: 'var(--color-border-faint)' }}
    >
      <div className="flex animate-marquee gap-16 w-max">
        {items.map((name, i) => (
          <span
            key={i}
            className="text-sm font-medium whitespace-nowrap select-none"
            style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
