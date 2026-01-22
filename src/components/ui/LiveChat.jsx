import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import './LiveChat.css'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Olá! 👋 Bem-vindo à Serralharia Teles Silva. Como posso ajudar?'
    }
  ])

  const quickReplies = [
    'Pedir orçamento',
    'Ver serviços',
    'Horário de atendimento',
    'Contacto telefónico'
  ]

  const handleSend = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // Adicionar mensagem do utilizador
    setMessages([...messages, { type: 'user', text: message }])
    
    // Simular resposta automática
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Obrigado pela mensagem! Um dos nossos especialistas irá responder em breve. Para contacto imediato, ligue: +351 912 345 678'
      }])
    }, 1000)

    setMessage('')
  }

  const handleQuickReply = (reply) => {
    setMessages([...messages, { type: 'user', text: reply }])
    
    // Respostas automáticas baseadas na escolha
    setTimeout(() => {
      let response = ''
      if (reply.includes('orçamento')) {
        response = 'Para pedir um orçamento, pode preencher o formulário na secção "Agendamento" ou ligar-nos diretamente!'
      } else if (reply.includes('serviços')) {
        response = 'Oferecemos: Janelas, Portas, Varandas, Guardas, Portões e muito mais. Veja a secção "Serviços" para mais detalhes!'
      } else if (reply.includes('Horário')) {
        response = 'Horário: Seg-Sex 9h-18h | Sábado 9h-13h'
      } else if (reply.includes('Contacto')) {
        response = 'Telefone: +351 912 345 678 | Email: geral@telessilva.pt'
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: response }])
    }, 800)
  }

  return (
    <div className="live-chat">
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
          <span className="chat-badge">1</span>
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <h4>Serralharia Teles Silva</h4>
              <span className="chat-status">
                <span className="status-dot"></span>
                Online
              </span>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {messages.length === 1 && (
              <div className="quick-replies">
                <p>Escolha uma opção:</p>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva a sua mensagem..."
            />
            <button type="submit" disabled={!message.trim()}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default LiveChat
