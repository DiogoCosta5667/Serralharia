import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Quanto tempo demora uma instalação?",
      answer: "O tempo varia consoante o projeto. Uma janela simples demora 2-3 horas. Projetos completos (várias janelas/portas) podem levar 2-3 dias. Fazemos sempre uma avaliação prévia e damos-lhe um prazo exato."
    },
    {
      question: "Oferecem garantia nos trabalhos?",
      answer: "Sim! Oferecemos 10 anos de garantia nos materiais e 2 anos na instalação. Todos os nossos produtos são certificados e trabalhamos apenas com fornecedores de confiança."
    },
    {
      question: "Fazem orçamentos gratuitos?",
      answer: "Sim, todos os orçamentos são 100% gratuitos e sem compromisso. Deslocamo-nos ao local para fazer medições e avaliar as necessidades específicas do seu projeto."
    },
    {
      question: "Trabalham em que zonas?",
      answer: "Atendemos todo o Grande Porto e concelhos limítrofes. Para zonas mais distantes, contacte-nos para confirmarmos disponibilidade."
    },
    {
      question: "Que formas de pagamento aceitam?",
      answer: "Aceitamos dinheiro, transferência bancária, multibanco e cheque. Também oferecemos planos de pagamento faseado para projetos de maior valor."
    },
    {
      question: "Fazem reparações e manutenção?",
      answer: "Sim! Fazemos reparações, ajustes, substituição de vidros e manutenção preventiva em caixilharia de alumínio, mesmo que não tenha sido instalada por nós."
    },
    {
      question: "Os materiais têm certificação?",
      answer: "Todos os nossos materiais têm certificação europeia (CE) e garantem os mais altos padrões de isolamento térmico e acústico, segurança e durabilidade."
    },
    {
      question: "Posso escolher as cores e acabamentos?",
      answer: "Sim! Temos uma vasta gama de cores RAL e acabamentos (anodizado, lacado, imitação madeira). Mostramos-lhe todas as opções durante o orçamento."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2>Perguntas Frequentes</h2>
          <p>Respostas às dúvidas mais comuns dos nossos clientes</p>
        </div>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <ChevronDown className={`faq-icon ${openIndex === index ? 'rotated' : ''}`} />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div className="faq-cta-card">
              <h3>Ainda tem dúvidas?</h3>
              <p>A nossa equipa está disponível para esclarecer qualquer questão.</p>
              <a href="tel:+351000000000" className="faq-cta-btn">
                <Phone size={20} />
                Ligar Agora
              </a>
              <a href="#contact" className="faq-cta-btn secondary">
                Enviar Mensagem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
