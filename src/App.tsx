import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Races } from './components/Races'
import { Projects } from './components/Projects'
import { Background } from './components/Background'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-background)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--color-text-primary)]"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Races />
        <Projects />
        <Background />
      </main>
      <Footer />
    </>
  )
}

export default App
