import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ProjectsGrid from './components/ProjectsGrid'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeFilter, setActiveFilter] = useState({
    tech:     'all',
    type:     'all',
    year:     'all',
    category: 'all',
  })

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ProjectsGrid activeFilter={activeFilter} />
      <Skills />
     
      <Contact />
      <Footer />
    </div>
  )
}
