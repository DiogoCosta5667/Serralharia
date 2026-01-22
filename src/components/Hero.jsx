import { useState, useEffect } from 'react'
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      title: 'Janelas em Alumínio',
      subtitle: 'Design moderno com isolamento térmico superior',
      category: 'Janelas'
    },
    {
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&q=80',
      title: 'Portas de Entrada Premium',
      subtitle: 'Segurança e elegância para o seu lar',
      category: 'Portas'
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80',
      title: 'Envidraçamento de Varandas',
      subtitle: 'Transforme sua varanda com vista panorâmica',
      category: 'Varandas'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
      title: 'Guardas e Corrimãos',
      subtitle: 'Proteção com design sofisticado',
      category: 'Guardas'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
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
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
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
        <div className="slide-info">
          <span className="category-badge">{slides[currentSlide].category}</span>
          <h1 className="hero-title">
            {slides[currentSlide].title}
          </h1>
          <p className="hero-subtitle">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="hero-buttons">
          <a href="/projetos" className="btn btn-primary">
            Ver Projetos <ArrowRight size={20} />
          </a>
          <a href="/orcamento" className="btn btn-secondary">
            Pedir Orçamento
          </a>
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
