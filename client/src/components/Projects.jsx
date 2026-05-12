import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    num: '001',
    name: 'QA Automation Framework',
    desc: 'Framework profesional de automatización de pruebas API con 45 tests, pipeline CI/CD y 81% de cobertura.',
    tags: ['Python', 'Pytest', 'GitHub Actions', 'Docker'],
    link: 'https://github.com/itsDeyvixd/qa-automation-framework',
    status: 'live'
  },
  {
    num: '002',
    name: 'LoL Impostor',
    desc: 'Aplicación web fullstack enfocada en rendimiento y SEO, desplegada en Vercel con CI/CD continuo.',
    tags: ['JavaScript', 'Vercel', 'SEO', 'Web Performance'],
    link: 'https://lol-impostor.vercel.app',
    status: 'live'
  },
  {
    num: '003',
    name: 'This Portfolio',
    desc: 'Portfolio MERN con sistema de diseño japonés, animaciones con Framer Motion y formulario de contacto real.',
    tags: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    link: '#',
    status: 'wip'
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="bg-ink py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-red text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
            <span className="text-paper/10 font-bebas text-2xl">02</span> Projects
          </p>
          <h2 className="font-bebas text-6xl md:text-7xl leading-none tracking-tight text-paper">
            SELECTED<br />WORK
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-ink p-8 hover:bg-white/[0.03] transition-colors duration-300 block"
            >
              <div className="text-white/10 font-bebas text-3xl mb-4">{p.num}</div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bebas text-2xl tracking-wide text-paper group-hover:text-red transition-colors duration-300">
                  {p.name}
                </h3>
                {p.status === 'live' && (
                  <span className="text-[9px] tracking-widest uppercase text-green-400 border border-green-400/30 px-2 py-0.5">
                    Live
                  </span>
                )}
                {p.status === 'wip' && (
                  <span className="text-[9px] tracking-widest uppercase text-amber-400 border border-amber-400/30 px-2 py-0.5">
                    WIP
                  </span>
                )}
              </div>

              <p className="text-ash text-xs leading-relaxed mb-6">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(t => (
                  <span key={t} className="text-[9px] tracking-widest uppercase text-red border border-red/30 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>

              <div className="text-red text-sm group-hover:translate-x-2 transition-transform duration-300">
                → Ver proyecto
              </div>
            </motion.a>
          ))}

          {/* Placeholder */}
          <div className="bg-ink p-8 border border-white/5 flex items-center justify-center min-h-48">
            <div className="text-center">
              <div className="text-white/5 font-bebas text-5xl">004</div>
              <div className="text-white/20 text-[10px] tracking-widest uppercase mt-2">Coming soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}