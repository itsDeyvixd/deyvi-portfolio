import { useEffect, useState } from 'react'

const sections = ['hero', 'about', 'projects', 'contact']

export default function SectionNav() {
  const [current, setCurrent] = useState(0)

  const goTo = (index) => {
    if (index < 0 || index >= sections.length) return
    const el = document.getElementById(sections[index])
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setCurrent(index)
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowDown') goTo(current + 1)
      if (e.key === 'ArrowUp') goTo(current - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id)
            if (index !== -1) setCurrent(index)
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      position: 'fixed',
      right: '24px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      {/* Up arrow */}
      <button
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        style={{
          width: '36px',
          height: '36px',
          border: '1px solid rgba(200,55,45,0.3)',
          background: 'transparent',
          color: current === 0 ? 'rgba(255,255,255,0.1)' : '#C8372D',
          cursor: current === 0 ? 'default' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          transition: 'all 0.2s',
        }}
      >
        ↑
      </button>

      {/* Dots */}
      {sections.map((s, i) => (
        <button
          key={s}
          onClick={() => goTo(i)}
          style={{
            width: i === current ? '6px' : '4px',
            height: i === current ? '6px' : '4px',
            borderRadius: '50%',
            background: i === current ? '#C8372D' : 'rgba(255,255,255,0.2)',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.3s',
          }}
        />
      ))}

      {/* Down arrow */}
      <button
        onClick={() => goTo(current + 1)}
        disabled={current === sections.length - 1}
        style={{
          width: '36px',
          height: '36px',
          border: '1px solid rgba(200,55,45,0.3)',
          background: 'transparent',
          color: current === sections.length - 1 ? 'rgba(255,255,255,0.1)' : '#C8372D',
          cursor: current === sections.length - 1 ? 'default' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          transition: 'all 0.2s',
        }}
      >
        ↓
      </button>
    </div>
  )
}