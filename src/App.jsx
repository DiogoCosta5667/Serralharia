import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Orcamento from './pages/Orcamento'
import Projetos from './pages/Projetos'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LiveChat from './components/LiveChat'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <LiveChat />
      </div>
    </Router>
  )
}

export default App
