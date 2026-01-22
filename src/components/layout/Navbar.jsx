import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  const menuItems = [
    { name: 'Início', href: '/', type: 'route' },
    { name: 'Serviços', href: '#services', type: 'anchor' },
    { name: 'Projetos', href: '/projetos', type: 'route' },
    { name: 'Orçamento', href: '/orcamento', type: 'route' },
    { name: 'Sobre', href: '#about', type: 'anchor' },
    { name: 'Contacto', href: '#contact', type: 'anchor' },
  ]

  const handleClick = (item) => {
    setIsOpen(false)
    if (item.type === 'anchor' && !isHome) {
      window.location.href = '/' + item.href
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/transferir.png" alt="Silva Serralharia" className="logo-img" />
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            item.type === 'route' ? (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="navbar-link"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item)}
                className="navbar-link"
              >
                {item.name}
              </a>
            )
          ))}
        </div>

        <div className="navbar-actions">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
