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
    <section id="about" ref={ref} className="bg-paper text-ink py-24 px-8 md:px-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-red text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
            <span className="text-paper/30 font-bebas text-2xl">01</span> About
          </p>
          <h2 className="font-bebas text-6xl md:text-7xl leading-none tracking-tight mb-6">
            CS STUDENT<br />&amp; QA ENGINEER
          </h2>
          <p className="text-ink/60 text-sm leading-relaxed mb-4">
            4+ años de experiencia en QA en Teleperformance, en transición hacia
            automatización e ingeniería fullstack. Estudiante de Ciencias de la
            Computación en la Universidad Nacional de Colombia.
          </p>
          <p className="text-ink/60 text-sm leading-relaxed">
            Bilingüe español/inglés (B2), con enfoque en construir software
            de calidad — desde las pruebas hasta el deployment.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map(s => (
              <span key={s}
                className="text-[10px] tracking-widest uppercase border border-ink/20 px-3 py-1 text-ink/60 hover:border-red hover:text-red transition-colors duration-200">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-px bg-ink/10"
        >
          {stats.map(({ num, label }) => (
            <div key={label} className="bg-paper p-8 text-center">
              <div className="font-bebas text-5xl text-ink tracking-tight">{num}</div>
              <div className="text-[9px] text-ash tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}