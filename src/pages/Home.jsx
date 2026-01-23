import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Gallery from '../components/sections/Gallery'
import BeforeAfter from '../components/sections/BeforeAfter'
import Reviews from '../components/sections/Reviews'
import Certifications from '../components/sections/Certifications'
import Calculator from '../components/sections/Calculator'
import Testimonials from '../components/sections/Testimonials'
import About from '../components/sections/About'
import Team from '../components/sections/Team'
import FAQ from '../components/sections/FAQ'
import Map from '../components/sections/Map'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <BeforeAfter />
      <Reviews />
      <Certifications />
      <Calculator />
      <Testimonials />
      <About />
      <Team />
      <FAQ />
      <Map />
      <Contact />
    </>
  )
}

export default Home
