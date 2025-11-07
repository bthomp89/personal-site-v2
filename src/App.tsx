import { About } from './components/About'
import { CareerRoadmap } from './components/CareerRoadmap'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { PassionsSection } from './components/PassionsSection'
import { ProjectsSection } from './components/ProjectsSection'

function App() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,31,42,0.12),_transparent_60%)]" aria-hidden />
      <Navigation />
      <main>
        <Hero />
        <About />
        <CareerRoadmap />
        <ProjectsSection />
        <PassionsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
