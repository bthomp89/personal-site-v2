import resumePdf from '../assets/resume/Brayden_Thompson_Resume.pdf'

function Barcode() {
  // alternating bar/gap widths (even = bar, odd = gap)
  const pattern = [6,2,4,2,6,4,2,2,4,6,2,4,2,6,2,4,4,2,6,2,2,4,2,6,4,2,2,6,2,4,2,2,6,4,2,6,2,4,2,2]
  const bars: { x: number; w: number }[] = []
  let x = 0
  pattern.forEach((w, i) => {
    if (i % 2 === 0) bars.push({ x, w })
    x += w
  })
  return (
    <svg width="100%" viewBox={`0 0 ${x} 56`} preserveAspectRatio="none" style={{ height: 52 }}>
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={56} fill="#0f0f0f" />
      ))}
    </svg>
  )
}

export function Footer() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <footer style={{ backgroundColor: '#f97316' }} className="px-5 py-16">
      <div className="mx-auto flex flex-col gap-3" style={{ maxWidth: 480 }}>

        {/* Ticket card */}
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* Top: text + button */}
          <div className="flex flex-col items-center gap-4 px-10 py-10 text-center">
            <h2 className="text-2xl font-bold" style={{ color: '#0f0f0f' }}>
              Thank you for visiting
            </h2>
            <p className="text-sm" style={{ color: '#6b7280' }}>
              You can download my{' '}
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f97316' }}
              >
                resume
              </a>{' '}
              or email me.
            </p>
            <a
              href="mailto:brdthompson02@gmail.com"
              className="mt-1 rounded-full px-7 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#0f0f0f' }}
            >
              Email me
            </a>
          </div>

          {/* Tear line with notches */}
          <div className="relative flex items-center" style={{ margin: '0 -1px' }}>
            <div
              className="absolute -left-3 h-6 w-6 rounded-full shrink-0"
              style={{ backgroundColor: '#f97316' }}
            />
            <div
              className="flex-1 border-t-2 border-dashed"
              style={{ borderColor: '#e5e7eb', margin: '0 8px' }}
            />
            <div
              className="absolute -right-3 h-6 w-6 rounded-full shrink-0"
              style={{ backgroundColor: '#f97316' }}
            />
          </div>

          {/* Barcode */}
          <div className="px-10 py-8">
            <Barcode />
          </div>
        </div>

        {/* Social icons card */}
        <div className="bg-white rounded-3xl flex items-center justify-center gap-10 py-5 px-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/brayden-thompson/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-40"
            style={{ color: '#0f0f0f' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="4"/>
              <path d="M7 10v7M7 7v.01M12 10v7M12 13a2 2 0 0 1 4 0v4"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/bthomp89"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-40"
            style={{ color: '#0f0f0f' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>

        {/* Name + date card */}
        <div className="bg-white rounded-3xl flex flex-col items-center gap-1 py-5">
          <p className="text-sm font-medium" style={{ color: '#0f0f0f' }}>Brayden Thompson</p>
          <p className="text-sm" style={{ color: '#6b7280' }}>Last updated on {lastUpdated}</p>
        </div>

      </div>
    </footer>
  )
}
