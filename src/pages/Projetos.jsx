import { useState } from 'react'
import { ExternalLink, Calendar, MapPin, Award } from 'lucide-react'
import './Projetos.css'

function Projetos() {
  const [filter, setFilter] = useState('todos')

  const projects = [
    {
      id: 1,
      title: 'Moradia Moderna - Matosinhos',
      category: 'janelas',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Instalação completa de janelas em alumínio com vidro duplo e sistema oscilobatente.',
      date: '2025-12',
      location: 'Matosinhos',
      features: ['25 janelas', 'Vidro duplo', 'Térmica reforçada', 'Sistema oscilobatente']
    },
    {
      id: 2,
      title: 'Envidraçamento de Varanda - Porto',
      category: 'varandas',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      description: 'Envidraçamento de varanda panorâmica com sistema de correr e perfis minimalistas.',
      date: '2025-11',
      location: 'Porto Centro',
      features: ['Vista panorâmica', 'Sistema correr', 'Perfis slim', 'Isolamento acústico']
    },
    {
      id: 3,
      title: 'Portão Automático - Vila Nova de Gaia',
      category: 'portoes',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
      description: 'Portão de alumínio com automação e design contemporâneo.',
      date: '2025-10',
      location: 'V.N. Gaia',
      features: ['Automação completa', 'Design moderno', 'Anti-corrosão', 'Controlo remoto']
    },
    {
      id: 4,
      title: 'Portas de Entrada - Gaia',
      category: 'portas',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      description: 'Portas de entrada de alto padrão com fechadura multiponto e design exclusivo.',
      date: '2025-09',
      location: 'Canidelo',
      features: ['Segurança reforçada', 'Design exclusivo', 'Isolamento térmico', 'Multipontos']
    },
    {
      id: 5,
      title: 'Guardas Interiores - Maia',
      category: 'guardas',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      description: 'Guardas e corrimãos em alumínio com vidro temperado para escadas interiores.',
      date: '2025-08',
      location: 'Maia',
      features: ['Vidro temperado', 'Acabamento premium', 'Design minimalista', 'Certificação EN']
    },
    {
      id: 6,
      title: 'Projeto Completo - Póvoa de Varzim',
      category: 'personalizado',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'Obra completa incluindo janelas, portas, varandas e guardas exteriores.',
      date: '2025-07',
      location: 'Póvoa de Varzim',
      features: ['Projeto completo', '40+ elementos', '3 meses obra', 'Garantia 10 anos']
    }
  ]

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'janelas', label: 'Janelas' },
    { id: 'portas', label: 'Portas' },
    { id: 'varandas', label: 'Varandas' },
    { id: 'guardas', label: 'Guardas' },
    { id: 'portoes', label: 'Portões' },
    { id: 'personalizado', label: 'Personalizados' }
  ]

  return (
    <div className="projetos-page">
      <div className="projetos-hero">
        <div className="projetos-hero-content">
          <h1>Nossos Projetos</h1>
          <p>Obras realizadas com excelência • Clientes satisfeitos • Qualidade comprovada</p>
        </div>
      </div>

      <div className="projetos-container">
        <div className="stats-banner">
          <div className="stat-item">
            <Award size={32} />
            <h3>500+</h3>
            <p>Projetos Concluídos</p>
          </div>
          <div className="stat-item">
            <Calendar size={32} />
            <h3>15 Anos</h3>
            <p>De Experiência</p>
          </div>
          <div className="stat-item">
            <MapPin size={32} />
            <h3>Grande Porto</h3>
            <p>Área de Atuação</p>
          </div>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-tab ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projetos-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project-btn">
                    <ExternalLink size={20} />
                    Ver Detalhes
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-date">
                    <Calendar size={16} />
                    {project.date}
                  </span>
                  <span className="project-location">
                    <MapPin size={16} />
                    {project.location}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2>Quer um Projeto Como Estes?</h2>
          <p>Entre em contacto connosco e transforme o seu espaço com qualidade e design.</p>
          <div className="cta-buttons">
            <a href="/orcamento" className="btn-primary">Pedir Orçamento</a>
            <a href="tel:+351912345678" className="btn-secondary">Ligar Agora</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos
