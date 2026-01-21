import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
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
      <div className="section-header">
        <h2>O Que Dizem os Nossos Clientes</h2>
        <p>Testemunhos reais de clientes satisfeitos</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
