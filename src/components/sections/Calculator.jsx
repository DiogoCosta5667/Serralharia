import { useState } from 'react'
import { Calculator as CalcIcon, Euro } from 'lucide-react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Calculator.css'

const Calculator = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [formRef, formVisible] = useScrollAnimation()
  
  const [formData, setFormData] = useState({
    type: 'janela',
    width: '',
    height: '',
    quantity: 1,
  })
  const [estimate, setEstimate] = useState(null)

  const prices = {
    janela: 150,
    porta: 300,
    varanda: 500,
    guarda: 200,
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculateEstimate = () => {
    const { type, width, height, quantity } = formData
    const area = (parseFloat(width) * parseFloat(height)) / 10000 // m²
    const basePrice = prices[type]
    const total = area * basePrice * parseInt(quantity)
    
    setEstimate({
      area: area.toFixed(2),
      unitPrice: basePrice,
      total: total.toFixed(2)
    })
  }

  return (
    <section id="calculator" className="calculator-section">
      <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}>
        <h2>Calculadora de Orçamento</h2>
        <p>Obtenha uma estimativa rápida para o seu projeto</p>
      </div>

      <div ref={formRef} className={`calculator scale-in ${formVisible ? 'visible' : ''}`}>
        <div className="calculator-form">
          <div className="form-group">
            <label>Tipo de Produto</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="janela">Janela</option>
              <option value="porta">Porta</option>
              <option value="varanda">Envidraçamento de Varanda</option>
              <option value="guarda">Guarda/Corrimão</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Largura (cm)</label>
              <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="150"
              />
            </div>

            <div className="form-group">
              <label>Altura (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="120"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
            />
          </div>

          <button onClick={calculateEstimate} className="calc-btn">
            <CalcIcon size={20} /> Calcular Orçamento
          </button>
        </div>

        {estimate && (
          <div className="estimate-result fade-in">
            <h3>Estimativa de Orçamento</h3>
            <div className="estimate-details">
              <div className="estimate-item">
                <span>Área Total:</span>
                <strong>{estimate.area} m²</strong>
              </div>
              <div className="estimate-item">
                <span>Preço por m²:</span>
                <strong>{estimate.unitPrice}€</strong>
              </div>
              <div className="estimate-total">
                <span>Total Estimado:</span>
                <strong className="total-price">
                  <Euro size={24} /> {estimate.total}€
                </strong>
              </div>
            </div>
            <p className="estimate-note">
              * Valores aproximados. Contacte-nos para um orçamento detalhado.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Calculator
