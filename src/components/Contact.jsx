import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
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
      <div className="section-header">
        <h2>Entre em Contacto</h2>
        <p>Estamos prontos para realizar o seu projeto</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
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

          <div className="office-hours">
            <h4>Horário de Funcionamento</h4>
            <p>Segunda a Sexta: 9h - 18h</p>
            <p>Sábado: 9h - 13h</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
