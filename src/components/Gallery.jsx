import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    { id: 1, category: 'janelas', image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600', title: 'Janelas Residenciais' },
    { id: 2, category: 'portas', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600', title: 'Porta de Entrada' },
    { id: 3, category: 'varandas', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', title: 'Envidraçamento de Varanda' },
    { id: 4, category: 'guardas', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600', title: 'Guardas de Alumínio' },
    { id: 5, category: 'janelas', image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600', title: 'Janelas Modernas' },
    { id: 6, category: 'portas', image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600', title: 'Porta Deslizante' },
    { id: 7, category: 'varandas', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600', title: 'Varanda Envidraçada' },
    { id: 8, category: 'guardas', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600', title: 'Corrimãos' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="gallery" className="gallery">
      <div className="section-header">
        <h2>Galeria de Projetos</h2>
        <p>Veja alguns dos nossos trabalhos realizados</p>
      </div>

      <div className="gallery-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button 
          className={`filter-btn ${filter === 'janelas' ? 'active' : ''}`}
          onClick={() => setFilter('janelas')}
        >
          Janelas
        </button>
        <button 
          className={`filter-btn ${filter === 'portas' ? 'active' : ''}`}
          onClick={() => setFilter('portas')}
        >
          Portas
        </button>
        <button 
          className={`filter-btn ${filter === 'varandas' ? 'active' : ''}`}
          onClick={() => setFilter('varandas')}
        >
          Varandas
        </button>
        <button 
          className={`filter-btn ${filter === 'guardas' ? 'active' : ''}`}
          onClick={() => setFilter('guardas')}
        >
          Guardas
        </button>
      </div>

      <div className="gallery-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="gallery-item fade-in"
            onClick={() => setSelectedImage(project)}
          >
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="gallery-overlay">
              <ZoomIn size={30} />
              <h4>{project.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={30} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
