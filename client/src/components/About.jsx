import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { num: '4+', label: 'Years QA' },
  { num: '45', label: 'Tests automated' },
  { num: 'B2', label: 'English level' },
  { num: 'UNAL', label: 'University' },
]

const skills = [
  'Python', 'JavaScript', 'React', 'Node.js',
  'Pytest', 'SQL', 'Git', 'Docker', 'Agile'
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ backgroundColor: '#F5F0EB', color: '#0D0D0D' }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p style={{ color: '#C8372D' }} className="text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
            <span style={{ color: 'rgba(0,0,0,0.1)' }} className="font-oxanium text-2xl">01</span>
            About
          </p>
          <h2 className="font-oxanium text-6xl md:text-7xl leading-none tracking-tight mb-6">
            CS STUDENT<br />&amp; QA ENGINEER
          </h2>
          <p style={{ color: 'rgba(13,13,13,0.6)' }} className="text-sm leading-relaxed mb-4">
            4+ years of QA experience at Teleperformance, transitioning into
            automation engineering and full-stack development. Currently studying
            Computer Science at Universidad Nacional de Colombia.
          </p>
          <p style={{ color: 'rgba(13,13,13,0.6)' }} className="text-sm leading-relaxed">
            Bilingual Spanish/English (B2), focused on building quality software
            — from testing all the way to deployment.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map(s => (
              <span key={s} style={{ border: '1px solid rgba(13,13,13,0.2)', color: 'rgba(13,13,13,0.6)' }}
                className="text-[10px] tracking-widest uppercase px-3 py-1">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ gap: '1px', backgroundColor: 'rgba(13,13,13,0.1)' }}
          className="grid grid-cols-2"
        >
          {stats.map(({ num, label }) => (
            <div key={label} style={{ backgroundColor: '#F5F0EB' }} className="p-8 text-center">
              <div className="font-oxanium text-5xl tracking-tight">{num}</div>
              <div style={{ color: '#8A8580' }} className="text-[9px] tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}