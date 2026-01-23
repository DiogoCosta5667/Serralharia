import useScrollAnimation from '../../hooks/useScrollAnimation'
import { Mail, Phone } from 'lucide-react'
import './Team.css'

const Team = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [teamRef, teamVisible] = useScrollAnimation()

  const team = [
    {
      name: 'António Silva',
      role: 'Diretor Técnico',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      description: '20 anos de experiência em caixilharia',
      email: 'antonio@telessilva.pt',
      phone: '+351 000 000 001'
    },
    {
      name: 'Carlos Teles',
      role: 'Mestre Instalador',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      description: 'Especialista em instalações complexas',
      email: 'carlos@telessilva.pt',
      phone: '+351 000 000 002'
    },
    {
      name: 'Ricardo Santos',
      role: 'Técnico de Medições',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      description: 'Precisão em cada projeto',
      email: 'ricardo@telessilva.pt',
      phone: '+351 000 000 003'
    },
    {
      name: 'Paulo Costa',
      role: 'Gestor de Projetos',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Coordenação e planeamento',
      email: 'paulo@telessilva.pt',
      phone: '+351 000 000 004'
    }
  ]

  return (
    <section className="team-section">
      <div className="team-container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2>A Nossa Equipa</h2>
          <p>Profissionais dedicados que transformam a sua visão em realidade</p>
        </div>

        <div ref={teamRef} className="team-grid">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`team-card fade-in delay-${index * 100} ${teamVisible ? 'visible' : ''}`}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <a href={`mailto:${member.email}`} className="contact-icon">
                    <Mail size={20} />
                  </a>
                  <a href={`tel:${member.phone}`} className="contact-icon">
                    <Phone size={20} />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
