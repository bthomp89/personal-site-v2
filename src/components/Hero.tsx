import { motion } from 'framer-motion'
import headshot from '../assets/headshot.jpg'

const heroVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-noise bg-repeat" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-[400px] max-w-4xl rounded-full bg-gradient-to-b from-ember/10 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 text-dusk">
        <motion.div
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-black sm:h-80 sm:w-80">
            <img
              src={headshot}
              alt="Brayden Thompson"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 text-center">
          <motion.h1
            className="font-display text-4xl leading-tight text-dusk sm:text-5xl lg:text-6xl"
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            Hey, I'm <strong>Brayden Thompson</strong>
          </motion.h1>

          <motion.p
            className="text-lg text-dusk/70"
            variants={heroVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            Engineering scalable systems while shaping product and technical strategy alongside stakeholders.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

