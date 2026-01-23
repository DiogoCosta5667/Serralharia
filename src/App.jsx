import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Orcamento from './pages/Orcamento'
import Projetos from './pages/Projetos'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import AIChat from './components/ui/AIChat'
import ScrollProgress from './components/layout/ScrollProgress'
import LoadingScreen from './components/ui/LoadingScreen'
import BackToTop from './components/ui/BackToTop'
import './App.css'
import './styles/animations.css'

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
        <LoadingScreen />
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <AIChat />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App
