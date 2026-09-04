import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import WaveDivider from './components/WaveDivider.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import { useRevealOnScroll } from './hooks/useReveal.js'
import './App.css'

function App() {
  useRevealOnScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <WaveDivider from="var(--paper)" to="var(--paper-deep)" />
        <About />
      </main>
      <WaveDivider from="var(--paper-deep)" to="var(--forest)" flip />
      <Footer />
    </>
  )
}

export default App