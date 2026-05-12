import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = ['hero', 'about', 'projects', 'contact']
const labels   = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState(0)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      sections.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el) {
          const { top } = el.getBoundingClientRect()
          if (top <= 120) setActive(i)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (index) => {
    const el = document.getElementById(sections[index])
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top, behavior: 'smooth' })
      setActive(index)
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 32px',
        backgroundColor: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => goTo(0)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'Oxanium, sans-serif',
          fontSize: '20px', fontWeight: 800,
          color: '#F5F0EB', letterSpacing: '0.15em',
        }}
      >
        DEYVI<span style={{ color: '#C8372D' }}>.</span>
      </button>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px' }} className="hidden md:flex">
        {labels.slice(1).map((label, i) => {
          const index = i + 1
          return (
            <button
              key={label}
              onClick={() => goTo(index)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: active === index ? '#C8372D' : 'rgba(138,133,128,0.8)',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {label}
              {active === index && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute',
                    bottom: -2, left: 0, right: 0,
                    height: '1px',
                    background: '#C8372D',
                  }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex md:hidden"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px',
        }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            width: '22px', height: '1.5px',
            backgroundColor: '#F5F0EB',
            display: 'block',
            transition: 'all 0.3s',
            transform:
              menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' :
              menuOpen && i === 1 ? 'scaleX(0)' :
              menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%', left: 0, right: 0,
            backgroundColor: 'rgba(13,13,13,0.97)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '16px 32px',
            display: 'flex', flexDirection: 'column', gap: '16px',
          }}
        >
          {labels.slice(1).map((label, i) => (
            <button
              key={label}
              onClick={() => goTo(i + 1)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '13px', letterSpacing: '0.2em',
                textTransform: 'uppercase', textAlign: 'left',
                color: active === i + 1 ? '#C8372D' : '#F5F0EB',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}