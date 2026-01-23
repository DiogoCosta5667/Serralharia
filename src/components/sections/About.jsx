import { Award, Users, Clock } from 'lucide-react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './About.css'

const About = () => {
  const [textRef, textVisible] = useScrollAnimation()
  const [imageRef, imageVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div ref={textRef} className={`about-text fade-in-left ${textVisible ? 'visible' : ''}`}>
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

          <div ref={featuresRef} className="about-features">
            <div className={`feature fade-in delay-100 ${featuresVisible ? 'visible' : ''}`}>
              <Award size={40} />
              <h4>Qualidade Garantida</h4>
              <p>Produtos certificados e garantia de 10 anos</p>
            </div>
            <div className={`feature fade-in delay-200 ${featuresVisible ? 'visible' : ''}`}>
              <Users size={40} />
              <h4>Equipa Experiente</h4>
              <p>Profissionais qualificados e dedicados</p>
            </div>
            <div className={`feature fade-in delay-300 ${featuresVisible ? 'visible' : ''}`}>
              <Clock size={40} />
              <h4>Pontualidade</h4>
              <p>Cumprimento rigoroso de prazos</p>
            </div>
          </div>
        </div>

        <div ref={imageRef} className={`about-image fade-in-right ${imageVisible ? 'visible' : ''}`}>
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
