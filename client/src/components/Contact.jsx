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
      const res = await fetch('http://localhost:3001/api/contact', {
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

  const inputClass = "w-full bg-transparent border border-white/10 text-paper text-sm px-4 py-3 focus:outline-none focus:border-red transition-colors duration-200 placeholder:text-ash/40"

  return (
    <section id="contact" ref={ref} className="bg-red py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-7xl md:text-8xl leading-none tracking-tight text-paper">
            LET'S<br />WORK<br />
            <span className="text-paper/30">TOGETHER.</span>
          </h2>
          <div className="mt-8 space-y-2">
            <p className="text-paper/60 text-xs tracking-widest uppercase">
              deyviardilaforero@gmail.com
            </p>
            <p className="text-paper/60 text-xs tracking-widest uppercase">
              Bogotá D.C., Colombia
            </p>
          </div>
          <div className="flex gap-6 mt-8">
            <a href="https://github.com/itsDeyvixd" target="_blank"
              className="text-paper/50 text-xs tracking-widest uppercase hover:text-paper transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank"
              className="text-paper/50 text-xs tracking-widest uppercase hover:text-paper transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Tu nombre" required className={inputClass} />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Tu email" required className={inputClass} />
          <textarea name="message" value={form.message} onChange={handleChange}
            placeholder="Tu mensaje" required rows={5} className={inputClass} />

          <button type="submit" disabled={status === 'sending'}
            className="w-full bg-ink text-paper text-xs tracking-widest uppercase py-4 hover:bg-ink/80 transition-colors duration-200 disabled:opacity-50">
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {status === 'ok' && (
            <p className="text-paper text-xs tracking-widest text-center">
              ✓ Mensaje enviado correctamente
            </p>
          )}
          {status === 'error' && (
            <p className="text-paper/60 text-xs tracking-widest text-center">
              Error al enviar. Intenta de nuevo.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  )
}