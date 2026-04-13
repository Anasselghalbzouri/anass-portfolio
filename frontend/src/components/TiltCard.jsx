import { useRef } from 'react'

export default function TiltCard({ children, maxTilt = 12, className = '' }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transform  = `perspective(900px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale(1.02)`
    card.style.transition = 'transform 0.08s ease'
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)'
    card.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }

  return (
    <div
      ref={ref}
      className={`tilt-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
