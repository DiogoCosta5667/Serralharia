import useScrollAnimation from '../../hooks/useScrollAnimation'
import { ClipboardList, Ruler, Hammer, CheckCircle } from 'lucide-react'
import './Process.css'

const Process = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation()

  const steps = [
    {
      icon: <ClipboardList size={40} />,
      number: '01',
      title: 'Pedido de Orçamento',
      description: 'Contacte-nos por telefone, email ou formulário. Respondemos em 24h com orçamento gratuito.'
    },
    {
      icon: <Ruler size={40} />,
      number: '02',
      title: 'Visita e Medições',
      description: 'Deslocamo-nos ao local para fazer medições precisas e avaliar as necessidades específicas.'
    },
    {
      icon: <Hammer size={40} />,
      number: '03',
      title: 'Fabrico',
      description: 'Fabricamos os produtos à medida na nossa oficina com materiais de alta qualidade.'
    },
    {
      icon: <CheckCircle size={40} />,
      number: '04',
      title: 'Instalação',
      description: 'Instalação profissional por equipa especializada. Limpeza e garantia de 10 anos incluídas.'
    }
  ]

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2>Como Funciona</h2>
          <p>Do orçamento à instalação, tornamos tudo simples e transparente</p>
        </div>

        <div ref={stepsRef} className="process-timeline">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step fade-in delay-${index * 100} ${stepsVisible ? 'visible' : ''}`}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
