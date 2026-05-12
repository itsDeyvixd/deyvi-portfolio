import SectionNav from './components/SectionNav'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  )
}