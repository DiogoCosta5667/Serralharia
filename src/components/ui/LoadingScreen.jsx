import { useState, useEffect } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src="/images/transferir.png" alt="Silva Serralharia" className="loading-logo" />
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">A carregar...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
