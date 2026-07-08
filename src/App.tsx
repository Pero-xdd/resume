import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SEO from '@/components/SEO'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Research from '@/components/sections/Research'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
