import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import './AIChat.css'

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Olá! 👋 Sou o assistente virtual da Teles Silva. Como posso ajudar?',
      time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
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

  const knowledgeBase = {
    'preço|orçamento|custo|valor': {
      response: 'Os nossos preços variam conforme o projeto. Oferecemos orçamentos gratuitos e personalizados! Pode usar a nossa calculadora no site ou contactar-nos diretamente: 📞 +351 000 000 000',
      suggestions: ['Pedir orçamento', 'Ver calculadora', 'Horários']
    },
    'garantia|anos': {
      response: 'Oferecemos 10 anos de garantia nos materiais e 2 anos na instalação! Todos os nossos produtos são certificados. 🛡️',
      suggestions: ['Certificações', 'Qualidade', 'Materiais']
    },
    'prazo|tempo|demora|instalação': {
      response: 'Uma janela simples demora 2-3 horas. Projetos completos podem levar 2-3 dias. Fazemos sempre uma avaliação prévia e damos um prazo exato! ⏱️',
      suggestions: ['Como funciona', 'Processo', 'Agendar visita']
    },
    'zona|local|área|onde': {
      response: 'Atendemos todo o Grande Porto e concelhos limítrofes. Para zonas mais distantes, contacte-nos para confirmar disponibilidade! 📍',
      suggestions: ['Ver mapa', 'Contactos', 'Morada']
    },
    'pagamento|pagar|formas': {
      response: 'Aceitamos: dinheiro, transferência bancária, multibanco e cheque. Também oferecemos planos de pagamento faseado para projetos maiores! 💳',
      suggestions: ['Pedir orçamento', 'Financiamento']
    },
    'certificação|certificado|qualidade': {
      response: 'Todos os nossos materiais têm certificação europeia (CE) e garantem os mais altos padrões de isolamento térmico/acústico, segurança e durabilidade! ✅',
      suggestions: ['Ver certificações', 'Garantia', 'Materiais']
    },
    'janela|porta|varanda|guarda': {
      response: 'Trabalhamos com: Janelas, Portas, Envidraçamento de Varandas, Guardas e Portões de alumínio! Tudo feito à medida. 🪟',
      suggestions: ['Ver serviços', 'Galeria', 'Projetos']
    },
    'horário|aberto|funciona': {
      response: 'Estamos abertos Segunda a Sexta: 9h-18h | Sábado: 9h-13h 🕐',
      suggestions: ['Contactar', 'Morada', 'Telefone']
    },
    'contacto|telefone|email|falar': {
      response: '📞 Telefone: +351 000 000 000\n📧 Email: geral@telessilva.pt\n\nTambém pode usar o formulário de contacto no site!',
      suggestions: ['Ver contactos', 'Enviar mensagem', 'WhatsApp']
    },
    'equipa|quem|empresa': {
      response: 'Somos uma empresa familiar com 15+ anos de experiência! Temos uma equipa de profissionais especializados em caixilharia de alumínio. 👷',
      suggestions: ['Conhecer equipa', 'Sobre nós', 'Projetos']
    }
  }

  const quickActions = [
    { icon: '📞', text: 'Ligar', action: 'tel:+351000000000' },
    { icon: '📧', text: 'Email', action: 'mailto:geral@telessilva.pt' },
    { icon: '💬', text: 'WhatsApp', action: 'https://wa.me/351000000000' },
    { icon: '📍', text: 'Morada', action: '#map' }
  ]

  const findResponse = (userInput) => {
    const normalizedInput = userInput.toLowerCase()
    
    for (const [pattern, data] of Object.entries(knowledgeBase)) {
      const regex = new RegExp(pattern, 'i')
      if (regex.test(normalizedInput)) {
        return data
      }
    }
    
    return {
      response: 'Desculpe, não compreendi. Pode reformular a pergunta? 🤔\n\nOu contacte-nos diretamente:\n📞 +351 000 000 000\n📧 geral@telessilva.pt',
      suggestions: ['Preços', 'Serviços', 'Horários', 'Contactos']
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
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
