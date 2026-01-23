import { DoorClosed, Home, Fence, Building2, Shield, Ruler } from 'lucide-react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Services.css'

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()
  const services = [
    {
      icon: <Home size={40} />,
      title: 'Janelas',
      description: 'Janelas de alumínio de alta qualidade, com ótimo isolamento térmico e acústico.'
    },
    {
      icon: <DoorClosed size={40} />,
      title: 'Portas',
      description: 'Portas de entrada e interior em alumínio, resistentes e elegantes.'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Varandas',
      description: 'Envidraçamento de varandas com vidros de segurança e perfis de alumínio.'
    },
    {
      icon: <Fence size={40} />,
      title: 'Guardas',
      description: 'Guardas e corrimãos em alumínio para escadas e varandas, seguros e duráveis.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Portões',
      description: 'Portões de entrada em alumínio, com design moderno e alta segurança.'
    },
    {
      icon: <Ruler size={40} />,
      title: 'Projetos Personalizados',
      description: 'Criamos soluções à medida para o seu projeto específico.'
    }
  ]

  return (
    <section id="services" className="services">
      <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
        <h2>Os Nossos Serviços</h2>
        <p>Soluções completas em alumínio para qualquer necessidade</p>
      </div>
      <div ref={gridRef} className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card fade-in delay-${(index % 3 + 1) * 100} ${gridVisible ? 'visible' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
