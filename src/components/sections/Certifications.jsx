import { Shield, Award, CheckCircle, Star } from 'lucide-react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Garantia de 10 Anos",
      description: "Todos os nossos trabalhos têm garantia de 10 anos"
    },
    {
      icon: Award,
      title: "Certificação ISO 9001",
      description: "Qualidade certificada em todos os processos"
    },
    {
      icon: CheckCircle,
      title: "Materiais Premium",
      description: "Utilizamos apenas alumínio de primeira qualidade"
    },
    {
      icon: Star,
      title: "15+ Anos de Experiência",
      description: "Mais de 500 projetos concluídos com sucesso"
    }
  ]

  const partners = [
    { name: "CORTIZO", logo: "🏭" },
    { name: "ALUPLAST", logo: "🏗️" },
    { name: "SCHÜCO", logo: "⚙️" },
    { name: "REYNAERS", logo: "🔧" }
  ]

  return (
    <section id="certificacoes" className="certifications-section">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2>Qualidade Garantida</h2>
          <p className="section-subtitle">
            Certificações, garantias e parcerias com as melhores marcas
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div key={index} className="cert-card">
                <div className="cert-icon-wrapper">
                  <Icon className="cert-icon" />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            )
          })}
        </div>

        <div className="partners-section">
          <h3>Parceiros de Confiança</h3>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="quality-banner">
          <Shield className="banner-icon" />
          <div className="banner-content">
            <h4>Compromisso com a Excelência</h4>
            <p>
              Trabalhamos apenas com materiais de primeira qualidade e oferecemos
              garantia total em todos os nossos serviços. A sua satisfação é a nossa prioridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
