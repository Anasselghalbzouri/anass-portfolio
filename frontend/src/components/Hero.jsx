import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Code2, Layers, Star } from 'lucide-react'
import Sparkles from './Sparkles'
import { useTheme } from '../context/ThemeContext'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { dark } = useTheme()
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 90,
        paddingBottom: 120,
      }}
    >
      {/* Background blobs */}
      <div
        className="bg-blob"
        style={{
          width: 560,
          height: 560,
          background: 'rgba(21, 101, 192, 0.08)',
          top: '-10%',
          left: '-15%',
          animationDelay: '0s',
        }}
      />
      <div
        className="bg-blob"
        style={{
          width: 420,
          height: 420,
          background: dark ? 'rgba(99, 179, 237, 0.05)' : 'rgba(232, 245, 233, 0.7)',
          bottom: '5%',
          right: '-10%',
          animationDelay: '3s',
        }}
      />
      <div
        className="bg-blob"
        style={{
          width: 300,
          height: 300,
          background: dark ? 'rgba(66, 153, 225, 0.06)' : 'rgba(227, 242, 253, 0.6)',
          top: '40%',
          right: '5%',
          animationDelay: '1.5s',
        }}
      />

      {/* Sparkles */}
      <Sparkles count={12} />

      {/* ── Main Grid ── */}
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        {/* Left — Floating Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="float-card"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="glass-card"
            style={{
              borderRadius: 28,
              padding: '2rem',
              width: '100%',
              maxWidth: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              position: 'relative',
            }}
          >
            {/* Availability badge */}
            <div
              style={{
                position: 'absolute',
                top: -14,
                right: 20,
                background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
                color: 'white',
                padding: '4px 14px',
                borderRadius: 9999,
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
                animation: 'badge-bounce 3s ease-in-out infinite',
              }}
            >
              ● AVAILABLE
            </div>

            {/* Avatar */}
            <div
              style={{
                width: 110,
                height: 110,
                borderRadius: '50%',
                boxShadow: '0 8px 30px rgba(21,101,192,0.35)',
                border: '4px solid rgba(255,255,255,0.8)',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}anass-headshot.png`}
                alt="Anass EL G."
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-text-dark)', marginBottom: 4 }}>
                Anass EL G.
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                Full Stack Developer
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
              {[
                // { icon: <Code2 size={14} />, label: '4+', sub: 'Projects' },
                // { icon: <Layers size={14} />, label: '2+', sub: 'Years Coding' },
                // { icon: <Star size={14} />, label: 'A+', sub: 'Student' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: 'rgba(21,101,192,0.06)',
                    borderRadius: 12,
                    padding: '8px 4px',
                    textAlign: 'center',
                    border: '1px solid rgba(21,101,192,0.1)',
                  }}
                >
                  <div style={{ color: 'var(--color-primary)', display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--color-text)', opacity: 0.7 }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--color-text)' }}>
              <MapPin size={13} style={{ color: 'var(--color-primary)' }} />
              Tanger, Maroc
            </div>
          </div>
        </motion.div>

        {/* Center — Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 2 }}>
          {/* Top badge */}
         
          {/* Title */}
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.18,
              color: 'var(--color-text-dark)',
            }}
          >
            What If Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Idea
            </span>
            <br />
            <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>
              Worked?
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--color-text)',
              fontStyle: 'italic',
              lineHeight: 1.7,
              maxWidth: 460,
            }}
          >

            Most clients don’t just need a developer. They need someone who can understand the idea, 
            structure the solution, and build a web app that actually works. That’s what I do with React and Laravel.
          </motion.p>

          {/* CTA Banner */}
          <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(16px)',
                border: dark ? '1.5px solid rgba(99,179,237,0.18)' : '1.5px solid rgba(21,101,192,0.18)',
                borderRadius: 9999,
                padding: '10px 22px',
                fontSize: '0.85rem',
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: '#4CAF50',
                  display: 'inline-block',
                  boxShadow: '0 0 8px rgba(76,175,80,0.6)',
                }}
              />
              <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>
                Available for Freelance ·{' '}
              </span>
              <strong style={{ color: 'var(--color-primary)' }}>Open</strong>
              <span style={{ color: 'var(--color-text)' }}>to Opportunities</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp} custom={4} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:anassreda88@gmail.com"
              className="btn-ghost"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={fadeUp} custom={5} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}
          >
            {['React', 'Laravel', 'PHP', 'MySQL', 'Tailwind', 'Redux'].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — Floating Latest Project Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="float-card-reverse"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="glass-card"
            style={{
              borderRadius: 22,
              padding: '1.5rem',
              width: '100%',
              maxWidth: 280,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.65rem',
                }}
              >
                ★
              </span>
              Latest Project
            </div>

            {/* Project preview */}
            <div
              style={{
                height: 100,
                borderRadius: 14,
                background: '#0b1220',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}projects/rhonda_cap_auth.png`}
                alt="RH ONDA"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-text-dark)', marginBottom: 4 }}>
                RH ONDA — Gestion RH
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                HR management app for Al Hoceima Airport with real-time dashboard
              </p>
            </div>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['React 19', 'Laravel 13', 'MySQL'].map((t) => (
                <span key={t} className="tech-badge" style={{ fontSize: '0.68rem' }}>{t}</span>
              ))}
            </div>

            <a
              href="https://github.com/Anasselghalbzouri/Rh_onda_ahu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                padding: '8px 0',
                borderRadius: 10,
                background: 'rgba(21,101,192,0.07)',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 600,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(21,101,192,0.14)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(21,101,192,0.07)'}
            >
              View on GitHub →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: '0.72rem', color: 'var(--color-text)', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          scroll
        </span>
        <div
          style={{
            width: 24,
            height: 38,
            border: '2px solid rgba(21,101,192,0.25)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 4,
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.7 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
