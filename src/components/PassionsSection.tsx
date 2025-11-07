import { motion } from 'framer-motion'
import { Activity, Bike, Goal, Medal, Mountain, Sparkles } from 'lucide-react'
import { passions } from '../data/profile'

const iconMap = {
  medal: Medal,
  activity: Activity,
  mountain: Mountain,
  bike: Bike,
  sparkles: Sparkles,
  racket: Goal,
} as const

export function PassionsSection() {
  return (
    <section id="passions" className="relative overflow-hidden bg-mist/60 py-24">
      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-dusk/10 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk/60">
            Passions
          </p>
          <h2 className="mt-4 font-display text-3xl text-dusk sm:text-4xl">
            Bringing the same curiosity and rigor to sport, outdoors, and community.
          </h2>
          <p className="mt-4 text-base text-dusk/70">
            Training logs, mountain weather charts, race simulations — each hobby is its own product lab. These moments keep creative fuel high.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.2 },
            },
          }}
        >
          {passions.map((passion) => {
            const Icon = iconMap[passion.icon as keyof typeof iconMap] ?? Sparkles
            return (
              <motion.div
                key={passion.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`group relative overflow-hidden rounded-3xl border border-dusk/10 bg-canvas/80 p-6 shadow-subtle transition ${
                  passion.id === 'ironman' ? 'hover:border-ember/60' : 'hover:border-dusk/20'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dusk/0 via-dusk/0 to-dusk/20 opacity-0 transition group-hover:opacity-100" aria-hidden />
                <div
                  className={`relative flex h-full flex-col gap-4 ${
                    passion.id === 'ironman'
                      ? 'after:pointer-events-none after:absolute after:inset-4 after:rounded-3xl after:bg-gradient-to-br after:from-ember/0 after:via-ember/0 after:to-ember/40 after:opacity-0 after:transition after:duration-500 group-hover:after:opacity-100'
                      : ''
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-dusk/90 text-canvas shadow-subtle transition ${
                      passion.id === 'ironman'
                        ? 'group-hover:bg-ember group-hover:text-dusk group-hover:shadow-[0_0_20px_rgba(241,122,88,0.45)]'
                        : 'group-hover:bg-ember group-hover:text-dusk'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-dusk">{passion.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-dusk/70">{passion.description}</p>
                  </div>
                  {passion.stat && (
                    <span className="mt-auto inline-flex w-fit rounded-full border border-dusk/10 bg-mist/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-dusk/80">
                      {passion.stat}
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-3 text-sm text-dusk/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="rounded-full border border-dusk/10 bg-canvas px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-dusk/70">
            Easter Egg
          </span>
          <p>
            Hover over “Ironman 70.3” to see the finisher glow — a quiet nod to the medal moments that fuel the next build.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

