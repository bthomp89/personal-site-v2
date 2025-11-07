import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const heroVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-noise bg-repeat" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-[400px] max-w-4xl rounded-full bg-gradient-to-b from-ember/10 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 text-dusk">
        <motion.span
          className="w-fit rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ember"
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Full Stack Engineer · Product Strategy · Athlete
        </motion.span>

        <motion.h1
          className="font-display text-4xl leading-tight text-dusk sm:text-5xl lg:text-6xl"
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          Hey, I'm Brayden — a Full Stack Software Engineer who loves to build, compete, and explore.
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base text-dusk/70 sm:text-lg"
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          I architect full-stack solutions that scale, blending engineering rigor with product thinking. From high-availability APIs serving millions to strategic initiatives, I build systems that keep momentum while staying grounded in what matters.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#career"
            className="inline-flex items-center gap-2 rounded-full border border-dusk/10 bg-dusk px-6 py-3 text-sm font-semibold text-canvas shadow-subtle transition hover:bg-ember hover:text-dusk"
          >
            Explore the roadmap
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-dusk/15 bg-canvas/80 px-6 py-3 text-sm font-semibold text-dusk transition hover:border-dusk/30 hover:bg-mist/70"
          >
            View selected work
          </a>
        </motion.div>
      </div>

      <div className="relative mt-16 flex justify-center">
        <motion.svg
          width="520"
          height="180"
          viewBox="0 0 520 180"
          className="text-dusk/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        >
          <motion.path
            d="M20 160 C 150 20, 370 20, 500 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="8 12"
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 2.4, ease: 'easeInOut' }}
          />
        </motion.svg>

        <motion.div
          className="absolute top-24 flex gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.8, staggerChildren: 0.15 },
            },
          }}
        >
          {[
            'Build clarity',
            'Ship outcomes',
            'Stay playful',
          ].map((chip) => (
            <motion.span
              key={chip}
              className="rounded-full border border-dusk/10 bg-canvas/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-dusk/70"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

