import { ArrowRight, Phone } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          Especialistas em
          <span className="gradient-text"> Alumínio</span>
        </h1>
        <p className="hero-subtitle fade-in">
          Qualidade, durabilidade e design para o seu projeto
        </p>
        <p className="hero-description fade-in">
          Com anos de experiência, a Serralharia Teles Silva oferece soluções completas
          em alumínio para residências e empresas. Do projeto à instalação.
        </p>
        <div className="hero-buttons fade-in">
          <a href="#calculator" className="btn btn-primary">
            Pedir Orçamento <ArrowRight size={20} />
          </a>
          <a href="tel:+351000000000" className="btn btn-secondary">
            <Phone size={20} /> Ligar Agora
          </a>
        </div>
        <div className="hero-stats fade-in">
          <div className="stat">
            <h3>15+</h3>
            <p>Anos de Experiência</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Projetos Realizados</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
