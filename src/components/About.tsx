import img0463 from '../assets/IMG_0463.jpg'
import img0521 from '../assets/IMG_0521.jpg'
import img1298 from '../assets/IMG_1298.jpg'
import img1749 from '../assets/IMG_1749.jpg'
import img2551 from '../assets/IMG_2551.jpg'
import img3977 from '../assets/IMG_3977.jpg'
import img5020 from '../assets/IMG_5020.jpg'
import img6451 from '../assets/IMG_6451.jpg'
import img6590 from '../assets/IMG_6590.jpg'
import img6895 from '../assets/IMG_6895.jpg'
import img7324 from '../assets/IMG_7324.jpg'
import img8176 from '../assets/IMG_8176.jpg'
import img8312 from '../assets/IMG_8312.jpg'
import img8833 from '../assets/IMG_8833.jpg'
import img9996 from '../assets/IMG_9996.jpg'

const col1 = [img0463, img1298, img2551, img5020, img6590, img7324, img8833]
const col2 = [img0521, img1749, img3977, img6451, img6895, img8176, img8312, img9996]

function GalleryColumn({ items, direction }: { items: string[]; direction: 'up' | 'down' }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex flex-col gap-3 flex-1 min-w-0 self-start"
      style={{ animation: `scroll-${direction} 25s linear infinite` }}
    >
      {doubled.map((src, i) => (
        <img
          key={i}
          src={src}
          className="overflow-hidden rounded-xl flex-shrink-0 w-full object-cover"
          style={{ aspectRatio: '3/4' }}
          alt=""
        />
      ))}
    </div>
  )
}

export function About() {
  return (
    <section style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="mx-auto max-w-content px-5 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: text */}
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
              Now at Ask-AI (the creators of Mosaic), I work with enterprise teams to make AI go from demo to live deployment,
              configuring integrations, tuning AI workflows, and proving value in production.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Outside of work, sport has always been a big part of my life. I played Junior B hockey
              for the London Nationals, and these days that competitive energy goes into endurance
              training. I have raced a HYROX, a half marathon, and a half IRONMAN, with a goal of
              completing a full IRONMAN in 2026. I recently picked up squash and have been pretty
              obsessed with it since. Beyond that, I travel whenever I can, whether for sport like
              skiing or to immerse myself in a new culture, and I care a lot about the small things
              that make life good: a great espresso, a restaurant worth getting excited about, or a
              solid book.
            </p>
          </div>

          {/* Right: two auto-scrolling columns */}
          <div
            className="relative overflow-hidden flex gap-3"
            style={{
              height: '460px',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            <GalleryColumn items={col1} direction="up" />
            <GalleryColumn items={col2} direction="down" />
          </div>
        </div>
      </div>
    </section>
  )
}
