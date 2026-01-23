import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('lightbox-overlay')) {
      onClose()
    }
  }

  return (
    <div className="lightbox-overlay" onClick={handleOverlayClick}>
      <button className="lightbox-close" onClick={onClose}>
        <X size={32} />
      </button>
      
      <button className="lightbox-prev" onClick={onPrev}>
        <ChevronLeft size={40} />
      </button>
      
      <div className="lightbox-content">
        <img 
          src={images[currentIndex]} 
          alt={`Projeto ${currentIndex + 1}`}
          className="lightbox-image"
        />
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      <button className="lightbox-next" onClick={onNext}>
        <ChevronRight size={40} />
      </button>
    </div>
  )
}

export default Lightbox
