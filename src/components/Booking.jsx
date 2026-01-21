import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import './Booking.css'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui podes adicionar lógica para enviar para backend/email
    console.log('Agendamento:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="agendamento" className="booking-section">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Agende a Sua Visita</h2>
          <p className="section-subtitle">
            Marque uma visita gratuita para orçamento e aconselhamento profissional
          </p>
        </div>

        <div className="booking-content">
          <div className="booking-info">
            <div className="info-box">
              <Calendar className="info-box-icon" />
              <div>
                <h3>Visita Gratuita</h3>
                <p>Deslocamo-nos ao local para avaliação e medições sem qualquer custo</p>
              </div>
            </div>
            
            <div className="info-box">
              <Clock className="info-box-icon" />
              <div>
                <h3>Resposta Rápida</h3>
                <p>Confirmamos o agendamento em menos de 24 horas</p>
              </div>
            </div>
            
            <div className="info-box">
              <MessageSquare className="info-box-icon" />
              <div>
                <h3>Aconselhamento</h3>
                <p>Ajudamos a escolher a melhor solução para o seu projeto</p>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>
                  <User size={18} />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="O seu nome"
                />
              </div>

              <div className="form-group">
                <label>
                  <Phone size={18} />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+351 912 345 678"
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <Mail size={18} />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <Calendar size={18} />
                  Data Preferida
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Clock size={18} />
                  Hora Preferida
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="09:00">09:00 - 10:00</option>
                  <option value="10:00">10:00 - 11:00</option>
                  <option value="11:00">11:00 - 12:00</option>
                  <option value="14:00">14:00 - 15:00</option>
                  <option value="15:00">15:00 - 16:00</option>
                  <option value="16:00">16:00 - 17:00</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Serviço Pretendido</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o serviço</option>
                <option value="janelas">Janelas</option>
                <option value="portas">Portas</option>
                <option value="varandas">Varandas</option>
                <option value="guardas">Guardas</option>
                <option value="portoes">Portões</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mensagem (Opcional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Descreva brevemente o seu projeto..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              {submitted ? (
                <>
                  <CheckCircle size={20} />
                  Agendamento Enviado!
                </>
              ) : (
                <>
                  <Calendar size={20} />
                  Confirmar Agendamento
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking
