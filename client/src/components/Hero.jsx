
import { motion } from 'framer-motion'

<section id="hero" className="min-h-screen ..."></section>

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay }
})

export default function Hero() {
  return (
    <section className="min-h-screen bg-ink flex flex-col justify-center px-8 md:px-16 pt-20 relative overflow-hidden">

      <div style={{ writingMode: 'vertical-rl' }}
        className="absolute right-8 top-1/2 text-ash/20 text-xs tracking-[0.4em] uppercase">
        Portfolio · 2026 · Bogota
      </div>

      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-12 h-0.5 bg-red mb-6 origin-left"
      />

      <motion.p {...fade(0.3)} className="text-red text-xs tracking-[0.35em] uppercase mb-4">
        QA Engineer · Full Stack Developer
      </motion.p>

      <motion.h1 {...fade(0.4)} className="font-oxanium text-[clamp(80px,15vw,160px)] leading-none tracking-tight text-paper">
        DEYVI
      </motion.h1>
      <motion.h1 {...fade(0.5)} className="font-oxanium text-[clamp(80px,15vw,160px)] leading-none tracking-tight" style={{ color: '#C8372D' }}>
        ARDILA
      </motion.h1>

      <motion.div {...fade(0.6)} className="w-16 h-0.5 bg-red my-6" />

      <motion.p {...fade(0.7)} className="text-ash text-sm leading-relaxed max-w-md">
        Building robust software through quality automation and modern web development. Based in Bogota, Colombia.
      </motion.p>

      <motion.div {...fade(0.8)} className="flex gap-6 mt-10">
        <a href="#projects" className="border border-red text-red text-xs tracking-widest uppercase px-6 py-3 hover:bg-red hover:text-paper transition-all duration-300">
          View Projects
        </a>
        <a href="#contact" className="text-ash text-xs tracking-widest uppercase px-6 py-3 border border-white/10 hover:border-ash transition-all duration-300">
          Contact
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 right-8 md:right-16 w-20 h-20 rounded-full border border-red/40 flex flex-col items-center justify-center"
      >
        <span className="font-oxanium text-red text-xl tracking-wider">DA</span>
        <span className="text-red/60 text-[9px] tracking-widest">2026</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-8 text-ash/40 text-xs tracking-widest uppercase"
      >
        scroll v
      </motion.div>
    </section>
  )
}