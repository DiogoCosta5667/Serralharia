import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="home" className="hero hero-3d">
      {/* Formas geométricas animadas */}
      <div className="geometric-shapes">
        <div 
          className="shape shape-1"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) translateY(${scrollY * 0.5}px)`
          }}
        />
        <div 
          className="shape shape-2"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px) translateY(${scrollY * 0.3}px)`
          }}
        />
        <div 
          className="shape shape-3"
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.04}px) translateY(${scrollY * 0.4}px)`
          }}
        />
        <div 
          className="shape shape-4"
          style={{
            transform: `translate(${mousePosition.x * -0.06}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * 0.6}px)`
          }}
        />
      </div>

      {/* Partículas flutuantes */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Janela 3D animada */}
      <div 
        className="window-3d"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotateY(${mousePosition.x * 0.1 - 5}deg) rotateX(${mousePosition.y * -0.05 + 2.5}deg)`
        }}
      >
        <div className="window-frame">
          <div className="window-pane window-left"></div>
          <div className="window-pane window-right"></div>
          <div className="window-divider"></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div 
        className="hero-content-3d"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`
        }}
      >
        <div className="badge-3d">
          <Sparkles size={16} />
          <span>Qualidade Premium</span>
        </div>
        
        <h1 className="hero-title-3d">
          Alumínio com
          <span className="gradient-3d"> Design Inovador</span>
        </h1>
        
        <p className="hero-subtitle-3d">
          Transformamos ideias em realidade com tecnologia de ponta
        </p>

        <div className="hero-buttons-3d">
          <a href="/projetos" className="btn-3d btn-primary-3d">
            <span>Explorar Projetos</span>
            <ArrowRight size={20} />
          </a>
          <a href="/orcamento" className="btn-3d btn-secondary-3d">
            <span>Pedir Orçamento</span>
          </a>
        </div>

        {/* Estatísticas com animação */}
        <div className="stats-3d">
          <div className="stat-3d">
            <div className="stat-number">15+</div>
            <div className="stat-label">Anos</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-3d">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projetos</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-3d">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </section>
  )
}

export default Hero
