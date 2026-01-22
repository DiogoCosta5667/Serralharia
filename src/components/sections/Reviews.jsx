import { Star, Quote } from 'lucide-react'
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      name: "João Silva",
      rating: 5,
      date: "Há 2 semanas",
      text: "Excelente trabalho! Instalaram janelas em alumínio na minha casa e o resultado foi impecável. Profissionais muito competentes e pontuais.",
      avatar: "JS"
    },
    {
      name: "Maria Santos",
      rating: 5,
      date: "Há 1 mês",
      text: "Muito satisfeita com a varanda que fizeram. Qualidade superior e preço justo. Recomendo vivamente!",
      avatar: "MS"
    },
    {
      name: "Carlos Mendes",
      rating: 5,
      date: "Há 2 meses",
      text: "Profissionalismo de excelência. Desde o orçamento até à instalação, tudo correu perfeitamente. Obrigado pela dedicação!",
      avatar: "CM"
    },
    {
      name: "Ana Rodrigues",
      rating: 5,
      date: "Há 3 meses",
      text: "Trabalho limpo e bem executado. As portas ficaram lindas e funcionam perfeitamente. Muito obrigada!",
      avatar: "AR"
    }
  ]

  return (
    <section id="avaliacoes" className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>O Que Dizem os Nossos Clientes</h2>
          <p className="section-subtitle">Avaliações verificadas no Google</p>
          
          <div className="google-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="var(--secondary)" color="var(--secondary)" size={28} />
              ))}
            </div>
            <div className="rating-info">
              <span className="rating-score">5.0</span>
              <span className="rating-count">Baseado em 48 avaliações</span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <Quote className="quote-icon" />
              
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-author">
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>

              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="var(--primary)" color="var(--primary)" size={16} />
                ))}
              </div>

              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a 
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews
