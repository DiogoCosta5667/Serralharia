import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Map.css'

const Map = () => {
  return (
    <section id="localizacao" className="map-section">
      <div className="map-container">
        <div className="map-content">
          <div className="map-info">
            <h2>A Nossa Localização</h2>
            <p className="section-subtitle">Visite-nos ou entre em contacto</p>
            
            <div className="info-cards">
              <div className="info-card">
                <MapPin className="info-icon" />
                <div>
                  <h4>Morada</h4>
                  <p>Rua Exemplo, 123<br />4000-000 Porto, Portugal</p>
                </div>
              </div>
              
              <div className="info-card">
                <Phone className="info-icon" />
                <div>
                  <h4>Telefone</h4>
                  <p>+351 912 345 678<br />+351 223 456 789</p>
                </div>
              </div>
              
              <div className="info-card">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>geral@telessilva.pt<br />orçamentos@telessilva.pt</p>
                </div>
              </div>
              
              <div className="info-card">
                <Clock className="info-icon" />
                <div>
                  <h4>Horário</h4>
                  <p>Seg - Sex: 9h - 18h<br />Sábado: 9h - 13h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.394282924194!2d-8.6291053!3d41.1579438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Serralharia Teles Silva"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
