import { useState, useEffect, useRef } from 'react'

export const useCounter = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!startCounting || hasStarted.current) return
    hasStarted.current = true

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuad = progress * (2 - progress)
      const currentCount = Math.floor(easeOutQuad * (end - startValue) + startValue)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, startCounting])

  return count
}
