import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getProjects } from '../services/api'
import ProjectCard from './ProjectCard'
import Sparkles from './Sparkles'

// Fallback data — matches Anass's real projects from his CV
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Watch Store — E-commerce',
    description:
      'Complete e-commerce application with dynamic cart, product filtering, and global state management via Redux Toolkit. Integrated REST API for product data retrieval and display.',
    tech_stack: ['React', 'Redux Toolkit', 'Axios', 'JavaScript', 'Bootstrap'],
    github_url: 'https://github.com/Anasselghalbzouri',
    demo_url: null,
    year: 2026,
    category: 'E-commerce',
    type: 'frontend',
  },
  {
    id: 2,
    title: 'Client Management System',
    description:
      'Full CRUD Laravel application with authentication, database migrations, and seeders. Responsive interface built with Blade templates and Bootstrap.',
    tech_stack: ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Blade'],
    github_url: 'https://github.com/Anasselghalbzouri',
    demo_url: null,
    year: 2025,
    category: 'Management',
    type: 'backend',
  },
  {
    id: 3,
    title: 'Weather Application',
    description:
      'Real-time weather app with OpenWeather API integration and city-based search. Clean UI with dynamic weather icons and temperature display.',
    tech_stack: ['React', 'Axios', 'OpenWeather API', 'JavaScript', 'CSS3'],
    github_url: 'https://github.com/Anasselghalbzouri',
    demo_url: null,
    year: 2025,
    category: 'API',
    type: 'frontend',
  },
  {
    id: 4,
    title: 'Car & Student Manager',
    description:
      'Two full MVC applications with complete CRUD operations. Database relationship management with Eloquent ORM following Laravel best practices.',
    tech_stack: ['Laravel', 'PHP', 'MySQL', 'Eloquent', 'MVC'],
    github_url: 'https://github.com/Anasselghalbzouri',
    demo_url: null,
    year: 2025,
    category: 'Management',
    type: 'backend',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ProjectsGrid({ activeFilter }) {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProjects()
      .then((res) => {
        if (res.data?.data?.length) setProjects(res.data.data)
      })
      .catch(() => { /* use fallback */ })
      .finally(() => setLoading(false))
  }, [])

  // Filtering
  const filtered = projects.filter((p) => {
    const { tech, type, year, category } = activeFilter || {}
    const techList = Array.isArray(p.tech_stack) ? p.tech_stack : p.tech_stack?.split(',') || []
    const techMatch = !tech || tech === 'all' || techList.some(t => t.toLowerCase().trim().includes(tech))
    // FIX [BUG #2]: normalise spaces so "full stack" (FilterBar) matches "fullstack" (DB) on both sides
    const typeMatch = !type || type === 'all' || (p.type || '').toLowerCase().replace(/\s+/g, '').includes(type.replace(/\s+/g, ''))
    const yearMatch = !year || year === 'all' || String(p.year) === String(year)
    const catMatch  = !category || category === 'all' || (p.category || '').toLowerCase().includes(category.toLowerCase())
    return techMatch && typeMatch && yearMatch && catMatch
  })

  return (
    <section
      id="projects"
      style={{ position: 'relative', paddingTop: '1rem', paddingBottom: 'var(--section-padding)' }}
    >
      {/* Background sparkles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Sparkles count={6} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(21,101,192,0.07)',
              border: '1px solid rgba(21,101,192,0.15)',
              borderRadius: 9999,
              padding: '5px 16px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            ✦ Featured Work
          </div>
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '1rem',
              color: 'var(--color-text)',
              maxWidth: 500,
              margin: '0.75rem auto 0',
              lineHeight: 1.7,
            }}
          >
            A collection of academic and personal projects built with modern web technologies.
          </p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  height: 380,
                  borderRadius: 22,
                  background: 'rgba(255,255,255,0.5)',
                  animation: 'pulse-ring 1.5s ease-in-out infinite',
                }}
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: 'var(--color-text)',
            }}
          >
            <span style={{ fontSize: '3rem' }}>🔍</span>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>No projects match the selected filters.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filtered.map((project, i) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
