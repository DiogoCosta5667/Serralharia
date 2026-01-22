import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import './Orcamento.css'

function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
    data: '',
    hora: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Orçamento submetido:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: '',
        data: '',
        hora: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="orcamento-page">
      <div className="orcamento-hero">
        <div className="orcamento-hero-content">
          <h1>Peça o Seu Orçamento</h1>
          <p>Resposta em até 24 horas • Sem compromisso • Totalmente gratuito</p>
        </div>
      </div>

      <div className="orcamento-container">
        <div className="orcamento-content">
          <div className="orcamento-info">
            <h2>Por que escolher a Teles Silva?</h2>
            
            <div className="benefit-card">
              <CheckCircle2 size={24} />
              <div>
                <h3>Orçamento Gratuito</h3>
                <p>Sem custos, sem compromisso. Receba uma proposta personalizada.</p>
              </div>
            </div>

            <div className="benefit-card">
              <CheckCircle2 size={24} />
              <div>
                <h3>Resposta Rápida</h3>
                <p>Analisamos seu pedido e respondemos em até 24 horas.</p>
              </div>
            </div>

            <div className="benefit-card">
              <CheckCircle2 size={24} />
              <div>
                <h3>Atendimento Personalizado</h3>
                <p>Cada projeto é único. Adaptamos a solução às suas necessidades.</p>
              </div>
            </div>

            <div className="benefit-card">
              <CheckCircle2 size={24} />
              <div>
                <h3>Garantia de Qualidade</h3>
                <p>Materiais premium e 15 anos de experiência garantem durabilidade.</p>
              </div>
            </div>

            <div className="contact-info-cards">
              <div className="info-card">
                <Phone size={24} />
                <div>
                  <h4>Telefone</h4>
                  <p>+351 912 345 678</p>
                </div>
              </div>

              <div className="info-card">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>geral@telessilva.pt</p>
                </div>
              </div>

              <div className="info-card">
                <MapPin size={24} />
                <div>
                  <h4>Localização</h4>
                  <p>Porto, Portugal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="orcamento-form-container">
            {submitted ? (
              <div className="success-message">
                <CheckCircle2 size={64} />
                <h2>Pedido Enviado com Sucesso!</h2>
                <p>Entraremos em contacto em breve com o seu orçamento.</p>
              </div>
            ) : (
              <form className="orcamento-form" onSubmit={handleSubmit}>
                <h2>Preencha os Dados</h2>
                
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="+351 912 345 678"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="servico">Tipo de Serviço *</label>
                  <select
                    id="servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="janelas">Janelas em Alumínio</option>
                    <option value="portas">Portas de Alumínio</option>
                    <option value="varandas">Envidraçamento de Varandas</option>
                    <option value="guardas">Guardas e Corrimãos</option>
                    <option value="portoes">Portões e Gradeamentos</option>
                    <option value="personalizado">Projeto Personalizado</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="data">Data Preferencial</label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hora">Horário Preferencial</label>
                    <input
                      type="time"
                      id="hora"
                      name="hora"
                      value={formData.hora}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Detalhes do Projeto *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Descreva o que pretende: dimensões, localização, detalhes importantes..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Enviar Pedido de Orçamento
                </button>

                <p className="form-note">
                  * Campos obrigatórios • Os seus dados estão protegidos e não serão partilhados.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orcamento
