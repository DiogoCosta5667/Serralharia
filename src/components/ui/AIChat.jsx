import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import './AIChat.css'

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Olá! 👋 Bem-vindo à Serralharia Teles Silva. Como posso ajudar?'
    }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    'Pedir orçamento',
    'Ver serviços',
    'Horário de atendimento',
    'Contacto telefónico'
  ]

  const knowledgeBase = {
    'preço|orçamento|custo|valor|pedir orçamento': {
      response: 'Para pedir um orçamento gratuito, pode:\n\n📞 Ligar: +351 000 000 000\n📧 Email: geral@telessilva.pt\n💻 Usar a calculadora no site\n\nRespondemos em 24h!',
    },
    'garantia|anos': {
      response: 'Oferecemos 10 anos de garantia nos materiais e 2 anos na instalação! Todos os nossos produtos são certificados. 🛡️',
    },
    'prazo|tempo|demora|instalação': {
      response: 'Uma janela simples demora 2-3 horas. Projetos completos podem levar 2-3 dias. Fazemos sempre uma avaliação prévia e damos um prazo exato! ⏱️',
    },
    'zona|local|área|onde': {
      response: 'Atendemos todo o Grande Porto e concelhos limítrofes. Para zonas mais distantes, contacte-nos para confirmar disponibilidade! 📍',
    },
    'pagamento|pagar|formas': {
      response: 'Aceitamos:\n💶 Dinheiro\n🏦 Transferência bancária\n💳 Multibanco\n📝 Cheque\n\nTambém oferecemos planos de pagamento faseado!',
    },
    'certificação|certificado|qualidade': {
      response: 'Todos os nossos materiais têm certificação europeia (CE) e garantem os mais altos padrões de isolamento térmico/acústico, segurança e durabilidade! ✅',
    },
    'janela|porta|varanda|guarda|serviço|ver serviços': {
      response: 'Os nossos serviços:\n\n🪟 Janelas de alumínio\n🚪 Portas de entrada e interior\n🏢 Envidraçamento de varandas\n🛡️ Guardas e corrimãos\n🚧 Portões de entrada\n✨ Projetos personalizados',
    },
    'horário|aberto|funciona|atendimento': {
      response: 'Horário de Atendimento:\n\n📅 Segunda a Sexta: 9h - 18h\n📅 Sábado: 9h - 13h\n⛔ Domingo: Encerrado',
    },
    'contacto|telefone|email|falar|telefónico': {
      response: 'Pode contactar-nos através de:\n\n📞 Telefone: +351 000 000 000\n📧 Email: geral@telessilva.pt\n📍 Morada: Rua Exemplo, Nº 123, 0000-000 Cidade\n\nEstamos à sua disposição!',
    },
    'equipa|quem|empresa': {
      response: 'Somos uma empresa familiar com 15+ anos de experiência! Temos uma equipa de profissionais especializados em caixilharia de alumínio. 👷',
    }
  }

  const findResponse = (userInput) => {
    const normalizedInput = userInput.toLowerCase()
    
    for (const [pattern, data] of Object.entries(knowledgeBase)) {
      const regex = new RegExp(pattern, 'i')
      if (regex.test(normalizedInput)) {
        return data.response
      }
    }
    
    return 'Desculpe, não compreendi. Pode reformular a pergunta? 🤔\n\nOu contacte-nos diretamente:\n📞 +351 000 000 000\n📧 geral@telessilva.pt'
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      type: 'user',
      text: input
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    setTimeout(() => {
      const response = findResponse(input)
      const botMessage = {
        type: 'bot',
        text: response
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleQuickReply = (reply) => {
    setMessages(prev => [...prev, { type: 'user', text: reply }])
    
    setTimeout(() => {
      const response = findResponse(reply)
      setMessages(prev => [...prev, { type: 'bot', text: response }])
    }, 500)
  }

  return (
    <div className="live-chat">
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
          <span className="chat-badge-ia">IA</span>
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
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva a sua mensagem..."
            />
            <button type="submit" disabled={!input.trim()}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default AIChat
    setInput('')

    setTimeout(() => {
      const { response, suggestions } = findResponse(input)
      const botMessage = {
        type: 'bot',
        text: response,
        suggestions: suggestions,
        time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion)
    handleSend()
  }

  const handleQuickAction = (action) => {
    if (action.startsWith('#')) {
      document.querySelector(action)?.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    } else {
      window.open(action, '_blank')
    }
  }

  return (
    <>
      <button 
        className={`ai-chat-trigger ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        <MessageCircle size={24} />
        <span className="chat-badge">IA</span>
      </button>

      <div className={`ai-chat-container ${isOpen ? 'open' : ''}`}>
        <div className="ai-chat-header">
          <div className="chat-header-info">
            <Bot size={24} />
            <div>
              <h3>Assistente Virtual</h3>
              <span className="chat-status">🟢 Online</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="chat-close">
            <X size={20} />
          </button>
        </div>

        <div className="ai-chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type}`}>
              <div className="message-icon">
                {msg.type === 'bot' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="message-time">{msg.time}</span>
                {msg.suggestions && (
                  <div className="message-suggestions">
                    {msg.suggestions.map((sug, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSuggestionClick(sug)}
                        className="suggestion-btn"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="ai-chat-quick-actions">
          {quickActions.map((action, index) => (
            <button 
              key={index}
              onClick={() => handleQuickAction(action.action)}
              className="quick-action-btn"
              title={action.text}
            >
              <span>{action.icon}</span>
            </button>
          ))}
        </div>

        <div className="ai-chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escreva a sua pergunta..."
          />
          <button onClick={handleSend} className="send-btn">
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  )
}

export default AIChat
