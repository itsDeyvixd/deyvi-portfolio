import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    num: '001',
    name: 'QA Automation Framework',
    desc: 'Professional API test automation framework with 45 passing tests, CI/CD pipeline, and 81% code coverage.',
    tags: ['Python', 'Pytest', 'GitHub Actions', 'Docker'],
    link: 'https://github.com/itsDeyvixd/qa-automation-framework',
    status: 'live'
  },
  {
    num: '002',
    name: 'LoL Impostor',
    desc: 'Full-stack web application focused on performance and SEO, deployed on Vercel with continuous integration.',
    tags: ['JavaScript', 'Vercel', 'SEO', 'Web Performance'],
    link: 'https://lol-impostor.vercel.app',
    status: 'live'
  },
  {
    num: '003',
    name: 'This Portfolio',
    desc: 'MERN stack portfolio with Japanese-inspired design system, Framer Motion animations, and real contact form.',
    tags: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    link: '#',
    status: 'wip'
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} style={{ backgroundColor: '#0D0D0D' }} className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p style={{ color: '#C8372D' }} className="text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
            <span style={{ color: 'rgba(245,240,235,0.1)' }} className="font-oxanium text-2xl">02</span>
            Projects
          </p>
          <h2 style={{ color: '#F5F0EB' }} className="font-oxanium text-6xl md:text-7xl leading-none tracking-tight">
            SELECTED<br />WORK
          </h2>
        </motion.div>

        <div style={{ gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} className="grid md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ backgroundColor: '#0D0D0D', display: 'block', textDecoration: 'none' }}
              className="group p-8"
            >
              <div style={{ color: 'rgba(255,255,255,0.08)' }} className="font-oxanium text-3xl mb-4">{p.num}</div>

              <div className="flex items-start justify-between mb-3">
                <h3 style={{ color: '#F5F0EB' }} className="font-oxanium text-2xl tracking-wide">
                  {p.name}
                </h3>
                {p.status === 'live' && (
                  <span style={{ color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' }}
                    className="text-[9px] tracking-widest uppercase px-2 py-0.5 ml-2 whitespace-nowrap">
                    Live
                  </span>
                )}
                {p.status === 'wip' && (
                  <span style={{ color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}
                    className="text-[9px] tracking-widest uppercase px-2 py-0.5 ml-2 whitespace-nowrap">
                    WIP
                  </span>
                )}
              </div>

              <p style={{ color: '#8A8580' }} className="text-xs leading-relaxed mb-6">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(t => (
                  <span key={t} style={{ color: '#C8372D', border: '1px solid rgba(200,55,45,0.3)' }}
                    className="text-[9px] tracking-widest uppercase px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ color: '#C8372D' }} className="text-sm">
                → View project
              </div>
            </motion.a>
          ))}

          <div style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.05)' }}
            className="p-8 flex items-center justify-center min-h-48">
            <div className="text-center">
              <div style={{ color: 'rgba(255,255,255,0.04)' }} className="font-oxanium text-5xl">004</div>
              <div style={{ color: 'rgba(255,255,255,0.2)' }} className="text-[10px] tracking-widest uppercase mt-2">Coming soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}