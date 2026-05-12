import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://deyvi-portfolio-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#F5F0EB',
    fontSize: '14px',
    padding: '12px 16px',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    marginBottom: '16px',
    display: 'block',
  }

  return (
    <section id="contact" ref={ref} style={{ backgroundColor: '#C8372D' }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: '#F5F0EB' }} className="font-oxanium text-7xl md:text-8xl leading-none tracking-tight">
            LET'S<br />WORK<br />
            <span style={{ color: 'rgba(245,240,235,0.3)' }}>TOGETHER.</span>
          </h2>
          <div className="mt-8 space-y-2">
            <p style={{ color: 'rgba(245,240,235,0.6)' }} className="text-xs tracking-widest uppercase">
              deyviardilaforero@gmail.com
            </p>
            <p style={{ color: 'rgba(245,240,235,0.6)' }} className="text-xs tracking-widest uppercase">
              Bogota D.C., Colombia
            </p>
          </div>
          <div className="flex gap-6 mt-8">
            <a href="https://github.com/itsDeyvixd" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(245,240,235,0.5)', textDecoration: 'none' }}
              className="text-xs tracking-widest uppercase">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/deyvi-ardila-forero-792154253/" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(245,240,235,0.5)', textDecoration: 'none' }}
              className="text-xs tracking-widest uppercase">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Your name" required style={inputStyle} />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Your email" required style={inputStyle} />
          <textarea name="message" value={form.message} onChange={handleChange}
            placeholder="Your message" required rows={5} style={inputStyle} />

          <button type="submit" disabled={status === 'sending'}
            style={{ width: '100%', backgroundColor: '#0D0D0D', color: '#F5F0EB', border: 'none', padding: '16px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'ok' && (
            <p style={{ color: '#F5F0EB', textAlign: 'center', marginTop: '12px', fontSize: '11px', letterSpacing: '0.1em' }}>
              Mensaje enviado correctamente
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: 'rgba(245,240,235,0.6)', textAlign: 'center', marginTop: '12px', fontSize: '11px' }}>
              Error al enviar. Intenta de nuevo.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  )
}