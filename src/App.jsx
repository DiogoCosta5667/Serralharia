import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Certifications from './components/Certifications'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Map from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LiveChat from './components/LiveChat'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Booking />
      <Certifications />
      <Calculator />
      <Testimonials />
      <About />
      <Map />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </div>
  )
}

export default App
