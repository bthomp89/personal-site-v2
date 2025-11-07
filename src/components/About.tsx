import { motion } from 'framer-motion'
import { bioCopy, timeline, education, leadership } from '../data/profile'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 pb-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-dusk/10 to-transparent" />
      <div className="grid gap-10 pt-24 lg:grid-cols-[2fr,1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk/60">
            About
          </p>
          <h2 className="font-display text-3xl text-dusk sm:text-4xl">
            {bioCopy.headline}
          </h2>
          <p className="text-lg leading-relaxed text-dusk/70">
            {bioCopy.narrative}
          </p>
          <div className="rounded-3xl border border-dusk/10 bg-mist/70 p-6 text-sm text-dusk/70 shadow-subtle sm:text-base">
            <p className="font-medium text-dusk">
              Philosophy
            </p>
            <p className="mt-3">
              Create systems that invite momentum. Keep the signal high, the rituals intentional, and the humans at the center. Repeat the reps — on the product, in training, and with the people you build with.
            </p>
          </div>
        </motion.div>

        <motion.aside
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="rounded-3xl border border-dusk/10 bg-canvas p-6 shadow-subtle">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-dusk to-sage/70" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-dusk/60">Education</p>
                <p className="text-base font-medium text-dusk">{education.school}</p>
                <p className="text-sm text-dusk/70">{education.degree}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-dusk/70">
              GPA {education.gpa} · {education.timeframe}
            </p>
            <div className="mt-3 space-y-1">
              {education.achievements.map((achievement) => (
                <p key={achievement} className="text-xs text-dusk/60">• {achievement}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-dusk/10 bg-canvas p-6 shadow-subtle">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-dusk/60">Timeline</p>
            <div className="mt-4 space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-6">
                  <span className="absolute left-0 top-1 flex h-3 w-3 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-ember" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.14em] text-dusk/60">{item.year}</p>
                  <p className="text-sm text-dusk">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-dusk/10 bg-canvas p-6 shadow-subtle">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-dusk/60">Leadership</p>
            <div className="mt-4 space-y-4">
              {leadership.map((role) => (
                <div key={role.id} className="space-y-1">
                  <p className="text-sm font-medium text-dusk">{role.role}</p>
                  <p className="text-xs text-dusk/70">{role.organization} · {role.timeframe}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

