import { Award, Users, Clock } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre a Teles Silva</h2>
          <p className="about-intro">
            A Serralharia Teles Silva é uma empresa familiar com mais de 15 anos de experiência 
            no sector da caixilharia em alumínio.
          </p>
          <p>
            Especializados em soluções de alta qualidade para residências e empresas, 
            oferecemos um serviço completo desde o projeto até à instalação. 
            A nossa missão é fornecer produtos duráveis, funcionais e esteticamente 
            agradáveis, sempre com foco na satisfação do cliente.
          </p>
          <p>
            Trabalhamos com os melhores materiais e tecnologias do mercado, garantindo 
            isolamento térmico e acústico superiores, além de designs modernos que 
            valorizam qualquer espaço.
          </p>

          <div className="about-features">
            <div className="feature">
              <Award size={40} />
              <h4>Qualidade Garantida</h4>
              <p>Produtos certificados e garantia de 10 anos</p>
            </div>
            <div className="feature">
              <Users size={40} />
              <h4>Equipa Experiente</h4>
              <p>Profissionais qualificados e dedicados</p>
            </div>
            <div className="feature">
              <Clock size={40} />
              <h4>Pontualidade</h4>
              <p>Cumprimento rigoroso de prazos</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600" 
            alt="Equipa Teles Silva"
          />
        </div>
      </div>
    </section>
  )
}

export default About
