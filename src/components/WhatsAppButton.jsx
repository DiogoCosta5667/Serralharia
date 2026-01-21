import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const phoneNumber = '351000000000' // Alterar para o número real
  const message = 'Olá! Gostaria de saber mais sobre os vossos serviços.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Contactar via WhatsApp">
      <MessageCircle size={30} />
    </button>
  )
}

export default WhatsAppButton
