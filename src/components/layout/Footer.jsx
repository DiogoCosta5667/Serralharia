import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TELES SILVA</h3>
          <p>Serralharia de Alumínio</p>
          <p className="footer-desc">
            Especialistas em caixilharia de alumínio com qualidade e garantia.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#about">Sobre Nós</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Serviços</h4>
          <ul>
            <li><a href="#services">Janelas</a></li>
            <li><a href="#services">Portas</a></li>
            <li><a href="#services">Varandas</a></li>
            <li><a href="#services">Guardas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <Phone size={18} />
              <a href="tel:+351000000000">+351 000 000 000</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href="mailto:geral@telessilva.pt">geral@telessilva.pt</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Cidade, Portugal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Serralharia Teles Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
