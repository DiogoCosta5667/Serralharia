import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Contact.css'

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()
  const [formRef, formVisible] = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada! Entraremos em contacto em breve.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
        <h2>Entre em Contacto</h2>
        <p>Estamos prontos para realizar o seu projeto</p>
      </div>

      <div className="contact-content">
        <div ref={infoRef} className={`contact-info fade-in-left ${infoVisible ? 'visible' : ''}`}>
          <h3>Informações de Contacto</h3>
          <p>Fale connosco através de qualquer um dos seguintes meios:</p>

          <div className="info-item">
            <Phone size={24} />
            <div>
              <strong>Telefone</strong>
              <a href="tel:+351000000000">+351 000 000 000</a>
            </div>
          </div>

          <div className="info-item">
            <Mail size={24} />
            <div>
              <strong>Email</strong>
              <a href="mailto:geral@telessilva.pt">geral@telessilva.pt</a>
            </div>
          </div>

          <div className="info-item">
            <MapPin size={24} />
            <div>
              <strong>Morada</strong>
              <p>Rua Exemplo, Nº 123<br />0000-000 Cidade, Portugal</p>
            </div>
          </div>

          <div className="info-item">
            <div className="office-hours-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <strong>Horário de Funcionamento</strong>
              <p>Segunda a Sexta: 9h - 18h<br />Sábado: 9h - 13h</p>
            </div>
          </div>
        </div>

        <form ref={formRef} className={`contact-form fade-in-right ${formVisible ? 'visible' : ''}`} onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome Completo"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensagem..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <Send size={20} /> Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
