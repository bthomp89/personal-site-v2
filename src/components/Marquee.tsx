import western from '../assets/western_eng_new.png'
import canadianTire from '../assets/canadian-tire-fs.jpg'
import ibm from '../assets/ibm.jpeg'
import manulife from '../assets/manulife.png'
import pgcwi from '../assets/pgcwi.png'
import mosaic from '../assets/mosaic.png'

const LOGOS = [
  { name: 'Western',          file: western,      height: 40,  href: 'https://www.eng.uwo.ca/index.html' },
  { name: 'Canadian Tire FS', file: canadianTire, height: 40,  href: 'https://www.ctfs.com/content/ctfs3/en/homepage.html' },
  { name: 'IBM',              file: ibm,          height: 40,  href: 'https://www.ibm.com/ca-en' },
  { name: 'Manulife',         file: manulife,     height: 40,  href: 'https://www.manulife.ca/personal.html' },
  { name: 'PGCWI',            file: pgcwi,        height: 40,  href: 'https://www.pgcwi.com/' },
  { name: 'Ask-AI',           file: mosaic,       height: 90,  href: 'https://getmosaic.ai/' },
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
