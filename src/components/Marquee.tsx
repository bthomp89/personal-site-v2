const LOGOS = [
  { name: 'Western',          file: '/western_eng_new.png',  height: 40,  href: 'https://www.linkedin.com/school/westernueng/' },
  { name: 'Canadian Tire FS', file: '/canadian-tire-fs.jpg', height: 40,  href: 'https://www.linkedin.com/company/canadian-tire-financial-services/' },
  { name: 'IBM',              file: '/ibm.jpeg',             height: 40,  href: 'https://www.linkedin.com/company/ibm/' },
  { name: 'Manulife',         file: '/manulife.png',         height: 40,  href: 'https://www.linkedin.com/company/manulife-financial/' },
  { name: 'Ask-AI',           file: '/mosaic.png',           height: 90,  href: 'https://www.linkedin.com/company/mosaic-by-ask-ai/' },
]

export function Marquee() {
  return (
    <section
      className="border-y py-4"
      style={{ borderColor: 'var(--color-border-faint)' }}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5">
        {LOGOS.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-opacity hover:opacity-75"
            style={{ width: '140px', height: '90px' }}
          >
            <img
              src={logo.file}
              alt={logo.name}
              style={{
                height: logo.height,
                maxWidth: '100%',
                objectFit: 'contain',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                mixBlendMode: 'multiply',
              }}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
