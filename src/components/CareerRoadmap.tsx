import { useState } from 'react'
import { motion } from 'framer-motion'
import { careerMilestones } from '../data/profile'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CareerRoadmap() {
  const [activeId, setActiveId] = useState<string>(careerMilestones[0]?.id ?? '')
  const activeMilestone = careerMilestones.find((item) => item.id === activeId)

  return (
    <section id="career" className="relative bg-dusk text-canvas">
      <div className="absolute inset-x-0 -top-12 mx-auto h-24 max-w-xl rounded-full bg-dusk/60 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage/80">
              Career Roadmap
            </p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              A scrollable trail of building, improving, and shipping outcomes.
            </h2>
            <p className="text-base text-mist/90">
              Each stop represents a chapter where product strategy met engineering roots. Hover or tap to surface what mattered — impact metrics, systems thinking, and the humans involved.
            </p>
            <div className="flex items-center gap-3 rounded-2xl border border-canvas/10 bg-canvas/10 p-4 text-sm text-mist/80">
              <Sparkles className="h-4 w-4 text-ember" />
              <span>
                {"What's next?"} Continuing to design AI-enabled experiences that keep teams honest and customers delighted.
              </span>
            </div>
          </div>

          <motion.div
            className="relative w-full md:max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            <div className="absolute left-5 top-4 bottom-4 hidden w-px bg-gradient-to-b from-ember via-sand to-transparent md:block" aria-hidden />
            <ul className="space-y-4">
              {careerMilestones.map((milestone) => {
                const isActive = milestone.id === activeId
                return (
                  <motion.li
                    key={milestone.id}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(milestone.id)}
                      onFocus={() => setActiveId(milestone.id)}
                      onClick={() => setActiveId(milestone.id)}
                      className={`group relative flex w-full flex-col gap-3 rounded-3xl border border-canvas/5 bg-canvas/5 px-6 py-5 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember/60 ${
                        isActive ? 'border-ember/50 bg-canvas/10' : 'hover:border-canvas/20 hover:bg-canvas/10'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-mist/70">{milestone.timeframe}</p>
                          <p className="mt-1 font-medium text-canvas">{milestone.title}</p>
                        </div>
                        <ArrowRight className={`h-4 w-4 transition ${isActive ? 'text-ember rotate-45' : 'text-mist/50 group-hover:text-ember/80'}`} />
                      </div>
                      <p className="text-sm text-mist/80">{milestone.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {milestone.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-canvas/10 bg-canvas/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-mist/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {activeMilestone && (
          <motion.div
            key={activeMilestone.id}
            className="mt-16 grid gap-6 rounded-3xl border border-canvas/10 bg-canvas/10 p-8 md:grid-cols-[1fr,1fr]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.16em] text-mist/70">Key Learnings</p>
              <ul className="space-y-3 text-sm text-mist/90">
                {activeMilestone.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl border border-canvas/10 bg-canvas/5 p-4 leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-canvas/10 bg-canvas/5 p-6 text-sm text-mist/80">
              <p className="text-xs uppercase tracking-[0.18em] text-mist/60">Where</p>
              <p className="mt-1 font-medium text-canvas">{activeMilestone.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist/90">
                Built connective tissue between teams, turning strategy into momentum. Coaching, pairing, and feedback loops were as vital as the shipped features.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

