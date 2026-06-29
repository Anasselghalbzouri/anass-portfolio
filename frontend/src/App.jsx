import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <ProjectsGrid />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
