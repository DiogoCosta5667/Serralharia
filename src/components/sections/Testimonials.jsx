import { Star, Quote } from 'lucide-react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Testimonials.css'

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()
  const testimonials = [
    {
      name: 'João Silva',
      location: 'Lisboa',
      rating: 5,
      text: 'Excelente serviço! As janelas ficaram perfeitas e o atendimento foi impecável. Recomendo!'
    },
    {
      name: 'Maria Santos',
      location: 'Porto',
      rating: 5,
      text: 'Profissionais muito competentes. Envidraçaram a minha varanda e o resultado superou as expectativas.'
    },
    {
      name: 'Carlos Ferreira',
      location: 'Coimbra',
      rating: 5,
      text: 'Qualidade top! Já é a segunda vez que trabalho com eles. Sempre pontuais e cuidadosos.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
        <h2>O Que Dizem os Nossos Clientes</h2>
        <p>Testemunhos reais de clientes satisfeitos</p>
      </div>

      <div ref={gridRef} className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${index * 100} ${gridVisible ? 'visible' : ''}`}>
            <Quote className="quote-icon" size={40} />
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
