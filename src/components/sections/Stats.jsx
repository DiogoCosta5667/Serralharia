import { useCounter } from '../../hooks/useCounter'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { Award, Users, Star, Clock } from 'lucide-react'
import './Stats.css'

const Stats = () => {
  const [statsRef, statsVisible] = useScrollAnimation()
  
  const count1 = useCounter(15, 2000, statsVisible)
  const count2 = useCounter(500, 2500, statsVisible)
  const count3 = useCounter(98, 2000, statsVisible)
  const count4 = useCounter(10, 1500, statsVisible)

  const stats = [
    {
      icon: <Clock size={40} />,
      number: count1,
      suffix: '+',
      label: 'Anos de Experiência',
      color: '#B8860B'
    },
    {
      icon: <Award size={40} />,
      number: count2,
      suffix: '+',
      label: 'Projetos Concluídos',
      color: '#DAA520'
    },
    {
      icon: <Star size={40} />,
      number: count3,
      suffix: '%',
      label: 'Clientes Satisfeitos',
      color: '#B8860B'
    },
    {
      icon: <Users size={40} />,
      number: count4,
      suffix: ' Anos',
      label: 'Garantia nos Produtos',
      color: '#DAA520'
    }
  ]

  return (
    <section className="stats-section">
      <div ref={statsRef} className="stats-container">
        <div className={`stats-grid ${statsVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card fade-in delay-${index * 100} ${statsVisible ? 'visible' : ''}`}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">
                {stat.number}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
