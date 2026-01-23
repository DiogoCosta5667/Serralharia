import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Partners.css'

const Partners = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [logosRef, logosVisible] = useScrollAnimation()

  const partners = [
    { name: 'Schüco', logo: 'https://via.placeholder.com/180x80/E8E8E8/B8860B?text=Schuco' },
    { name: 'Cortizo', logo: 'https://via.placeholder.com/180x80/E8E8E8/B8860B?text=Cortizo' },
    { name: 'Reynaers', logo: 'https://via.placeholder.com/180x80/E8E8E8/B8860B?text=Reynaers' },
    { name: 'Technal', logo: 'https://via.placeholder.com/180x80/E8E8E8/B8860B?text=Technal' },
    { name: 'Hydro', logo: 'https://via.placeholder.com/180x80/E8E8E8/B8860B?text=Hydro' },
    { name: 'Guardian Glass', logo: 'https://via.placeholder.com/180x80/E8E8E8/B8860B?text=Guardian' }
  ]

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2>Parceiros de Confiança</h2>
          <p>Trabalhamos com as melhores marcas do mercado</p>
        </div>

        <div ref={logosRef} className={`partners-grid ${logosVisible ? 'visible' : ''}`}>
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`partner-card fade-in delay-${index * 50} ${logosVisible ? 'visible' : ''}`}
            >
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>

        <div className="partners-badges">
          <div className="badge">
            <span className="badge-icon">✓</span>
            <span>Certificação CE</span>
          </div>
          <div className="badge">
            <span className="badge-icon">✓</span>
            <span>ISO 9001</span>
          </div>
          <div className="badge">
            <span className="badge-icon">✓</span>
            <span>Garantia 10 Anos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
