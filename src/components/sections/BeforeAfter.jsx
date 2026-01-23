import { useState } from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './BeforeAfter.css'

const BeforeAfter = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const cases = [
    {
      title: 'Renovação Completa - Moradia em Lisboa',
      location: 'Cascais, Lisboa',
      before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
      after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      description: 'Substituição de todas as janelas antigas por janelas de alumínio com vidro duplo.',
      testimonial: '"Excelente trabalho! A diferença é incrível, tanto na estética como no conforto térmico."',
      client: 'João Silva',
      rating: 5
    },
    {
      title: 'Envidraçamento de Varanda Panorâmica',
      location: 'Matosinhos, Porto',
      before: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
      after: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      description: 'Transformação de varanda aberta em espaço fechado com vista panorâmica.',
      testimonial: '"Agora posso aproveitar a varanda o ano todo. O trabalho foi impecável!"',
      client: 'Maria Santos',
      rating: 5
    },
    {
      title: 'Porta de Entrada Premium',
      location: 'Coimbra',
      before: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
      after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      description: 'Instalação de porta de segurança em alumínio com design moderno.',
      testimonial: '"Qualidade premium! Recomendo a todos que procuram segurança e beleza."',
      client: 'Carlos Ferreira',
      rating: 5
    }
  ]

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const currentCase = cases[currentIndex]

  return (
    <section className="before-after-section">
      <div className="before-after-container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2>Casos de Sucesso</h2>
          <p>Veja a transformação que fizemos em projetos reais</p>
        </div>

        <div className="case-showcase">
          <button className="nav-btn prev" onClick={prevCase} aria-label="Anterior">
            <ChevronLeft size={30} />
          </button>

          <div className="case-content">
            <div className="case-header">
              <h3>{currentCase.title}</h3>
              <p className="case-location">{currentCase.location}</p>
            </div>

            <div className="comparison-container">
              <div className="comparison-side">
                <div className="comparison-label before">Antes</div>
                <img src={currentCase.before} alt="Antes" />
              </div>
              
              <div className="comparison-divider">
                <div className="divider-icon">→</div>
              </div>

              <div className="comparison-side">
                <div className="comparison-label after">Depois</div>
                <img src={currentCase.after} alt="Depois" />
              </div>
            </div>

            <div className="case-details">
              <p className="case-description">{currentCase.description}</p>
              
              <div className="case-testimonial">
                <div className="testimonial-rating">
                  {[...Array(currentCase.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#B8860B" color="#B8860B" />
                  ))}
                </div>
                <p className="testimonial-text">{currentCase.testimonial}</p>
                <p className="testimonial-author">— {currentCase.client}</p>
              </div>
            </div>

            <div className="case-indicators">
              {cases.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ver caso ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button className="nav-btn next" onClick={nextCase} aria-label="Próximo">
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
