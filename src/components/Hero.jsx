import { useState, useEffect } from 'react'
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1920&q=80'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide} aria-label="Anterior">
        <ChevronLeft size={32} />
      </button>
      <button className="slider-btn next" onClick={nextSlide} aria-label="Próximo">
        <ChevronRight size={32} />
      </button>

      <div className="hero-content">
        <h1 className="hero-title">
          Excelência em <span className="highlight">Serralharia de Alumínio</span>
        </h1>
        <p className="hero-description">
          Transformamos espaços com soluções inovadoras em alumínio. 
          Qualidade, design e durabilidade em cada projeto.
        </p>
        
        <div className="hero-buttons">
          <a href="/projetos" className="btn btn-primary">
            Ver Projetos <ArrowRight size={20} />
          </a>
          <a href="/orcamento" className="btn btn-secondary">
            <Phone size={20} />
            Pedir Orçamento
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">15+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projetos Concluídos</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Clientes Satisfeitos</div>
          </div>
        </div>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
